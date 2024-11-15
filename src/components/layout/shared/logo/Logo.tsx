'use client';
import { useTheme } from "@mui/material";
import { LogoLink, LogoWrapper, StyledImage } from "./Logo.styles";

const Logo = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <LogoLink href="/">
      <LogoWrapper>
        <StyledImage
          src={isDarkMode ? "/images/logos/light-logo.svg" : "/images/logos/dark-logo.svg"}
          alt="logo"
          height={70}
          width={174}
          priority
        />
      </LogoWrapper>
    </LogoLink>
  );
};

export default Logo;