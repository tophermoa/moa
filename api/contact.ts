import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

interface MailBody {
  name: string;
  email: string;
  message: string;
  idea: string;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const referer = req.headers.referer;
  console.log(referer);

  const { name, email, message, idea } = req.body as MailBody;

  if (!name || !email || !message || !idea) {
    return res.status(400).json({ error: "Missing fields" });
  }

  try {
    await resend.emails.send({
      from: "Gokul — Portfolio <onboarding@resend.dev>",
      to: ["gokul369@outlook.com"],
      subject: `Need some insights on ${idea}`,
      replyTo: email,
      html: `
        <div style="font-family: system-ui; line-height:1.6">
          <h2>New Contact Message</h2>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Message:</b></p>
          <p>${message}</p>
        </div>
      `,
    });

    return res.status(200).json({ emailSent: true });
  } catch (err) {
    console.error("Resend error:", err);
    return res.status(500).json({ error: "Email failed" });
  }
}
