import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, organization, state, county, phone, email, age } =
      body;

    if (!fullName || !organization || !state || !county || !phone || !email || !age) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "gamboconsultancy@gmail.com",
      subject: `New Master Class Registration - ${fullName}`,
      html: `
        <h2>New Master Class 2026 Registration</h2>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Organization:</strong> ${organization}</p>
        <p><strong>State:</strong> ${state}</p>
        <p><strong>County:</strong> ${county}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        <p><strong>Email Address:</strong> ${email}</p>
        <p><strong>Age Range:</strong> ${age}</p>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
