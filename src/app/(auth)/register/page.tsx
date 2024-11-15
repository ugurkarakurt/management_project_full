// src/app/(auth)/register/page.tsx
import { RegisterContainer } from '@/containers/auth/register/Register.container';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kayıt Ol',
  description: 'Yeni hesap oluşturun',
};

export default function RegisterPage() {
  return <RegisterContainer />;
}