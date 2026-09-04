import { NextResponse } from 'next/server';
import { saveMasterclassRegistration } from '@/lib/storage';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const fullName = body.fullName || body.name;
    const { email, phone, occupation, organization, topicInterest, expectation } = body;

    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields (fullName, email, phone)' },
        { status: 400 }
      );
    }

    // Save to Neon PostgreSQL
    const registration = await saveMasterclassRegistration({
      fullName: String(fullName).trim(),
      email: String(email).trim().toLowerCase(),
      phone: String(phone).trim(),
      occupation: occupation ? String(occupation).trim() : '',
      organization: organization ? String(organization).trim() : '',
      topicInterest: topicInterest ? String(topicInterest).trim() : '',
      expectation: expectation ? String(expectation).trim() : '',
    });

    return NextResponse.json({
      success: true,
      message: 'Masterclass registration received successfully',
      registration,
    });
  } catch (error: any) {
    console.error('Masterclass registration error:', error);
    return NextResponse.json(
      { error: 'Registration failed: ' + (error?.message || 'Server error') },
      { status: 500 }
    );
  }
}
