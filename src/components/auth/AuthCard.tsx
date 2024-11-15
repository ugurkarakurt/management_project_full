// src/components/auth/AuthCard.tsx
'use client';

import { Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 450,
  padding: theme.spacing(3),
  boxShadow: theme.shadows[3],
}));

export const AuthCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledCard>
      <CardContent>{children}</CardContent>
    </StyledCard>
  );
};
