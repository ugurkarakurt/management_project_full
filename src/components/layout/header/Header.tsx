'use client';
import React, { useContext } from 'react';
import { useTheme, Badge } from '@mui/material';
import {
  IconBellRinging,
  IconMenu,
  IconSun,
  IconMoon
} from '@tabler/icons-react';
import Profile from './Profile';
import { HeaderProps } from './Header.types';
import {
  AppBarStyled,
  ToolbarStyled,
  MenuIconButton,
  ActionIconButton,
  FlexGrow,
  ActionStack,
  NotificationBadgeWrapper
} from './Header.styles';
import { ColorModeContext } from '@/context/ColorMode.context';

const Header = ({ toggleMobileSidebar }: HeaderProps) => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  const ThemeToggleIcon = theme.palette.mode === 'dark'
    ? <IconSun size="21" stroke="1.5" />
    : <IconMoon size="21" stroke="1.5" />;

  return (
    <AppBarStyled position="sticky" color="default" sx={{ zIndex: 9998 }}>
      <ToolbarStyled>
        <MenuIconButton
          color="inherit"
          aria-label="menu"
          onClick={toggleMobileSidebar}
        >
          <IconMenu width="20" height="20" />
        </MenuIconButton>

        <NotificationBadgeWrapper>
          <ActionIconButton
            size="large"
            aria-label="show notifications"
            aria-controls="msgs-menu"
            aria-haspopup="true"
          >
            <Badge variant="dot" color="primary">
              <IconBellRinging size="21" stroke="1.5" />
            </Badge>
          </ActionIconButton>
        </NotificationBadgeWrapper>

        <ActionIconButton
          size="large"
          aria-label="toggle theme"
          onClick={colorMode.toggleColorMode}
        >
          {ThemeToggleIcon}
        </ActionIconButton>

        <FlexGrow />

        <ActionStack>
          {/* <Button 
            variant="contained" 
            component={Link} 
            href="/authentication/login" 
            disableElevation 
            color="primary"
          >
            Login
          </Button> */}
          <Profile />
        </ActionStack>
      </ToolbarStyled>
    </AppBarStyled>
  );
};

export default Header;