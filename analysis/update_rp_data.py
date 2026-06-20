#!/usr/bin/env python3
"""
Update RP (Piyush) IRR data in data.js from updated Excel worksheet.
Reads HECA Worksheet_Piyush_55_images.xlsx, extracts per-image hazard/success/exposure
counts, and patches data.js with the new values.
"""

import json
import os
import re
from pathlib import Path

try:
    import openpyxl
except ImportError:
    os.system("pip3 install openpyxl")
    import openpyxl

BASE_DIR = Path(__file__).parent
EXCEL_FILE = BASE_DIR / "55 Images for HECA Analysis" / "HECA Worksheet_Piyush_55_images.xlsx"
DATA_JS = BASE_DIR / "data.js"

def parse_piyush_excel():
    """Parse Piyush's updated Excel to extract per-image metrics.
    
    Excel columns (0-indexed):
    0: Image ID (only first row per image, rest are None)
    1: Activity Type
    2: Hazard No.
    3: Hazard Description
    4: Energy Type
    5: High Energy? (>500 ft-lb)  — YES/NO
    6: Direct Control Present? — Yes/No
    7: Current Controls Observed
    8: Direct Controls Needed
    9: Comments / Observations
    10: Success (0/1)
    11: Exposure (0/1)
    12: Location in Image
    """
    wb = openpyxl.load_workbook(EXCEL_FILE, data_only=True)
    ws = wb.active
    
    per_image = {}
    current_img_id = None
    
    for row in ws.iter_rows(min_row=2, values_only=True):
        # Column 0: Image ID (only set for first hazard of each image)
        if row[0] is not None:
            current_img_id = str(row[0]).strip().upper()
        
        if not current_img_id:
            continue
            
        # Skip empty rows
        if row[3] is None:  # No hazard description = empty row
            continue
        
        if current_img_id not in per_image:
            per_image[current_img_id] = {
                'hazards': 0,
                'he_hazards': 0,
                'success': 0,
                'exposure': 0,
            }
        
        per_image[current_img_id]['hazards'] += 1
        
        # Column 5: High Energy? — YES/NO
        is_he = str(row[5] or '').strip().upper()
        if is_he in ('YES', 'Y'):
            per_image[current_img_id]['he_hazards'] += 1
            
            # Column 10: Success (0/1)
            success_val = row[10]
            if success_val is not None:
                per_image[current_img_id]['success'] += int(success_val)
            
            # Column 11: Exposure (0/1)
            exposure_val = row[11]
            if exposure_val is not None:
                per_image[current_img_id]['exposure'] += int(exposure_val)
    
    # Print summary
    total_hazards = sum(v['hazards'] for v in per_image.values())
    total_he = sum(v['he_hazards'] for v in per_image.values())
    total_success = sum(v['success'] for v in per_image.values())
    total_exposure = sum(v['exposure'] for v in per_image.values())
    
    print(f"Parsed {len(per_image)} unique images from Excel")
    print(f"Total hazards: {total_hazards}")
    print(f"Total HE hazards: {total_he}")
    print(f"Total success: {total_success}")
    print(f"Total exposure: {total_exposure}")
    total_obs = total_success + total_exposure
    heca_score = (total_success / total_obs * 100) if total_obs > 0 else 0
    print(f"HECA Score: {heca_score:.2f}%")
    
    print(f"\nPer-image breakdown:")
    for img_id in sorted(per_image.keys()):
        d = per_image[img_id]
        s = d['success']
        e = d['exposure']
        obs = s + e
        score = (s / obs * 100) if obs > 0 else 0
        print(f"  {img_id}: hazards={d['hazards']}, HE={d['he_hazards']}, "
              f"success={s}, exposure={e}, HECA={score:.1f}%")
    
    return per_image

def update_data_js(per_image):
    """Update data.js with new RP values in irrData section."""
    with open(DATA_JS, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract the JS object (remove "const HECA_DATA = " prefix and trailing ";")
    json_start = content.index('{')
    json_end = content.rindex('}') + 1
    prefix = content[:json_start]
    suffix = content[json_end:]
    
    data = json.loads(content[json_start:json_end])
    
    # Update irrData for each image
    irr_data = data.get('irrData', {})
    updated_count = 0
    
    for img_id, metrics in per_image.items():
        if img_id in irr_data:
            s = metrics['success']
            e = metrics['exposure']
            obs = s + e
            
            irr_data[img_id]['hazards_RP'] = metrics['hazards']
            irr_data[img_id]['success_RP'] = s
            irr_data[img_id]['exposure_RP'] = e
            irr_data[img_id]['hecaScore_RP'] = round(s / obs * 100, 1) if obs > 0 else 0.0
            updated_count += 1
            print(f"  Updated {img_id}: hazards={metrics['hazards']}, "
                  f"success={s}, exposure={e}, HECA={irr_data[img_id]['hecaScore_RP']}%")
        else:
            print(f"  WARNING: {img_id} not found in irrData!")
    
    # Now recalculate irrStatistics based on updated irrData
    # The irrStatistics reflects Abhishek's (RA) coding of the 55 images from the main Excel
    # It does NOT change when RP data changes. The RP data only affects the comparison table/charts.
    
    # Write back
    data['irrData'] = irr_data
    json_str = json.dumps(data, indent=2, ensure_ascii=False)
    
    with open(DATA_JS, 'w', encoding='utf-8') as f:
        f.write(prefix + json_str + suffix)
    
    print(f"\nUpdated {updated_count} image entries in data.js")
    
    # Verify totals
    total_h = sum(irr_data[img_id]['hazards_RP'] for img_id in data['irrImageIds'])
    total_s = sum(irr_data[img_id]['success_RP'] for img_id in data['irrImageIds'])
    total_e = sum(irr_data[img_id]['exposure_RP'] for img_id in data['irrImageIds'])
    total_obs = total_s + total_e
    heca = (total_s / total_obs * 100) if total_obs > 0 else 0
    print(f"\nVerification — RP totals across all 55 IRR images:")
    print(f"  Total Hazards (RP): {total_h}")
    print(f"  Total Success (RP): {total_s}")  
    print(f"  Total Exposure (RP): {total_e}")
    print(f"  HECA Score (RP): {heca:.2f}%")

if __name__ == "__main__":
    print("=" * 60)
    print("Updating RP (Piyush) data in data.js")
    print("=" * 60)
    
    print("\n1. Parsing Piyush's updated Excel...")
    per_image = parse_piyush_excel()
    
    print(f"\n2. Updating data.js...")
    update_data_js(per_image)
    
    print("\nDone!")
