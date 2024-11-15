// src/app/api/auth/reset-password/route.ts
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { z } from 'zod';

const resetPasswordSchema = z.object({
  token: z.string(),
  password: z.string().min(6),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { token, password } = resetPasswordSchema.parse(body);

    // Token kontrolü
    const resetRecord = await prisma.passwordReset.findUnique({
      where: { token },
      include: { user: true },
    });

    if (!resetRecord) {
      return NextResponse.json(
        { message: 'Geçersiz veya süresi dolmuş token' },
        { status: 400 }
      );
    }

    if (resetRecord.expires < new Date()) {
      return NextResponse.json(
        { message: 'Token süresi dolmuş' },
        { status: 400 }
      );
    }

    // Şifreyi güncelle
    await prisma.user.update({
      where: { email: resetRecord.email },
      data: { password }, // Gerçekte hash'lenmiş olmalı
    });

    // Kullanılan token'ı sil
    await prisma.passwordReset.delete({
      where: { token },
    });

    return NextResponse.json(
      { message: 'Şifre başarıyla güncellendi' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Reset password error:', error);
    return NextResponse.json(
      { message: 'Bir hata oluştu' },
      { status: 500 }
    );
  }
}