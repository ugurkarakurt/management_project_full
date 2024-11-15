import { styled } from "@mui/material/styles";
import Link from "next/link";
import Image from "next/image";
import { Box } from "@mui/material";
import { LogoLinkProps, LogoWrapperProps, LogoImageProps } from "./Logo.types";

export const LogoLink = styled(Link)<LogoLinkProps>(({ theme }) => ({
  height: "70px",
  width: "180px",
  overflow: "hidden",
  display: "block",
  textDecoration: "none",
  '&:focus': {
    outline: 'none',
    boxShadow: `0 0 0 2px ${theme.palette.primary.main}`,
  }
}));

export const LogoWrapper = styled(Box)<LogoWrapperProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: '100%',
  position: 'relative',
}));

export const StyledImage = styled(Image)<LogoImageProps>(({ theme }) => ({
  objectFit: 'contain',
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.02)'
  }
}));