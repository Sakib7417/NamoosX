// /app/api/send-email/route.js
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY); // Your Resend API Key

export async function POST(req) {
  try {
    const { name, email, mobile, message } = await req.json();

    // Send email using Resend
    await resend.emails.send({
      from: 'onboarding@resend.dev', // ✅ Must be a verified sender in Resend
      to: 'sakibansari1115@gmail.com', // Your email
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error('Email send error:', err);
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500 });
  }
}
