'use client';
import { useCallback, useState, useEffect } from 'react';
import { put } from '@vercel/blob';
import { Avatar, Box, Typography, Button } from '@mui/material';
import { useSession } from 'next-auth/react';
import { IconUpload } from '@tabler/icons-react';
import { useNotification } from '@/context/Notification.context';
import { profileService } from '@/services/profile';

export function ProfileHeader() {
  const { data: session, update, status } = useSession();
  const [uploading, setUploading] = useState(false);
  const { showNotification } = useNotification();
  const [userData, setUserData] = useState(session?.user);

  useEffect(() => {
    if (status === 'authenticated' && session?.user) {
      setUserData(session.user);
    }
  }, [session?.user, status]);

  const handleUpload = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return;
    setUploading(true);

    try {
      const file = e.target.files[0];
      const { url } = await put(`profile-images/${Date.now()}-${file.name}`, file, {
        access: 'public',
        token: process.env.NEXT_PUBLIC_BLOB_READ_WRITE_TOKEN
      });

      const response = await profileService.updateImage(url);
      if (response.success && response.user) {
        await update();
      }
      showNotification('Fotoğraf güncellendi', 'success');
    } catch (error) {
      console.error('Upload error:', error);
      showNotification('Hata oluştu', 'error');
    } finally {
      setUploading(false);
    }
  }, [update, showNotification]);

  if (status === 'loading') return null;

  return (
    <Box display="flex" alignItems="center" gap={3} mb={4}>
      <Box position="relative">
        <Avatar
          src={userData?.image || '/images/profile/user-1.jpg'}
          alt={userData?.name || 'Profile'}
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
        <Typography variant="h5">{userData?.name}</Typography>
        <Typography color="textSecondary">{userData?.email}</Typography>
      </Box>
    </Box>
  );
}