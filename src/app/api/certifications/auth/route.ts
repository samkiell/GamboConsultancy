import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  try {
    const { email, secret } = await request.json();

    const adminEmail = process.env.CERT_ADMIN_EMAIL;
    const adminSecret = process.env.CERT_ADMIN_SECRET;

    if (!adminEmail || !adminSecret) {
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    if (email === adminEmail && secret === adminSecret) {
      // In a real app, you'd use a JWT or session ID. 
      // Since we can't use 3rd party libs and no DB, 
      // we'll use a simple signed-like token (secret hash would be better, but this is simple)
      const cookieStore = await cookies();
      
      cookieStore.set('cert_admin_token', adminSecret, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24, // 24 hours
        path: '/',
      });

      return NextResponse.json({ success: true });
    }

    return NextResponse.json(
      { error: 'Invalid credentials' },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get('cert_admin_token');
  const adminSecret = process.env.CERT_ADMIN_SECRET;

  if (token && token.value === adminSecret) {
    return NextResponse.json({ authenticated: true });
  }

  return NextResponse.json({ authenticated: false }, { status: 401 });
}

export async function DELETE() {
  const cookieStore = await cookies();
  cookieStore.delete('cert_admin_token');
  return NextResponse.json({ success: true });
}
