// src/app/(auth)/login/page.tsx
import { LoginContainer } from '@/containers/auth/login/Login.container';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Giriş Yap',
  description: 'Yönetim paneline giriş yapın',
};

export default function LoginPage() {
  return <LoginContainer />;
}