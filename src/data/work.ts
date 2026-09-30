// ResultMetric.placeholder is a string literal type so TypeScript enforces
// the placeholder format — it cannot be "TBD" or a real number until the
// source has been verified and the type is updated.
export type ResultMetric = {
  label: string;
  question: string;
  placeholder: "[NEEDS REAL DATA]";
};

export type CaseStudyScreenshot = {
  src: string;
  alt: string;
};

export type CaseStudy = {
  slug: string;
  name: string;
  title: string;
  industry: string;
  description: string;
  context: {
    who: string;
    before: string[];
  };
  problem: string;
  system: string;
  dailyUse: string[];
  features: string[];
  results: ResultMetric[];
  resultsPublished: boolean;
  screenshots?: CaseStudyScreenshot[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "afyahero",
    name: "AfyaHero",
    title: "Hospital management system",
    industry: "Healthcare",
    description:
      "A connected system for the administrative work around patient care — appointments, records, billing, lab results and patient communication.",

    context: {
      who: "A healthcare provider in Eldoret with a front desk team, clinical staff and a lab unit serving outpatient and inpatient cases.",
      before: [
        "Appointments were booked by phone and tracked in a paper register.",
        "Reminder calls were made manually by front desk staff each morning.",
        "Patient records were kept in physical files, searched by hand.",
        "Billing was recorded in a separate register; M-Pesa payments were reconciled manually at end of day.",
        "Lab orders and results moved between departments verbally or on paper.",
        "Managers had no consolidated view of the day's activity without asking staff directly.",
      ],
    },

    problem:
      "Patient administration ran across disconnected tools — a paper appointment book, a WhatsApp group for internal coordination, physical patient files and a separate billing register. There was no consistent way to confirm appointments in advance, follow up on missed visits or give managers a view of the day's activity without manual reporting.",

    system:
      "Numena built AfyaHero as a hospital management system that centralises appointment booking, patient records, billing, lab tracking and patient communication into one platform. It runs on WhatsApp for patient-facing interactions and provides a shared operational view for clinical and administrative staff.",

    dailyUse: [
      "A patient sends a WhatsApp message to book an appointment. The system responds, collects their details and books the slot — without front desk staff initiating the exchange.",
      "The system sends an automated SMS reminder 24 hours before each appointment.",
      "After the consultation, the clinician adds notes to the patient's digital record and raises an invoice directly in the system.",
      "The patient pays via M-Pesa and receives an automatic payment confirmation by SMS.",
      "Lab staff receive orders from clinicians through the system and update results when ready, without a paper handoff.",
      "The front desk manager opens the reporting view to see today's bookings, confirmed appointments, no-shows and outstanding balances.",
    ],

    features: [
      "Appointment booking, calendar sync, reminders and waitlist management",
      "Digital patient records with history, notes and attachments",
      "Invoicing, M-Pesa and card payments with balance tracking",
      "Lab orders, results tracking and imaging report storage",
      "SMS, WhatsApp and email reminders and follow-ups",
      "Revenue, visits and no-show reporting",
    ],

    resultsPublished: false,

    results: [
      {
        label: "Appointment no-show rate",
        question:
          "What percentage of booked appointments were not attended before AfyaHero, and what is it now? (Pull from the visits and no-show report.)",
        placeholder: "[NEEDS REAL DATA]",
      },
      {
        label: "Automated reminders sent",
        question:
          "How many appointment reminders has the system sent in the past 30 days? (Visible in the reporting view.)",
        placeholder: "[NEEDS REAL DATA]",
      },
      {
        label: "Front desk time on manual reminder calls",
        question:
          "How many hours per week did the front desk spend making manual reminder calls before AfyaHero? How many now?",
        placeholder: "[NEEDS REAL DATA]",
      },
      {
        label: "M-Pesa payments processed through the system",
        question:
          "What share of invoices are now settled via M-Pesa through AfyaHero, versus manually reconciled before?",
        placeholder: "[NEEDS REAL DATA]",
      },
      {
        label: "Patient records in the system",
        question:
          "How many patient records are now in AfyaHero? How many existed in physical files before, and over what period?",
        placeholder: "[NEEDS REAL DATA]",
      },
      {
        label: "Patients reactivated through follow-up",
        question:
          "How many patients who had not returned within 90 days were contacted via the reactivation workflow and booked a follow-up visit?",
        placeholder: "[NEEDS REAL DATA]",
      },
    ],
  },
];
