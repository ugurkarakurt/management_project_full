// src/containers/auth/LoginContainer.tsx
import { AuthCard } from '@/components/auth/AuthCard';
import { AuthLayout } from '@/components/auth/AuthLayout';
import { LoginForm } from '@/components/auth/LoginForm';
import { Typography } from '@mui/material';

export const LoginContainer = () => {
  return (
    <AuthLayout>
      <AuthCard>
        <Typography variant="h5" component="h1" align="center" gutterBottom>
          Giriş Yap
        </Typography>
        <LoginForm />
      </AuthCard>
    </AuthLayout>
  );
};