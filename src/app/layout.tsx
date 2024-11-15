// src/app/layout.tsx
import RootProvider from '@/providers/Root.provider';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Yönetim Paneli',
  description: 'Yönetim Paneli',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>
        <RootProvider>
          {children}
        </RootProvider>
      </body>
    </html>
  );
}