"use server";

import nodemailer from "nodemailer";
import { validateString, getErrorMessage } from "@/lib/utils";

// Set up the Nodemailer transporter with Gmail's SMTP
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,  // Your Gmail address
    pass: process.env.GMAIL_PASS,  // Your Gmail App Password
  },
});

// Simple HTML template for email content
const generateEmailHtml = (message: string, senderEmail: string) => `
  <div>
    <h2>Message from Contact Form</h2>
    <p><strong>Sender Email:</strong> ${senderEmail}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
  </div>
`;

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  // Generate HTML for the email body
  const emailHtml = generateEmailHtml(message, senderEmail);

  try {
    const mailOptions = {
      from: `"Contact Form" <${process.env.GMAIL_USER}>`, // Sender address
      to: process.env.GMAIL_USER, // Recipient address
      subject: "Message from contact form",
      replyTo: senderEmail, // Reply to the sender's email
      html: emailHtml, // HTML email content
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    return {
      data: info,
    };
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
};
