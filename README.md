# 🔬 HECA — High-Energy Control Assessment System

> **AI-powered construction safety assessment using Vision-Language Models**
> *Research Project — Indian Institute of Technology Madras*

[![Python](https://img.shields.io/badge/Python-3.10+-3776AB?style=flat&logo=python&logoColor=white)](https://python.org)
[![PyTorch](https://img.shields.io/badge/PyTorch-2.0+-EE4C2C?style=flat&logo=pytorch&logoColor=white)](https://pytorch.org)
[![Conference](https://img.shields.io/badge/ICONS_2026-Shortlisted-blue)](https://cibw099.com)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## 📋 Overview

The **High-Energy Control Assessment (HECA)** system is a multi-modal AI pipeline for **automated construction site safety auditing**. It combines **Vision-Language Models (VLMs)** and **Large Language Models (LLMs)** to detect, classify, and reason about high-energy hazards on active construction sites.

### Key Results
| Metric | Value |
|--------|-------|
| **Dataset** | 550+ annotated field images (IIT Madras construction site) |
| **Accuracy** | 76% hazard classification |
| **Images Analyzed** | 320 unique images across 4 lifecycle stages |
| **Hazards Identified** | 1,583 total high-energy hazards |
| **Conference** | Abstract shortlisted — ICONS 2026 (CIB W099), Vietnam |

---

## 🏗️ Architecture

```
┌──────────────────────────────────────────────────────────────┐
│                      HECA Pipeline                           │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  📸 Construction Site Image                                  │
│         │                                                    │
│         ├──► PrivacyBlur Module (face/text anonymization)    │
│         │    github.com/piewsh/Face-Privacy-Blur-Model       │
│         │                                                    │
│         ▼                                                    │
│  ┌─────────────────────┐                                     │
│  │  Florence-2 (VLM)   │ ◄── QLoRA + PEFT Fine-tuning      │
│  │  Visual Analysis    │     (550+ annotated images)         │
│  └────────┬────────────┘                                     │
│           │ Detected objects + scene understanding            │
│           ▼                                                  │
│  ┌─────────────────────┐                                     │
│  │  Llama 3 (LLM)      │ ◄── Physics-informed Prompting    │
│  │  Hazard Reasoning   │     HECA Energy Wheel taxonomy      │
│  └────────┬────────────┘                                     │
│           │ Hazard classification + control assessment        │
│           ▼                                                  │
│  ┌─────────────────────┐                                     │
│  │  HECA Dashboard     │ ◄── Interactive web visualization  │
│  │  Analytics & Report │     320 images × 4 lifecycle stages │
│  └─────────────────────┘                                     │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

## 📁 Repository Structure

```
HECA-Construction-Safety/
│
├── analysis/                        # Data processing pipeline
│   ├── data_processor.py            # Excel → JSON converter for dashboard
│   └── update_rp_data.py            # Research paper data updater
│
├── website/                         # Interactive HECA Dashboard
│   ├── index.html                   # Main dashboard page
│   ├── styles.css                   # Dashboard styling (~45KB)
│   ├── app.js                       # Dashboard logic (~46KB)
│   ├── data.js                      # 320-image analysis dataset
│   ├── irr_researcher_data.js       # Inter-rater reliability data
│   ├── Graphs/                      # Analytics visualizations
│   └── iitm-logo.png               # IIT Madras branding
│
├── figures/                         # Research paper figures
│   ├── control_hierarchy*.png       # HECA control hierarchy diagrams
│   ├── energy_wheel*.png            # Energy wheel taxonomy
│   ├── knowledge_gaps*.png          # Literature gap analysis
│   ├── trir_vs_heca*.png            # TRIR comparison charts
│   └── [1-11].png                   # Numbered paper figures
│
├── heca_references/                 # Published HECA reference materials
│   ├── HECA Rulebook.pdf
│   ├── HECA Energy Computations.pdf
│   ├── PSJ - Energy Wheel.pdf       # Professional Safety Journal
│   ├── PSJ - SCL Model.pdf
│   └── ...                          # Additional reference papers
│
├── build_paper.py                   # Research paper generation script
├── build_paper_jcem.py              # JCEM journal format variant
└── fix_dashes.py                    # Typography preprocessing
```

---

## 🖥️ HECA Dashboard

The repository includes a fully interactive **web dashboard** for exploring the analysis results:

- **320 analyzed construction images** across 4 lifecycle stages (Foundation, Ground Floor, First Floor, PPVC Module)
- **1,583 identified hazards** with energy type classification
- **Direct Control assessment** for each hazard
- **Analytics panel** with Chart.js visualizations
- **Inter-rater reliability** (IRR) analysis for validation
- **Image gallery** with hazard overlays

> To run the dashboard locally, open `website/index.html` in a browser.

---

## 🛠️ Tech Stack

| Component | Technology |
|-----------|-----------|
| Vision Model | Microsoft Florence-2 |
| Language Model | Meta Llama 3 |
| Fine-tuning | QLoRA, PEFT Adapters |
| Framework | PyTorch |
| Validation | Giskard AI Vulnerability Scanner |
| Dashboard | HTML5, CSS3, JavaScript, Chart.js |
| Privacy Module | [PrivacyBlur](https://github.com/piewsh/Face-Privacy-Blur-Model) (YOLOv8 + BlazeFace + OpenCV DNN) |

---

## 📄 Publication

**Research abstract shortlisted** at:
- **ICONS 2026 (CIB W099)** — International Conference on Safety, Hanoi University of Civil Engineering, Vietnam

---

## 🔒 Data Privacy Notice

Due to confidentiality agreements and worker privacy requirements, the following assets are **not included** in this public repository:

- **Raw construction site images** (489+ photos from IIT Madras site)
- **Full image datasets** (320 unique + 55 HECA analysis images)
- **Worker photographs** — all worker faces are anonymized via the companion [PrivacyBlur](https://github.com/piewsh/Face-Privacy-Blur-Model) pipeline
- **Research paper drafts** and internal project reports
- **Image thumbnails** (~422 processed site images)

The complete **analysis code**, **dashboard**, **generated figures**, and **published reference materials** are fully available.

---

## 🔗 Related Repositories

- [**Face-Privacy-Blur-Model**](https://github.com/piewsh/Face-Privacy-Blur-Model) — Privacy-preserving face/text anonymization module used as a preprocessing step in this pipeline

---

## 👤 Author

**Piyush Ranjan Singh** — [GitHub](https://github.com/piewsh) • [Email](mailto:rajputpiyush2009@gmail.com)

## 📜 License

This project is licensed under the MIT License.
