
import { AuthCard } from '@/components/auth/AuthCard';
import { AuthLayout } from '@/components/auth/AuthLayout';
import { ForgotPasswordForm } from '@/components/auth/ForgotPasswordForm';
import { Typography } from '@mui/material';

export const ForgotPasswordContainer = () => {
  return (
    <AuthLayout>
      <AuthCard>
        <Typography variant="h5" component="h1" align="center" gutterBottom>
          Şifremi Unuttum
        </Typography>
        <Typography variant="body2" align="center" color="text.secondary" sx={{ mb: 3 }}>
          Email adresinizi girin, size şifre sıfırlama linki gönderelim.
        </Typography>
        <ForgotPasswordForm />
      </AuthCard>
    </AuthLayout>
  );
};