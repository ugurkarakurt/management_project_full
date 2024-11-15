import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import { signOut } from "next-auth/react";

import {
  Avatar,
  Box,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";

import { IconListCheck, IconMail, IconUser } from "@tabler/icons-react";
import { useNotification } from "@/context/Notification.context";
import { LoadingButton } from "@mui/lab";

const Profile = () => {
  const { showNotification } = useNotification();
  const [loading, setLoading] = useState(false);
  const [anchorEl2, setAnchorEl2] = useState(null);

  const router = useRouter();

  const handleClick2 = (event: any) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const logOut = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();
    try {
      await signOut({ redirect: false });
      router.push('/authentication/login');
      showNotification('Başarıyla çıkış yapıldı', 'success');
    } catch (error: any) {
      showNotification('Çıkış yaparken bir hata oluştu', 'error');
      console.error('Logout failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      <IconButton
        size="large"
        aria-label="show 11 new notifications"
        color="inherit"
        aria-controls="msgs-menu"
        aria-haspopup="true"
        sx={{
          ...(typeof anchorEl2 === "object" && {
            color: "primary.main",
          }),
        }}
        onClick={handleClick2}
      >
        <Avatar
          src="/images/profile/user-1.jpg"
          alt="image"
          sx={{
            width: 35,
            height: 35,
          }}
        />
      </IconButton>
      {/* ------------------------------------------- */}
      {/* Message Dropdown */}
      {/* ------------------------------------------- */}
      <Menu
        id="msgs-menu"
        anchorEl={anchorEl2}
        keepMounted
        open={Boolean(anchorEl2)}
        onClose={handleClose2}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        sx={{
          "& .MuiMenu-paper": {
            width: "200px",
          },
        }}
      >
        <MenuItem onClick={() => router.push('/profile')}>
          <ListItemIcon>
            <IconUser width={20} />
          </ListItemIcon>
          <ListItemText>My Profile</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <IconMail width={20} />
          </ListItemIcon>
          <ListItemText>My Account</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <IconListCheck width={20} />
          </ListItemIcon>
          <ListItemText>My Tasks</ListItemText>
        </MenuItem>
        <Box mt={1} py={1} px={2}>
          <LoadingButton
            variant="outlined"
            color="primary"
            loading={loading}
            fullWidth
            onClick={logOut}
          >
            Logout
          </LoadingButton>
        </Box>
      </Menu>
    </Box>
  );
};

export default Profile;