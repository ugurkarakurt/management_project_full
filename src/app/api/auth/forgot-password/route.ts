// src/app/api/auth/forgot-password/route.ts
import { prisma } from '@/lib/prisma';
import { sendResetEmail } from '@/lib/email';
import { NextResponse } from 'next/server';
import { z } from 'zod';
import crypto from 'crypto';

const forgotPasswordSchema = z.object({
  email: z.string().email(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = forgotPasswordSchema.parse(body);

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        { message: 'Bu email adresiyle kayıtlı kullanıcı bulunamadı' },
        { status: 404 }
      );
    }

    // Varsa eski token'ı sil
    await prisma.passwordReset.deleteMany({
      where: { email },
    });

    // Yeni token oluştur
    const resetToken = crypto.randomBytes(32).toString('hex');
    const tokenExpiry = new Date(Date.now() + 3600000); // 1 saat

    // Token'ı kaydet
    await prisma.passwordReset.create({
      data: {
        email,
        token: resetToken,
        expires: tokenExpiry,
      },
    });

    // Email gönder
    await sendResetEmail(email, resetToken);

    return NextResponse.json(
      { message: 'Şifre sıfırlama linki gönderildi' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Forgot password error:', error);
    return NextResponse.json(
      { message: 'Bir hata oluştu' },
      { status: 500 }
    );
  }
}
