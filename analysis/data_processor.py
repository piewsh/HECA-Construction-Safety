#!/usr/bin/env python3
"""
HECA Dashboard Data Processor
Scans ALL image directories to find every available image.
"""

import csv
import json
import os
from pathlib import Path

try:
    import openpyxl
except ImportError:
    os.system("pip3 install openpyxl")
    import openpyxl

try:
    from PIL import Image
except ImportError:
    os.system("pip3 install Pillow")
    from PIL import Image

BASE_DIR = Path(__file__).parent
EXCEL_FILE = BASE_DIR / "Image Analysis" / "HECA Worksheet_320 Images.xlsx"
IRR_CSV_FILE = BASE_DIR / "IRR" / "IRR SPSS Dataset_csv.csv"
GRAPHS_DIR = BASE_DIR / "Graphs"
THUMBS_DIR = BASE_DIR / "thumbnails"
OUTPUT_FILE = BASE_DIR / "data.js"

# All directories to scan for images (priority order — first match wins)
IMAGE_DIRS = [
    BASE_DIR / "320 Unique Images for Analysis",
    BASE_DIR / "55 Images for HECA Analysis",
    BASE_DIR / "RAW IMAGES (489)",
]

LIFECYCLE_FOLDERS = {
    "Foundation": ["foundation", "1."],
    "Ground Floor": ["ground floor", "2."],
    "First Floor": ["first floor", "3."],
    "PPVC Module": ["ppvc", "module", "4."],
}

THUMB_MAX_SIZE = (800, 600)


def detect_stage(filepath):
    """Detect lifecycle stage from folder path."""
    path_lower = str(filepath).lower()
    for stage, keywords in LIFECYCLE_FOLDERS.items():
        if any(kw in path_lower for kw in keywords):
            return stage
    return "Unknown"


def detect_stage_from_id(image_id):
    """Detect lifecycle stage from image ID prefix."""
    uid = image_id.upper()
    if uid.startswith("F") and not uid.startswith("FF"):
        return "Foundation"
    elif uid.startswith("GF"):
        return "Ground Floor"
    elif uid.startswith("FF"):
        return "First Floor"
    elif uid.startswith("M"):
        return "PPVC Module"
    return "Unknown"


def build_image_map():
    """Scan all directories — map every image ID to its file path."""
    image_map = {}

    for img_dir in IMAGE_DIRS:
        if not img_dir.exists():
            continue
        for f in img_dir.rglob("*"):
            if f.suffix.lower() in (".jpg", ".jpeg", ".png", ".bmp", ".webp", ".heic"):
                key = f.stem.upper()
                if key not in image_map:
                    stage = detect_stage(f) or detect_stage_from_id(key)
                    image_map[key] = {
                        "id": f.stem,
                        "filename": f.name,
                        "stage": stage,
                        "original_path": str(f.relative_to(BASE_DIR)),
                        "thumb_path": f"thumbnails/{f.stem}.webp",
                    }

    return image_map


def create_thumbnails(image_map):
    """Create web-optimized thumbnails."""
    THUMBS_DIR.mkdir(exist_ok=True)
    total = len(image_map)
    created = 0
    for i, (img_id, info) in enumerate(image_map.items()):
        src = BASE_DIR / info["original_path"]
        dst = THUMBS_DIR / f"{info['id']}.webp"
        if dst.exists():
            continue
        try:
            with Image.open(src) as img:
                img.thumbnail(THUMB_MAX_SIZE, Image.LANCZOS)
                img.save(dst, "WEBP", quality=80)
                created += 1
            if (i + 1) % 20 == 0:
                print(f"  Thumbnails: {i+1}/{total}")
        except Exception as e:
            print(f"  ERROR processing {src.name}: {e}")
    print(f"  Thumbnails: {total} total ({created} new)")


def parse_excel(image_map):
    """Parse the HECA Excel worksheet."""
    wb = openpyxl.load_workbook(str(EXCEL_FILE), data_only=True)
    ws = wb["Analysis of all 320 Images"]

    hazards = []
    current_image_id = None
    current_activity = None

    for row in ws.iter_rows(min_row=4, values_only=True):
        if row[0] and not row[2] and not row[3]:
            continue

        if row[0]:
            current_image_id = str(row[0]).strip()
        if row[1]:
            current_activity = str(row[1]).strip()

        if not row[3]:
            continue

        hazard = {
            "imageId": current_image_id,
            "activityType": current_activity or "",
            "hazardNo": row[2] if row[2] else 0,
            "hazardDescription": str(row[3]).strip() if row[3] else "",
            "energyType": str(row[4]).strip() if row[4] else "",
            "directControl": str(row[5]).strip() if row[5] else "No",
            "currentControls": str(row[6]).strip() if row[6] else "",
            "directControlsNeeded": str(row[7]).strip() if row[7] else "",
            "comments": str(row[8]).strip() if row[8] else "",
            "severity": str(row[9]).strip() if row[9] else "",
            "success": int(row[10]) if row[10] is not None else 0,
            "exposure": int(row[11]) if row[11] is not None else 0,
            "reviewedBy": str(row[12]).strip() if row[12] else "",
        }
        hazards.append(hazard)

    print(f"  Parsed {len(hazards)} hazard entries from {len(set(h['imageId'] for h in hazards))} image IDs")
    return hazards


def compute_statistics(hazards, image_map):
    """Compute summary statistics."""
    total_hazards = len(hazards)
    high_energy = sum(1 for h in hazards if h["severity"] == "High")
    low_energy = sum(1 for h in hazards if h["severity"] == "Low")
    total_success = sum(h["success"] for h in hazards)
    total_exposure = sum(h["exposure"] for h in hazards)
    total_observations = total_success + total_exposure
    heca_score = round((total_exposure / total_observations * 100), 2) if total_observations > 0 else 0

    stage_stats = {}
    stages = ["Foundation", "Ground Floor", "First Floor", "PPVC Module"]
    for stage in stages:
        stage_images = {img_id for img_id, info in image_map.items() if info["stage"] == stage}
        stage_hazards = [h for h in hazards if h["imageId"].upper() in stage_images]
        s_success = sum(h["success"] for h in stage_hazards)
        s_exposure = sum(h["exposure"] for h in stage_hazards)
        s_total = s_success + s_exposure
        stage_stats[stage] = {
            "imageCount": len(stage_images),
            "hazardCount": len(stage_hazards),
            "highEnergy": sum(1 for h in stage_hazards if h["severity"] == "High"),
            "success": s_success,
            "exposure": s_exposure,
            "hecaScore": round((s_exposure / s_total * 100), 2) if s_total > 0 else 0,
        }

    energy_dist = {}
    for h in hazards:
        et = h["energyType"]
        if et:
            energy_dist[et] = energy_dist.get(et, 0) + 1

    return {
        "totalImages": len(image_map),
        "imagesWithFiles": sum(1 for v in image_map.values() if not v.get("noFile")),
        "totalHazards": total_hazards,
        "highEnergy": high_energy,
        "lowEnergy": low_energy,
        "totalSuccess": total_success,
        "totalExposure": total_exposure,
        "hecaScore": heca_score,
        "stageStats": stage_stats,
        "energyDistribution": energy_dist,
    }


def parse_irr_csv():
    """Parse the IRR SPSS CSV to extract 55 image IDs and per-researcher data."""
    irr_image_ids = []
    irr_data = {}

    with open(IRR_CSV_FILE, "r", encoding="utf-8-sig") as f:
        reader = csv.DictReader(f)
        for row in reader:
            img_id = row["Image ID"].strip()
            if not img_id:
                continue
            irr_image_ids.append(img_id)
            
            s_ra = int(row.get("Success_RA", 0) or 0)
            s_rp = int(row.get("Success_RP", 0) or 0)
            s_rs = int(row.get("Success_RS", 0) or 0)
            e_ra = int(row.get("Exposure_RA", 0) or 0)
            e_rp = int(row.get("Exposure_RP", 0) or 0)
            e_rs = int(row.get("Exposure_RS", 0) or 0)
            
            irr_data[img_id] = {
                "hazards_RA": int(row.get("No of Hazards_RA", 0) or 0),
                "hazards_RP": int(row.get("No of Hazards_RP", 0) or 0),
                "hazards_RS": int(row.get("No of Hazards_RS", 0) or 0),
                "success_RA": s_ra,
                "success_RP": s_rp,
                "success_RS": s_rs,
                "exposure_RA": e_ra,
                "exposure_RP": e_rp,
                "exposure_RS": e_rs,
                "hecaScore_RA": round(s_ra / (s_ra + e_ra) * 100, 1) if (s_ra + e_ra) > 0 else 0.0,
                "hecaScore_RP": round(s_rp / (s_rp + e_rp) * 100, 1) if (s_rp + e_rp) > 0 else 0.0,
                "hecaScore_RS": round(s_rs / (s_rs + e_rs) * 100, 1) if (s_rs + e_rs) > 0 else 0.0,
            }

    print(f"  Parsed {len(irr_image_ids)} IRR image IDs from CSV")
    return irr_image_ids, irr_data


def get_graph_list():
    graphs = []
    if GRAPHS_DIR.exists():
        for f in sorted(GRAPHS_DIR.iterdir()):
            if f.suffix.lower() in (".png", ".jpg", ".jpeg", ".webp"):
                graphs.append(f"Graphs/{f.name}")
    return graphs


def main():
    print("=== HECA Dashboard Data Processor ===\n")

    print("1. Scanning all image directories...")
    image_map = build_image_map()
    print(f"   Found {len(image_map)} image files\n")

    print("2. Creating thumbnails...")
    create_thumbnails(image_map)
    print()

    print("3. Parsing Excel data...")
    hazards = parse_excel(image_map)

    # Only keep images that are referenced in the Excel (320 IDs)
    excel_ids = set(h["imageId"].upper() for h in hazards)
    extra_ids = set(image_map.keys()) - excel_ids
    for eid in extra_ids:
        del image_map[eid]
    print(f"   Removed {len(extra_ids)} images not in Excel (only keeping {len(image_map)} Excel-referenced images)\n")

    # Also include image IDs from Excel that have no file (for data completeness)
    ids_without_files = excel_ids - set(image_map.keys())
    for eid in ids_without_files:
        stage = detect_stage_from_id(eid)
        image_map[eid] = {
            "id": eid,
            "filename": "",
            "stage": stage,
            "original_path": "",
            "thumb_path": "",
            "noFile": True,
        }
    print(f"   {len(ids_without_files)} image IDs have no file on disk\n")

    print("4. Parsing IRR CSV...")
    irr_image_ids, irr_data = parse_irr_csv()
    irr_id_set = set(iid.upper() for iid in irr_image_ids)
    print(f"   {len(irr_image_ids)} IRR images, {len(image_map) - len(irr_id_set)} Main images\n")

    print("5. Computing statistics...")
    # Combined stats (all 320)
    stats = compute_statistics(hazards, image_map)
    stats["totalImages"] = 320  # force label
    print(f"   Combined HECA Score: {stats['hecaScore']}%")

    # IRR subset stats (55 images)
    irr_image_map = {k: v for k, v in image_map.items() if k in irr_id_set}
    irr_hazards = [h for h in hazards if h["imageId"].upper() in irr_id_set]
    irr_stats = compute_statistics(irr_hazards, irr_image_map)
    irr_stats["totalImages"] = len(irr_image_ids)
    print(f"   IRR HECA Score: {irr_stats['hecaScore']}%  ({len(irr_hazards)} hazards)")

    # Main subset stats (265 images)
    main_image_map = {k: v for k, v in image_map.items() if k not in irr_id_set}
    main_hazards = [h for h in hazards if h["imageId"].upper() not in irr_id_set]
    main_stats = compute_statistics(main_hazards, main_image_map)
    main_stats["totalImages"] = 320 - len(irr_image_ids)
    print(f"   Main HECA Score: {main_stats['hecaScore']}%  ({len(main_hazards)} hazards)\n")

    # Sanity check
    assert len(irr_hazards) + len(main_hazards) == len(hazards), \
        f"Split mismatch: {len(irr_hazards)} + {len(main_hazards)} != {len(hazards)}"

    print("6. Getting graph list...")
    graphs = get_graph_list()
    print(f"   Found {len(graphs)} graphs\n")

    print("7. Writing data.js...")
    images_data = {}
    for img_id, info in image_map.items():
        img_hazards = [h for h in hazards if h["imageId"].upper() == img_id.upper()]
        images_data[info["id"]] = {
            **info,
            "hazardCount": len(img_hazards),
            "highEnergyCount": sum(1 for h in img_hazards if h["severity"] == "High"),
            "hasExposure": any(h["exposure"] > 0 for h in img_hazards),
        }

    data = {
        "images": images_data,
        "hazards": hazards,
        "statistics": stats,
        "irrImageIds": irr_image_ids,
        "irrData": irr_data,
        "irrStatistics": irr_stats,
        "mainStatistics": main_stats,
        "graphs": graphs,
        "lifecycleStages": ["Foundation", "Ground Floor", "First Floor", "PPVC Module"],
        "energyTypes": sorted(stats["energyDistribution"].keys()),
    }

    with open(OUTPUT_FILE, "w") as f:
        f.write("// Auto-generated HECA Dashboard Data\n")
        f.write(f"const HECA_DATA = {json.dumps(data, indent=2)};\n")

    file_size = OUTPUT_FILE.stat().st_size / 1024
    print(f"   Written {file_size:.1f} KB to data.js\n")
    print("=== Done! ===")


if __name__ == "__main__":
    main()
