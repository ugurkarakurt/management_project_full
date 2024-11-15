// src/components/dashboard/Navbar.tsx
'use client';

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
} from '@mui/material';
import { signOut, useSession } from 'next-auth/react';

export const Navbar = () => {
  const { data: session } = useSession();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Dashboard
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="body2">
            {session?.user?.email}
          </Typography>
          <Button color="inherit" onClick={() => signOut()}>
            Çıkış Yap
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
