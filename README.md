# Vaishnav Engineering — Industrial Web Portal & RDSO Compliance Management System

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.3-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

Official digital web portal and comprehensive **RDSO Part-A Compliance & Infrastructure Audit Repository** for **Vaishnav Engineering**, an accredited manufacturer and fabricator of heavy structural steel, railway open web bridge girders, bowstring arch spans, composite steel plate girders, and high-precision infrastructural assemblies for Indian Railways and major EPC infrastructure projects.

---

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [Project Architecture & Directory Structure](#project-architecture--directory-structure)
- [Getting Started & Installation](#getting-started--installation)
- [Available Scripts](#available-scripts)
- [Environment Configuration](#environment-configuration)
- [Document & Asset Management](#document--asset-management)
- [Security & Compliance](#security--compliance)
- [License](#license)

---

## Overview

Vaishnav Engineering operates modern manufacturing plants in Vellore/Katpadi, Tamil Nadu, with an annual fabrication capacity of **5,500 MT / Annum** (Heavy Railway Girders). The enterprise holds **RDSO Part-A Approved** status from the Research Designs & Standards Organisation (Ministry of Railways, Lucknow) and maintains **ISO 9001:2015** certification.

This Next.js web application serves dual purposes:
1. **Public Corporate Portal**: Showcases fabrication capabilities, state-of-the-art CNC equipment, robotic welding infrastructure, crane capacity, and completed/ongoing railway bridge projects.
2. **Technical Compliance Repository**: A comprehensive 13-section technical audit workspace containing statutory charters, factory licenses, ISO certificates, organization hierarchies, NDT testing facilities, power infrastructure, machine lists, and executed project logs with verified documentation.

---

## Key Features

- **13-Section RDSO Compliance Suite**:
  - **Section 01**: Statutory Enterprise Details & MSME Udyam Registration (`UDYAM-TN-30-0006763`).
  - **Section 02**: Physical Plant Layout, Land Area (1.05 Acres), & Covered Sheds (28,500 sq.ft).
  - **Section 03**: Covered Shed Details & Overhead EOT Cranes (20T, 10T, 5T capacity).
  - **Section 04**: Plant Machinery & Installed Equipment with embedded technical catalog.
  - **Section 05**: Factory License, Inspectorate of Factories Tamil Nadu Approval, & Renewals.
  - **Section 06**: ISO 9001:2015 Quality Management System Certification & Bureau Veritas / TUV audit history.
  - **Section 07**: Visual Plant Leadership, Technical Team Hierarchy & Workforce Allocation.
  - **Section 08**: Testing Facilities, Laboratory Metrology & Non-Destructive Testing (NDT) with Barath Scan Report Viewer.
  - **Section 09**: Statutory & Environmental Approvals (TNPCB Consent to Operate, Fire NOC).
  - **Section 10**: Certified Artisans, Qualified Welders (ASME Section IX / AWS D1.1), & Skill Distribution.
  - **Section 11**: Power Infrastructure, 250 kVA Substation, DG Backups & Live TANGEDCO 3-Phase Tariff Records.
  - **Section 12**: Executed Works & Supplies Log (5-Year audited track record of completed railway girders and FOB packages).
  - **Section 13**: Ongoing Railway Bridge Girder Contracts & Active Supply Commitments.
- **Embedded Document Viewers**: Responsive PDF document viewer containers with full scroll support, download triggers, and dedicated full-screen tab launchers.
- **Interactive Visualizers**: Frame-by-frame erection scrubbers, ROB construction sequence controllers, and dynamic gallery filters.
- **Industrial Design System**: Built with modern typography (Manrope font family), luxury champagne-gold accents, deep charcoal foundations, ivory backdrop contrast, and smooth GPU-accelerated motion via Framer Motion.
- **Enterprise SEO & Meta**: Dynamic `sitemap.ts`, `robots.ts`, OpenGraph metadata, and semantic HTML5 structuring.

---

## Technology Stack

| Layer | Technology | Details |
|---|---|---|
| **Framework** | [Next.js 16.1.6](https://nextjs.org/) | App Router architecture, Static Route Generation, Server Components |
| **Runtime / UI** | [React 19.2.3](https://react.dev/) | React Server Components & client interaction primitives |
| **Language** | [TypeScript 5.9.3](https://www.typescriptlang.org/) | Strict type-safety, fully typed data interfaces |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Modern post-CSS pipeline with responsive utilities |
| **Animations** | [Framer Motion 12.34.5](https://motion.dev/) | High-performance spring physics, scroll-linked transitions |
| **Icons** | [Lucide React 0.576.0](https://lucide.dev/) | Consistent SVG industrial icon set |
| **Themes** | [next-themes 0.4.6](https://github.com/pacocoursey/next-themes) | Theme provider support |

---

## Project Architecture & Directory Structure

```text
vaishnav-engineering/
├── app/                              # Next.js App Router (Pages, Layouts, Routes)
│   ├── about/                        # About Vaishnav Engineering
│   ├── approvals/                    # Statutory, ISO, and RDSO approvals
│   ├── company/                      # Executive management & history
│   ├── contact/                      # Contact forms & plant directions
│   ├── documents/                    # Compliance documents hub
│   ├── gallery/                      # Filterable high-res plant & project gallery
│   ├── infrastructure/               # Machinery, CNC bays, cranes, utilities
│   ├── projects/                     # Railway bridge projects & technical specs
│   ├── quality-policy/               # Quality control standards & guidelines
│   ├── rdso/                         # 13-Section comprehensive RDSO portal
│   ├── safety/                       # HSE policies, safety metrics, and protocols
│   ├── services/                     # Fabrication, erection, testing services
│   ├── team/                         # Executive leadership & team roster
│   ├── workforce/                    # Qualified artisans, welders, and engineers
│   ├── globals.css                   # Global styles, variables, typography
│   ├── layout.tsx                    # Root layout with Navbar and Footer
│   ├── page.tsx                      # Homepage with interactive hero, stats, and modules
│   ├── robots.ts                     # Search engine crawler directives
│   └── sitemap.ts                    # Dynamic sitemap generator
├── components/                       # Modular React UI Components
│   ├── layout/                       # Navbar, Footer, Sticky Sub-navigation
│   ├── rdso/                         # RDSO 13-section specialized components
│   ├── HeroSection.tsx               # Main hero banner with industrial metrics
│   ├── PDFViewerModal.tsx            # Fullscreen interactive PDF viewer modal
│   ├── ROBConstructionSequence.tsx   # Interactive bridge erection scrubber
│   └── ...                           # Project cards, stat widgets, galleries
├── data/                             # Centralized Data Models & Audit Records
│   ├── rdsoData.ts                   # 13-section RDSO audited technical datasets
│   └── infrastructureData.ts         # Plant specifications, machinery records
├── public/                           # Static Assets Served by Web Application
│   ├── avatar/                       # Leadership portraits
│   ├── docs/                         # Certified PDFs (RDSO, ISO, NABL, Licenses)
│   ├── enhanced_pro/                 # High-resolution plant photography
│   ├── fob-stages/                   # FOB construction sequence frames
│   ├── infrastructure/               # Machinery, welding, CNC cut, lab photos
│   ├── logo/                         # Brand logos & accreditation emblems
│   ├── projects/                     # Railway bridge girders photography
│   ├── rob/                          # ROB bridge girder sequence stills
│   └── videos/                       # Erection & girder launch video media
├── .env.example                      # Template environment variable configurations
├── .gitignore                        # Git exclusion rules
├── LICENSE                           # MIT License
├── package.json                      # Project manifest & dependency declarations
├── tsconfig.json                     # TypeScript compiler configuration
└── next.config.ts                    # Next.js build and routing options
```

---

## Getting Started & Installation

### Prerequisites

Ensure you have the following installed on your development workstation:
- **Node.js**: `v20.x` or higher (LTS recommended)
- **npm**: `v10.x` or higher (bundled with Node.js)
- **Git**: `v2.40+`

### Installation Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/<your-username>/vaishnav-engineering.git
   cd vaishnav-engineering
   ```

2. **Install project dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   ```bash
   cp .env.example .env.local
   ```
   *(No external secret keys are required to run the portal locally.)*

4. **Start the local development server**:
   ```bash
   npm run dev
   ```

5. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to view the portal.

---

## Available Scripts

| Command | Action |
|---|---|
| `npm run dev` | Starts local Next.js development server with Hot Module Replacement (HMR) at port 3000. |
| `npm run build` | Compiles the production build, optimizes assets, and prerenders all 25 static pages. |
| `npm run start` | Boots the compiled Next.js production server. |
| `npm run lint` | Runs ESLint 9 across all TypeScript and React files to enforce code style. |

---

## Environment Configuration

Copy `.env.example` to `.env.local` to configure local runtime settings:

```bash
# Node environment
NODE_ENV=development

# Canonical Public Website URL
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Optional Analytics & Logging Placeholders
# NEXT_PUBLIC_ANALYTICS_ID=
# NEXT_PUBLIC_SENTRY_DSN=
```

> **Note**: Sensitive credentials, database URIs, and authentication tokens should never be committed to version control. The repository `.gitignore` automatically blocks `.env` and `.env.local`.

---

## Document & Asset Management

All technical PDFs, factory licenses, and inspection reports are placed in `public/docs/` and referenced cleanly via Next.js static asset routes:
- `/docs/RDSO APPROVED.pdf` — Official RDSO Approval Certificate.
- `/docs/ISO.pdf` — ISO 9001:2015 Quality Management Certificate.
- `/docs/BARATH SCAN.pdf` — Barath Metallurgical NDT & Testing Report.
- `/docs/Machinery_Formatted.pdf` — Complete plant machinery & workshop inventory.
- `/docs/COMPLETED_PROJECTS.pdf` — 5-Year track record of executed railway bridge works.

---

## Security & Compliance

- **No Hardcoded Secrets**: Scanned and verified free of API tokens, database connection strings, and private keys.
- **Privacy Standard**: Personal consumer numbers, residential addresses, and private identification records have been redacted or excluded from public display.
- **Optimized Asset Sizes**: All video media and high-resolution images are kept under 16 MB, well within standard Git file thresholds (no Git LFS required).

---

## License

This project is licensed under the [MIT License](LICENSE) — see the LICENSE file for details.

Copyright © 2026 **Vaishnav Engineering**. All rights reserved.
