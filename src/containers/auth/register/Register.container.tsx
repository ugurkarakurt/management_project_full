// src/containers/auth/RegisterContainer.tsx
import { AuthCard } from '@/components/auth/AuthCard';
import { AuthLayout } from '@/components/auth/AuthLayout';
import { RegisterForm } from '@/components/auth/RegisterForm';
import { Typography } from '@mui/material';

export const RegisterContainer = () => {
  return (
    <AuthLayout>
      <AuthCard>
        <Typography variant="h5" component="h1" align="center" gutterBottom>
          Kayıt Ol
        </Typography>
        <RegisterForm />
      </AuthCard>
    </AuthLayout>
  );
};