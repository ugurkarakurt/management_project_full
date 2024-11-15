"use client"
// src/app/(dashboard)/dashboard/page.tsx dosyasını güncelle
import { Metadata } from 'next';
import { useSession } from 'next-auth/react';

// export const metadata: Metadata = {
//   title: 'Anasayfa',
//   description: 'Bu anasayfa açıklaması',
// };

import { DashboardContainer } from '@/containers/dashboard/Dashboard.container';
import { Box, Typography } from '@mui/material';

export default function DashboardPage() {
  const { data: session } = useSession();

  return (
    <DashboardContainer>
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Hoş geldiniz, {session?.user?.name || 'Kullanıcı'}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Bu sizin dashboard sayfanız.
        </Typography>
      </Box>
    </DashboardContainer>
  );
}