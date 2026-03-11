"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail({ name, email, message }) {
  try {
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "nilouasghari@gmail.com",
      subject: `New message from ${name}`,
      replyTo: email,
      html: `<p>You have a new message from ${name} (${email}):</p><p>${message}</p>`,
    });

    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);

    return { success: false };
  }
}
