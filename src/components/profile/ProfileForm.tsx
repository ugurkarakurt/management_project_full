'use client';
import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSession } from 'next-auth/react';
import { useNotification } from '@/context/Notification.context';
import { ProfileFormFields } from '@/types/profile';
import { profileSchema, updateProfile } from '@/validations/profile';
import { zodResolver } from '@hookform/resolvers/zod';
import { Grid, TextField, Button } from '@mui/material';

export const ProfileForm = () => {
  const { data: session, update } = useSession();
  const { showNotification } = useNotification();
  
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ProfileFormFields>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: '',
      email: ''
    }
  });

  useEffect(() => {
    if (session?.user) {
      reset({
        name: session.user.name || '',
        email: session.user.email || ''
      });
    }
  }, [session, reset]);

  const onSubmit = useCallback(async (data: ProfileFormFields) => {
    try {
      const updatedUser = await updateProfile(data);
      
      await update({
        ...session,
        user: {
          ...session?.user,
          ...updatedUser
        }
      });
      
      showNotification('Profil güncellendi', 'success');
    } catch (error) {
      showNotification('Güncelleme başarısız', 'error');
    }
  }, [session, update, showNotification]);

  if (!session) return null;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="İsim"
            {...register('name')}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Email"
            {...register('email')}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Güncelleniyor...' : 'Güncelle'}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};