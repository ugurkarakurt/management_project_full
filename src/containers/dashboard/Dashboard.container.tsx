// src/containers/dashboard/DashboardContainer.tsx
'use client';

import { Box, Typography, Container } from '@mui/material';
import { useSession } from 'next-auth/react';

export const DashboardContainer = () => {
  const { data: session } = useSession();

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Hoş geldiniz, {session?.user?.name || 'Kullanıcı'}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Bu sizin dashboard sayfanız.
        </Typography>
      </Box>
    </Container>
  );
};