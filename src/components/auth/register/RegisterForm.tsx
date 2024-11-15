"use client";
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { Typography } from '@mui/material';
import { z } from 'zod';
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
} from './RegisterForm.styles';

const registerSchema = z.object({
  username: z.string().min(2, 'Kullanıcı adı en az 2 karakter olmalıdır'),
  email: z.string().email('Geçerli bir email adresi girin'),
  password: z.string().min(6, 'Şifre en az 6 karakter olmalıdır'),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Şifreler eşleşmiyor",
  path: ["confirmPassword"],
});

type RegisterFormData = z.infer<typeof registerSchema>;

export const RegisterForm = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.username,
          email: data.email,
          password: data.password,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Bir hata oluştu');
      }

      router.push('/login?registered=true');
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Bir hata oluştu');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <PageTitle variant="h2">
        Kayıt Ol
      </PageTitle>

      <SubTitle variant="subtitle1">
        Slogan Ipsum
      </SubTitle>

      <FormContainer onSubmit={handleSubmit(onSubmit)} noValidate>
        <InputContainer>
          <InputLabel
            variant="subtitle1"
            component="label"
            htmlFor="username"
          >
            Kullanıcı Adı
          </InputLabel>
          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <StyledTextField
                {...field}
                id="username"
                type="text"
                error={!!errors.username}
                helperText={errors.username?.message}
                fullWidth
              />
            )}
          />
        </InputContainer>

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

        <InputContainer>
          <InputLabel
            variant="subtitle1"
            component="label"
            htmlFor="password"
          >
            Şifre
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
            Şifre Tekrar
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
          Kayıt Ol
        </SubmitButton>

        <LinkStack>
          <Typography
            color="textSecondary"
            variant="h6"
            fontWeight="400"
          >
            Zaten bir hesabınız var mı?
          </Typography>
          <StyledLink href="/login">
            Giriş Yap
          </StyledLink>
        </LinkStack>
      </FormContainer>
    </>
  );
};

export default RegisterForm;