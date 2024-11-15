// src/app/layout.tsx
import { ThemeProvider } from '@/providers/ThemeProvider';
import { SessionProvider } from '@/providers/SessionProvider';
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
        <SessionProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}