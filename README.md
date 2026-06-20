# 🔬 HECA — High-Energy Control Assessment System

> **AI-driven construction safety analysis — Dashboard, Data Pipeline & Research Paper Tools**
> *Research Project — Indian Institute of Technology Madras*
> *Abstract shortlisted at ICONS 2026 (CIB W099), Hanoi, Vietnam*

[![Python](https://img.shields.io/badge/Python-3.10+-3776AB?style=flat&logo=python&logoColor=white)](https://python.org)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![Chart.js](https://img.shields.io/badge/Chart.js-4.4-FF6384?style=flat&logo=chartdotjs&logoColor=white)](https://www.chartjs.org)
[![Conference](https://img.shields.io/badge/ICONS_2026-Shortlisted-blue)](https://cibw099.com)

---

## 📋 What is HECA?

The **High-Energy Control Assessment (HECA)** is a proactive safety methodology that identifies **high-energy hazards** (>500 ft-lb) on construction sites and evaluates whether **Direct Controls** — engineered physical barriers — are in place to prevent serious injuries *without relying on human behavior*.

This repository contains the complete analysis and visualization toolchain built for the HECA research project at IIT Madras:

### Key Numbers
| Metric | Value |
|--------|-------|
| **Images Analyzed** | 320 unique construction site images |
| **Lifecycle Stages** | 4 (Foundation → Ground Floor → First Floor → PPVC Module) |
| **Hazards Identified** | 1,583 high-energy hazards |
| **High-Energy Exposure** | 98.54% |
| **IRR Validation Set** | 55 images (dual-researcher inter-rater reliability) |

---

## 🖥️ What I Built

### 1. Interactive HECA Dashboard (`website/`)
A full-featured, single-page web application (~1,200 lines of JavaScript) for exploring the HECA analysis results:

- **Dual Analysis Mode** — Switch between IRR dataset (55 images, 2 researchers) and Main dataset (320 images)
- **Image Gallery** — Filterable by lifecycle stage (Foundation, Ground Floor, First Floor, PPVC Module) with paginated grid view
- **Modal Analysis View** — Click any image to see its full HECA breakdown: hazard descriptions, energy types, Direct Control status, success/exposure scores
- **Analytics Panel** — 6 interactive Chart.js visualizations:
  - Hazard distribution by energy type
  - Direct Control compliance rates
  - Lifecycle stage comparison
  - HECA score distribution
  - Success vs. Exposure metrics
  - Research figures gallery
- **Data Table** — Sortable, searchable, exportable table of all 320 image analyses
- **Responsive Design** — Professional light theme with IIT Madras branding

### 2. Data Processing Pipeline (`analysis/`)
Python scripts that transform raw HECA worksheet data into dashboard-ready format:

- **`data_processor.py`** (356 lines) — Reads the HECA Excel worksheet (320 images), detects lifecycle stages from image IDs (F=Foundation, GF=Ground Floor, FF=First Floor, M=PPVC Module), generates optimized WebP thumbnails, and exports structured JSON (`data.js`) for the dashboard
- **`update_rp_data.py`** (181 lines) — Processes the 55-image IRR subset (Inter-Rater Reliability), extracts per-image hazard counts, success/exposure scores, and patches `data.js` with researcher-specific analysis data

### 3. Research Paper Builder (`build_paper.py`, `build_paper_jcem.py`)
Automated Word document generation for the HECA research paper:

- **`build_paper.py`** (504 lines) — Generates a publication-ready Word document with professional formatting (Times New Roman, double-spaced, navy headings), auto-inserted figures, styled tables with alternating row colors, and proper section numbering
- **`build_paper_jcem.py`** (JCEM journal variant) — Same paper adapted to Journal of Construction Engineering and Management formatting requirements
- **`fix_dashes.py`** — Typography preprocessing (em-dashes, en-dashes, smart quotes)

### 4. Face Privacy Module (Separate Repo)
Worker faces in all construction site images are anonymized before analysis using the companion **[PrivacyBlur](https://github.com/piewsh/Privacy-Blur-Model)** pipeline — an ensemble of YOLOv8 + BlazeFace + OpenCV DNN face detectors.

---

## 📁 Repository Structure

```
HECA-Construction-Safety/
│
├── website/                         # Interactive HECA Dashboard
│   ├── index.html                   # Dashboard page (519 lines)
│   ├── styles.css                   # Professional light theme (45KB)
│   ├── app.js                       # Dashboard logic (1,127 lines)
│   ├── data.js                      # 320-image analysis dataset (1.4MB JSON)
│   ├── irr_researcher_data.js       # Inter-rater reliability data
│   ├── Graphs/                      # 11 analytics chart images
│   ├── iitm-logo.png               # IIT Madras branding
│   └── walkthrough.md              # Dashboard feature walkthrough
│
├── analysis/                        # Data processing pipeline
│   ├── data_processor.py            # Excel → JSON + thumbnail generator
│   ├── update_rp_data.py            # IRR data patcher
│   └── Image Analysis/
│       └── HECA Worksheet_320 Images.xlsx
│
├── figures/                         # Research paper figures
│   ├── control_hierarchy*.png       # HECA control hierarchy diagrams
│   ├── energy_wheel*.png            # Energy type taxonomy wheel
│   ├── knowledge_gaps*.png          # Literature gap analysis
│   ├── trir_vs_heca*.png            # TRIR comparison charts
│   ├── [1-11].png                   # Numbered paper figures
│   └── generated/                   # Auto-generated methodology diagrams
│       ├── 1_overall_methodology.png
│       ├── 3_system_architecture.png
│       ├── 4_blur_architecture.png
│       ├── 5_dashboard_features.png
│       ├── 8_heca_workflow.png
│       ├── 9_hazard_taxonomy.png
│       └── ...                      # 18 total generated figures
│
├── heca_references/                 # Published HECA reference materials
│   ├── HECA Rulebook.pdf
│   ├── HECA Energy Computations.pdf
│   ├── PSJ - Energy Wheel.pdf       # Professional Safety Journal
│   ├── PSJ - SCL Model.pdf
│   └── STKY Icons Combined.pdf
│
├── build_paper.py                   # Research paper generator (504 lines)
├── build_paper_jcem.py              # JCEM journal format variant
└── fix_dashes.py                    # Typography preprocessing
```

---

## 🚀 Running the Dashboard Locally

```bash
cd website
python3 -m http.server 8765
# Open http://localhost:8765
```

No build step required — it's a static HTML/CSS/JS application with all data embedded.

---

## 🔒 Data Privacy Notice

Due to confidentiality and worker privacy requirements, the following are **not included** in this public repository:

- **Raw construction site images** (489+ photos from IIT Madras site)
- **Full image datasets** (320 unique + 55 IRR analysis images)
- **Worker photographs** — all faces anonymized via [PrivacyBlur](https://github.com/piewsh/Privacy-Blur-Model)
- **Research paper drafts** (`.docx`) and internal reports
- **Image thumbnails** (~422 processed WebP files used by the dashboard)
- **Hero background image** (26MB site photo)

The complete **analysis code**, **dashboard application**, **generated figures**, and **published reference materials** are fully available.

---

## 🔗 Related Repositories

- [**Privacy-Blur-Model**](https://github.com/piewsh/Privacy-Blur-Model) — Ensemble face/text anonymization pipeline used for privacy compliance

---

## 👤 Author

**Piyush Ranjan Singh** — [GitHub](https://github.com/piewsh) • [Email](mailto:rajputpiyush2009@gmail.com)

## 📜 License

This project is licensed under the MIT License.
