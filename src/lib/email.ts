import { Resend } from "resend";
import { contactDetails } from "@/data/navigation";

export type ContactSubmission = {
  name: string;
  email: string;
  phone?: string;
  business?: string;
  message: string;
};

export async function sendContactEmail(submission: ContactSubmission) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error(
      "RESEND_API_KEY is not configured. Set it in .env.local to enable the contact form."
    );
  }

  const resend = new Resend(apiKey);
  const toEmail = process.env.CONTACT_TO_EMAIL || contactDetails.email;

  await resend.emails.send({
    from: "Numena Labs Website <onboarding@resend.dev>",
    to: toEmail,
    replyTo: submission.email,
    subject: `New enquiry from ${submission.name}`,
    text: [
      `Name: ${submission.name}`,
      `Email: ${submission.email}`,
      submission.phone ? `Phone: ${submission.phone}` : null,
      submission.business ? `Business: ${submission.business}` : null,
      "",
      submission.message,
    ]
      .filter(Boolean)
      .join("\n"),
  });
}
