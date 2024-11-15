// src/app/api/test-email/route.ts
import { testEmail } from '@/lib/email';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await testEmail();
    return NextResponse.json({ message: 'Test email sent!' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send test email' }, { status: 500 });
  }
}