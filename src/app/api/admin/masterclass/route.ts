import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getMasterclassRegistrations, updateMasterclassStatus } from '@/lib/storage';

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
    const registrations = await getMasterclassRegistrations();
    return NextResponse.json({ registrations });
  } catch (error: any) {
    return NextResponse.json(
      { error: 'Failed to fetch registrations: ' + error.message },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { id, status } = await request.json();
    if (!id || !status) {
      return NextResponse.json({ error: 'Missing id or status' }, { status: 400 });
    }

    const updated = await updateMasterclassStatus(id, status);
    if (!updated) {
      return NextResponse.json({ error: 'Registration not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, registration: updated });
  } catch (error: any) {
    return NextResponse.json(
      { error: 'Failed to update registration: ' + error.message },
      { status: 500 }
    );
  }
}
