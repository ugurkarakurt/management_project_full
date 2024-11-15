// src/components/auth/LoginForm.tsx
'use client';

import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';  // Controller ekledik
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import {
  TextField,
  Button,
  Box,
  Alert,
  CircularProgress,
} from '@mui/material';
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email('Geçerli bir email adresi girin'),
  password: z.string().min(6, 'Şifre en az 6 karakter olmalıdır'),
});

type LoginFormData = z.infer<typeof loginSchema>;

export const LoginForm = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      setIsLoading(true);
      setError(null);

      const result = await signIn('credentials', {
        redirect: false,
        email: data.email,
        password: data.password,
      });

      if (result?.error) {
        setError('Email veya şifre hatalı');
        return;
      }

      router.push('/');
      router.refresh();
    } catch (error) {
      setError('Bir hata oluştu');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Box display="flex" flexDirection="column" gap={3}>
        {error && <Alert severity="error">{error}</Alert>}

        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Email"
              type="email"
              fullWidth
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Şifre"
              type="password"
              fullWidth
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          )}
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
            'Giriş Yap'
          )}
        </Button>

        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Button
            onClick={() => router.push('/register')}
            variant="text"
            sx={{ textTransform: 'none' }}
          >
            Hesabınız yok mu? Kayıt olun
          </Button>
          <Button
            onClick={() => router.push('/forgot-password')}
            variant="text"
            sx={{ textTransform: 'none' }}
          >
            Şifremi Unuttum
          </Button>
        </Box>
      </Box>
    </form>
  );
};