import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { saveInquiry } from '@/lib/storage';

const resend = new Resend(process.env.RESEND_API_KEY);

const departmentMap: Record<string, string> = {
  education: 'Educational Consultancy',
  it: 'IT Consultancy',
  leadership: 'Leadership Consultancy',
  mentorship: 'Mentorship Consultancy',
  lifecoach: 'Life Coaching Consultancy',
  general: 'General Inquiry',
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, department, message } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const readableDept = departmentMap[department] || department || 'General Inquiry';

    // 1. Save real inquiry to persistent store
    const savedRecord = await saveInquiry({
      name,
      email,
      phone,
      department: readableDept,
      message,
    });

    // 2. Dispatch email notification via Resend
    let emailResult = null;
    try {
      if (process.env.RESEND_API_KEY) {
        emailResult = await resend.emails.send({
          from: 'onboarding@resend.dev',
          to: 'gamboconsultancy@gmail.com',
          subject: `New Contact Form Submission - Gambo Consultancy (${readableDept})`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Inquiry ID:</strong> ${savedRecord.id}</p>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Department:</strong> ${readableDept}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
          `,
        });
      }
    } catch (emailErr) {
      console.error('Failed to send notification email via Resend:', emailErr);
    }

    return NextResponse.json({
      success: true,
      inquiry: savedRecord,
      emailResult,
    });
  } catch (error: any) {
    console.error('Contact submission error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error: ' + (error?.message || '') },
      { status: 500 }
    );
  }
}
