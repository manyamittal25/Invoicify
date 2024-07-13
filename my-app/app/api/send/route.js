import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import EmailTemplate from "@/components/email-template";

// Load environment variables from .env
dotenv.config();

// Configure Nodemailer transporter using environment variables
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

export async function POST(request) {
  try {
    // Parse JSON body from the request
    const { email, invoiceUrl } = await request.json();

    // Validate input
    if (!email || !invoiceUrl) {
      return NextResponse.json({ error: 'Email and invoiceUrl are required' }, { status: 400 });
    }

    // Generate the HTML content using your EmailTemplate function
    const htmlContent = EmailTemplate({ invoiceUrl });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "New Invoice from Invoicify",
      html: htmlContent
    };

    // Send email
    await transporter.sendMail(mailOptions);

    console.log(`Email sent to: ${email}`);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error in POST request:", error); // Log detailed error information
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
