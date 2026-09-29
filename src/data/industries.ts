export type Industry = {
  slug: string;
  name: string;
  tagline: string;
  bestFor: string;
  accent: string;
  features: string[];
};

export const industries: Industry[] = [
  {
    slug: "pharmacydesk",
    name: "PharmacyDesk",
    tagline:
      "AI systems for pharmacies to serve more customers and increase loyalty.",
    bestFor: "Pharmacies & Chemists",
    accent: "#22c55e",
    features: [
      "WhatsApp Pharmacy Assistant",
      "Product & Price Enquiries",
      "Prescription & Refill Workflows",
      "Delivery & Pickup Management",
      "Refill Reminders & Reactivation",
    ],
  },
  {
    slug: "caredesk",
    name: "CareDesk",
    tagline:
      "Smart automation for clinics to manage patients and appointments effortlessly.",
    bestFor: "Clinics & Practices",
    accent: "#14b8a6",
    features: [
      "AI Receptionist",
      "Appointment Booking",
      "Automated Reminders",
      "Patient Follow-ups",
      "Review & Reactivation",
    ],
  },
  {
    slug: "servicedesk",
    name: "ServiceDesk",
    tagline: "Job intake to technician dispatch, all automated and trackable.",
    bestFor: "HVAC, Electrical, Repairs",
    accent: "#8b5cf6",
    features: [
      "Service Enquiry Intake",
      "Technician Dispatch",
      "Job Tracking & Updates",
      "Quote Follow-ups",
      "Maintenance Reminders",
    ],
  },
  {
    slug: "tradedesk",
    name: "TradeDesk",
    tagline: "Turn product enquiries into sales with smart automation.",
    bestFor: "Hardware & Suppliers",
    accent: "#f97316",
    features: [
      "Product Enquiry Bot",
      "Quote Generation",
      "Sales Pipeline & CRM",
      "Bulk Order Management",
      "Delivery & Customer Tracking",
    ],
  },
  {
    slug: "hospitalitydesk",
    name: "HospitalityDesk",
    tagline: "More bookings, happier guests, and stronger customer loyalty.",
    bestFor: "Hotels, Restaurants, Cafés",
    accent: "#f59e0b",
    features: [
      "Reservations & Bookings",
      "Menu & FAQs",
      "Catering & Event Leads",
      "Review Generation",
      "Customer Reactivation",
    ],
  },
  {
    slug: "eventdesk",
    name: "EventDesk",
    tagline: "Capture, qualify and close more event opportunities.",
    bestFor: "Event Planners & Venues",
    accent: "#f43f5e",
    features: [
      "Event Enquiry Capture",
      "Lead Qualification",
      "Quotation Workflows",
      "Consultation Booking",
      "Follow-ups & Reminders",
    ],
  },
  {
    slug: "businessdesk",
    name: "BusinessDesk",
    tagline:
      "Client intake to onboarding automation for professional service firms.",
    bestFor: "Accountants, Consultants",
    accent: "#6366f1",
    features: [
      "Enquiry Qualification",
      "Consultation Booking",
      "Document Requests",
      "Client Onboarding",
      "Follow-ups & Nurturing",
    ],
  },
  {
    slug: "legaldesk",
    name: "LegalDesk",
    tagline: "Smart client intake and case enquiry management.",
    bestFor: "Law Firms & Advocates",
    accent: "#3b82f6",
    features: [
      "Enquiry Intake & Routing",
      "Consultation Scheduling",
      "Document Collection",
      "Case Status Updates",
      "Review & Referrals",
    ],
  },
  {
    slug: "propertydesk",
    name: "PropertyDesk",
    tagline: "Find leads. Match properties. Close more deals.",
    bestFor: "Realtors & Agencies",
    accent: "#0ea5e9",
    features: [
      "Property Enquiry Bot",
      "Lead Qualification",
      "Property Matching",
      "Viewing Bookings",
      "CRM & Follow-ups",
    ],
  },
  {
    slug: "builddesk",
    name: "BuildDesk",
    tagline: "From project enquiry to quotation, never lose a lead.",
    bestFor: "Contractors & Builders",
    accent: "#eab308",
    features: [
      "Project Enquiry Capture",
      "Site Visit Scheduling",
      "Quotation Follow-ups",
      "Project Pipeline",
      "Client Communication",
    ],
  },
  {
    slug: "contentdesk",
    name: "ContentDesk",
    tagline: "Plan, create, publish and grow in one intelligent platform.",
    bestFor: "Creators, Marketers & Brands",
    accent: "#a855f7",
    features: [
      "AI Content Ideation",
      "Smart Scheduling",
      "Multi-Platform Publishing",
      "Analytics & Insights",
      "Brand Kit & Templates",
    ],
  },
];
