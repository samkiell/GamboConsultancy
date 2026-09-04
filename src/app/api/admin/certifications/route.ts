import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getCertificates } from '@/lib/storage';

async function isAuthenticated() {
  const cookieStore = await cookies();
  const token = cookieStore.get('cert_admin_token');
  const adminSecret = process.env.CERT_ADMIN_SECRET;
  return token && token.value === adminSecret;
}

export async function GET() {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const certificates = await getCertificates();
    return NextResponse.json({ certificates });
  } catch (error: any) {
    return NextResponse.json(
      { error: 'Failed to fetch certificates: ' + error.message },
      { status: 500 }
    );
  }
}
