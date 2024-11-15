import { ProfileFormFields } from "@/types/profile";

// services/profile.ts
export const profileService = {
  updateProfile: async (data: ProfileFormFields) => {
    const res = await fetch('/api/user/update-profile', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    if (!res.ok) throw new Error();
    return res.json();
  },

  updateImage: async (imageUrl: string) => {
    const res = await fetch('/api/user/update-image', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ imageUrl })
    });

    if (!res.ok) throw new Error();
    return res.json();
  }
};