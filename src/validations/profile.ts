// validations/profile.ts
import { z } from 'zod';

export const profileSchema = z.object({
  name: z.string().min(2, 'İsim en az 2 karakter olmalıdır'),
  email: z.string().email('Geçerli bir email adresi girin')
});

// services/profile.ts
import { ProfileFormFields } from '@/types/profile';

export const updateProfile = async (data: ProfileFormFields) => {
  const res = await fetch('/api/user/update-profile', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  if (!res.ok) throw new Error();

  return res.json();
};