// src/components/auth/AuthLayout.tsx
'use client';

import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const AuthWrapper = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(2),
  background: theme.palette.grey[100],
}));

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return <AuthWrapper>{children}</AuthWrapper>;
};