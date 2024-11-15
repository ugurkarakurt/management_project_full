// src/containers/auth/ResetPasswordContainer.tsx
import { AuthCard } from '@/components/auth/AuthCard';
import { AuthLayout } from '@/components/auth/AuthLayout';
import { ResetPasswordForm } from '@/components/auth/ResetPasswordForm';
import { Typography } from '@mui/material';

interface ResetPasswordContainerProps {
  token: string;
}

export const ResetPasswordContainer = ({ token }: ResetPasswordContainerProps) => {
  return (
    <AuthLayout>
      <AuthCard>
        <Typography variant="h5" component="h1" align="center" gutterBottom>
          Yeni Şifre Belirleme
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 3 }}>
          Lütfen yeni şifrenizi belirleyin.
        </Typography>
        <ResetPasswordForm token={token} />
      </AuthCard>
    </AuthLayout>
  );
};