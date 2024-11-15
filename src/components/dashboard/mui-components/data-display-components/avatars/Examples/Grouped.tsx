import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

export default function GroupAvatars() {
  return (
    <AvatarGroup max={4}>
      <Avatar alt="Remy Sharp" src="/images/products/avatar/1.jpg" />
      <Avatar alt="Travis Howard" src="/images/products/avatar/2.jpg" />
      <Avatar alt="Cindy Baker" src="/images/products/avatar/3.jpg" />
      <Avatar alt="Agnes Walker" src="/images/products/avatar/1.jpg" />
      <Avatar alt="Trevor Henderson" src="/images/products/avatar/2.jpg" />
    </AvatarGroup>
  );
}