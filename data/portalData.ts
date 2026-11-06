export interface AuditDoc {
  id: string;
  title: string;
  category: "Company" | "Approvals" | "Quality" | "Infrastructure" | "Projects" | "Safety";
  version: string;
  validity: string;
  status: "Active" | "Valid" | "Approved" | "Certified";
  issuingAuthority: string;
  fileSize: string;
  fileUrl: string;
  description: string;
}

export interface Machine {
  id: string;
  name: string;
  quantity: string;
  capacity: string;
  model: string;
  make: string;
  category: string;
  photoUrl: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  year: string;
  tonnage: string;
  spanDetails: string;
  status: "Completed" | "In Progress";
  progress?: number;
  expectedCompletion?: string;
  location: string;
  image: string;
  description: string;
}

export const COMPANY_DETAILS = {
  name: "Vaishnav Engineering",
  legalType: "Registered MSME Supplier",
  cin: "VLR12427",
  udyam: "UDYAM-TN-02-0012345",
  gstin: "33BHQPS0375G1Z3",
  pan: "BHQPS0375G",
  factoryLicence: "TN/FL/CHE/2026/8841",
  factoryLicenceValidity: "31-Dec-2026",
  establishedYear: "2009",
  registeredAddress: "Unit 1- SF.No. 295/1, S.N Pudur, Village, Thiruvalam, Vellore Dist. – 632 519, Tamil Nadu, India",
  phone: "+91 97894 95144",
  email: "vaishnav.engg2009@gmail.com",
  directors: [
    {
      name: "Mr. R. Saravanan",
      qualification: "B.E. Mechanical Engineering",
      role: "Managing Director",
      experience: "22+ Years in Heavy Railway Steel Fabrication",
      image: "/owner-portrait.jpeg"
    },
    {
      name: "Er. R. Sundaram",
      qualification: "M.Tech Structural Engineering",
      role: "Technical Director & Quality Head",
      experience: "18+ Years Quality & RDSO Audit Compliance",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
    }
  ]
};

export const RDSO_APPROVAL_INFO = {
  status: "Approved Government Railway Vendor",
  registrationId: "CBS/G/Reg/Vaishnav",
  itemNo: "Part A (Open Web, Composite & Plate Girders)",
  approvedProduct: "Fabrication of Open Web, Composite Girder and Other Steel Plate Girder Part A",
  annualCapacity: "5,500 MT / Annum",
  lastAuditDate: "11-Oct-2023",
  nextAuditDate: "30-Nov-2028",
  certifyingOfficer: "Director General/B&S (Director/B&S-II), RDSO Lucknow",
  auditHistory: [
    { year: "2023", type: "Continuation in Approved List (Valid up to 30.11.2028)", result: "Approved Part-A Vendor", inspector: "RDSO B&S Wing Lucknow" },
    { year: "2020", type: "Capacity & Capability Assessment", result: "Approved for Railway Girders", inspector: "RDSO Joint Inspection Team" },
    { year: "2017", type: "Initial RDSO Vendor Registration", result: "Approved Category-A Supplier", inspector: "RDSO Testing Cell" }
  ]
};

export const ISO_INFO = {
  standard: "IS/ISO 9001:2015",
  status: "Active & Certified",
  certifyingBody: "Bureau of Indian Standards (BIS)",
  certificateNo: "QM/L- 20260710320",
  issueDate: "05-Nov-2026",
  expiryDate: "04-Nov-2029",
  lastSurveillanceAudit: "Certification Audit: 15–17 October 2026",
  scope: "Manufacturing & Supplies of Boiler components, Railway steel bridges & Fabrications Erections."
};

export const THIRD_PARTY_APPROVALS = [
  {
    agency: "NABL (National Accreditation Board for Testing)",
    partner: "Barath Metallurgical Laboratory Pvt Ltd (NABL #TC-16221)",
    scope: "ISO/IEC 17025:2017 Chemical, Mechanical, Metallurgical & Non-Destructive Testing",
    status: "Accredited (Valid up to 25/04/2029)"
  },
  {
    agency: "AERB (Atomic Energy Regulatory Board)",
    partner: "Radiation Safety Clearance for Industrial Radiography",
    scope: "Radiographic Testing (RT) of Critical Welds for Railway Bridges",
    status: "Valid & Compliant"
  },
  {
    agency: "ASNT (American Society for Nondestructive Testing)",
    partner: "In-House NDT Level II & Level III Personnel",
    scope: "UT, PT, MPT & Visual Weld Inspection Verification",
    status: "Certified & Audited"
  }
];

export const POWER_UTILITIES = {
  connectedLoad: "250 kVA",
  installedSupply: "415V, 3 Phase, 50 Hz Heavy Industrial Tariff",
  dgBackup: "125 kVA Silent Diesel Generator Set (Kirloskar Engine)",
  electricityBoard: "TANGEDCO (Tamil Nadu Generation and Distribution Corporation)",
  waterSupply: "Industrial Borewell + 50,000 L RO Storage Tank",
  craneCapacity: "25 MT Double Girder EOT Cranes (4 Bays)"
};

export const FACTORY_LAYOUT_SHOPS = [
  { area: "Raw Material Yard", description: "Storage for IS 2062 E250 / E350 steel plates and structural sections with full batch heat number traceability." },
  { area: "Cutting Shop", description: "CNC Oxy-Fuel & High-Definition Plasma Cutting Machines for high precision plate profiling up to 100mm." },
  { area: "Drilling & Machining Shop", description: "Radial Drilling Machines & CNC Plate Drilling Rigs for precision hole spacing." },
  { area: "Welding Shop", description: "Submerged Arc Welding (SAW) & MIG / GMAW Automatic Welding stations with fume extraction." },
  { area: "Straightening Press Bay", description: "500-Ton Hydraulic Flange & Web Straightening Press for camber and distortion correction." },
  { area: "Assembly & Trial Erection Shop", description: "Full-scale girder trial assembly floor with laser alignment tools." },
  { area: "Blasting & Airless Painting Shop", description: "SA 2.5 Shot Blasting enclosure and Airless Paint Spraying Booth with humidity control." },
  { area: "Finished Goods Stacking Yard", description: "Heavy-duty concrete floor yard with 25 MT EOT crane access for dispatch." }
];

export const MACHINERY_LIST: Machine[] = [
  {
    id: "m1",
    name: "CNC Heavy Plate Cutting Machine",
    quantity: "2 Units",
    capacity: "Plate Thickness up to 100mm (Bed Size 3m x 12m)",
    model: "Koike Flexigraph-Standard CNC",
    make: "Koike / India",
    category: "Cutting",
    photoUrl: "/infrastructure/cnc-cutting.png",
    description: "Multi-torch CNC Oxy-fuel and Plasma cutting machine equipped with automated nesting software."
  },
  {
    id: "m2",
    name: "BOIS CNC Plate & Radial Drilling Rig",
    quantity: "3 Units",
    capacity: "Drilling Diameter up to 80mm",
    model: "BOIS CNC Drilling / HMT RM-65",
    make: "BOIS / India",
    category: "Drilling",
    photoUrl: "/infrastructure/drilling.png",
    description: "Precision CNC plate drilling and heavy radial drilling rigs for plate splice joints and girder web connection holes."
  },
  {
    id: "m3",
    name: "Submerged Arc Welding (SAW) Tractor Rigs",
    quantity: "4 Units",
    capacity: "1000A Heavy Duty SAW Welding",
    model: "Heavy Beam SAW Tractor Welder",
    make: "Lincoln / India",
    category: "Welding",
    photoUrl: "/infrastructure/cnc-welding.png",
    description: "Automatic submerged arc welding heads for longitudinal girder flange-to-web continuous fillet and butt welds."
  },
  {
    id: "m4",
    name: "MIG / GMAW Welding Power Sources",
    quantity: "12 Units",
    capacity: "600A Inverter MIG/MAG Welders",
    model: "Fronius / Kemppi TransMig 600",
    make: "Austria / India",
    category: "Welding",
    photoUrl: "/infrastructure/cnc-welding.png",
    description: "Synergic pulse MIG welders for stiffener attachment and structural joints with AWS D1.5 compliance."
  },
  {
    id: "m5",
    name: "Hydraulic Flange & Web Straightening Press",
    quantity: "1 Unit",
    capacity: "500 Ton Beam Straightening",
    model: "HSE-500 Heavy Hydraulic",
    make: "India",
    category: "Straightening",
    photoUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
    description: "Motorized hydraulic press for removing heat distortion and imparting pre-camber to railway bridge girders."
  },
  {
    id: "m6",
    name: "Automated Shot / Sand Blasting Yard",
    quantity: "1 Unit",
    capacity: "SA 2.5 Surface Preparation (Heavy Girders)",
    model: "Heavy Girder Shot Blast Chamber",
    make: "India",
    category: "Surface Prep",
    photoUrl: "/infrastructure/sand-blasting.png",
    description: "High-capacity abrasive shot blasting facility ensuring SA 2.5 surface roughness before paint application."
  },
  {
    id: "m7",
    name: "High Pressure Airless Paint Spraying Units",
    quantity: "2 Units",
    capacity: "450 Bar Airless Pressure",
    model: "Airless Heavy Duty Spray System",
    make: "Graco / India",
    category: "Painting",
    photoUrl: "/infrastructure/painting.png",
    description: "Airless paint pump units for applying epoxy zinc phosphate primer and polyurethane finish coats on railway bridge girders."
  },
  {
    id: "m8",
    name: "Double Girder Overhead EOT Cranes",
    quantity: "4 Bays",
    capacity: "25 Ton Lifting Capacity",
    model: "Demag / Eddy EOT Crane Rigs",
    make: "Germany / India",
    category: "Material Handling",
    photoUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
    description: "Radio remote controlled dual hoist EOT cranes spanning full 24-meter workshop bays."
  }
];

export const TESTING_FACILITIES = {
  inHouse: [
    { tool: "Digital Vernier Calipers & Height Gauges", range: "0 - 1000 mm", precision: "0.01 mm", status: "Calibrated (NABL Lab certified)" },
    { tool: "External Micrometers & Plate Gauges", range: "0 - 150 mm", precision: "0.001 mm", status: "Calibrated" },
    { tool: "Digital Ultrasonic Thickness Gauge", range: "1.2 - 300 mm", precision: "0.01 mm", status: "Calibrated" },
    { tool: "Elcometer Digital Paint Thickness Gauge", range: "0 - 2000 µm", precision: "1 µm", status: "Calibrated" },
    { tool: "Visual Welding Inspection Gauges (Bridge Cam Gauge)", range: "Fillet & Butt Weld Profiling", precision: "0.5 mm", status: "In Use by QA" },
    { tool: "NDT Ultrasonic Flaw Detector (Krautkramer USM 35)", range: "0 - 5000 mm Steel Depth", precision: "High Sensitivity", status: "ASNT Level II Operated" }
  ],
  thirdParty: [
    { testName: "Ultrasonic Testing (UT) of Butt Welds", testingAgency: "Barath Metallurgical Lab (NABL #TC-16221)", certificateRef: "TC-16221 / UT", status: "Valid Report Available" },
    { testName: "Liquid Dye Penetrant Testing (DPT)", testingAgency: "Barath Metallurgical Lab (NABL #TC-16221)", certificateRef: "TC-16221 / DPT", status: "Valid Report Available" },
    { testName: "Radiographic Inspection (RT)", testingAgency: "AERB Approved Industrial Testing Agency", certificateRef: "AERB-RT-2025-901", status: "Valid Report Available" },
    { testName: "Magnetic Particle Testing (MPT)", testingAgency: "Barath Metallurgical Lab (NABL #TC-16221)", certificateRef: "TC-16221 / MPT", status: "Valid Report Available" },
    { testName: "Tensile, Bend & Charpy Impact Testing", testingAgency: "Barath Metallurgical Lab (NABL #TC-16221)", certificateRef: "TC-16221 / MET", status: "Valid Report Available" }
  ]
};

export const WORKFORCE_STATS = {
  totalEmployees: 65,
  artisans: 25,
  welders: 18,
  asntInspectors: 12,
  engineers: 10,
  weldersDetail: [
    { name: "Ravi Kumar", role: "Welding Supervisor", qualification: "Diploma Mech (AWS D1.5)", experience: "14 Years", certNo: "RDSO-WELD-0421" },
    { name: "M. Selvam", role: "Sr. SAW Welder", qualification: "ITI Welder / IS 7318 Cert", experience: "12 Years", certNo: "RDSO-WELD-0882" },
    { name: "P. Rajesh", role: "Sr. MIG Welder", qualification: "ITI Welder / RDSO Qualified", experience: "10 Years", certNo: "RDSO-WELD-1014" },
    { name: "S. Murugan", role: "NDT Inspection Engineer", qualification: "B.E. Mechanical / ASNT Level II", experience: "8 Years", certNo: "ASNT-NDT-9921" },
    { name: "K. Venkatesh", role: "QA/QC Manager", qualification: "B.E. Metallurgy / CSWIP 3.1", experience: "16 Years", certNo: "CSWIP-QC-7741" }
  ]
};

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "p1",
    title: "Chennai Division Railway Open Web Steel Bridge Girder",
    client: "Southern Railway / RVNL",
    year: "2025",
    tonnage: "1,450 MT",
    spanDetails: "3 Spans x 45.7m Bowstring Open Web Girders",
    status: "Completed",
    location: "Chennai Division, Tamil Nadu",
    image: "/projects/bridge-1.png",
    description: "Fabrication, trial assembly, shot blasting and site delivery of heavy railway steel bridge spans under strict RDSO B&S inspection."
  },
  {
    id: "p2",
    title: "Railway Over Bridge (ROB) Steel Plate Girder Package",
    client: "State Highway & Southern Railway Joint Project",
    year: "2024",
    tonnage: "980 MT",
    spanDetails: "4 Spans x 36m Composite Steel Plate Girders",
    status: "Completed",
    location: "Coimbatore, Tamil Nadu",
    image: "/projects/bridge-2.png",
    description: "Heavy plate girder fabrication with high strength friction grip (HSFG) bolting connection splices."
  }
];

export const EXECUTED_WORKS_LOG = [
  { year: "2025", client: "Southern Railway", spans: "18 Spans", tonnage: "2,450 MT", status: "Completed & Handed Over" },
  { year: "2024", client: "State Highways & Southern Railway", spans: "12 Composite Girder Spans", tonnage: "1,920 MT", status: "Completed & Handed Over" },
  { year: "2023", client: "South Central Railway", spans: "14 Structural Portals", tonnage: "1,650 MT", status: "Completed & Handed Over" },
  { year: "2022", client: "Southern Railway B&S Wing", spans: "8 Spans x 30.5m", tonnage: "1,200 MT", status: "Completed & Handed Over" },
  { year: "2021", client: "Railway Infra Contractors", spans: "6 Composite Girders", tonnage: "890 MT", status: "Completed & Handed Over" }
];

export const WORKS_IN_HAND = [
  {
    title: "61.0m Bowstring Steel Railway Bridge Girder Package A",
    client: "Southern Railway Construction Wing",
    progress: 70,
    expectedCompletion: "Dec 2026",
    tonnage: "1,850 MT",
    status: "Fabrication 70% Complete • Trial Assembly Ready"
  },
  {
    title: "Heavy Railway Electrification Steel Portal Frames",
    client: "Railway Electrification Division",
    progress: 35,
    expectedCompletion: "Jan 2027",
    tonnage: "620 MT",
    status: "CNC Plate Cutting & Component Assembly"
  },
  {
    title: "Composite Steel Plate Girder ROB (4 Spans x 30.5m)",
    client: "State Railway Development Cell",
    progress: 55,
    expectedCompletion: "Nov 2026",
    tonnage: "1,100 MT",
    status: "Submerged Arc Welding & NDT Verification"
  }
];

export const PORTAL_DOCUMENTS: AuditDoc[] = [
  {
    id: "doc-1",
    title: "RDSO Approval Certificate & Vendor Directory Listing",
    category: "Approvals",
    version: "CBS/G/Reg/Vaishnav",
    validity: "30-Nov-2028",
    status: "Approved",
    issuingAuthority: "RDSO B&S Wing, Ministry of Railways, Lucknow",
    fileSize: "365 KB",
    fileUrl: "/docs/rdso-vendor-directory-certificate.pdf",
    description: "Official RDSO Continuation in Approved List for Fabrication of Open Web, Composite Girder & Steel Plate Girder Part A (Valid up to 30.11.2028)."
  },
  {
    id: "doc-2",
    title: "IS/ISO 9001:2015 Quality Management System Certificate",
    category: "Approvals",
    version: "QM/L- 20260710320",
    validity: "04-Nov-2029",
    status: "Active",
    issuingAuthority: "Bureau of Indian Standards (BIS)",
    fileSize: "965 KB",
    fileUrl: "/docs/vaishnav-engineering-iso-9001-certificate.pdf",
    description: "Certified IS/ISO 9001:2015 QMS Licence (QM/L- 20260710320) issued by Bureau of Indian Standards covering Manufacturing & Supplies of Boiler components, Railway steel bridges & Fabrications Erections across Unit-1, Unit-2, and Unit-3."
  },
  {
    id: "doc-3",
    title: "Factory Licence & Inspection Compliance Certificate",
    category: "Company",
    version: "TN/FL/CHE/2026/8841",
    validity: "31-Dec-2026",
    status: "Valid",
    issuingAuthority: "Directorate of Industrial Safety & Health, Govt of TN",
    fileSize: "1.3 MB",
    fileUrl: "/docs/factory-licence-2026.pdf",
    description: "Valid industrial factory operating license with sanctioned worker strength and power allocation."
  },
  {
    id: "doc-4",
    title: "MSME UDYAM Registration Certificate",
    category: "Company",
    version: "UDYAM-TN-02-0012345",
    validity: "Permanent",
    status: "Valid",
    issuingAuthority: "Ministry of MSME, Govt of India",
    fileSize: "191 KB",
    fileUrl: "/docs/msme-udyam-certificate.pdf",
    description: "Official MSME Medium Scale Manufacturing Enterprise registration document."
  },
  {
    id: "doc-5",
    title: "GST Registration Certificate (Form REG-06)",
    category: "Company",
    version: "33BHQPS0375G1Z3",
    validity: "Active / Permanent",
    status: "Valid",
    issuingAuthority: "Commercial Taxes Dept, Govt of Tamil Nadu",
    fileSize: "82 KB",
    fileUrl: "/docs/vaishnav-gst-updated-unit-1-2-3.pdf",
    description: "Official Form GST REG-06 Registration Certificate (Amended) covering Principal Place & Units 1 & 2."
  },
  {
    id: "doc-6",
    title: "NABL Accredited Laboratory Testing Certificate (ISO/IEC 17025)",
    category: "Quality",
    version: "TC-16221",
    validity: "25-Apr-2029",
    status: "Certified",
    issuingAuthority: "Barath Metallurgical Laboratory / NABL",
    fileSize: "244 KB",
    fileUrl: "/docs/nabl-accredited-lab-certificate.pdf",
    description: "Official NABL Certificate of Accreditation in accordance with ISO/IEC 17025:2017 for Barath Metallurgical Laboratory Private Limited."
  },
  {
    id: "doc-8",
    title: "Electrical Utility Load & Power Tariff Sanction Order",
    category: "Infrastructure",
    version: "HT-TAR-250KVA",
    validity: "Active",
    status: "Valid",
    issuingAuthority: "TANGEDCO High Tension Wing",
    fileSize: "1.1 MB",
    fileUrl: "/infrastructure/tangedco-electricity-consumer-details.jpg",
    description: "Official TANGEDCO 3-Phase Industrial Electricity Consumer Statement, Sanctioned Load Allocation & Live Tariff LN3B Record."
  },
  {
    id: "doc-9",
    title: "Official Ongoing Project Details & Works in Hand Register",
    category: "Projects",
    version: "VE-PROJECTS-2026",
    validity: "Active / Verified",
    status: "Valid",
    issuingAuthority: "Vaishnav Engineering Projects Division",
    fileSize: "785 KB",
    fileUrl: "/docs/vaishnav-engineering-ongoing-project-details.pdf",
    description: "Official project details and works in hand document specifying active railway bridge fabrication, Road Over Bridge (ROB), and infrastructure projects."
  },
  {
    id: "doc-10",
    title: "Official Staff Details & Technical Workforce Roll",
    category: "Company",
    version: "VE-STAFF-2026",
    validity: "Active / Verified",
    status: "Valid",
    issuingAuthority: "Vaishnav Engineering Administration",
    fileSize: "780 KB",
    fileUrl: "/docs/vaishnav-engineering-staff-details.pdf",
    description: "Official technical muster roll and staff details document specifying verified personnel across engineering, quality control, operations, and skilled plant operatives."
  }
];

export const RDSO_CHECKLIST_MAPPING = [
  { itemNo: "1", requirement: "Ownership Details & Directors", tabName: "Company → Ownership", href: "/company#ownership", status: "Verified ✅" },
  { itemNo: "2", requirement: "RDSO Vendor Certificate", tabName: "Approvals → RDSO", href: "/approvals/rdso#rdso", status: "Verified ✅" },
  { itemNo: "3", requirement: "ISO 9001 Quality System", tabName: "Approvals → ISO", href: "/approvals/rdso#iso", status: "Verified ✅" },
  { itemNo: "4", requirement: "Firm Registration (MSME / GST / PAN)", tabName: "Company → Registration", href: "/company/registration", status: "Verified ✅" },
  { itemNo: "5", requirement: "Factory Operating Licence & Validity", tabName: "Company → Registration", href: "/company/registration", status: "Verified ✅" },
  { itemNo: "6", requirement: "In-House & NABL Testing Facilities", tabName: "Approvals → Third Party", href: "/approvals/rdso#third-party", status: "Verified ✅" },
  { itemNo: "7", requirement: "Organisation Chart & Key Technical Staff", tabName: "Workforce → Organisation", href: "/workforce", status: "Verified ✅" },
  { itemNo: "8", requirement: "NABL / AERB / ASNT NDT Clearances", tabName: "Approvals → Third Party", href: "/approvals/rdso#third-party", status: "Verified ✅" },
  { itemNo: "9", requirement: "Works in Hand & Progress Track", tabName: "Projects → Current Works", href: "/projects#current", status: "Verified ✅" },
  { itemNo: "10", requirement: "Power Supply & Connected Load (250 kVA)", tabName: "Infrastructure → Utilities", href: "/infrastructure#utilities", status: "Verified ✅" },
  { itemNo: "11", requirement: "Top 10 Railway Projects & 5-Year Log", tabName: "Projects → Portfolio", href: "/projects", status: "Verified ✅" }
];
