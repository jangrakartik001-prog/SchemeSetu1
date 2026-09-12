// Indian States and major districts mapping
export const INDIAN_STATES_DISTRICTS: Record<string, string[]> = {
  "Andhra Pradesh": ["Anantapur", "Chittoor", "East Godavari", "Guntur", "Krishna", "Kurnool", "Prakasam", "Srikakulam", "Visakhapatnam", "Vizianagaram", "West Godavari", "YSR Kadapa"],
  "Arunachal Pradesh": ["Changlang", "East Kameng", "Lohit", "Papum Pare", "Tawang", "Tirap", "West Siang"],
  "Assam": ["Baksa", "Barpeta", "Cachar", "Darrang", "Dibrugarh", "Guwahati / Kamrup", "Jorhat", "Nagaon", "Silchar", "Sonitpur", "Tinsukia"],
  "Bihar": ["Bhagalpur", "Darbhanga", "Gaya", "Muzaffarpur", "Nalanda", "Patna", "Purnia", "Rohtas", "Samastipur", "Saran", "Vaishali"],
  "Chhattisgarh": ["Bilaspur", "Bastar", "Durg", "Korba", "Raigarh", "Raipur", "Rajnandgaon", "Surguja"],
  "Delhi (NCT)": ["Central Delhi", "East Delhi", "New Delhi", "North Delhi", "North East Delhi", "North West Delhi", "South Delhi", "South West Delhi", "West Delhi"],
  "Goa": ["North Goa", "South Goa"],
  "Gujarat": ["Ahmedabad", "Amreli", "Anand", "Bhavnagar", "Gandhinagar", "Jamnagar", "Junagadh", "Kutch", "Rajkot", "Surat", "Vadodara"],
  "Haryana": ["Ambala", "Faridabad", "Gurugram", "Hisar", "Karnal", "Panipat", "Rohtak", "Sonipat", "Yamunanagar"],
  "Himachal Pradesh": ["Kangra", "Kullu", "Mandi", "Shimla", "Sirmaur", "Solan", "Una"],
  "Jammu & Kashmir": ["Anantnag", "Baramulla", "Budgam", "Jammu", "Kathua", "Pulwama", "Srinagar", "Udhampur"],
  "Jharkhand": ["Bokaro", "Deoghar", "Dhanbad", "East Singhbhum (Jamshedpur)", "Hazaribagh", "Ranchi"],
  "Karnataka": ["Belagavi", "Bengaluru Rural", "Bengaluru Urban", "Dakshina Kannada", "Dharwad", "Kalaburagi", "Mysuru", "Shivamogga", "Tumakuru", "Udupi"],
  "Kerala": ["Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kollam", "Kottayam", "Kozhikode", "Malappuram", "Palakkad", "Thiruvananthapuram", "Thrissur"],
  "Madhya Pradesh": ["Bhopal", "Gwalior", "Indore", "Jabalpur", "Rewa", "Sagar", "Satna", "Ujjain"],
  "Maharashtra": ["Ahmednagar", "Amravati", "Aurangabad (Chhatrapati Sambhaji Nagar)", "Kolhapur", "Mumbai City", "Mumbai Suburban", "Nagpur", "Nashik", "Pune", "Solapur", "Thane"],
  "Manipur": ["Bishnupur", "Churachandpur", "Imphal East", "Imphal West", "Thoubal"],
  "Meghalaya": ["East Khasi Hills (Shillong)", "Ribhoi", "West Garo Hills (Tura)"],
  "Mizoram": ["Aizawl", "Champhai", "Lunglei"],
  "Nagaland": ["Dimapur", "Kohima", "Mokokchung"],
  "Odisha": ["Balasore", "Berhampur (Ganjam)", "Bhadrak", "Bhubaneswar (Khurda)", "Cuttack", "Puri", "Rourkela (Sundargarh)", "Sambalpur"],
  "Punjab": ["Amritsar", "Bathinda", "Hoshiarpur", "Jalandhar", "Ludhiana", "Mohali (SAS Nagar)", "Patiala"],
  "Rajasthan": ["Ajmer", "Alwar", "Bikaner", "Jaipur", "Jodhpur", "Kota", "Sikar", "Udaipur"],
  "Sikkim": ["East Sikkim (Gangtok)", "Namchi", "West Sikkim"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Cuddalore", "Dindigul", "Erode", "Madurai", "Salem", "Thanjavur", "Tiruchirappalli", "Tirunelveli", "Vellore"],
  "Telangana": ["Hyderabad", "Karimnagar", "Khammam", "Mahabubnagar", "Nalgonda", "Nizamabad", "Rangareddy", "Warangal"],
  "Tripura": ["Dhalai", "Gomati", "North Tripura", "West Tripura (Agartala)"],
  "Uttar Pradesh": ["Agra", "Aligarh", "Ayodhya", "Bareilly", "Gorakhpur", "Jhansi", "Kanpur", "Lucknow", "Meerut", "Moradabad", "Noida (Gautam Buddha Nagar)", "Prayagraj", "Varanasi"],
  "Uttarakhand": ["Dehradun", "Haridwar", "Nainital", "Pauri Garhwal", "Udham Singh Nagar"],
  "West Bengal": ["Bankura", "Birbhum", "Darjeeling", "Hooghly", "Howrah", "Kolkata", "Malda", "Murshidabad", "North 24 Parganas", "Paschim Bardhaman", "Siliguri (Jalpaiguri)", "South 24 Parganas"]
};

export const INDIAN_LANGUAGES = [
  "Hindi",
  "English",
  "Bengali",
  "Marathi",
  "Telugu",
  "Tamil",
  "Gujarati",
  "Urdu",
  "Kannada",
  "Odia",
  "Punjabi",
  "Malayalam",
  "Assamese"
];

export const SOCIAL_CATEGORIES = [
  "Scheduled Caste (SC)",
  "Scheduled Tribe (ST)",
  "Other Backward Class (OBC)",
  "Economically Weaker Section (EWS)",
  "Minority Community",
  "General"
];

export const EDUCATION_LEVELS = [
  "No formal schooling",
  "Primary (Up to 5th)",
  "Middle School (8th Pass)",
  "Secondary (10th Pass)",
  "Higher Secondary (12th Pass)",
  "Vocational / ITI Diploma",
  "Graduate",
  "Post-Graduate & Above"
];

export const EMPLOYMENT_STATUSES = [
  "Unemployed / Seeking Self-employment",
  "Daily Wage Worker / Casual Laborer",
  "Micro-Artisan / Traditional Craftsman",
  "Self-Employed Solo Operator",
  "Small Enterprise / Shop Owner",
  "Farmer / Agri-Allied Activity"
];

export const PROJECT_TYPES = [
  "Manufacturing & Production",
  "Services / Micro-Enterprise",
  "Retail Trading & Shop",
  "Handicrafts & Handloom",
  "Agro-processing & Food Products",
  "Dairy, Poultry & Animal Husbandry",
  "Logistics & Transport",
  "Textile & Apparel"
];

export const BUSINESS_NATURES = [
  "New Enterprise (Greenfield)",
  "Existing Enterprise (Brownfield)"
];

export const PREFERRED_LOCATIONS = [
  "Rural",
  "Semi-Urban",
  "Urban",
  "Designated Industrial / Artisan Cluster"
];

export const FINANCING_PURPOSES = [
  "Working Capital (Raw materials, stock)",
  "Plant & Machinery / Tooling Equipment",
  "Business Expansion & Infrastructure",
  "Technology Upgrade & Digitization",
  "Composite (Both Equipment & Working Capital)"
];

export const EXPERIENCE_LEVELS = [
  "Beginner / First-time Entrepreneur",
  "1 to 2 Years",
  "3 to 5 Years",
  "More than 5 Years"
];

// Sample demo scenarios for convenient one-click evaluation
export const DEMO_PRESETS = [
  {
    id: "scenario-a",
    title: "Scenario A: Rural Dairy & Micro-Enterprise (PMEGP Strong Match)",
    subtitle: "SC Entrepreneur • ₹6L Greenfield Dairy • Rural 35% Subsidy Match",
    profile: {
      fullName: "Kailash Chand Jatav",
      age: "32",
      gender: "Male" as const,
      state: "Rajasthan",
      district: "Alwar",
      socialCategory: "Scheduled Caste (SC)" as const,
      annualFamilyIncome: "160000",
      educationStatus: "Secondary (10th Pass)" as const,
      employmentStatus: "Farmer / Agri-Allied Activity" as const,
      preferredLanguage: "Hindi"
    },
    project: {
      projectName: "Kamdhenu Rural Chilling & Dairy Processing Unit",
      projectType: "Dairy, Poultry & Animal Husbandry" as const,
      businessNature: "New Enterprise (Greenfield)" as const,
      description: "Setting up a hygienic 500-liter bulk milk cooling and value-added dairy processing unit (curd, paneer, and ghee) sourcing from local cattle herders.",
      totalProjectCost: "600000",
      ownContribution: "30000", // 5% promoter equity for special category
      preferredLocation: "Rural" as const,
      purposeOfFinancing: "Composite (Both Equipment & Working Capital)" as const,
      relevantExperience: "3 to 5 Years" as const,
      existingIncome: "90000"
    }
  },
  {
    id: "scenario-b",
    title: "Scenario B: Commercial Transport / Logistics (NBCFDC Sector Match)",
    subtitle: "OBC Entrepreneur • ₹9.5L Commercial Cargo Vehicle • Dedicated Refinance",
    profile: {
      fullName: "Mohammad Arif Ansari",
      age: "30",
      gender: "Male" as const,
      state: "Uttar Pradesh",
      district: "Varanasi",
      socialCategory: "Other Backward Class (OBC)" as const,
      annualFamilyIncome: "220000",
      educationStatus: "Higher Secondary (12th Pass)" as const,
      employmentStatus: "Self-Employed Solo Operator" as const,
      preferredLanguage: "Hindi"
    },
    project: {
      projectName: "Ansari Regional Agro-Logistics & Cold Transport",
      projectType: "Logistics & Transport" as const,
      businessNature: "New Enterprise (Greenfield)" as const,
      description: "Acquisition of an insulated light commercial cargo vehicle for refrigerated transport of fresh seasonal farm produce to urban mandi markets.",
      totalProjectCost: "950000",
      ownContribution: "150000", // ~15% margin money
      preferredLocation: "Semi-Urban" as const,
      purposeOfFinancing: "Plant & Machinery / Tooling Equipment" as const,
      relevantExperience: "3 to 5 Years" as const,
      existingIncome: "110000"
    }
  },
  {
    id: "scenario-c",
    title: "Scenario C: Brownfield Expansion (Term Loan vs Greenfield Routing)",
    subtitle: "SC Entrepreneur • ₹18L Existing Unit Expansion • NSFDC Term Loan Routing",
    profile: {
      fullName: "Devraj Balmik",
      age: "38",
      gender: "Male" as const,
      state: "Madhya Pradesh",
      district: "Bhopal",
      socialCategory: "Scheduled Caste (SC)" as const,
      annualFamilyIncome: "240000",
      educationStatus: "Vocational / ITI Diploma" as const,
      employmentStatus: "Small Enterprise / Shop Owner" as const,
      preferredLanguage: "Hindi"
    },
    project: {
      projectName: "Balmik Industrial Metal Fabrication & Tooling Unit",
      projectType: "Manufacturing & Production" as const,
      businessNature: "Existing Enterprise (Brownfield)" as const,
      description: "Expansion of existing sheet-metal fabrication workshop with CNC lathe and hydraulic press tooling to service automotive component suppliers.",
      totalProjectCost: "1800000",
      ownContribution: "200000",
      preferredLocation: "Designated Industrial / Artisan Cluster" as const,
      purposeOfFinancing: "Business Expansion & Infrastructure" as const,
      relevantExperience: "More than 5 Years" as const,
      existingIncome: "180000"
    }
  }
];
