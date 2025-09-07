import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Send email to yourself
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>", // Replace with your verified email/domain in Resend
      to: "tharungopinath6@gmail.com", // Replace with your personal email
      subject: "Contact mail from portfolio website",
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p>${message}</p>
      `,
    })

    // Send confirmation email to the sender
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: email,
      subject: "Sender's copy",
      html: `
        <p>Thank you for reaching out! Here's a copy of your message:</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p>${message}</p>
        <p>I'll get back to you soon!</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    )
  }
}
