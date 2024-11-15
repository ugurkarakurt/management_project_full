// ForgotPassword.tsx
"use client";
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Alert, Typography } from '@mui/material';
import {
  PageTitle,
  SubTitle,
  FormContainer,
  InputContainer,
  InputLabel,
  StyledTextField,
  SubmitButton,
  LinkStack,
  StyledLink
} from './ForgotPasswordForm.styles';

const forgotPasswordSchema = z.object({
  email: z.string().email('Geçerli bir email adresi girin'),
});

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

export const ForgotPasswordForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: ''
    }
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
      <>
        <PageTitle variant="h2">Şifre Sıfırlama</PageTitle>
        <Alert severity="success" sx={{ mt: 2 }}>
          Şifre sıfırlama linki email adresinize gönderildi. Lütfen email kutunuzu kontrol edin.
        </Alert>
        <LinkStack>
          <StyledLink href="/login">
            Giriş sayfasına dön
          </StyledLink>
        </LinkStack>
      </>
    );
  }

  return (
    <>
      <PageTitle variant="h2">
        Şifre Sıfırlama
      </PageTitle>

      <SubTitle variant="subtitle1">
        Email adresinizi girin, size sıfırlama linki gönderelim
      </SubTitle>

      <FormContainer onSubmit={handleSubmit(onSubmit)} noValidate>
        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
        
        <InputContainer>
          <InputLabel
            variant="subtitle1"
            component="label"
            htmlFor="email"
          >
            Email Adresi
          </InputLabel>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <StyledTextField
                {...field}
                id="email"
                type="email"
                error={!!errors.email}
                helperText={errors.email?.message}
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
          Şifre Sıfırlama Linki Gönder
        </SubmitButton>

        <LinkStack>
          <Typography
            color="textSecondary"
            variant="h6"
            fontWeight="400"
          >
            Şifrenizi hatırladınız mı?
          </Typography>
          <StyledLink href="/login">
            Giriş Yap
          </StyledLink>
        </LinkStack>
      </FormContainer>
    </>
  );
};

export default ForgotPasswordForm;