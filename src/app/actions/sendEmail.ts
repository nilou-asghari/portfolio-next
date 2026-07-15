'use server'

import { Resend } from 'resend'
import { z } from 'zod'

const resend = new Resend(process.env.RESEND_API_KEY)

const schema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(2000),
})

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

type EmailPayload = {
  name: string
  email: string
  message: string
}

export async function sendEmail(payload: EmailPayload): Promise<{ success: boolean }> {
  const result = schema.safeParse(payload)
  if (!result.success) {
    console.error('Invalid email payload:', result.error.flatten())
    return { success: false }
  }

  const { name, email, message } = result.data

  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(email)
  const safeMessage = escapeHtml(message)

  try {
    await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: 'nilou.asghari@gmail.com',
      subject: `New message from ${safeName}`,
      replyTo: safeEmail,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
          <h2 style="border-bottom: 1px solid #e5e5e5; padding-bottom: 12px;">
            New portfolio message
          </h2>
          <p><strong>From:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Message:</strong></p>
          <p style="background: #f5f5f5; padding: 16px; border-radius: 4px; white-space: pre-wrap;">${safeMessage}</p>
          <p style="color: #999; font-size: 12px; margin-top: 24px;">
            Sent from your portfolio contact form · Reply directly to respond to ${safeName}
          </p>
        </div>
      `,
    })

    return { success: true }
  } catch (error) {
    console.error('Resend error:', error)
    return { success: false }
  }
}
