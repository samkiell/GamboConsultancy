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
        const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://gamboconsultancy.com';
        const adminUrl = `${baseUrl.replace(/\/+$/, '')}/admin?tab=masterclass`;

        await resend.emails.send({
          from: "onboarding@resend.dev",
          to: "gamboconsultancy@gmail.com",
          subject: `New Masterclass Registration - ${fullName}`,
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px;">
              <div style="margin-bottom: 20px; border-bottom: 2px solid #047857; padding-bottom: 12px;">
                <h2 style="color: #064e3b; margin: 0; font-size: 20px;">New Masterclass 2026 Registration</h2>
                <p style="color: #64748b; font-size: 13px; margin: 4px 0 0 0;">Received through Gambo Consultancy Website</p>
              </div>
              
              <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 24px;">
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 8px 0; color: #64748b; width: 140px;">Registration ID:</td>
                  <td style="padding: 8px 0; color: #047857; font-weight: bold; font-family: monospace;">${saved.id}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 8px 0; color: #64748b;">Full Name:</td>
                  <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${fullName}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 8px 0; color: #64748b;">Organization:</td>
                  <td style="padding: 8px 0; color: #0f172a;">${organization}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 8px 0; color: #64748b;">Location:</td>
                  <td style="padding: 8px 0; color: #0f172a;">${county}, ${state}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 8px 0; color: #64748b;">Phone:</td>
                  <td style="padding: 8px 0; color: #0f172a;"><a href="tel:${phone}" style="color: #047857; text-decoration: none;">${phone}</a></td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 8px 0; color: #64748b;">Email:</td>
                  <td style="padding: 8px 0; color: #0f172a;"><a href="mailto:${email}" style="color: #047857; text-decoration: none;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #64748b;">Age Range:</td>
                  <td style="padding: 8px 0; color: #0f172a;">${age}</td>
                </tr>
              </table>

              <div style="background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 18px; text-align: center; margin-bottom: 16px;">
                <p style="margin: 0 0 12px 0; color: #166534; font-size: 14px; font-weight: 500;">
                  Manage applicant status, view details, or export the full roster:
                </p>
                <a href="${adminUrl}" style="background-color: #047857; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: 600; display: inline-block; font-size: 14px;">
                  View All Responses in Admin Portal &rarr;
                </a>
              </div>
              
              <p style="margin: 0; font-size: 11px; color: #94a3b8; text-align: center;">
                Direct admin link: <a href="${adminUrl}" style="color: #047857;">${adminUrl}</a>
              </p>
            </div>
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

