// src/components/auth/ForgotPasswordForm.tsx
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  TextField,
  Button,
  Box,
  Alert,
  CircularProgress,
  Link as MuiLink,
} from '@mui/material';
import Link from 'next/link';

const forgotPasswordSchema = z.object({
  email: z.string().email('Geçerli bir email adresi girin'),
});

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

export const ForgotPasswordForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async (data: ForgotPasswordFormData) => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      }

      setSuccess(true);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Bir hata oluştu');
    } finally {
      setIsLoading(false);
    }
  };

  if (success) {
    return (
      <Box>
        <Alert severity="success" sx={{ mb: 3 }}>
          Şifre sıfırlama linki email adresinize gönderildi. Lütfen email kutunuzu kontrol edin.
        </Alert>
        <Link href="/login" passHref>
          <MuiLink>Giriş sayfasına dön</MuiLink>
        </Link>
      </Box>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Box display="flex" flexDirection="column" gap={3}>
        {error && <Alert severity="error">{error}</Alert>}

        <TextField
          label="Email"
          type="email"
          fullWidth
          {...register('email')}
          error={!!errors.email}
          helperText={errors.email?.message}
        />

        <Button
          type="submit"
          variant="contained"
          size="large"
          fullWidth
          disabled={isLoading}
        >
          {isLoading ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            'Şifre Sıfırlama Linki Gönder'
          )}
        </Button>

        <Link href="/login" passHref>
          <MuiLink>Giriş sayfasına dön</MuiLink>
        </Link>
      </Box>
    </form>
  );
};