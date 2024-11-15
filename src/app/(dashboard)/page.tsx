// src/app/(dashboard)/dashboard/page.tsx dosyasını güncelle
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Anasayfa',
  description: 'Bu anasayfa açıklaması',
};

import { DashboardContainer } from '@/containers/dashboard/Dashboard.container';

export default function DashboardPage() {
  return <DashboardContainer />;
}