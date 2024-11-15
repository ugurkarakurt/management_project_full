import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

export default function CustomSurplusAvatars() {
  return (
    <AvatarGroup
      renderSurplus={(surplus) => <span>+{surplus.toString()[0]}k</span>}
      total={4251}
    >
      <Avatar alt="Remy Sharp" src="/images/products/avatar/1.jpg" />
      <Avatar alt="Travis Howard" src="/images/products/avatar/2.jpg" />
      <Avatar alt="Agnes Walker" src="/images/products/avatar/4.jpg" />
      <Avatar alt="Trevor Henderson" src="/images/products/avatar/5.jpg" />
    </AvatarGroup>
  );
}