"use client";
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FormGroup, Checkbox, Typography } from "@mui/material";
import { z } from 'zod';
import {
  PageTitle,
  SubTitle,
  FormContainer,
  InputContainer,
  InputLabel,
  StyledTextField,
  RememberMeContainer,
  StyledFormControlLabel,
  StyledLink,
  SubmitButton,
  LinkStack
} from './LoginForm.styles';

const loginSchema = z.object({
  email: z.string().email('Geçerli bir email adresi girin'),
  password: z.string().min(6, 'Şifre en az 6 karakter olmalıdır'),
});

type LoginFormData = z.infer<typeof loginSchema>;

export const LoginForm = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors }
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
    <>
      <PageTitle variant="h2">
        Giriş Yap
      </PageTitle>

      <FormContainer onSubmit={handleSubmit(onSubmit)} noValidate>
        <InputContainer>
          <InputLabel
            variant="subtitle1"
            component="label"
            htmlFor="email"
          >
            Email
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

        <RememberMeContainer>
          <FormGroup>
            <StyledFormControlLabel
              control={
                <Checkbox
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
              }
              label="Bu Cihazı Hatırla"
            />
          </FormGroup>
          <StyledLink href="/forgot-password">
            Parolanızı mı unuttunuz?
          </StyledLink>
        </RememberMeContainer>

        <SubmitButton
          loading={isLoading}
          color="primary"
          variant="contained"
          size="large"
          fullWidth
          type="submit"
        >
          Giriş Yap
        </SubmitButton>

        <LinkStack>
          <Typography
            color="textSecondary"
            variant="h6"
            fontWeight="500"
          >
            İstaç&apos;ta yeni misiniz?
          </Typography>
          <StyledLink href="/register">
            Bir hesap oluşturun
          </StyledLink>
        </LinkStack>
      </FormContainer>
    </>
  );
};

export default LoginForm;