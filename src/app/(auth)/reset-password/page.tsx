// src/app/(auth)/reset-password/page.tsx
import { ResetPasswordContainer } from '@/containers/auth/reset-password/ResetPassword.container';
import { redirect } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Şifre Sıfırlama',
  description: 'Yeni şifrenizi belirleyin',
};

export default function ResetPasswordPage({
  searchParams,
}: {
  searchParams: { token: string };
}) {
  if (!searchParams.token) {
    redirect('/login');
  }

  return <ResetPasswordContainer token={searchParams.token} />;
}