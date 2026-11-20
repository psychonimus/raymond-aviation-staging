export const inventoryData = [
  {
    id: "AW109-T",
    category: "Helicopter",
    name: "LEONARDO AW109 T",
    price: "On Request",
    year: 2026,
    image: "/assets/images/inventory/aw109-t/aw109-t.webp",
    images: [
      "/assets/images/inventory/aw109-t/aw109-t.webp",
      "/assets/images/inventory/aw109-t/aw109-t-2.webp",
      "/assets/images/inventory/aw109-t/aw109-t-3.webp",
      "/assets/images/inventory/aw109-t/aw109-t-4.webp",
      "/assets/images/inventory/aw109-t/aw109-t-5.webp"
    ],
    details: {
      manufacturer: "Leonardo",
      model: "AW109 T",
      year: 2026,
      hours: "0 Total Time",
      airframeTotalTime: "0 Hours",
      configuration: "NEW AIRCRAFT 2026",
      location: "Leonardo HQ",
      // capacity: "6 Passengers (3 Fwd + 3 Aft Bench)",
      // speed: "154 kts (Max Cruise)",
      // range: "503 nm",
      // engine: "Twin Turbine",
      // features: [
      //   "Brand new 2026 delivery with 0 airframe total hours directly from Leonardo HQ",
      //   "0T-K-004-5CM Dual Pilot IFR Package (2nd VHF/AM, 2nd VOR/ILS, 2nd GPS, DME, Marker Beacon)",
      //   "4-axis Digital AFCS integrating Flight Director functionalities",
      //   "Crash-resistant seating for 6 passengers covered with premium leatherette",
      //   "David Clark H10-13H headsets for all 6 passengers, pilot, and co-pilot",
      //   "0T-K-172-5CM Emergency Locator Transmitter (ELT) & Radar Altimeter",
      //   "Aluminium alloy honeycomb reinforced floor with antiskid finishing",
      //   "No exterior painting — ready for bespoke buyer livery"
      // ]
    },
    specSections: [
      // {
      //   title: "Airframe & Identity",
      //   type: "key-value",
      //   items: [
      //     { label: "Manufacturer", value: "Leonardo" },
      //     { label: "Model", value: "AW109 T" },
      //     { label: "Year", value: "2026" },
      //     { label: "Airframe Total Time", value: "0 Hours" },
      //     { label: "Configuration", value: "NEW AIRCRAFT 2026" },
      //     { label: "Location", value: "Leonardo HQ" }
      //   ]
      // },
      {
        title: "Configuration & Cabin",
        type: "list",
        items: [
          "All seats crash-resistant covered with leatherette",
          "Three (3) fwd-facing seats (aft bench)",
          "Three (3) aft-facing seats (central bench)",
          "4-point shoulder harness with inertial reels and safety belts for all seats",
          "Soft Liners",
          "Intercommunication system for passengers",
          "Two (2) cabin loudspeakers",
          "Reading Lights advisory lights",
          "Upper and lower air vents",
          "Six (6) headsets H10-13H David Clark (6)",
          "Standard cockpit interior",
          "H10-13H David Clark headsets (pilot and co-pilot)",
          "Crash-resistant pilot seat, fore and aft adjustable, with lap belts and headrest",
          "Shoulder harness with inertial reels (pilot)",
          "Crash-resistant co-pilot seat, fore and aft adjustable, with lap belts and headrest",
          "Shoulder harness with inertial reels (co-pilot)",
          "Aluminium alloy honeycomb reinforced floor with antiskid finishing",
          "Ventilation ram air inlets",
          "Anti-reflection instrument panel",
          "Primer finished cabin walls",
          "Portable fire extinguisher"
        ]
      },
      // {
      //   title: "Cockpit Equipment",
      //   type: "list",
      //   items: [
          
      //   ]
      // },
      {
        title: "Avionics",
        type: "avionics",
        
        items: [
          "2nd VHF/AM",
            "2nd VOR/ILS",
            "2nd GPS",
            "DME (Distance Measuring Equipment)",
            "Marker Beacon",
            "Digital Clock",
          "0T-K-172-5CM - Emergency Locator Transmitter (ELT)",
        ]
      },
      {
        title: "Equipment",
        type: "list",
        items: [
          "No exterior painting",
          "Crash-resistant co-pilot seat, fore and adjustable, with lap belts and headrest",
          "Shoulder harness with inertial reels (co-pilot)",
          "4-axis Digital AFCS integrating Flight Director functionalities",
          "Radar Altimeter",
          "Doors key lock",
          "Airframe hourmeter",
          "Baggage compartment lights",
          "Crew open door actuators"
        ]
      }
    ],
    description: "The Leonardo AW109 T is a premier twin-engine light helicopter renowned for its high speed, elegant aerodynamic styling, and exceptional operational versatility. Delivered brand new in 2026 directly from Leonardo HQ with 0 airframe total hours, this aircraft is equipped with a comprehensive Dual Pilot IFR package, 4-axis Digital AFCS integrating Flight Director functionalities, and a crash-resistant 6-passenger cabin."
  },

  {
    id: "airbus-h160",
    category: "Helicopter",
    name: "Airbus H160",
    price: "On Request",
    year: 2025,
    image: "/assets/images/inventory/airbus-h160/airbus-h160.webp",
    images: [
      "/assets/images/inventory/airbus-h160/airbus-h160.webp",
      "/assets/images/inventory/airbus-h160/airbus-h160-2.webp",
      "/assets/images/inventory/airbus-h160/airbus-h160-3.webp",
      "/assets/images/inventory/airbus-h160/airbus-h160-4.webp",
      "/assets/images/inventory/airbus-h160/airbus-h160-5.webp",
      "/assets/images/inventory/airbus-h160/airbus-h160-6.webp"
    ],
    details: {
      manufacturer: "Airbus Helicopters",
      model: "Airbus H160",
      year: 2025,
      hours: "190 Total Time",
      airframeTotalTime: "190 Hours",
      configuration: "Dual zone air conditioning system",
      // capacity: "Up to 12 Passengers / ACH VIP Layout",
      // speed: "155 kts (Max Cruise)",
      // range: "475 nm",
      // engine: "Twin Safran Arrano 1A",
      // features: [
      //   "Full ACH configuration – Stylence «Line» luxury interior",
      //   "Dual zone air conditioning system with dedicated cockpit controls",
      //   "Helionix avionics suite with 4-axis DAFCS (auto hover & recovery modes)",
      //   "Four (4) reconfigurable 6x8 inch smart displays with SVS, HTAWS & Digital Map",
      //   "Dual FMS CMA9000 & Dual GPS CMA5025 with LPV approach & search patterns",
      //   "Telephonics RDR1600 weather and search radar & ADS-B Out / TCAS II",
      //   "Emergency flotation gear fixed parts & dual external life rafts with PLBs",
      //   "CVFDR, ADELT HR Smith 503 with GPS, Full HMS engine sensors, HEEL & IBF"
      // ]
    },
    specSections: [
      // {
      //   title: "Airframe & Identity",
      //   type: "key-value",
      //   items: [
      //     { label: "Manufacturer", value: "Airbus Helicopters" },
      //     { label: "Model", value: "Airbus H160" },
      //     { label: "Year", value: "2025" },
      //     { label: "Airframe Total Time", value: "190 Hours" },
      //     { label: "Configuration", value: "Full ACH Stylence «Line» Interior" },
      //     { label: "Climate Control", value: "Dual zone air conditioning system" }
      //   ]
      // },
      {
        title: "Configuration & Cabin",
        type: "list",
        items: [ 
          "Dual zone air conditioning system",
          "Full ACH configuration – Stylence «Line» interior",
          // "Dual zone air conditioning system",
          "Emergency flotation gear fixed parts",
          "HEEL, IBF, CVFDR, ADELT, Full HMS",
          "4 axis DAFCS with auto hover and recovery modes",
          "HTAWS, SVS, Digital map, FDCR for HFDM, UMS Helionix",
          "Multifunction transponder ADS-B out/TCAS II",
          "Weather/search radar RDR1600"
        ]
      },
      
      {
        title: "Avionics",
        type: "avionics",
        // package: {
        //   name: "Helionix Flight Suite & Dual FMS Installation",
        //   features: [
        //     "FMS CMA9000 x2 and GPS CMA5025 x2",
        //     "LPV approach function, search patterns and auto hover mode",
        //     "Reconfigurable smart 6x8 inch display x4",
        //     "4 axis DAFCS with auto hover and recovery modes",
        //     "HTAWS Helionix (Terrain Awareness & Warning)",
        //     "SVS Helionix (Synthetic Vision System)",
        //     "Digital map Helionix",
        //     "FDCR for HFDM Helionix & UMS Helionix"
        //   ]
        // },
        items: [
          "ADELT HR Smith series 503 with GPS connection",
          "Complement for full HMS – additional engine sensors",
          "Reconfigurable smart 6x8 inch display x4",
          "VMD",
          "Stand-by compass",
          "Intergrated electronic standby instrument",
          "Cockit video camera with embedded recorder",
          "CVFDR",
          "FDCR for HFDM Helionix",
          "UMS Helionix",
          "ELT with embedded GPS",
          "Radio altimeter AHV1600",
          "FMS installation with LPV approach function, search patterns and auto hover mode (FMS CMA9000 x2 and GPS CMA5025 x2)",
          "Crew DACS",
          "Passenger address NAT 251",
          "VHF/AM Collins VHF 4000 x2",
          "VOR/ILS/MKR Collins NAV4500 x2",
          "Collins DME-4000",
          "Multifunction transponder ADS-B out/TCAS II with AFCS",
          "Weather/search radar Telephonic RDR1600",
          "Digital map Helionix",
          "HTAWS Helionix",
          "SVS Helionix",
          "AHRS x3",
          "3 axis magnetic sensor units x2",
          "ADU x2",
          "4 axis DAFCS with auto hover and recovery modes"
        ]
      },
      {
        title: "Equipment",
        type: "list",
        items: [
          "Full ACH configuration – Stylence «Line» interior",
          "Simple glazed windows",
          "External cabin footsteps",
          "Emergency floats fixed parts",
          "External life raft installation with PLB compart",
          "HEEL",
          "Cabin floor for transport configuration",
          "Enlarged cabin sliding doors",
          "IBF",
          "Tinted cabin windows",
          "HR Smith PLB 500 series for external life raft x2",
          "Dual zone air conditioning system with control in cockpit",
          "Crew high back-rest seats adjustable in height, fwd and aft with 5 points harness",
          "Tail fin video camera"
        ]
      },
      // {
      //   title: "Additional reviewed details",
      //   type: "list",
      //   items: [
      //     "Full ACH configuration – Stylence «Line» interior",
      //     "Dual zone air conditioning system",
      //     "Emergency flotation gear fixed parts",
      //     "HEEL, IBF, CVFDR, ADELT, Full HMS",
      //     "4 axis DAFCS with auto hover and recovery modes",
      //     "HTAWS, SVS, Digital map, FDCR for HFDM, UMS Helionix",
      //     "Multifunction transponder ADS-B out/TCAS II",
      //     "Weather/search radar RDR1600"
      //   ]
      // },
    ],
    description: "The 2025 Airbus H160 represents the next generation of medium twin-engine rotary aviation. Featuring only 190 total airframe hours, this aircraft is appointed with the ultra-luxurious Full ACH Stylence «Line» interior, dual zone climate control, and the industry-leading Helionix avionics suite with 4-axis DAFCS auto-hover, SVS, HTAWS, weather/search radar, and comprehensive offshore-ready safety equipment."
  },

  {
    id: "leonardo-aw169",
    category: "Helicopter",
    name: "LEONARDO AW169",
    price: "On Request",
    year: 2023,
    image: "/assets/images/inventory/aw169/aw-169.webp",
    images: [
      "/assets/images/inventory/aw169/aw-169.webp",
      "/assets/images/inventory/aw169/aw-169-2.webp",
      "/assets/images/inventory/aw169/aw-169-3.webp",
      "/assets/images/inventory/aw169/aw-169-4.webp",
      "/assets/images/inventory/aw169/aw-169-5.webp",
      "/assets/images/inventory/aw169/aw-169-6.webp",
    ],
    details: {
      manufacturer: "Leonardo",
      model: "AW169",
      year: 2023,
      // hours: "50 Total Time",
      airframeTotalTime: "50 Hours",
      configuration: "10 PAX",
      location: "Europe",
      // capacity: "10 Passengers (8 Passenger Seats + 2 Rear Bay Seats)",
      // speed: "145 kts (Cruise)",
      // range: "440 nm",
      // engine: "Pratt & Whitney Canada PW210A1 HP (TBO 4,000 Hrs)",
      // features: [
      //   "Low airframe total time of only 50 hours with 27:08 engine cycles",
      //   "AW169 Enhanced Performance Pack with Increased Gross Weight (4,800 kg MTOW)",
      //   "10 PAX utility transport configuration with rigid liners & soundproofing",
      //   "Rockwell Collins Cockpit Display System (3x 10”x8” AMLCD NVIS screens)",
      //   "4-Axis AFCS with SVS, HTAWS, HUMS & RNP Approach (LPV/LP minima)",
      //   "Medevac single stretcher layout (Aerolite & Cirrus 1000 loose equipment)",
      //   "1,500 kg Cargo Hook & Bear Paws provisions with dual underbelly cameras",
      //   "Maritime and corrosion protection with solid-state CVFDR (90-day ULB)"
      // ]
    },
    specSections: [
      // {
      //   title: "Airframe & Identity",
      //   type: "key-value",
      //   items: [
      //     { label: "Manufacturer", value: "Leonardo" },
      //     { label: "Model", value: "AW169" },
      //     { label: "Year", value: "2023" },
      //     { label: "Airframe Total Time", value: "50 Hours" },
      //     { label: "Configuration", value: "10 PAX Utility Transport" },
      //     { label: "Location", value: "Europe" },
      //     { label: "Max Takeoff Weight", value: "4,800 kg MTOW (Increased Gross Weight)" }
      //   ]
      // },
      // {
      //   title: "Engines & Cycles",
      //   type: "key-value",
      //   items: [
      //     { label: "Make & Model", value: "Pratt & Whitney Canada PW210A1 HP" },
      //     { label: "Engine TBO", value: "4,000 Hours" },
      //     { label: "Engine #1 Cycles", value: "27:08 Hours" },
      //     { label: "Engine #2 Cycles", value: "27:08 Hours" },
      //     { label: "Compressor Washer", value: "Engine Compressor Washer Installed" },
      //     { label: "Particle Separators", value: "Engine Air Particle Separators (Provision & Removable)" }
      //   ]
      // },
      {
        title: "Configuration & Cabin",
        type: "list",
        items: [
          "10 PAX",
          "Utility Rigid Liners",
          "Utility soundproofing",
          "Provision for single stretcher layout",
          "Lightweight Crashworthy Comfortable Passenger Seat (Qty. 8)",
          "Crashworthy seat in the rear cabin bay (Qty.2)",
          "Cockpit compartment utility finishing interior",
          "Cockpit panel sun-glare shields",
          "Pilot/ Co-pilot crashworthy adjustable seats (with inertial reels and separate 5 points safety belts)",
          "28V DC / 10A cockpit/cabin utility power socket",
          "Baggage compartment utility finishing interior rear tail separation",
          "Baggage smoke sensor",
          "Pilot / copilot headsets",
          "Cockpit Door Pockets",
          "Pilot / Co-pilot headset holders",
          "Cockpit Access Handles",
          "Interior Completion Utility Transport",
          "Engines make and model: Pratt & Whitney",
          "Canada PW210A1 HP",
          "TBO - 4.000 Hrs",
          "Engine #1 Cycles- 27:08 Hrs",
          "Engine #2 Cycles- 27:08 Hrs",
        ]
      },
      // {
      //   title: "Cockpit & Crew Equipment",
      //   type: "list",
      //   items: [
      //     "Cockpit compartment utility finishing interior with panel sun-glare shields",
      //     "Pilot/Co-pilot crashworthy adjustable seats with inertial reels & 5-point safety belts",
      //     "Pilot / Co-pilot headsets and headset holders",
      //     "Cockpit door pockets & cockpit access handles",
      //     "Overhead cockpit windows sunshades",
      //     "One cockpit and one cabin fire extinguisher (as per AIR OPS)",
      //     "First aid kit & stowage pocket for portable ELT"
      //   ]
      // },
      {
        title: "Avionics",
        type: "avionics",
        // package: {
        //   name: "Rockwell Collins CDS & Aircraft Monitoring System (AMMS)",
        //   features: [
        //     "Three Rockwell Collins 10” X 8” AMLCD screens (2 PFD, 1 MFD) with NVIS backlight",
        //     "Two Aircraft Monitoring & Management Computers (AMMC) & Data Transfer Device (DTD)",
        //     "Two touch screen control panels & Display Dimming Panel",
        //     "One Integrated Standby Instrument System (ISIS)",
        //     "Two Display Control Panels (DCP) & Two Cursor Control Devices (CCD)",
        //     "One Reversionary Control Panel (RCP) & AFDX Ethernet switches",
        //     "Two Master Caution Lights (MCL) & Two Master Warning Lights (MWL)"
        //   ]
        // },
        items: [
          "Cockpit Display System (CDS)",
          "Three Rockwell Collins Display Units 10” X 8” colour AMLCD with LED backlight and NVIS compatibility: 2 Primary Flight Displays (PFD) and 1 Multi-Function Display (MFD)",
          "One Integrated Standby Instrument System (ISIS)",
          "Two Display Control Panels (DCP)",
          "Two Cursor Control devices (CCD)",
          "One Reversionary Control Panel (RCP)",
          "One Display Dimming Panel",
          "Two Master Caution Lights (MCL)",
          "Two Master Warning Lights (MWL)",
          "Two Avionics Full Duplex Ethernet (AFDX) switches",
          "Aircraft Monitoring and Management System (AMMS)",
          "Two Aircraft Monitoring & Management Computers (AMMC)",
          "One Data Transfer Device (DTD)",
          "Two touch screen control panels",
          "4-Axis Automatic Flight Control System (AFCS)",
          "Flight Control Computer (FCC)",
          "One Flight Control System (FCS) Control Panel",
          "Radio Comm and Navigation System",
          "Two VHF -AM radios",
          "Two NAV (VOR/ILS/MB) receivers",
          "One DME",
          "One Transponder with Enhanced Surveillance Mode (Mode S)",
          "ADS-B Out (Automatic Dependent Surveillance - Broadcast)",
          "Health and Usage Monitoring System (HUMS)",
          "Flight Data Monitoring system (FDM)",
          "Helicopter Terrain Avoidance and Warning System (HTAWS)",
          "Synthetic Vision System (SVS)",
          "RNP Approach with LPV/LP minima",
          "RNP 0.3 navigation in all phase of flight FMS capability"
        ]
      },
      {
        title: "Equipment",
        type: "list",
        items: [
          "Additional Baseline Equipment",
          "Steps for cockpit / cabin access",
          "Rotor brake system",
          "Second radar altimeter",
          "One solid state Cockpit and Voice Flight Data Recorder with provision for image recording and 90 days ULB battery (as per AIR OPS)",
          "One Emergency Locator Transmitter (ELT - 3 frequencies) (fixed)",
          "Overhead cockpit windows sunshades",
          "First aid kit (as per AIR OPS)",
          "One cockpit and one cabin fire extinguisher (as per AIR OPS)",
          "USB Interseat Console Socket",
          "Maritime and Corrosion Protection",
          "AW 169 Enhanced Performance Pack",
          "Ice detector, stowage pocket for portable ELT, first-aid kit",
          "Increased Gross Weight (4800 kg MTOW)",
          "Engine Compressor Washer",
          "Cargo hook 1500 kg - Provision and Removable Underbelly Cameras (Qty 2)",
          "Engine Air Particle Separators – Provision and Removable Bear Paws – Provision and Removable (not installed provided as loose item) ",
          "Medevac Layout on Utility Floor (Single Stretcher Aerolite) (not installed provided as loose item) including",
          "Panel AFT Assy, Rework installed",
          "Stretcher Life Jacket installed",
          "Extinguisher installed",
          "Customized Track installed",
          "Loose Safety Equip (provided as loose item)",
          "Light Stretcher Cirrus 1000 (not installed provided as loose item)",
          "Retainers for Transversal Light Stretcher on utility floor (not installed provided as loose item)",
          "Safety and loose equipment for Medevac Layout (not installed provided as loose item) including",
          "headpad, safety harness, rescue triangle"
        ]
      },
      // {
      //   title: "Engine",
      //   type: "list",
      //   items: [
          
          
      //   ]
      // },
    ],
    description: "The 2023 Leonardo AW169 is a premier light-intermediate twin-engine helicopter with only 50 total airframe hours and 27:08 engine cycles. Equipped with the Enhanced Performance Pack (4,800 kg MTOW), Rockwell Collins Cockpit Display System (CDS), 4-axis digital AFCS with SVS/HTAWS, and a flexible 10 PAX utility transport interior with full Medevac Aerolite single-stretcher provisions, this European-based asset offers extraordinary operational versatility across utility, VIP transport, and aeromedical missions."
  },

  {
    id: "airbus-h160-2023",
    category: "Helicopter",
    name: "Airbus H160",
    price: "On Request",
    year: 2023,
    image: "/assets/images/inventory/airbus-h160/airbus-h160.webp",
    images: [
      "/assets/images/inventory/airbus-h160/airbus-h160.webp",
      "/assets/images/inventory/airbus-h160/airbus-h160-2.webp",
      "/assets/images/inventory/airbus-h160/airbus-h160-3.webp",
      "/assets/images/inventory/airbus-h160/airbus-h160-4.webp",
      "/assets/images/inventory/airbus-h160/airbus-h160-5.webp",
      "/assets/images/inventory/airbus-h160/airbus-h160-6.webp"
    ],
    details: {
      manufacturer: "Airbus Helicopters",
      model: "H160",
      year: 2023,
      hours: "500 Total Time",
      airframeTotalTime: "500 Hours",
      // configuration: "Full ACH configuration – Stylence «Line» interior",
      // capacity: "Up to 12 Passengers / ACH VIP Layout",
      // speed: "155 kts (Max Cruise)",
      // range: "475 nm",
      // engine: "Twin Safran Arrano 1A",
      // features: [
      //   "Full ACH configuration – Stylence «Line» luxury interior",
      //   "Dual zone air conditioning system with dedicated cockpit controls",
      //   "Helionix avionics suite with 4-axis DAFCS (auto hover & recovery modes)",
      //   "Four (4) reconfigurable 6x8 inch smart displays with SVS, HTAWS & Digital Map",
      //   "Dual FMS CMA9000 & Dual GPS CMA5025 with LPV approach & search patterns",
      //   "Telephonics RDR1600 weather and search radar & ADS-B Out / TCAS II",
      //   "Emergency flotation gear with automatic percussion & dual external life rafts with PLBs",
      //   "CVFDR, ADELT HR Smith 503 with GPS, Full HMS engine sensors, HEEL & IBF"
      // ]
    },
    specSections: [
      // {
      //   title: "Airframe & Identity",
      //   type: "key-value",
      //   items: [
      //     { label: "Manufacturer", value: "Airbus Helicopters" },
      //     { label: "Model", value: "H160" },
      //     { label: "Year", value: "2023" },
      //     { label: "Airframe Total Time", value: "500 Hours" },
      //     { label: "Configuration", value: "Full ACH configuration – Stylence «Line» interior" },
      //     { label: "Climate Control", value: "Dual zone air conditioning system with control in cockpit" }
      //   ]
      // },
      {
        title: "Configuration & Cabin",
        type: "list",
        items: [
          "Full ACH configuration – Stylence «Line» interior",
          
        ]
      },
      // {
      //   title: "Cockpit & Crew Equipment",
      //   type: "list",
      //   items: [
      //     "Crew high back-rest seats adjustable in height, fwd and aft with 5 points harness",
      //     "Cockpit video camera with embedded recorder",
      //     "Tail fin video camera",
      //     "Dual zone air conditioning system with control in cockpit",
      //     "Crew DACS (Digital Audio Communication System)",
      //     "Stand-by compass",
      //     "Integrated electronic standby instrument"
      //   ]
      // },
      {
        title: "Avionics",
        type: "avionics",
        // package: {
        //   name: "Helionix Flight Suite & Dual FMS Installation",
        //   features: [
        //     "FMS CMA9000 x2 and GPS CMA5025 x2",
        //     "LPV approach function, search patterns and auto hover mode",
        //     "Reconfigurable smart 6x8 inch display x4",
        //     "4 axis DAFCS with auto hover and recovery modes",
        //     "HTAWS Helionix (Terrain Awareness & Warning)",
        //     "SVS Helionix (Synthetic Vision System)",
        //     "Digital map Helionix",
        //     "FDCR for HFDM Helionix & UMS Helionix"
        //   ]
        // },
        items: [
          "ADELT HR Smith series 503 with GPS connection",
          "Complement for full HMS – additional engine sensors",
          "Reconfigurable smart 6x8 inch display x4",
          "VMD",
          "Stand-by compass",
          "Intergrated electronic standby instrument",
          "Cockit video camera with embedded recorder",
          "CVFDR",
          "FDCR for HFDM Helionix",
          "UMS Helionix",
          "ELT with embedded GPS",
          "Radio altimeter AHV1600",
          "FMS installation with LPV approach function, search patterns and auto hover mode (FMS CMA9000 x2 and GPS CMA5025 x2) ",
          "Crew DACS",
          "Passenger address NAT 251",
          "VHF/AM Collins VHF 4000 x2",
          "VOR/ILS/MKR Collins NAV4500 x2",
          "Collins DME-4000",
          "Multifunction transpoder ADS-B out/TCAS II with AFCS",
          "Weather/search radar Telephonic RDR1600",
          "Digital map Helionix",
          "HTAWS Helionix",
          "SVS Helionix",
          "AHRS x3",
          "3 axis magnetic sensor units x2",
          "ADU x2",
          "4 axis DAFCS with auto hover and recovery modes"
        ]
      },
      {
        title: "Equipment",
        type: "list",
        items: [
          "Full ACH configuration – Stylence «Line» interior",
          "Simple glazed windows",
          "External cabin footsteps",
          "Emergency flotation gear with automatic percussion",
          "External life raft installation with PLB compart",
          "HEEL",
          "Cabin floor for transport configuration",
          "Enlarged cabin sliding doors",
          "IBF",
          "Tinted cabin windows",
          "HR Smith PLB 500 series for external life raft x2",
          "Dual zone air conditioning system with control in cockpit",
          "Crew high back-rest seats adjustable in height, fwd and aft with 5 points harness",
          "Tail fin video camera"
        ]
      }
    ],
    description: "The 2023 Airbus H160 represents the pinnacle of modern medium twin-engine rotary aviation. Featuring 500 total airframe hours, this aircraft is appointed with the ultra-luxurious Full ACH Stylence «Line» interior, dual zone climate control, and the industry-leading Helionix avionics suite with 4-axis DAFCS auto-hover, SVS, HTAWS, weather/search radar, and comprehensive offshore-ready safety equipment including emergency flotation with automatic percussion."
  },

  {
    id: "bell-429-2023",
    category: "Helicopter",
    name: "Bell 429",
    price: "On Request",
    year: 2023,
    image: "/assets/images/inventory/bell/bell-429.webp",
    images: [
      "/assets/images/inventory/bell/bell-429.webp",
      "/assets/images/inventory/bell/bell-429.webp",
      "/assets/images/inventory/bell/bell-429.webp"
    ],
    details: {
      manufacturer: "Bell",
      model: "Bell 429",
      year: 2023,
      // hours: "210 Total Time",
      airframeTotalTime: "210 Hours",
      configuration: "VIP",
      // capacity: "5 - 7 (5 VIP Club Seats + 2 Crew)",
      // speed: "150 kts (Cruise)",
      // range: "411 nm (with Aux Tank)",
      // engine: "Twin Pratt & Whitney Canada PW207D1/D2",
      // features: [
      //   "Low airframe total time of only 210 hours since new (2023 delivery)",
      //   "VIP Corporate 5-place club seating with aft bulkhead closeout panel",
      //   "Garmin GTN-750 & GTN-650 NAV/COM/GPS with 3rd Display Unit",
      //   "4th Axis Autopilot & Radar Altimeter KRA 405B",
      //   "Helicopter Terrain Awareness (HTAWS) & Traffic Avoidance System (TAS)",
      //   "Air condition system with dual evaporator & bleed air heater",
      //   "Auxiliary fuel tank (39 US Gal.) for extended operational range",
      //   "Dual pilot controls, CVFDR, Articulated landing lights & Artex C406-NHM ELT"
      // ]
    },
    specSections: [
      // {
      //   title: "Airframe & Identity",
      //   type: "key-value",
      //   items: [
      //     { label: "Manufacturer", value: "Bell" },
      //     { label: "Model", value: "Bell 429" },
      //     { label: "Year", value: "2023" },
      //     { label: "Airframe Total Time", value: "210 Hours" },
      //     { label: "Configuration", value: "VIP Corporate" },
      //     { label: "Exterior Finish", value: "White Base w/ Red and Black Accent" }
      //   ]
      // },
      {
        title: "Configuration & Cabin",
        type: "list",
        items: [
          "Interior: Corporate 5 Place Club Seats",
          "Exterior: White Base w/ Red and Black Accent"
        ]
      },
      {
        title: "Avionics",
        type: "avionics",
        // package: {
        //   name: "Garmin GTN-750/650 Integrated Suite",
        //   features: [
        //     "Garmin GTN-750 NAV/COM/GPS",
        //     "Garmin GTN-650 NAV/COM/GPS",
        //     "3rd Display Unit & Standby Compass",
        //     "4th Axis Autopilot",
        //     "Transponder GTX 345R"
        //   ]
        // },
        items: [
          "Garmin GTN-750/650 NAV/COM/GPS",
          "+ 200 Amp Starter Generator",
          "+ 3rd Display Unit & Standby",
          "Compass",
          "+ 4th Axis Autopilot",
          "+ Cockpit Voice & Flight Data Recorder",
          "+ ELT Artex C406-NHM",
          "+ Helicopter Terrain Awareness (HTAWS)",
          "+ Increased Capacity Battery (53 Amp)",
          "+ Radar Altimeter KRA 405B",
          "+ Traffic Avoidance System (TAS)",
          "+ Transponder GTX 345R"
        ]
      },
      {
        title: "Equipment",
        type: "list",
        items: [
          "Aft Bulkhead Closeout Panel",
          "+ Air Condition System with Dual Evaporator",
          "+ Articulated Landing Lights",
          "+ Aux Fuel Tank (39 US Gal.)",
          "+ Bleed Air Heater",
          "+ Cabin Sound Proofing",
          "+ Compressor Wash Kit",
          "+ Door Openers – Crew, Passenger",
          "+ Dual Pilot Controls",
          "+ Forward Flashing Light",
          "+ Fuel Filler Area Protector",
          "+ Headliner – Corporate",
          "+ Inlet Barrier Filter",
          "+ LED Strobe and Position Lights",
          "+ Rotor Brake Equipment"
        ]
      }
    ],
    description: "The 2023 Bell 429 is an immaculate light twin-engine helicopter configured with a pristine 5-place VIP corporate club interior. With only 210 airframe total hours since new, this aircraft features top-tier avionics including the Garmin GTN-750/650 suite with a 3rd display unit, 4th-axis autopilot, HTAWS, TAS, and CVFDR. Equipped with dual-evaporator air conditioning, an auxiliary 39-gallon fuel tank for extended range, and articulated landing lights, it delivers peerless executive transport performance."
  },

  {
    id: "leonardo-aw109-2021",
    category: "Helicopter",
    name: "Leonardo AW109",
    price: "On Request",
    year: 2021,
    image: "/assets/images/inventory/aw109/aw-109.webp",
    images: [
      "/assets/images/inventory/aw109/aw-109-2.webp",
      "/assets/images/inventory/aw109/aw-109-2.webp",
      "/assets/images/inventory/aw109/aw-109-3.webp",
      "/assets/images/inventory/aw109/aw-109-4.webp",
      "/assets/images/inventory/aw109/aw-109-5.webp",
      "/assets/images/inventory/aw109/aw-109-6.webp"
    ],
    details: {
      manufacturer: "Leonardo",
      model: "AW109",
      year: 2021,
      // hours: "462 Total Time",
      airframeTotalTime: "462 Hours",
      // cycles: "1,033 Cycles",
      configuration: "6 Seats",
      location: "Switzerland",
      // capacity: "6 Passengers (VIP Configuration)",
      // compliance: "EASA Compliant",
      // speed: "154 kts (Max Cruise)",
      // range: "503 nm",
      // engine: "Twin Pratt & Whitney Canada PW206C / PW207C",
      // features: [
      //   "Low total time of only 462 hours & 1,033 cycles since brand new",
      //   "Single owner since brand new with immaculate provenance",
      //   "Always hangared and operated in Switzerland",
      //   "Fully EASA compliant with comprehensive maintenance records",
      //   "Luxurious 6-passenger VIP executive cabin configuration",
      //   "High-performance twin-engine capability with dual-pilot IFR avionics"
      // ]
    },
    specSections: [
      // {
      //   title: "Airframe & Identity",
      //   type: "key-value",
      //   items: [
      //     { label: "Manufacturer", value: "Leonardo" },
      //     { label: "Model", value: "AW109" },
      //     { label: "Year", value: "2021" },
      //     { label: "Airframe Total Time", value: "462 Hours" },
      //     { label: "Total Cycles", value: "1,033 Cycles" },
      //     { label: "Configuration", value: "6 Seats VIP Cabin" },
      //     { label: "Location", value: "Switzerland" }
      //   ]
      // },
      // {
      //   title: "Aircraft Status & Provenance",
      //   type: "key-value",
      //   items: [
      //     { label: "Ownership", value: "One owner since brand new" },
      //     { label: "Compliance", value: "EASA Compliant" },
      //     { label: "Hangarage", value: "Always Hangared" },
      //     { label: "Operational Base", value: "Based in Switzerland" },
      //     { label: "Cabin Interior", value: "VIP Cabin Configuration" },
      //     { label: "Seating Capacity", value: "6 Pax Configuration" }
      //   ]
      // },
      // {
      //   title: "Configuration & Cabin",
      //   type: "list",
      //   items: [
      //     "6 pax executive VIP cabin configuration",
      //     "One owner since brand new",
      //     "Always hangared in Switzerland",
      //     "EASA compliant operational and maintenance standards",
      //     "Soundproofed passenger compartment with executive upholstery",
      //     "Passenger intercommunication system & cabin air conditioning",
      //     "Reading lights & advisory lights"
      //   ]
      // },
      {
        title: "Additional reviewed details",
        type: "list",
        items: [
          "462 Hours",
          "1’033 Cycles",
          "One owner since brand new",
          "EASA Compliant",
          "Based in Switzerland",
          "Always Hangared",
          "6 pax Configuration",
          "VIP Cabin Configuration"
        ]
      }
    ],
    description: "This 2021 Leonardo AW109 is a pristine, single-owner executive VIP helicopter based in Switzerland. With only 462 total airframe hours and 1,033 cycles since brand new, it has been always hangared and maintained under strict EASA compliance. Featuring a refined 6-passenger VIP cabin configuration, dual-pilot IFR avionics, and legendary AW109 speed and agility, it offers an exceptional turnkey opportunity for private or corporate operations."
  },

  {
    id: "leonardo-aw109-trekker-2018",
    category: "Helicopter",
    name: "Leonardo AW109 Trekker",
    price: "On Request",
    year: 2018,
    image: "/assets/images/inventory/trekker/aw109-trekker.webp",
    images: [
      "/assets/images/inventory/trekker/aw109-trekker.webp",
      "/assets/images/inventory/trekker/aw109-trekker-2.webp",
      "/assets/images/inventory/trekker/aw109-trekker-3.webp",
     
      
    ],
    details: {
      manufacturer: "Leonardo",
      model: "AW109 Trekker",
      year: 2018,
      // hours: "167 Total Time",l
      airframeTotalTime: "167 Hours",
      configuration: "Low hours flown Trekker",
      location: "Turkey",
      // capacity: "6 - 7 Passengers (Customizable Layout)",
      // speed: "148 KTAS (274 km/h)",
      // range: "447 NM (828 km)",
      // engine: "Twin Pratt & Whitney Canada PW207C",
      // features: [
      //   "Low airframe total time of only 167 hours — over 95% remaining potential",
      //   "Reinforced skid-type landing gear for versatile rough-field & utility operations",
      //   "Full Dual Pilot IFR package with dual controls & Flight Director",
      //   "Glass cockpit with SVS (Synthetic Vision), Highway In The Sky (HITS) & HTAWS",
      //   "Factory air conditioning & utility hoist provisions",
      //   "Dual GPS, Dual VHF/AM, Dual VOR/ILS, ADF, DME, Transponder Mode-S & Dual ADAHRS",
      //   "Large 1.40 m dual sliding passenger doors with customizable cabin layout",
      //   "Titanium fully articulated 4-blade rotor with composite blades & swept tips"
      // ]
    },
    specSections: [
      // {
      //   title: "Airframe & Identity",
      //   type: "key-value",
      //   items: [
      //     { label: "Manufacturer", value: "Leonardo" },
      //     { label: "Model", value: "AW109 Trekker" },
      //     { label: "Year", value: "2018" },
      //     { label: "Airframe Total Time", value: "167 Hours (Over 95% remaining potential)" },
      //     { label: "Configuration", value: "Low hours flown Trekker" },
      //     { label: "Location", value: "Turkey" },
      //     { label: "Max Cruise Speed", value: "148 KTAS / 274 km/h (@ 5,000 ft, ISA, MGW, MCP)" },
      //     { label: "Max Range", value: "447 NM / 828 km (@ 5,000 ft, ISA, MGW)" },
      //     { label: "Operating Rules", value: "Single or dual pilot, VFR or IFR" }
      //   ]
      // },
      {
        title: "Configuration & Cabin",
        type: "list",
        items: [
          "Crash-resistant pilot seat, fore and aft adjustable, with lap belts and headrest",
          "Shoulder harness with inertial reels (pilot)",
          "Aluminum alloy honeycomb reinforced floor with anti-skid Finishing",
          "Ventilation ram air inlets",
          "Anti reflection instrument panel",
          "Primer finished cabin walls",
          "Portable fire extinguishe",
          "YOM - 2018",
          "Low hours – Over 95% of remaining potential",
          "Air conditioning",
          "Hoist provisions",
          "Customizable interior configuration",
          "Max cruise speed (@5,000 FT, ISA, MGW, MCP) at 274 KM/H 148 KTAS",
          "Max range (@5,000 FT, ISA, MGW) at 828 KM 447 NM",
          "Single or dual pilot, VFR or IFR"
        ]
      },
      {
        title: "Avionics",
        type: "avionics",
        // package: {
        //   name: "Integrated Glass Cockpit Display System (PFD/MFD)",
        //   features: [
        //     "Multifunction Display (MFD) & large color Primary Flight Displays (PFD)",
        //     "Synthetic Vision System (SVS)",
        //     "Highway In The Sky (HITS)",
        //     "Helicopter Terrain Awareness and Warning System (HTAWS)",
        //     "Flight Management System (FMS) with radio tuning controls",
        //     "Dual Data Acquisition Unit (DAU)",
        //     "Dual Air Data Computer & Attitude Heading Reference System (ADAHRS)"
        //   ]
        // },
        items: [
          "and a Multifunction Display (MFD) and integrating:",
          "Synthetic Vision System (SVS)",
          "Highway In The Sky (HITS)",
          "Helicopter Terrain Awareness and W arning System (HTAW S)",
          "Flight Management System (FMS)",
          "Radio tuning controls",
          "Dual Data Acquisition Unit (DAU)",
          "Dual Air Data Computer and Attitude Heading Reference System (ADAHRS)",
          "VHF/AM",
          "VOR/ILS",
          "GPS",
          "Transponder (Mode-S)",
          "Pilot Intercommunication System (ICS)",
          "Magnetic Direction indicator Dual Pilot IFR package ",
          "Dual controls",
          "Co-Pilot large color Primary Flight Display (PFD) embedding:",
          " Synthetic Vision System (SVS)",
          "Highway In The Sky (HITS)",
          "Helicopter Terrain Awareness and W arning System (HTAW S)",
          " Flight Management System (FMS)",
          "Radio tuning controls",
          "2nd VHF/AM",
          "2nd VOR/ILS",
          "2nd GPS",
          "ADF",
          "DME",
          "Marker beacon",
          "Electric Standby Indicator",
          "Co-Pilot Intercommunication System (ICS)",
          "Dual Master warning lights",
          "Dual Master caution lights",
          "2nd Magnetic Compass indicator",
          "Digital clock",
          "Flight Directo"
          
        ]
      },
      {
        title: "Equipment",
        type: "list",
        items: [
          "Aluminum alloy and bonded panel fuselage",
          "Semi-monocoque aluminum alloy tail boom",
          "New reinforced skid type landing gear",
          "Two hinged jettisonable crew doors (LH and RH)",
          "Two sliding passenger doors (LH and RH), 1.40 m opening, with jettisonable windows",
          "Acrylic transparent windshield and side windows",
          "Acrylic transparent overhead windows",
          "Quick removable tail rotor drive shaft cover",
          "Separate baggage compartment with hinged door",
          "Removable fairing and cowlings, for complete accessibility to the controls and drive components",
          "Quick opening hinged inspection doors, to allow visual check of engine oil levels and maintenance inspection points",
          "Grounding points",
          "Jacking and hoisting points Rotors and Controls",
          "Titanium main rotor hub, corrosion protected, fully articulated with four composite grips, four elastomeric bearings, four individually interchangeable composite material blades, swept tips, and dampers",
          "Steel tail rotor hub, corrosion protected, semi-rigid delta hinged type, with two composite blades, individually interchangeable",
          "Cyclic and collective controls powered by two hydraulic systems",
          "Hydraulically powered anti-torque system",
          "Adjustable friction devices on cyclic and collective system",
          "Force trim and artificial feel system",
          "Adjustable directional control pedals",
          "Flapping and droop restraint mechanism"
        ]
      },
      // {
      //   title: "Additional reviewed details",
      //   type: "list",
      //   items: [
      //     "YOM - 2018",
      //     "Low hours – Over 95% of remaining potential",
      //     "Air conditioning",
      //     "Hoist provisions",
      //     "Customizable interior configuration",
      //     "Max cruise speed (@5,000 FT, ISA, MGW, MCP) at 274 KM/H 148 KTAS",
      //     "Max range (@5,000 FT, ISA, MGW) at 828 KM 447 NM",
      //     "Single or dual pilot, VFR or IFR"
      //   ]
      // }
    ],
    description: "The 2018 Leonardo AW109 Trekker is a rugged, high-performance light twin-engine helicopter featuring fixed skid landing gear and exceptional utility flexibility. With only 167 total airframe hours since new (over 95% remaining potential), this Turkey-based aircraft is equipped with a comprehensive Dual Pilot IFR package, glass cockpit embedding Synthetic Vision (SVS), Highway In The Sky (HITS), HTAWS, dual ADAHRS, and a Flight Director. Outfitted with factory air conditioning, hoist provisions, and wide 1.40-meter dual sliding doors, it represents a versatile platform for VIP transport, utility, or EMS missions."
  },
  
  {
    id: "leonardo-a109sp-grandnew-2016",
    category: "Helicopter",
    name: "Leonardo A109SP GrandNew",
    price: "On Request",
    year: 2016,
    image: "/assets/images/inventory/grandnew/a109sp.webp",
    images: [
      "/assets/images/inventory/grandnew/a109sp.webp",
      "/assets/images/inventory/grandnew/a109sp-2.webp",
      "/assets/images/inventory/grandnew/a109sp-3.webp",
      "/assets/images/inventory/grandnew/a109sp-4.webp",
      "/assets/images/inventory/grandnew/a109sp-5.webp"
    ],
    details: {
      manufacturer: "Leonardo",
      model: "A109SP GrandNew",
      year: 2016,
      // hours: "2,400 Total Time",
      airframeTotalTime: "2,400 Hours",
      // configuration: "Six Crash-Resistant Leather Seats",
      // location: "UK",
      // capacity: "6 Passengers (Corporate VIP Layout)",
      // speed: "156 kts (Max Cruise)",
      // range: "512 nm (Extended 213 USG Fuel)",
      // engine: "Twin Pratt & Whitney Canada PW207C",
      // features: [
      //   "Customised corporate VIP 6-seat leather interior with super silent soundproofing",
      //   "Dual pilot flight/navigation EFIS with embedded FMS, Synthetic Vision (SVS) & HTAWS",
      //   "Four-axis dual duplex digital AFCS with integrated flight director (Single/Dual Pilot IFR)",
      //   "Bose ANR headsets (qty 6) with passenger intercommunication system",
      //   "Extended 213 US Gal crash-resistant fuel system (in lieu of 152 USG)",
      //   "2.3 m baggage bay extension & electrically operated passenger step (LH)",
      //   "Avidyne TAS-620 Traffic Advisory System presented on EFIS",
      //   "Collins Pro Line navigation suite with NAV-4000, DME-4000, ALT-4000 & Chelton GPS/SBAS"
      // ]
    },
    specSections: [
      // {
      //   title: "Airframe & Identity",
      //   type: "key-value",
      //   items: [
      //     { label: "Manufacturer", value: "Leonardo" },
      //     { label: "Model", value: "A109SP GrandNew" },
      //     { label: "Year", value: "2016" },
      //     { label: "Airframe Total Time", value: "2,400 Hours" },
      //     { label: "Configuration", value: "6 Seats VIP Corporate" },
      //     { label: "Location", value: "UK" },
      //     { label: "Fuel Capacity", value: "213 US Gal (Extended Fuel System)" },
      //     { label: "Baggage Extension", value: "2.3 m baggage bay extension" }
      //   ]
      // },
      {
        title: "Configuration & Cabin",
        type: "list",
        items: [
          "Six crash-resistant seats covered with leather",
          "Four-point shoulder harness",
          "Air conditioning",
          "Super silent soundproofing",
          "Acoustic screen around doors",
          "Cabin double layer acrylic windows",
          "Single central drawer",
          "Customised corporate cabin finishing",
          "Intercommunication system for passengers",
          "Headset Bose ANR type (qty six)",
          "Cabin loudspeakers (qty two)",
          "Reading lights, emergency lights, floor courtesy lights",
          "Passenger hooks (qty four)",
          "Upper and lower air vents",
          "Floor carpeting",
          
        ]
      },
      {
        title: "Avionics",
        type: "avionics",
        // package: {
        //   name: "Dual Pilot Flight/Navigation EFIS (Single/Dual Pilot IFR)",
        //   features: [
        //     "Dual pilot flight/navigation EFIS (2 displays) with embedded FMS",
        //     "Synthetic Vision System (SVS)",
        //     "Helicopter Terrain Awareness and Warning System (HTAWS)",
        //     "Slip indicator and Remote Bug Panel (RBP)",
        //     "Four axis dual duplex digital AFCS with integrated flight director",
        //     "Dual controls",
        //     "Reversionary Control Panel (RCP)",
        //     "Electronic Standby Instrument System (ESIS)"
        //   ]
        // },
        items: [
          "Single pilot IFR",
          "Dual pilot flight/navigation EFIS (2 displays) with embedded FMS",
          "Synthetic Vision (SVS)",
          "HTAWS (Helicopter Terrain Awareness and Warning System)",
          "slip indicator and Remote Bug Panel (RBP)",
          "Reversionary Control Panel (RCP)",
          "Electronic Standby Instrument System (ESIS)",
          "Second Radio Management System (RMS) RTU-4210",
          "Second VHF/AM VHF-4000E Collins",
          "VOR/ILS/ADF NAV-4000 Collins",
          "DME-4000 Collins",
          "Radio altimeter ALT-4000 Collins",
          "Second Attitude Heading Reference System (AHRS)",
          "Second Air Data Unit (ADU)",
          "GPS/SBAS Chelton interfaced to EFIS/FMS",
          "Digital Audio Control System (DACS)",
          "Four axis dual duplex digital AFCS with integrated flight director",
          "Artex C406-NHM ELT (with navigation interface module embedded) Dual contro"
        ]
      },
      {
        title: "Equipment",
        type: "list",
        items: [
          "2.3 m baggage bay extension",
          "USB charger in passenger cabin",
          "Avydine TAS-620 Traffic Advisory System (presented on EFIS)",
          "213 USgal crash-resistant fuel system (in lieu of 152 USG)",
          "High-intensity strobe lights on horizontal stabilizer",
          "Electrically operated passenger step (LH)"
        ]
      }
    ],
    description: "The 2016 Leonardo A109SP GrandNew is an elite light twin-engine executive helicopter based in the UK. Combining sleek aerodynamics with advanced single/dual pilot IFR avionics, it features a full EFIS suite with Synthetic Vision (SVS), HTAWS, and a 4-axis dual duplex digital AFCS. The cabin is appointed in customized corporate leather for 6 passengers with super silent soundproofing, Bose ANR headsets, dual-zone air conditioning, an extended 213-gallon fuel tank, 2.3m extended baggage bay, and an electric passenger step."
  },

  {
    id: "airbus-ec145-mercedes-2014",
    category: "Helicopter",
    name: "Airbus EC145 Mercedes-Benz Edition",
    price: "On Request",
    year: 2014,
    image: "/assets/images/inventory/ec145/ec145.webp",
    images: [
      "/assets/images/inventory/ec145/ec145.webp",
      // "/assets/images/inventory/ec145/ec145-1.png",
      "/assets/images/inventory/ec145/ec145-2.webp",
      "/assets/images/inventory/ec145/ec145-3.webp",
      "/assets/images/inventory/ec145/ec145-4.webp",
      "/assets/images/inventory/ec145/ec145-5.webp",
      "/assets/images/inventory/ec145/ec145-6.webp",
      "/assets/images/inventory/ec145/ec145-7.webp",
      "/assets/images/inventory/ec145/ec145-8.webp",
      "/assets/images/inventory/ec145/ec145-9.webp",
    ],
    details: {
      manufacturer: "Airbus Helicopters",
      model: "EC145",
      year: 2014,
      // hours: "1,900 Total Time",
      airframeTotalTime: "1,900 Hours",
      configuration: "Mercedes-Benz Edition",
      // location: "Brazil",
      // capacity: "9 Passengers + 1 Pilot (VIP Layout)",
      // speed: "133 kts (Fast Cruise)",
      // range: "367 nm",
      // engine: "Safran Arriel 1E2 (1,700 Hours Remaining)",
      // features: [
      //   "Exclusive Mercedes-Benz Edition bespoke paint scheme and luxury VIP interior",
      //   "VIP configuration for 9 passengers + 1 pilot with premium Mercedes-Benz styling",
      //   "Twin Safran Arriel 1E2 engines with 1,700 remaining hours",
      //   "Thales Aviation EFIS with Dual Garmin GNS 430 GPS navigation",
      //   "Sfim Industries Auto Flight Control System (AFCS) & Autopilot",
      //   "Equipped with factory Air Conditioning, Inlet Barrier Filter (IBF) & Rotor Brake",
      //   "Dual Honeywell Radio Altimeters, Bendix King DME/ADF, TCAS & Garmin Transponder",
      //   "Pristine provenance: Always hangared, no accident or incident history, all maintenance current"
      // ]
    },
    specSections: [
      // {
      //   title: "Airframe & Identity",
      //   type: "key-value",
      //   items: [
      //     { label: "Manufacturer", value: "Airbus Helicopters" },
      //     { label: "Model", value: "EC145" },
      //     { label: "Edition", value: "Mercedes-Benz Edition" },
      //     { label: "Year", value: "2014" },
      //     { label: "Airframe Total Time", value: "1,900 Hours" },
      //     { label: "Configuration", value: "VIP 9 Passengers + 1 Pilot" },
      //     { label: "Location & Registry", value: "Based and registered in Brazil" },
      //     { label: "Provenance", value: "Always kept in hangar / No accident or incident history" }
      //   ]
      // },
      // {
      //   title: "Engines & Maintenance Program",
      //   type: "key-value",
      //   items: [
      //     { label: "Engine Model", value: "Safran Arriel 1E2 (Twin Turbine)" },
      //     { label: "Total Time", value: "1,900 Hours" },
      //     { label: "Remaining Hours", value: "1,700 Hours" },
      //     { label: "Engine Program", value: "Not enrolled on program" },
      //     { label: "Maintenance Status", value: "All maintenance current" }
      //   ]
      // },
      {
        title: "Configuration & Cabin",
        type: "list",
        items: [
          "Aircraft based and registered in Brazil.",
          "All maintenance current",
          "Equipped w/ Inlet Barrier Filter, Autopilot and Rotor Brake.",
          "Paint and interior Mercedes-Benz Edition.",
          "VIP configuration for 9 passengers + 1 pilot.",
          "No accident or incident history.",
          "Always kept in hangar",
          "ENGINE MODEL: SAFRAN ARRIEL 1E2",
          "TOTAL TIME: 1,900 Hours",
          "REMAINING HOURS: 1,700 Hours",
          "ENGINE PROGRAM: Not enrolled on program"
          
        ]
      },
      {
        title: "Avionics",
        type: "avionics",
        // package: {
        //   name: "Thales Aviation EFIS & Dual Garmin GNS 430 Suite",
        //   features: [
        //     "Thales Aviation Electronic Flight Instrument System (EFIS)",
        //     "Dual Garmin GNS 430 GPS navigation units",
        //     "Dual Thales Aviation Air Data Computers (ADC)",
        //     "Sfim Industries Auto Flight Control System (AFCS)",
        //     "Sfim Industries Autopilot",
        //     "Garmin Digital Transponder & TCAS (Traffic Collision Avoidance System)"
        //   ]
        // },
        items: [
          "Toales Aviation EFIS",
          "Dual Garmin GNS 430 GPS",
          "Dual Toales Aviation Air Data Computer",
          "Single Bendix King DME",
          "Single Bendix King ADF",
          "Sfim Industries Auto Flight Control System",
          "Sfim Industries Autopilot",
          "Mecaer Audio System",
          "Dual VHF Radio COM",
          " Dual Honeywell Radio Altimeter",
          "Garmin Digital Transponder",
          "TCAS",
          "Kannad Aviation ELT"
        ]
      },
      {
        title: "Equipment",
        type: "list",
        items: [
          "Inlet Barrier Filter",
          "Rotor Brake",
          "Dual Controls",
          "Air Conditioning"
        ]
      },
      // {
      //   title: "Engine",
      //   type: "list",
      //   items: [
      //     "ENGINE MODEL: SAFRAN ARRIEL 1E2",
      //     "TOTAL TIME: 1,900 Hours",
      //     "REMAINING HOURS: 1,700 Hours",
      //     "ENGINE PROGRAM: Not enrolled on program"
      //   ]
      // },
    ],
    description: "The 2014 Airbus EC145 Mercedes-Benz Edition is an ultra-exclusive luxury twin-engine helicopter created in partnership with Mercedes-Benz Style. Based and registered in Brazil with 1,900 total airframe hours, this pristine aircraft features a bespoke Mercedes-Benz exterior and interior configured for 9 passengers plus pilot. Powered by twin Safran Arriel 1E2 engines with 1,700 hours remaining, it comes fully equipped with Thales EFIS, dual Garmin GNS 430, Sfim autopilot, factory air conditioning, Inlet Barrier Filter, and rotor brake with an immaculate, incident-free hangar-kept pedigree."
  },

  {
    id: "leonardo-a109-grand-2009",
    category: "Helicopter",
    name: "Leonardo A109 Grand",
    price: "On Request",
    year: 2009,
    image: "/assets/images/inventory/a109-grand/a109-grand.webp",
    images: [
      "/assets/images/inventory/a109-grand/a109-grand.webp",
      "/assets/images/inventory/a109-grand/a109-grand-2.webp",
      "/assets/images/inventory/a109-grand/a109-grand-3.webp",
      "/assets/images/inventory/a109-grand/a109-grand-4.webp",
      "/assets/images/inventory/a109-grand/a109-grand-5.webp",
      // "/assets/images/inventory/a109-grand/a109-grand-6.png"
    ],
    details: {
      manufacturer: "Leonardo",
      model: "A109 Grand",
      year: 2009,
      // hours: "1,320 Total Time",
      airframeTotalTime: "1,320 Hours",
      configuration: "-Pale grey leather new June 2022 / Charcoal grey carpet new June 2022",
      // capacity: "6 - 7 Passengers (VIP Corporate Layout)",
      // speed: "154 kts (Max Cruise)",
      // range: "512 nm (Long Range Fuel)",
      // engine: "Twin Pratt & Whitney Canada PW207C",
      // features: [
      //   "Low airframe total time of only 1,320 hours since new",
      //   "Refurbished VIP interior: Pale grey leather & charcoal grey carpet (New June 2022)",
      //   "Equipped with Long Range Fuel tanks for extended mission reach",
      //   "Garmin GNS 530 WAAS & GNS 430 WAAS GPS / Nav / Com with KMD 550 MFD",
      //   "Honeywell RDR-2000 color weather radar & L3 Skywatch TAS",
      //   "AFCS 3-Axis Duplex autopilot with integrated Flight Director (Single Pilot IFR)",
      //   "Dual flight controls & swivelling retractable landing light",
      //   "Silent soundproofing, retractable passenger step, particle separator & float provisions"
      // ]
    },
    specSections: [
      // {
      //   title: "Airframe & Identity",
      //   type: "key-value",
      //   items: [
      //     { label: "Manufacturer", value: "Leonardo" },
      //     { label: "Model", value: "A109 Grand" },
      //     { label: "Year", value: "2009" },
      //     { label: "Airframe Total Time", value: "1,320 Hours" },
      //     { label: "Interior Refurbishment", value: "New June 2022" },
      //     { label: "Configuration", value: "Pale Grey Leather / Charcoal Carpet" },
      //     { label: "Fuel System", value: "Long Range Fuel" },
      //     { label: "Flight Rules", value: "Single Pilot IFR" }
      //   ]
      // },
      {
        title: "Configuration & Cabin",
        type: "list",
        items: [
          "Pale grey leather new June 2022",
          "Charcoal grey carpet new June 2022",
         
        ]
      },
      {
        title: "Avionics",
        type: "avionics",
        // package: {
        //   name: "Integrated Garmin WAAS Navigation & AFCS Suite",
        //   features: [
        //     "KMD 550 Multi-Function Display (MFD)",
        //     "GPS Navigation Radios: Garmin GNS 530 WAAS & GNS 430 WAAS",
        //     "Honeywell RDR-2000 color weather radar",
        //     "AFCS 3-Axis Duplex Autopilot",
        //     "Flight Director (109-0771-92-117)",
        //     "Transponder Bendix King KT74 Mode S with ADS-B Out",
        //     "L3 Skywatch Traffic Advisory System (TAS)",
        //     "TAS1000 Wind Vector & Altitude Alert"
        //   ]
        // },
        items: [
          "KMD 550 MFD",
          "ADF - Bendix King KR87",
          "Flight Director - 109-0771-92-117",
          "Transponder Bendix King KT74 Mode S with ADSB Out",
          "GPS - GNS 430 WAS & GNS 530 WAS",
          "Navigation Radios - GNS 530 / GNS 430",
          "Radar Altimeter - 109-0772-25-129",
          "Weather Radar - Honeywell RDR-2000 colour Marker",
          "Beacon KMN675",
          "AFCS 3 Axis Duplex",
          "Single flight IFR",
          "TAS L3 Skywatch",
          "TAS1000 Wind Vector & ALT Alert",
          "Artex C406-2 HM",
          "Dual controls",
          "Swivelling and retractable landing light"
        ]
      },
      {
        title: "Equipment",
        type: "list",
        items: [
          "Long range fuel",
          "Windshield wipers",
          "Engine fire extinguisher",
          "Left hand and right hand sliding passenger doors",
          "Silent soundproofing",
          "Particle separator",
          "Retractable passenger step",
          "Air intake exhaust covers",
          "Pitot tube covers",
          "Tie-down fittings",
          "Tow bar",
          "Flight manuals & technical publications",
          "Float Provisions Fixed parts"
        ]
      }
    ],
    description: "The 2009 Leonardo A109 Grand is an outstanding light twin-engine helicopter with only 1,320 total airframe hours since new. Upgraded in June 2022 with a new pale grey leather interior and charcoal carpeting, this aircraft is equipped with long range fuel tanks, Garmin GNS 530/430 WAAS navigation, Honeywell RDR-2000 color weather radar, L3 Skywatch TAS, and a 3-axis duplex AFCS with flight director. Complete with dual sliding doors, silent soundproofing, retractable passenger step, and float provisions, it offers premier speed and luxury."
  },

  {
    id: "leonardo-a109-grand-vip-2009",
    category: "Helicopter",
    name: "Leonardo A109 Grand VIP",
    price: "On Request",
    year: 2009,
    image: "/assets/images/inventory/a109-grand-vip/a109-grand-vip.webp",
    images: [
      "/assets/images/inventory/a109-grand-vip/a109-grand-vip.webp",
      "/assets/images/inventory/a109-grand-vip/a109-grand-vip-2.webp",
      "/assets/images/inventory/a109-grand-vip/a109-grand-vip-3.webp",
      "/assets/images/inventory/a109-grand-vip/a109-grand-vip-4.webp",
      // "/assets/images/inventory/a109-grand-vip/a109-grand-vip-5.png"
    ],
    details: {
      manufacturer: "Leonardo",
      model: "A109 Grand",
      year: 2009,
      // hours: "2,803 Total Time",
      airframeTotalTime: "2,803 Hours",
      configuration: "VIP 6-Seat",
      location: "Monaco",
      // capacity: "6 Passengers (3 Fwd + 3 Aft Club Benches)",
      // speed: "154 kts (Max Cruise)",
      // range: "503 nm",
      // engine: "Twin Pratt & Whitney Canada PW207C (Enrolled on ESP)",
      // features: [
      //   "Both engines fully enrolled on Pratt & Whitney Canada ESP maintenance programme",
      //   "Factory VIP 6-seat club cabin (3 fwd / 3 aft bench) in leather 2213",
      //   "Striking metallic exterior paint: Taupe Frost (AgustaWestland M106)",
      //   "Paulstra soundproofing, double-glazed cabin windows & six (6) ANR headsets",
      //   "Honeywell SP-711 3-axis duplex AFCS & FZ-702 flight director with autotrim",
      //   "Garmin GNS 530 & GNS 430, Bendix/King KMD 540 moving map & RDR-2000 weather radar",
      //   "DART emergency float system (4 floats), rotor brake, searchlight & air conditioning",
      //   "Extended baggage compartment, high-intensity strobes & retractable landing light"
      // ]
    },
    specSections: [
      // {
      //   title: "Airframe & Identity",
      //   type: "key-value",
      //   items: [
      //     { label: "Manufacturer", value: "Leonardo" },
      //     { label: "Model", value: "A109 Grand" },
      //     { label: "Year", value: "2009" },
      //     { label: "Airframe Total Time", value: "2,803 Hours" },
      //     { label: "Configuration", value: "VIP 6 Seats (Club Arrangement)" },
      //     { label: "Location", value: "Monaco" },
      //     { label: "Exterior Paint", value: "Metallic Taupe Frost (AgustaWestland M106)" },
      //     { label: "Flight Rules", value: "Single / Dual Pilot IFR configuration" }
      //   ]
      // },
      // {
      //   title: "Engines & Maintenance Programme",
      //   type: "key-value",
      //   items: [
      //     { label: "Engine Model", value: "Twin Pratt & Whitney Canada PW207C" },
      //     { label: "Engine Programme", value: "Enrolled in P&WC ESP maintenance programme" },
      //     { label: "Engine #1 (S/N PCE-BH0310)", value: "696:49 h remaining to TBO (3,500 h)" },
      //     { label: "Engine #2 (S/N PCE-BH0326)", value: "712:09 h remaining to TBO (3,500 h)" },
      //     { label: "Fire Protection", value: "Engine compartment fire extinguishers" }
      //   ]
      // },
      {
        title: "Configuration & Cabin",
        type: "list",
        items: [
          "Six passenger seats in club arrangement: 3-seat forward-facing and 3-seat aft-facing bench, crash-resistant VIP seats in leather",
          "Paulstra soundproofing & double-glazed cabin windows",
          "Six (6) Active Noise Reduction (ANR) headsets",
          "Customised cabin finishing, carpeting, reading and courtesy lights",
          "Interior materials selected at factory: seats and door panels leather 2213, upper liners leatherette 2774, carpet 0083",
          "Metallic parts silver BHA1 & safety belts 641 finch",
          "Exterior: metallic paint Taupe Frost (AgustaWestland M106)",
          "Reinforced pilot / co-pilot windshields, windshield wipers, and retractable landing light",
          "Extended baggage compartment",
           "2 × Pratt & Whitney Canada PW207C",
          "Engine programme Enrolled in the Pratt & Whitney Canada ESP engine maintenance programme",
          "Engine S/N PCE-BH0310 696:49 h remaining to TBO (3,500 h)",
          "Engine S/N PCE-BH0326 712:09 h remaining to TBO (3,500 h)",
        ]
      },
      {
        title: "Avionics",
        type: "avionics",
        // package: {
        //   name: "Dual Pilot EFIS & Honeywell Flight Director",
        //   features: [
        //     "EFIS pilot and co-pilot (EADI / EHSI)",
        //     "Honeywell SP-711 3-axis duplex AFCS",
        //     "Honeywell FZ-702 flight director with autotrim",
        //     "Garmin GNS 530 and GNS 430 (COM / NAV / GPS)",
        //     "Bendix/King KMD 540 moving map",
        //     "Bendix/King RDR-2000 weather radar",
        //     "TAS Traffic Advisory System",
        //     "Bendix/King KT-73 Mode S transponder"
        //   ]
        // },
        items: [
          "EFIS pilot and co-pilot (EADI / EHSI)",
          "Honeywell SP-711 3-axis duplex AFCS",
          "Honeywell FZ-702 flight director with autotrim",
          "Garmin GNS 530 and GNS 430 (COM / NAV / GPS)",
          "Bendix/King KMD 540 moving map",
          "Bendix/King RDR-2000 weather radar)",
          "TAS traffic advisory system",
          "Bendix/King KT-73 Mode S transponder",
          "DME KDM-706A · ADF KX-87 · marker beacon",
          "Honeywell radar altimeter · Artex ELT"
        ]
      },
      {
        title: "Equipment",
        type: "list",
        items: [
          "Rotor brake",
          "Air conditioning",
          "Searchlight",
          "Pilot and co-pilot windshield wipers",
          "Emergency float system (DART, four floats)",
          "Engine compartment fire extinguishers",
          "Dual controls, single / dual pilot IFR configuration"
        ]
      },
      // {
      //   title: "Engine",
      //   type: "list",
      //   items: [
         
      //   ]
      // }
    ],
    description: "The 2009 Leonardo A109 Grand VIP is an exquisite light twin-engine helicopter based in Monaco with 2,803 total airframe hours. Finished in sophisticated metallic Taupe Frost with a factory VIP 6-seat club cabin in leather 2213 and Paulstra soundproofing, this aircraft is fully enrolled on the Pratt & Whitney Canada ESP engine maintenance programme. Complete with dual pilot EFIS, Honeywell SP-711 3-axis AFCS with FZ-702 flight director, Garmin GNS 530/430, weather radar, TAS, air conditioning, rotor brake, and DART emergency floats, it delivers the ultimate executive travel experience."
  }
];



