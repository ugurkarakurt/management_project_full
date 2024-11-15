// src/containers/dashboard/DashboardContainer.tsx
'use client';
import { useSession } from 'next-auth/react';

export const DashboardContainer = ({ children }: { children: React.ReactNode }) => {
  const { data: session } = useSession();

  return (
    <>
      {/* <Box sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Hoş geldiniz, {session?.user?.name || 'Kullanıcı'}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Bu sizin dashboard sayfanız.
        </Typography>
      </Box> */}
      {children}
    </>
  );
};