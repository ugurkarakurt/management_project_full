"use client";
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { Alert } from '@mui/material';
import { z } from 'zod';
import {
  PageTitle,
  FormContainer,
  InputContainer,
  InputLabel,
  StyledTextField,
  SubmitButton
} from './ResetPasswordForm.styles';

const resetPasswordSchema = z.object({
  password: z.string().min(6, 'Şifre en az 6 karakter olmalıdır'),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Şifreler eşleşmiyor",
  path: ["confirmPassword"],
});

type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;

interface ResetPasswordFormProps {
  token: string;
}

const ResetPasswordForm = ({ token }: ResetPasswordFormProps) => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: '',
      confirmPassword: ''
    }
  });

  const onSubmit = async (data: ResetPasswordFormData) => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, password: data.password }),
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.message || 'Bir hata oluştu');
      }

      router.push('/login?reset=success');
      
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Bir hata oluştu');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <PageTitle variant="h2">
        Şifre Yenileme
      </PageTitle>

      <FormContainer onSubmit={handleSubmit(onSubmit)} noValidate>
        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

        <InputContainer>
          <InputLabel
            variant="subtitle1"
            component="label"
            htmlFor="password"
          >
            Yeni Şifre
          </InputLabel>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <StyledTextField
                {...field}
                id="password"
                type="password"
                error={!!errors.password}
                helperText={errors.password?.message}
                fullWidth
              />
            )}
          />
        </InputContainer>

        <InputContainer>
          <InputLabel
            variant="subtitle1"
            component="label"
            htmlFor="confirmPassword"
          >
            Yeni Şifre (Tekrar)
          </InputLabel>
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field }) => (
              <StyledTextField
                {...field}
                id="confirmPassword"
                type="password"
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword?.message}
                fullWidth
              />
            )}
          />
        </InputContainer>

        <SubmitButton
          loading={isLoading}
          color="primary"
          variant="contained"
          size="large"
          fullWidth
          type="submit"
        >
          Şifreyi Güncelle
        </SubmitButton>
      </FormContainer>
    </>
  );
};

export default ResetPasswordForm;