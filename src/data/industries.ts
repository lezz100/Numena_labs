export type Industry = {
  slug: string;
  name: string;
  tagline: string;
  bestFor: string;
  features: string[];
};

export const industries: Industry[] = [
  {
    slug: "caredesk",
    name: "CareDesk",
    tagline:
      "Clinics that rely on manual reminder calls send them inconsistently — patients who are not confirmed the day before often do not arrive, and the appointment slot is lost.",
    bestFor: "Clinics & Practices",
    features: [
      "WhatsApp Appointment Booking",
      "24-hour Confirmation & Reminders",
      "Patient Records & History",
      "M-Pesa Billing & Receipts",
      "Patient Reactivation",
    ],
  },
  {
    slug: "pharmacydesk",
    name: "PharmacyDesk",
    tagline:
      "Most refill customers do not return because they found a better pharmacy — they return when reminded. Without a system for it, the reminder does not happen.",
    bestFor: "Pharmacies & Chemists",
    features: [
      "WhatsApp Pharmacy Assistant",
      "Prescription & Refill Tracking",
      "Refill Reminder Workflows",
      "Delivery & Pickup Notifications",
      "M-Pesa Payment Collection",
    ],
  },
  {
    slug: "servicedesk",
    name: "ServiceDesk",
    tagline:
      "Service businesses that take job requests over WhatsApp lose track of them — dispatch is a message in a group chat, job status lives in one person's memory, and quotes sent once without follow-up go cold.",
    bestFor: "HVAC, Electrical & Repairs",
    features: [
      "WhatsApp Job Enquiry Intake",
      "Technician Dispatch & Assignment",
      "Job Status Tracking & Updates",
      "Quote & Follow-up Workflows",
      "Maintenance Reminders",
    ],
  },
  {
    slug: "hospitalitydesk",
    name: "HospitalityDesk",
    tagline:
      "Hotels handling reservations over WhatsApp and phone have no consistent process for booking confirmation, pre-arrival communication or no-show follow-up.",
    bestFor: "Hotels & Guesthouses",
    features: [
      "Reservation Booking & Confirmation",
      "Pre-arrival Communication",
      "Check-in Reminders",
      "Catering & Event Enquiries",
      "Guest Reactivation",
    ],
  },
  {
    slug: "eventdesk",
    name: "EventDesk",
    tagline:
      "Event planners quote opportunities that go cold — the follow-up did not happen, the deposit was not chased, and the client confirmed with a venue that responded sooner.",
    bestFor: "Event Planners & Venues",
    features: [
      "Event Enquiry Capture",
      "Enquiry Qualification",
      "Quotation Workflows",
      "Consultation Booking & Reminders",
      "Deposit Follow-ups",
    ],
  },
  {
    slug: "builddesk",
    name: "BuildDesk",
    tagline:
      "Contractors lose jobs not because their price was wrong but because the quote was sent once and not followed up — the client signed with whoever called back first.",
    bestFor: "Contractors & Builders",
    features: [
      "Project Enquiry Capture",
      "Site Visit Scheduling",
      "Quotation & Follow-up Workflows",
      "Project Status Updates",
      "Client Communication",
    ],
  },
  {
    slug: "professionaldesk",
    name: "ProfessionalDesk",
    tagline:
      "Professional firms lose new clients between the first enquiry and the booked consultation — intake is not triaged, the follow-up does not happen, and the client finds a firm that responded faster.",
    bestFor: "Law Firms, Accountants & Consultants",
    features: [
      "Enquiry Intake & Qualification",
      "Consultation Booking & Reminders",
      "Document Collection & Chasing",
      "Client Onboarding Workflow",
      "Matter & Project Status Updates",
    ],
  },
];
