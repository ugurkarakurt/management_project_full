// components/profile/ProfileHeader.tsx
'use client';

import { useCallback, useState } from 'react';
import { put } from '@vercel/blob';
import { Avatar, Box, Typography, Button } from '@mui/material';
import { useSession } from 'next-auth/react';
import { IconUpload } from '@tabler/icons-react';
import { useNotification } from '@/context/Notification.context';
import { profileService } from '@/services/profile';

export function ProfileHeader() {
  const { data: session, update } = useSession();
  const [uploading, setUploading] = useState(false);
  const { showNotification } = useNotification();

  const handleUpload = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return;
    setUploading(true);

    try {
      const file = e.target.files[0];
      const { url } = await put(`profile-images/${Date.now()}-${file.name}`, file, {
        access: 'public',
        token: process.env.NEXT_PUBLIC_BLOB_READ_WRITE_TOKEN
      });

      const updatedUser = await profileService.updateImage(url);
      await update({ ...session, user: { ...session?.user, image: updatedUser.image } });
      showNotification('Fotoğraf güncellendi', 'success');
    } catch (error) {
      showNotification('Hata oluştu', 'error');
    } finally {
      setUploading(false);
    }
  }, [session, update, showNotification]);

  return (
    <Box display="flex" alignItems="center" gap={3} mb={4}>
      <Box position="relative">
        <Avatar
          src={session?.user?.image || '/images/profile/user-1.jpg'}
          alt={session?.user?.name || 'Profile'}
          sx={{ width: 120, height: 120 }}
        />
        <Button
          component="label"
          variant="contained"
          size="small"
          disabled={uploading}
          startIcon={<IconUpload size={16} />}
          sx={{
            position: 'absolute',
            bottom: -10,
            left: '50%',
            transform: 'translateX(-50%)',
            minWidth: 'auto'
          }}
        >
          {uploading ? 'Yükleniyor...' : 'Yükle'}
          <input
            type="file"
            hidden
            accept="image/*"
            onChange={handleUpload}
          />
        </Button>
      </Box>
      <Box>
        <Typography variant="h5">{session?.user?.name}</Typography>
        <Typography color="textSecondary">{session?.user?.email}</Typography>
      </Box>
    </Box>
  );
}