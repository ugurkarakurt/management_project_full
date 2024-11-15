// src/app/(auth)/forgot-password/page.tsx
import { ForgotPasswordContainer } from '@/containers/auth/forgot-password/ForgotPassword.container';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Şifremi Unuttum',
  description: 'Şifrenizi sıfırlamak için email adresinizi girin',
};

export default function ForgotPasswordPage() {
  return <ForgotPasswordContainer />;
}