import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { company_name, company_email, subject, message } = await req.json();

    if (!company_name || !company_email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"${company_name}" <${process.env.SMTP_USER}>`,
      replyTo: company_email,
      to: process.env.CONTACT_EMAIL || "manishkunthoor@gmail.com",
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #059669;">New Message from Portfolio</h2>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; width: 120px;">Company</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${company_name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Email</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${company_email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Subject</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${subject}</td>
            </tr>
          </table>
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin: 0 0 10px; color: #374151;">Message</h3>
            <p style="margin: 0; color: #4b5563; line-height: 1.6;">${message}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
          <p style="color: #9ca3af; font-size: 12px;">Sent from your portfolio contact form</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
