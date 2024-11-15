// src/app/(auth)/layout.tsx
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  if (session) {
    redirect('/dashboard');
  }

  return <>{children}</>;
}