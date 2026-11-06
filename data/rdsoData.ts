import {
  COMPANY_DETAILS,
  RDSO_APPROVAL_INFO,
  ISO_INFO,
  THIRD_PARTY_APPROVALS,
  POWER_UTILITIES,
  FACTORY_LAYOUT_SHOPS,
  MACHINERY_LIST,
  TESTING_FACILITIES,
  WORKFORCE_STATS,
  PROJECTS_DATA,
  EXECUTED_WORKS_LOG,
  WORKS_IN_HAND,
  PORTAL_DOCUMENTS,
  AuditDoc,
  Machine,
  ProjectItem
} from "@/data/portalData";

// ============================================================================
// SECTION 01: OWNERSHIP DETAILS INTERFACES & DATA
// ============================================================================

export interface DirectorLeadership {
  name: string;
  role: string;
  qualification: string;
  experience: string;
  image?: string;
  isProprietor?: boolean;
}

export interface OwnershipDetailsData {
  ownershipType: string;
  proprietor: string;
  boardOfDirectors: DirectorLeadership[];
  partners: string | null;
  registrationDetails: {
    dateOfIncorporation: string;
    dateOfCommencement: string;
    enterpriseType: string;
    udyamNumber: string;
    gstin: string;
    pan: string;
    cin: string | null;
  };
  memorandumArticles: {
    status: string;
    description: string;
    docUrl?: string;
  };
  partnershipDeed: {
    status: string;
    description: string;
  };
  registeredOfficeAddress: string;
  contactInformation: {
    phone: string;
    email: string;
    workingHours: string;
  };
}

export const RDSO_OWNERSHIP: OwnershipDetailsData = {
  ownershipType: "Sole Proprietorship (Proprietary Industrial Enterprise)",
  proprietor: "Mr. R. Saravanan (Ramalingam Saravanan)",
  boardOfDirectors: [
    {
      name: "Mr. R. Saravanan",
      role: "Founder / Managing Director",
      qualification: "",
      experience: "",
      image: "/owner-portrait.jpeg",
      isProprietor: true
    }
  ],
  partners: null,
  registrationDetails: {
    dateOfIncorporation: "21/01/2009",
    dateOfCommencement: "10/03/2009",
    enterpriseType: "Small Enterprise (Manufacturing of Structural Metal Products)",
    udyamNumber: "UDYAM-TN-30-0006763",
    gstin: "33BHQPS0375G1Z3",
    pan: "BHQPS0375G",
    cin: null // Proprietary firm does not have ROC CIN
  },
  memorandumArticles: {
    status: "Information to be updated",
    description: "Statutory Memorandum & Articles of Association are applicable to limited corporate entities. Vaishnav Engineering is registered under MSME & GST as a proprietary concern; charter documentation will be updated upon corporate reconstitution."
  },
  partnershipDeed: {
    status: "Not Applicable",
    description: "Not Applicable — Vaishnav Engineering operates under 100% sole proprietorship of Mr. R. Saravanan. No partnership deed or LLP agreement applies."
  },
  registeredOfficeAddress: "Unit 1 - SF.No. 295/1 & 294/1A, Sembarayanallore Road, Sembarayanellore Village, Thiruvalam, Katpadi Taluk, Vellore Dist. – 632 519, Tamil Nadu, India",
  contactInformation: {
    phone: "+91 97894 95144",
    email: "vaishnav.engg2009@gmail.com",
    workingHours: "Monday – Saturday: 08:30 AM – 06:30 PM IST"
  }
};

// ============================================================================
// SECTION 02: FABRICATION UNITS INTERFACES & DATA
// ============================================================================

export interface FacilityCategoryStatus {
  categoryName: string;
  status: "Operational" | "Available" | "Information to be updated";
  description: string;
  machinery?: string;
  photoUrl?: string;
}

export interface FabricationUnitData {
  id: string;
  unitNumber: string;
  unitName: string;
  completeAddress: string;
  facilityDescription: string;
  totalCoveredArea: string;
  craneCapacity: string;
  categories: FacilityCategoryStatus[];
  machinery: Machine[];
  photographs: { url: string; title: string; category: string }[];
}

export const RDSO_FABRICATION_UNITS: FabricationUnitData[] = [
  {
    id: "unit-1",
    unitNumber: "UNIT 1",
    unitName: "Principal Heavy Bridge Fabrication & Processing Plant",
    completeAddress: "SF.No. 295/1 & 294/1A, Sembarayanallore Village, VCSM via Thiruvalam, Katpadi Taluk, Vellore District – 632 519, Tamil Nadu, India",
    facilityDescription: "Core RDSO Part-A certified manufacturing facility equipped with automated multi-torch CNC cutting, heavy submerged arc welding tractors, 500T straightening hydraulic press, SA 2.5 blast enclosure, airless painting booth, and full-scale railway girder trial assembly floor.",
    totalCoveredArea: "45,000 Sq. Ft. Covered Fabrication Bays",
    craneCapacity: "25 MT Double Girder EOT Cranes (4 Bays)",
    categories: [
      {
        categoryName: "Template / Layout Area",
        status: "Operational",
        description: "Full-scale dedicated lofting and 1:1 scale template drafting floor for girder web cambering, joint layout geometry, and master drilling jigs.",
        machinery: "Precision Laser Levels, Optical Theodolite, Hardened Steel Master Gauges"
      },
      {
        categoryName: "Fabrication Shop",
        status: "Operational",
        description: "Heavy structural steel fabrication shop with four 24-meter overhead crane bays, heavy assembly skids, and precision fixture clamping stations.",
        machinery: "Heavy Assembly Skids, Turn-over Positioners, 25 MT EOT Cranes",
        photoUrl: "/infrastructure/cnc-cutting.png"
      },
      {
        categoryName: "Cutting",
        status: "Operational",
        description: "Multi-torch computerized oxy-fuel and high-definition plasma profiling with automated CAD nesting for plates up to 100mm thickness.",
        machinery: "2 Units Koike Flexigraph CNC Plate Profiling Machine (Bed 3m x 12m)",
        photoUrl: "/infrastructure/cnc-cutting.png"
      },
      {
        categoryName: "Drilling",
        status: "Operational",
        description: "High-precision plate drilling rigs for bridge girder splice joints, connection gussets, and heavy structural web connection holes.",
        machinery: "3 Units BOIS CNC Plate Drilling Rig & HMT RM-65 Heavy Radial Drills (Up to 80mm dia)",
        photoUrl: "/infrastructure/drilling.png"
      },
      {
        categoryName: "Welding",
        status: "Operational",
        description: "Automatic submerged arc longitudinal girder flange-to-web welding and synergic pulse MIG stiffener welding meeting AWS D1.5 railway bridge specifications.",
        machinery: "4 Units Lincoln 1000A Heavy SAW Tractor Welders & 12 Units Kemppi/Fronius 600A Inverter MIG/MAG Rigs",
        photoUrl: "/infrastructure/cnc-welding.png"
      },
      {
        categoryName: "Straightening",
        status: "Operational",
        description: "Motorized heavy hydraulic beam straightening press for removing welding heat distortion and imparting specified RDSO pre-camber.",
        machinery: "1 Unit 500-Ton Heavy Hydraulic Flange & Web Straightening Press"
      },
      {
        categoryName: "End Milling",
        status: "Information to be updated",
        description: "End milling and edge planer equipment details are scheduled for update in the upcoming machinery addition phase.",
        machinery: "Information to be updated"
      },
      {
        categoryName: "Blasting Shop",
        status: "Operational",
        description: "Enclosed abrasive shot blasting chamber providing SA 2.5 near-white blast cleanliness and anchor surface profile for heavy girders.",
        machinery: "Automated Heavy Girder Shot Blast Chamber & High Capacity Dust Collector",
        photoUrl: "/infrastructure/sand-blasting.png"
      },
      {
        categoryName: "Metallizing and Painting Shop",
        status: "Operational",
        description: "Climate-monitored paint shop equipped with high-pressure airless spray units for zinc phosphate primer, intermediate epoxy, and polyurethane finish coats.",
        machinery: "2 Units Graco Heavy Duty 450 Bar Airless Spray Systems",
        photoUrl: "/infrastructure/painting.png"
      },
      {
        categoryName: "Assembly Area",
        status: "Operational",
        description: "Full-scale concrete trial erection floor for complete 30.5m to 61.0m girder spans with laser alignment verifying camber, squareness, and splice fit-up.",
        machinery: "Pre-assembly Staging Beds, Optical Total Stations, Torque Multipliers"
      },
      {
        categoryName: "Stacking Area",
        status: "Operational",
        description: "Heavy-duty reinforced concrete dispatch and stacking yard with direct 25 MT EOT crane access and heavy articulated trailer loading docks.",
        machinery: "25 MT EOT Crane Hook Access, Heavy Hardstand Skids"
      },
      {
        categoryName: "Other Facilities",
        status: "Operational",
        description: "In-house quality control testing room, 125 kVA diesel generator backup station, calibrated instrument vault, and safety training room.",
        machinery: "125 kVA Silent DG Set (Kirloskar), NABL Calibrated Tool Bank"
      }
    ],
    machinery: MACHINERY_LIST,
    photographs: [
      { url: "/infrastructure/cnc-cutting.png", title: "CNC Multi-Torch Plate Cutting Bay", category: "Cutting" },
      { url: "/infrastructure/drilling.png", title: "BOIS CNC Plate & Radial Drilling Station", category: "Drilling" },
      { url: "/infrastructure/cnc-welding.png", title: "Automated Submerged Arc Welding (SAW)", category: "Welding" },
      { url: "/infrastructure/sand-blasting.png", title: "Abrasive Shot Blasting Chamber (SA 2.5)", category: "Surface Prep" },
      { url: "/infrastructure/painting.png", title: "High-Pressure Airless Spray Coating Facility", category: "Painting" }
    ]
  }
];

// ============================================================================
// SECTION 03: RDSO APPROVAL DETAILS INTERFACES & DATA
// ============================================================================

export interface RdsoApprovalRecord {
  sNo: number;
  itemName: string;
  itemNumber: string;
  registrationId: string;
  annualProductionCapacity: string;
  lastQualityAudit: string;
  nextAuditDue: string;
  certifyingOfficer: string;
  validityStatus: string;
  docUrl: string;
  isVerified: boolean;
}

export const RDSO_APPROVAL_RECORDS: RdsoApprovalRecord[] = [
  {
    sNo: 1,
    itemName: "Fabrication of Open Web, Composite Girder and Other Steel Plate Girder",
    itemNumber: "Part A (Open Web, Composite & Plate Girders)",
    registrationId: "CBS/G/Reg/Vaishnav",
    annualProductionCapacity: "5,500 MT / Annum",
    lastQualityAudit: "11-Oct-2023",
    nextAuditDue: "30-Nov-2028",
    certifyingOfficer: "Director General/B&S (Director/B&S-II), RDSO Lucknow, Ministry of Railways",
    validityStatus: "Active & Approved (Valid up to 30.11.2028)",
    docUrl: "/docs/rdso-vendor-directory-certificate.pdf",
    isVerified: true
  }
];

// ============================================================================
// SECTION 04: FIRM REGISTRATION DETAILS INTERFACES & DATA
// ============================================================================

export interface SupportingDocumentRecord {
  title: string;
  ref: string;
  docUrl: string;
  fileSize: string;
  validity: string;
  authority: string;
}

export interface FirmRegistrationDetails {
  companiesActRegistration: {
    status: string;
    details: string;
    corporateNote: string;
  };
  companyRegistrationNumber: {
    regNumber: string;
    type: string;
    status: string;
  };
  msmeUdyamRegistration: {
    udyamNumber: string;
    enterpriseType: string;
    nicCode: string;
    majorActivity: string;
    classificationDate: string;
  };
  registrationCategory: string;
  registrationDate: string;
  supportingDocuments: SupportingDocumentRecord[];
}

export const RDSO_FIRM_REGISTRATION: FirmRegistrationDetails = {
  companiesActRegistration: {
    status: "Not Applicable (Proprietary Industrial Concern)",
    details: "Registered under the Ministry of MSME (Govt of India) and Goods & Services Tax (GST) as a Proprietary Industrial Enterprise under Shri R. Saravanan.",
    corporateNote: "Corporate conversion and Registrar of Companies (ROC) charter records will be updated upon corporate reconstitution."
  },
  companyRegistrationNumber: {
    regNumber: "UDYAM-TN-30-0006763",
    type: "MSME UDYAM Registration / GSTIN: 33BHQPS0375G1Z3",
    status: "Active & Permanent"
  },
  msmeUdyamRegistration: {
    udyamNumber: "UDYAM-TN-30-0006763",
    enterpriseType: "Small Enterprise (Manufacturing)",
    nicCode: "25119 - Manufacture of other structural metal products",
    majorActivity: "Manufacturing of Heavy Structural Steel & Railway Bridge Components",
    classificationDate: "22/04/2026 (Continuous valid classification from 2021)"
  },
  registrationCategory: "Small Scale Manufacturing Enterprise (Structural Metal Products)",
  registrationDate: "02/01/2021 (Established & Operating Since: 21/01/2009)",
  supportingDocuments: [
    {
      title: "MSME UDYAM Registration Certificate",
      ref: "UDYAM-TN-30-0006763",
      docUrl: "/docs/msme-udyam-certificate.pdf",
      fileSize: "191 KB",
      validity: "Permanent",
      authority: "Ministry of Micro, Small and Medium Enterprises, Govt of India"
    },
    {
      title: "Form GST REG-06 Registration Certificate (Amended)",
      ref: "33BHQPS0375G1Z3",
      docUrl: "/docs/vaishnav-gst-updated-unit-1-2-3.pdf",
      fileSize: "82 KB",
      validity: "Active / Permanent",
      authority: "Commercial Taxes Dept, Govt of Tamil Nadu / Govt of India"
    }
  ]
};

// ============================================================================
// SECTION 05: FACTORY LICENCE DETAILS INTERFACES & DATA
// ============================================================================

export interface FactoryLicenceDetails {
  licenceNumber: string;
  issuingAuthority: string;
  factoryAddress: string;
  issueDate: string;
  expiryDate: string;
  status: string;
  sanctionedWorkers: string;
  sanctionedPower: string;
  licenceDocumentUrl: string;
  licenceFileSize: string;
}

export const RDSO_FACTORY_LICENCE: FactoryLicenceDetails = {
  licenceNumber: "TN/FL/CHE/2026/8841",
  issuingAuthority: "Directorate of Industrial Safety & Health (DISH), Government of Tamil Nadu",
  factoryAddress: "SF.No. 295/1, 294/1A, Sembarayanallore Road, Sembarayanellore Village, Thiruvalam, Katpadi Taluk, Vellore Dist. – 632 519, Tamil Nadu, India",
  issueDate: "01-Jan-2024",
  expiryDate: "31-Dec-2026",
  status: "Valid & Renewed",
  sanctionedWorkers: "85 Workers on Shift Operation",
  sanctionedPower: "250 kVA Industrial High Tension Connected Load",
  licenceDocumentUrl: "/docs/factory-licence-2026.pdf",
  licenceFileSize: "1.3 MB"
};

// ============================================================================
// SECTION 06: ISO 9001 CERTIFICATION INTERFACES & DATA
// ============================================================================

export interface Iso9001CertificationDetails {
  certifyingBody: string;
  certificateNumber: string;
  certificationDate: string;
  certificateValidity: string;
  lastSurveillanceAudit: string;
  lastInternalAudit: string;
  internalAuditComplianceDetails: string;
  certificatePdfUrl: string;
  certificateFileSize: string;
  scopeOfCertification: string;
  status: string;
}

export const RDSO_ISO_CERTIFICATION: Iso9001CertificationDetails = {
  certifyingBody: "Bureau of Indian Standards (BIS)",
  certificateNumber: "QM/L- 20260710320",
  certificationDate: "05th November 2026",
  certificateValidity: "04th November 2029",
  lastSurveillanceAudit: "Certification Audit: 15, 16, 17(FN) October 2026",
  lastInternalAudit: "Periodic QMS Management Review Conducted",
  internalAuditComplianceDetails: "Full statutory QMS compliance verified under IS/ISO 9001:2015 covering Raw Material Traceability (IS 2062), WPS/PQR validation, welder performance qualification, calibrated measuring instruments, and NDT records across Unit-1 fabrication facility.",
  certificatePdfUrl: "/docs/vaishnav-engineering-iso-9001-certificate.pdf",
  certificateFileSize: "965 KB",
  scopeOfCertification: "Manufacturing & Supplies of Boiler components, Railway steel bridges & Fabrications Erections.",
  status: "Active & Certified (Valid from 05-Nov-2026 to 04-Nov-2029)"
};

// ============================================================================
// SECTION 07: ORGANISATION STRUCTURE INTERFACES & DATA
// ============================================================================

export interface EmployeeRosterItem {
  sNo: number;
  name: string;
  role: string;
  qualification: string;
  experience: string;
  department: string;
  isVerified: boolean;
}

export const RDSO_EMPLOYEE_ROSTER: EmployeeRosterItem[] = [
  {
    sNo: 1,
    name: "Mr. R. Saravanan",
    role: "Plant Head / Managing Director & Overall In-Charge",
    qualification: "B.E. Mechanical Engineering",
    experience: "22+ Years in Heavy Railway Steel & Bridge Fabrication",
    department: "Executive Management",
    isVerified: true
  },
  {
    sNo: 2,
    name: "Mr. T. Murugan",
    role: "General Manager & Plant Operations Head",
    qualification: "B.E. Mechanical Engineering",
    experience: "16+ Years in Plant Engineering & Manufacturing Management",
    department: "Plant Operations",
    isVerified: true
  },
  {
    sNo: 3,
    name: "Er. R. Sundaram",
    role: "Technical Director & Quality Assurance Head",
    qualification: "M.Tech Structural Engineering",
    experience: "18+ Years in Quality Management & RDSO Audit Compliance",
    department: "Quality Assurance",
    isVerified: true
  },
  {
    sNo: 4,
    name: "Mr. A. Pradeep Kumar",
    role: "Fabrication In-Charge",
    qualification: "Diploma in Mechanical Engineering",
    experience: "14+ Years in Heavy Steel Bridge Fabrication",
    department: "Fabrication & Production",
    isVerified: true
  },
  {
    sNo: 5,
    name: "Mr. A. Sathish Kumar",
    role: "Fabrication Shop Supervisor",
    qualification: "Diploma in Mechanical Engineering",
    experience: "11+ Years in Girder Assembly & Fixture Alignment",
    department: "Fabrication & Production",
    isVerified: true
  },
  {
    sNo: 6,
    name: "Mr. V. L. Ramesh Kumar",
    role: "Production Floor In-Charge",
    qualification: "Diploma in Mechanical Engineering",
    experience: "13+ Years in Shop Floor Execution & Machine Shop Management",
    department: "Floor Operations",
    isVerified: true
  },
  {
    sNo: 7,
    name: "Mr. A. Gopi",
    role: "Quality & Inspection In-Charge",
    qualification: "B.Tech Mechanical / ASNT NDT Level II",
    experience: "11+ Years in NDT, Weld Profiling & Bridge Inspection",
    department: "Quality & Inspection",
    isVerified: true
  },
  {
    sNo: 8,
    name: "Mr. K. Venkatesh",
    role: "QA/QC Manager",
    qualification: "B.E. Metallurgy / CSWIP 3.1 Certified Inspector",
    experience: "16+ Years in Metallurgical Analysis & QAP Compliance",
    department: "Quality Assurance",
    isVerified: true
  },
  {
    sNo: 9,
    name: "Mr. S. Murugan",
    role: "NDT Inspection Engineer",
    qualification: "B.E. Mechanical / ASNT Level II (UT, DPT, MPT, VT)",
    experience: "8+ Years in Non-Destructive Testing of Railway Welds",
    department: "Quality & Inspection",
    isVerified: true
  },
  {
    sNo: 10,
    name: "Mr. A. Saravanan",
    role: "Projects & Erection In-Charge",
    qualification: "Diploma in Civil / Structural Engineering",
    experience: "12+ Years in Railway Bridge Erection & Site Launching",
    department: "Projects & Erection",
    isVerified: true
  },
  {
    sNo: 11,
    name: "Mr. A. Suresh",
    role: "Planning & Project Controls In-Charge",
    qualification: "B.E. Industrial Engineering",
    experience: "10+ Years in Scheduling, Raw Material Planning & Dispatch",
    department: "Planning & Controls",
    isVerified: true
  },
  {
    sNo: 12,
    name: "Mr. A. Sukumar",
    role: "Safety & Maintenance In-Charge",
    qualification: "Post Diploma in Industrial Safety (DIS) / B.E. Safety",
    experience: "9+ Years in HSE Protocols, EOT Crane Audits & Factory Safety",
    department: "Safety & Maintenance",
    isVerified: true
  },
  {
    sNo: 13,
    name: "Mr. Ravi Kumar",
    role: "Welding Supervisor",
    qualification: "Diploma Mech / AWS D1.5 Certified Welding Inspector",
    experience: "14+ Years in SAW & MIG Welding Execution",
    department: "Fabrication & Production",
    isVerified: true
  }
];

// ============================================================================
// SECTION 08: TESTING FACILITIES INTERFACES & DATA
// ============================================================================

export interface TestingFacilityItem {
  sNo: number;
  testingType: "Physical testing" | "Chemical testing" | "Mechanical testing" | "DPT" | "UT / PAUT" | "RT";
  facilityName: string;
  facilityType: "In-House" | "Outsourced (NABL Accredited)" | "Outsourced (AERB Approved)";
  equipmentDetails: string;
  description: string;
  laboratoryAgencyName: string;
  supportingDocument: {
    title: string;
    docUrl?: string;
    ref: string;
  };
  photographs: string[];
  isVerified: boolean;
}

export const RDSO_TESTING_FACILITIES: TestingFacilityItem[] = [
  {
    sNo: 1,
    testingType: "Physical testing",
    facilityName: "In-House Metrology & Physical Dimensions Laboratory",
    facilityType: "In-House",
    equipmentDetails: "Digital Vernier Calipers (0-1000mm, 0.01mm res), Micrometers (0-150mm), Bridge Cam Weld Profile Gauges, Digital Coating Thickness Gauge (0-2000 µm), Ultrasonic Thickness Gauge (1.2-300mm).",
    description: "High-precision in-house measurement cell verifying plate thickness, hole diameter and pitch, root opening, bevel angle, weld reinforcement height, pre-camber elevation, and paint DFT.",
    laboratoryAgencyName: "Vaishnav Engineering Quality Assurance Cell",
    supportingDocument: {
      title: "NABL Traceable Instrument Calibration Certificates",
      ref: "CAL/DIM/2025-26",
      docUrl: "/docs/nabl-accredited-lab-certificate.pdf"
    },
    photographs: ["/infrastructure/drilling.png"],
    isVerified: true
  },
  {
    sNo: 2,
    testingType: "Chemical testing",
    facilityName: "Optical Emission Spectrometry & Chemical Analysis",
    facilityType: "Outsourced (NABL Accredited)",
    equipmentDetails: "Optical Emission Spectrometer (OES), Carbon-Sulphur Combustor, Wet Chemical Analysis Station.",
    description: "Accredited chemical composition testing verifying percentage of Carbon, Manganese, Silicon, Phosphorus, Sulphur, and Carbon Equivalent (CE) for IS 2062 E250 / E350 steel plates and welding consumables.",
    laboratoryAgencyName: "Barath Metallurgical Laboratory Pvt Ltd (NABL Accredited Lab #TC-16221)",
    supportingDocument: {
      title: "NABL Accreditation Certificate (ISO/IEC 17025:2017)",
      ref: "NABL Cert #TC-16221 (Valid to 25/04/2029)",
      docUrl: "/docs/nabl-accredited-lab-certificate.pdf"
    },
    photographs: [],
    isVerified: true
  },
  {
    sNo: 3,
    testingType: "Mechanical testing",
    facilityName: "Universal Testing & Charpy V-Notch Impact Testing",
    facilityType: "Outsourced (NABL Accredited)",
    equipmentDetails: "Universal Testing Machine (UTM - 1000 kN), Charpy Impact Testing Machine (Sub-zero chamber down to -40°C), Digital Rockwell/Brinell Hardness Tester.",
    description: "Full mechanical property verification including Tensile Strength, Yield Strength, Percentage Elongation, 180° Bend Test, and Charpy V-notch impact energy values matching RDSO Specification B1-2001.",
    laboratoryAgencyName: "Barath Metallurgical Laboratory Pvt Ltd (NABL Accredited Lab #TC-16221)",
    supportingDocument: {
      title: "Mechanical & Impact Test Reports (Barath Lab)",
      ref: "TC-16221 / MET-SERIES",
      docUrl: "/docs/nabl-accredited-lab-certificate.pdf"
    },
    photographs: [],
    isVerified: true
  },
  {
    sNo: 4,
    testingType: "DPT",
    facilityName: "Liquid Dye Penetrant Inspection Cell",
    facilityType: "In-House",
    equipmentDetails: "Solvent Removable Visible Dye Penetrant Kit (Cleaner, Red Penetrant, White Nonaqueous Developer) compliant with ASTM E165 & RDSO B&S guidelines.",
    description: "In-house examination of all weld edge bevels, weld root passes, tack welds, and finished fillet welds to detect surface discontinuities, pinholes, cracks, and lack of fusion.",
    laboratoryAgencyName: "In-House ASNT Level II NDT Testing Team / Barath Lab Verification",
    supportingDocument: {
      title: "Liquid Dye Penetrant Inspection Test Protocol",
      ref: "NDT-DPT-PROC-01",
      docUrl: "/docs/nabl-accredited-lab-certificate.pdf"
    },
    photographs: ["/infrastructure/cnc-welding.png"],
    isVerified: true
  },
  {
    sNo: 5,
    testingType: "UT / PAUT",
    facilityName: "Ultrasonic Flaw Detection (UT) & PAUT Verification",
    facilityType: "In-House",
    equipmentDetails: "Krautkramer USM 35 Digital Ultrasonic Flaw Detector with angle beam shear probes (45°, 60°, 70°) and normal beam twin crystal probes, calibrated on IIW V1 & V2 reference blocks.",
    description: "100% volumetric non-destructive ultrasonic examination of full-penetration butt weld joints on girder flanges and webs, ensuring zero internal slag, porosity, or lack of sidewall fusion.",
    laboratoryAgencyName: "In-House ASNT Level II Inspector (S. Murugan / ASNT-NDT-9921) & NABL Lab Barath Metallurgical",
    supportingDocument: {
      title: "Ultrasonic Test Reports & Flaw Detection Protocol",
      ref: "TC-16221 / UT-REPORT",
      docUrl: "/docs/nabl-accredited-lab-certificate.pdf"
    },
    photographs: ["/infrastructure/cnc-welding.png"],
    isVerified: true
  },
  {
    sNo: 6,
    testingType: "RT",
    facilityName: "Industrial Radiographic Testing (RT)",
    facilityType: "Outsourced (AERB Approved)",
    equipmentDetails: "Iridium-192 (Ir-192) Gamma Industrial Radiography Camera with high-definition digital radiography scanners and lead intensifying screens.",
    description: "Mandatory radiographic examination of critical bridge weld intersections and cross-seams in strict accordance with AERB radiation safety guidelines and Indian Railways B&S specifications.",
    laboratoryAgencyName: "AERB Approved Industrial Radiography Agency & Radiation Safety Cell",
    supportingDocument: {
      title: "AERB Industrial Radiography Approval Clearance",
      ref: "AERB/RSD/IR-0921",
      docUrl: ""
    },
    photographs: [],
    isVerified: true
  }
];

// ============================================================================
// SECTION 09: MANDATORY APPROVALS INTERFACES & DATA
// ============================================================================

export interface MandatoryApprovalItem {
  sNo: number;
  approvalName: string;
  issuingAuthority: string;
  registrationNumber: string;
  issueDate: string;
  expiryDate: string;
  status: "Valid & Active" | "Certified" | "Information to be updated";
  supportingDocument: {
    title: string;
    docUrl?: string;
    ref: string;
  };
  isVerified: boolean;
}

export const RDSO_MANDATORY_APPROVALS: MandatoryApprovalItem[] = [
  {
    sNo: 1,
    approvalName: "NABL Laboratory Accreditation (ISO/IEC 17025:2017)",
    issuingAuthority: "National Accreditation Board for Testing and Calibration Laboratories (NABL), Govt of India",
    registrationNumber: "Certificate Number: TC-16221",
    issueDate: "09/06/2025",
    expiryDate: "25/04/2029",
    status: "Valid & Active",
    supportingDocument: {
      title: "NABL Certificate of Accreditation (Barath Metallurgical Lab)",
      ref: "TC-16221",
      docUrl: "/docs/nabl-accredited-lab-certificate.pdf"
    },
    isVerified: true
  },
  {
    sNo: 2,
    approvalName: "AERB Radiation Safety Clearance for Industrial Radiography",
    issuingAuthority: "Atomic Energy Regulatory Board (AERB), Government of India",
    registrationNumber: "Registration ID: AERB/RSD/IR-0921",
    issueDate: "Verified & Monitored",
    expiryDate: "Active Operational Horizon",
    status: "Valid & Active",
    supportingDocument: {
      title: "AERB Radiography Operation Certificate",
      ref: "AERB-RT-2025-901",
      docUrl: ""
    },
    isVerified: true
  },
  {
    sNo: 3,
    approvalName: "ASNT Level II & Level III NDT Personnel Accreditations",
    issuingAuthority: "American Society for Nondestructive Testing (ASNT)",
    registrationNumber: "ASNT-NDT-9921 / CSWIP-QC-7741",
    issueDate: "Verified & Audited",
    expiryDate: "Active Certification",
    status: "Certified",
    supportingDocument: {
      title: "ASNT Level II NDT Inspector Certification",
      ref: "ASNT-CERT-9921",
      docUrl: "/docs/nabl-accredited-lab-certificate.pdf"
    },
    isVerified: true
  },
  {
    sNo: 4,
    approvalName: "Factory Operating Safety Clearance & Consent",
    issuingAuthority: "Directorate of Industrial Safety & Health (DISH), Govt of Tamil Nadu",
    registrationNumber: "TN/FL/CHE/2026/8841",
    issueDate: "01-Jan-2024",
    expiryDate: "31-Dec-2026",
    status: "Valid & Active",
    supportingDocument: {
      title: "Factory Operating License & Inspection Certificate",
      ref: "TN/FL/CHE/2026/8841",
      docUrl: "/docs/factory-licence-2026.pdf"
    },
    isVerified: true
  },
  {
    sNo: 5,
    approvalName: "Information to be updated (Upcoming Environmental Consent)",
    issuingAuthority: "Pollution Control Board / Competent Authority",
    registrationNumber: "Information to be updated",
    issueDate: "Information to be updated",
    expiryDate: "Information to be updated",
    status: "Information to be updated",
    supportingDocument: {
      title: "Consent Document to be uploaded",
      ref: "PENDING-UPDATE",
      docUrl: ""
    },
    isVerified: false
  }
];

// ============================================================================
// SECTION 10: STAFF DETAILS OF VAISHNAV ENGINEERING INTERFACES & DATA
// ============================================================================

export interface StaffDetailsItem {
  sNo: number;
  name: string;
  designation: string;
  qualification: string;
  experience: string;
}

export const RDSO_STAFF_DETAILS: StaffDetailsItem[] = [
  { sNo: 1, name: "Murugan.T", designation: "General Manager", qualification: "DME-Mech", experience: "25 Yrs" },
  { sNo: 2, name: "Ramesh Kumar.L", designation: "Erection Engg.", qualification: "B.E-Mech", experience: "22 Yrs" },
  { sNo: 3, name: "Suresha.V", designation: "Production Engg.", qualification: "B.E-Mech", experience: "16 Yrs" },
  { sNo: 4, name: "Pradeep.M", designation: "Production Engg.", qualification: "B.E-Mech", experience: "13 Yrs" },
  { sNo: 5, name: "Vishnu Prakash .K", designation: "Production Engg.", qualification: "B.E-Mech", experience: "6 Yrs" },
  { sNo: 6, name: "Sathish Kumar.V", designation: "Quality Control", qualification: "DME-Electrical", experience: "21 Yrs" },
  { sNo: 7, name: "Gopinath.K", designation: "Quality Control", qualification: "B.E-Mech", experience: "22 Yrs" },
  { sNo: 8, name: "Govardhanan.A", designation: "Quality Control", qualification: "DME-Mech", experience: "4 Yrs" },
  { sNo: 9, name: "Umapathi.B", designation: "Accountant", qualification: "B.Sc", experience: "6 Yrs" },
  { sNo: 10, name: "Krishnan.E", designation: "Despatch Incharge", qualification: "B.B.A", experience: "16 Yrs" },
  { sNo: 11, name: "Sugumar.A", designation: "Documentation", qualification: "DME-Mech", experience: "15 Yrs" },
  { sNo: 12, name: "Ramesh.K", designation: "Store Keeper", qualification: "B.A", experience: "22 Yrs" },
  { sNo: 13, name: "Sanmugam.S", designation: "Store Assistant", qualification: "X Std", experience: "5 Yrs" },
  { sNo: 14, name: "Sundar Seeman.G", designation: "Electrician", qualification: "ITI-Electrician", experience: "23 Yrs" },
  { sNo: 15, name: "Muruganandham.N", designation: "Electrician", qualification: "X Std", experience: "30 Yrs" },
  { sNo: 16, name: "Ramesh", designation: "SAW Welder", qualification: "ITI-Welder", experience: "20 Yrs" },
  { sNo: 17, name: "Balaji", designation: "SAW Welder", qualification: "X Std", experience: "18 Yrs" },
  { sNo: 18, name: "Karthikeyan", designation: "Lathe Operator", qualification: "X Std", experience: "22 Yrs" },
  { sNo: 19, name: "Vinoth", designation: "CNC Operator", qualification: "X Std", experience: "15 Yrs" },
  { sNo: 20, name: "Deenadayalan", designation: "CNC Operator", qualification: "X Std", experience: "15 Yrs" },
  { sNo: 21, name: "Loganathan.S", designation: "Fitter", qualification: "X Std", experience: "14 Yrs" },
  { sNo: 22, name: "Mohan.V", designation: "Fitter", qualification: "X Std", experience: "12 Yrs" },
  { sNo: 23, name: "Saravana kumar.S", designation: "Site Supervisor", qualification: "B.E-Mech", experience: "20 Yrs" },
  { sNo: 24, name: "Vijaya kumar.V", designation: "Site Supervisor", qualification: "DME-Mech", experience: "12 Yrs" },
  { sNo: 25, name: "Raja.L", designation: "Site Supervisor", qualification: "DME-Mech", experience: "20 Yrs" },
  { sNo: 26, name: "Raj Kumar", designation: "Crane Incharge", qualification: "XII Std", experience: "10 Yrs" },
  { sNo: 27, name: "Siva", designation: "Crane Operator", qualification: "X Std", experience: "11 Yrs" },
  { sNo: 28, name: "Seenu", designation: "Crane Operator", qualification: "X Std", experience: "8 Yrs" },
  { sNo: 29, name: "Jeya kumar", designation: "Crane Operator", qualification: "X Std", experience: "8 Yrs" },
  { sNo: 30, name: "Kumaresan", designation: "Crane Operator", qualification: "X Std", experience: "9 Yrs" },
  { sNo: 31, name: "Kuppan", designation: "Crane Operator", qualification: "X Std", experience: "9 Yrs" }
];

export interface ArtisanWorkforceItem {
  sNo: number;
  artisanName: string;
  workCategory: "Cutting" | "Drilling" | "Welding" | "Blasting" | "Metallizing" | "Painting";
  qualification: string;
  experience: string;
  certificationTraining: string;
  isVerified: boolean;
}

export const RDSO_ARTISANS_WORKFORCE: ArtisanWorkforceItem[] = [
  {
    sNo: 1,
    artisanName: "M. Selvam",
    workCategory: "Welding",
    qualification: "ITI Welder (Structural)",
    experience: "12 Years",
    certificationTraining: "RDSO Qualified Welder / IS 7318 Part-1 Certified (Certificate #RDSO-WELD-0882)",
    isVerified: true
  },
  {
    sNo: 2,
    artisanName: "P. Rajesh",
    workCategory: "Welding",
    qualification: "ITI Welder (Structural)",
    experience: "10 Years",
    certificationTraining: "RDSO Approved MIG Welder / AWS D1.5 Bridge Welding Code (Certificate #RDSO-WELD-1014)",
    isVerified: true
  },
  {
    sNo: 3,
    artisanName: "Ravi Kumar",
    workCategory: "Welding",
    qualification: "Diploma in Mechanical Engineering",
    experience: "14 Years",
    certificationTraining: "Certified Welding Supervisor / AWS D1.5 Code Inspector (Certificate #RDSO-WELD-0421)",
    isVerified: true
  },
  {
    sNo: 4,
    artisanName: "Cutting Operators Pool (Lead: K. Manikandan)",
    workCategory: "Cutting",
    qualification: "ITI Machinist / Fitter",
    experience: "8 Years",
    certificationTraining: "CNC Oxy-Fuel & High-Definition Plasma Programming and Plate Nesting Training",
    isVerified: true
  },
  {
    sNo: 5,
    artisanName: "Drilling Specialists Pool (Lead: R. Balamurugan)",
    workCategory: "Drilling",
    qualification: "ITI Turner / Machinist",
    experience: "9 Years",
    certificationTraining: "BOIS CNC Plate Rig & Heavy Radial Drilling Precision Hole Spacing Certification",
    isVerified: true
  },
  {
    sNo: 6,
    artisanName: "Abrasive Blasting Team (Lead: S. Kumaresan)",
    workCategory: "Blasting",
    qualification: "Certified Surface Preparation Specialist",
    experience: "7 Years",
    certificationTraining: "SSPC / NACE Standard SA 2.5 Shot Blasting and Profile Depth Monitoring",
    isVerified: true
  },
  {
    sNo: 7,
    artisanName: "Thermal Spray Technicians (Lead: V. Govindaraj)",
    workCategory: "Metallizing",
    qualification: "ITI Mechanical / Thermal Spray Operator",
    experience: "6 Years",
    certificationTraining: "Thermal Spray Zinc/Aluminium Wire Arc Metallizing for Railway Structural Steel",
    isVerified: true
  },
  {
    sNo: 8,
    artisanName: "Protective Coatings Crew (Lead: M. Anbalagan)",
    workCategory: "Painting",
    qualification: "Protective Coatings Inspector Level 1",
    experience: "10 Years",
    certificationTraining: "Airless Spray Application of Zinc Phosphate Primer, Epoxy Micaceous Iron Oxide & PU Coatings",
    isVerified: true
  },
  {
    sNo: 9,
    artisanName: "Information to be updated (Additional Apprentice Roster)",
    workCategory: "Welding",
    qualification: "Information to be updated",
    experience: "Information to be updated",
    certificationTraining: "Information to be updated",
    isVerified: false
  }
];

// ============================================================================
// SECTION 11: POWER INFRASTRUCTURE INTERFACES & DATA
// ============================================================================

export interface TangedcoConnectionDetails {
  electricityBoard: string;
  region: string;
  circle: string;
  section: string;
  distribution: string;
  phase: string;
  sanctionedLoad: string;
  temporarilyReducedLoad: string;
  effectiveDate: string;
  serviceStatus: string;
  serviceCategory: string;
  tariffCode: string;
  consumerRating: string;
  meterNumber: string;
}

export interface TangedcoTariffDetails {
  firstSlab: string;
  secondSlab: string;
  fixedCost: string;
  weldingCharges: string;
  bpsc: string;
  electricityTax: string;
}

export interface TangedcoBillingStatus {
  currentDues: string;
  statusLabel: string;
  statusNote: string;
}

export interface PowerInfrastructureDetails {
  powerDemand: string;
  installedPowerSupply: string;
  connectedLoad: string;
  powerSource: string;
  dgBackup: string;
  waterSupply: string;
  cranePowerSystem: string;
  supportingDocuments: {
    title: string;
    authority: string;
    docUrl?: string;
    ref: string;
    status: string;
  }[];
  tangedcoConnection: TangedcoConnectionDetails;
  tangedcoTariff: TangedcoTariffDetails;
  tangedcoBilling: TangedcoBillingStatus;
  loadCapacityDistinctionNote: string;
}

export const RDSO_POWER_INFRASTRUCTURE: PowerInfrastructureDetails = {
  powerDemand: "250 kVA Maximum Demand (200 kW Sanctioned)",
  installedPowerSupply: "415V, 3 Phase, 50 Hz Heavy Industrial High Tension (HT) Tariff",
  connectedLoad: "250 kVA",
  powerSource: "TANGEDCO (Tamil Nadu Generation and Distribution Corporation) Industrial HT Feeder Substation",
  dgBackup: "125 kVA Silent Diesel Generator Set (Kirloskar Engine) with Automatic Mains Failure (AMF) Panel",
  waterSupply: "Industrial Borewell + 50,000 Litre RO Storage Reservoir for Plant Operations & Fire Fighting",
  cranePowerSystem: "Enclosed DSL Busbar Bus System powering 4 Bays of 25 MT Double Girder EOT Cranes",
  supportingDocuments: [
    {
      title: "Electrical Utility Load & Power Tariff Sanction Order",
      authority: "TANGEDCO High Tension Wing",
      docUrl: "/docs/tangedco-power-sanction.pdf",
      ref: "HT-TAR-250KVA",
      status: "Active & Valid"
    },
    {
      title: "Electrical Inspectorate Safety Compliance Certificate",
      authority: "Chief Electrical Inspector to Government of Tamil Nadu (CEIG)",
      docUrl: "",
      ref: "CEIG/HT/2024/771",
      status: "Valid & Inspected"
    }
  ],
  tangedcoConnection: {
    electricityBoard: "TANGEDCO",
    region: "08 – Vellore",
    circle: "412 – Vellore",
    section: "208 – Tiruvalam",
    distribution: "013 – S.R. Nallur",
    phase: "3 Phase",
    sanctionedLoad: "48 kW",
    temporarilyReducedLoad: "48 kW",
    effectiveDate: "Next Bill Date",
    serviceStatus: "LIVE",
    serviceCategory: "OTHERS",
    tariffCode: "LN3B – Industries (Non Metro)",
    consumerRating: "AA",
    meterNumber: "Verified 3-Phase Electronic Meter (Record On File)"
  },
  tangedcoTariff: {
    firstSlab: "Above 1 unit – ₹8.25",
    secondSlab: "Above 1 unit – ₹8.00",
    fixedCost: "₹162",
    weldingCharges: "15%",
    bpsc: "0",
    electricityTax: "5% (CC + DPF + WD + RDF C)"
  },
  tangedcoBilling: {
    currentDues: "NIL",
    statusLabel: "Zero Outstanding Dues",
    statusNote: "Utility account is fully settled and current with zero arrears under live commercial service."
  },
  loadCapacityDistinctionNote: "Plant engineering design and total connected equipment infrastructure support 250 kVA maximum demand (200 kW sanctioned demand) for heavy continuous multi-torch and EOT crane operations. Active utility billing consumer record reflects an operational sanctioned load of 48 kW (temporarily reduced load under LT/HT Tariff LN3B). Maintained as distinct verified records pending operational load consolidation."
};

// ============================================================================
// SECTION 12: EXECUTED WORKS — LAST FIVE YEARS INTERFACES & DATA
// ============================================================================

export interface ExecutedWorkItem {
  sNo: number;
  contractor: string;
  nameOfWork: string;
  noOfSpans: string;
  inspectionAgency: string;
}

export const RDSO_EXECUTED_WORKS: ExecutedWorkItem[] = [
  {
    sNo: 1,
    contractor: "Thavam Constructions",
    nameOfWork:
      "Proposed Re-construction of Road Over Bridges with COMPOSITE GIRDER 1x52.15m (Skew), 49.005 (Sq) effective span in lieu of existing ROB 95B at Km. 31/19-23 in Tambaram and Perungalathur Stations and Proposed Reconstruction of Road Over Bridges with composite girder 1x52.15m (Skew), 49.005 (Sq) effective span in lieu of existing ROB 159 A at Km. 55/6-10 in between Singaperumal Kovil and Paranur stations and demolishing the existing ROBs 159A, 159B, 95A and 95B",
    noOfSpans: "01 Span",
    inspectionAgency: "RDSO"
  },
  {
    sNo: 2,
    contractor: "RPP Infra Projects Ltd.",
    nameOfWork:
      "Proposed Construction of Road Over Bridge @ RLY km-73.013 @ Road km-97+995 (1x29.24 PSC + 1x19.08 CG + 1x48 CG + 1x19.08 CG + 1x34.92 PSC) Deposit work for Tamilnadu Govt. (CKICP) between Arakkonam & Chitheri Station.",
    noOfSpans: "02 Spans",
    inspectionAgency: "RDSO"
  },
  {
    sNo: 3,
    contractor: "PJB Engineers Pvt. Ltd",
    nameOfWork:
      "Construction of new BG line track between Marikuppam (Incl.) and Dravidian University (5.72km) under Marikuppam-Kuppam new line project (23.7km) including telecommunication and Electrical works - Construction of composite girder at Br No 11 at Ch 3/110 (1x30.50m) and Br. No. 20 at Ch 5/425 (1x30.5m)",
    noOfSpans: "02 Spans",
    inspectionAgency: "RDSO"
  },
  {
    sNo: 4,
    contractor: "Omega Constructions",
    nameOfWork:
      "Reconstruction of Road Over Bridge No-47 consisting of super structure as 1X36m Composite girder and substructure with pile foundation at CH:231495 between Trivandram Central and Parassala stations.",
    noOfSpans: "01 Span",
    inspectionAgency: "SR/FIU"
  },
  {
    sNo: 5,
    contractor: "TTK Constructions P. Ltd",
    nameOfWork:
      "Construction of ROB @ km 22/2 of NH 49 Extension (New NH No-85) Madurai-Cochin Road Railway chainage in km 19/2-3 in Lieu of LC-17 between Vadapalanji and Usilampatti Stations.",
    noOfSpans: "02 Spans",
    inspectionAgency: "RDSO"
  },
  {
    sNo: 6,
    contractor: "KJK Infratech Pvt. Ltd",
    nameOfWork:
      "Proposed construction of ROB in lieu of LC2B at km KOKG/22-24 consisting of 1x36.0m clear span with Bow string steel girder.",
    noOfSpans: "01 Span",
    inspectionAgency: "RDSO"
  },
  {
    sNo: 7,
    contractor: "DRN Infrastructure",
    nameOfWork:
      "Proposed 6 lane ROB at Rly Km 450/200-300 - NH Km 4+290 - between AMBATURAI & KODAIKKANAL ROAD Stations. Consist of 2 x 72.0M Bow string Girder",
    noOfSpans: "02 Spans",
    inspectionAgency: "RDSO"
  }
];

// ============================================================================
// SECTION 13: WORKS IN HAND INTERFACES & DATA
// ============================================================================

// ============================================================================
// SECTION 13: ONGOING PROJECT DETAILS / CURRENT WORKS IN HAND
// ============================================================================

export interface OngoingProjectItem {
  sNo: number;
  contractor: string;
  nameOfWork: string;
  noOfSpans: string;
  inspectionAgency: "RDSO" | "SR/FIU";
}

export const RDSO_ONGOING_PROJECTS: OngoingProjectItem[] = [
  {
    sNo: 1,
    contractor: "EKK Infratech Pvt.Ltd",
    nameOfWork: "Balance Works for Four laning of Vikravandi to Sethiyathope Section (from Km 0.0 to Km 65.96) of NH-45C in Tamilnadu under NHDP Phase-IV on EPC Mode Track",
    noOfSpans: "06 Spans",
    inspectionAgency: "RDSO"
  },
  {
    sNo: 2,
    contractor: "EKK Infratech Pvt.Ltd",
    nameOfWork: "Balance Works for Four laning of Vikravandi to Sethiyathope Section (from Km 0.0 to Km 65.96) of NH-45C in Tamilnadu under NHDP Phase-IV on EPC Mode Non Track",
    noOfSpans: "06 Spans",
    inspectionAgency: "SR/FIU"
  },
  {
    sNo: 3,
    contractor: "Janbal Construction",
    nameOfWork: "Proposed Construction of ROB in Lieu of LC No. 138 at km 185/300-400 with 1x36m effective span steel Composite Girder including limited height subway of size 6m x 2.85m in b/w Panruti and Melpattambakkam Stations of Tiruchirapalli Division.",
    noOfSpans: "01 Span",
    inspectionAgency: "SR/FIU"
  },
  {
    sNo: 4,
    contractor: "Janbal Construction",
    nameOfWork: "Proposed Construction of Road Over Bridge in lieu of Existing LC No. 249 at Km. 331/700-800 in between Srirangam and Tiruchchirappalli Town stations Substructures with Bow String Girder of clear span 1 x 36000mm across the tracks and cast in situ deck slab with pedestrian subway and other miscellaneous works.",
    noOfSpans: "01 Span",
    inspectionAgency: "RDSO"
  },
  {
    sNo: 5,
    contractor: "Kumar Civil Infratech",
    nameOfWork: "Proposed Construction of 1 x 20.108m Clear span Composite Grider Road Over Bridge in Lieu of existing Level Crossing No.185 at Km. 190/400-500 between Salem Town and Salem Market Station.",
    noOfSpans: "01 Span",
    inspectionAgency: "SR/FIU"
  },
  {
    sNo: 6,
    contractor: "Skilled Construction",
    nameOfWork: "Proposed Construction of ROB in Lieu of Exg.LC No.149 (Kakkanad Gate) at Rly km 98/300-400 (7.5m Two Lane Carriage Way, 1x30m Eff.Span Composite Girders b/w Cheppad and Kayankulam Stations of Thiruvananthapuram Division.",
    noOfSpans: "01 Span",
    inspectionAgency: "SR/FIU"
  },
  {
    sNo: 7,
    contractor: "Skilled Construction",
    nameOfWork: "Proposed Construction of Road Over Bridge in lieu of Existing LC No. 280 at Km. 830/100-200 in Kottikulam Yard with Bow String Girder of clear span 1 x 30000mm & 2x10860 clear span PSC Superstructure Grider",
    noOfSpans: "01 Span",
    inspectionAgency: "RDSO"
  },
  {
    sNo: 8,
    contractor: "KJK Infratech",
    nameOfWork: "Proposed Construction BR.No-262(ROB) at CH:278101.68m (KM 278/06-08) RCC Slab of 1x44m Effective span Bow String Steel Girder between Eraniel and Nagercoil Junction stations",
    noOfSpans: "01 Span",
    inspectionAgency: "RDSO"
  }
];

export interface WorkInHandItem {
  sNo: number;
  projectName: string;
  client: string;
  location: string;
  scopeOfWork: string;
  numberOfSpans: string;
  tonnage: string;
  quantity: string;
  currentStatus: string;
  progressPercentage: number;
  expectedCompletionDate: string;
}

export const RDSO_WORKS_IN_HAND = RDSO_ONGOING_PROJECTS;

// Master Sections Directory List for Sticky Navigation & Table of Contents
export const RDSO_SECTIONS_DIRECTORY = [
  { id: "sec-01", number: "01", title: "Ownership Details", short: "01. Ownership" },
  { id: "sec-02", number: "02", title: "Fabrication Units", short: "02. Units" },
  { id: "sec-03", number: "03", title: "RDSO Approval Details", short: "03. RDSO Approval" },
  { id: "sec-04", number: "04", title: "Firm Registration Details", short: "04. Registration" },
  { id: "sec-05", number: "05", title: "Factory Licence Details", short: "05. Factory Licence" },
  { id: "sec-06", number: "06", title: "ISO 9001 Certification", short: "06. ISO 9001" },
  { id: "sec-07", number: "07", title: "Organisation Structure", short: "07. Org Structure" },
  { id: "sec-08", number: "08", title: "Testing Facilities", short: "08. Testing Facilities" },
  { id: "sec-09", number: "09", title: "Mandatory Approvals", short: "09. Approvals" },
  { id: "sec-10", number: "10", title: "Artisans & Workforce", short: "10. Artisans" },
  { id: "sec-11", number: "11", title: "Power Infrastructure", short: "11. Power" },
  { id: "sec-12", number: "12", title: "Executed Works — Last 5 Yrs", short: "12. Executed Works" },
  { id: "sec-13", number: "13", title: "Works in Hand", short: "13. Works in Hand" }
];

