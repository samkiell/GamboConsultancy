import { NextResponse } from "next/server";
import { Resend } from "resend";
import { saveMasterclassRegistration } from "@/lib/storage";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, organization, state, county, phone, email, age } = body;

    if (!fullName || !organization || !state || !county || !phone || !email || !age) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // 1. Persist directly to Neon PostgreSQL database
    const saved = await saveMasterclassRegistration({
      fullName,
      organization,
      state,
      county,
      phone,
      email,
      age,
    });

    // 2. Dispatch email notification if Resend API key is available
    if (resend) {
      try {
        await resend.emails.send({
          from: "onboarding@resend.dev",
          to: "gamboconsultancy@gmail.com",
          subject: `New Master Class Registration - ${fullName}`,
          html: `
            <h2>New Master Class 2026 Registration</h2>
            <p><strong>Registration ID:</strong> ${saved.id}</p>
            <p><strong>Full Name:</strong> ${fullName}</p>
            <p><strong>Organization:</strong> ${organization}</p>
            <p><strong>State:</strong> ${state}</p>
            <p><strong>County:</strong> ${county}</p>
            <p><strong>Phone Number:</strong> ${phone}</p>
            <p><strong>Email Address:</strong> ${email}</p>
            <p><strong>Age Range:</strong> ${age}</p>
          `,
        });
      } catch (emailErr) {
        console.warn("Resend email delivery notice:", emailErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Registration submitted successfully",
      registration: saved,
    });
  } catch (error: any) {
    console.error("Masterclass registration error:", error);
    return NextResponse.json(
      { error: error?.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}

