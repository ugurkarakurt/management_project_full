import { Box, Card, Grid, styled, keyframes } from "@mui/material";
import { BoxProps, CardProps, GridProps } from "@mui/material";

// Gradient animasyonu için keyframes
const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

// Tip güvenliği için interface'ler
interface PageContainerBoxProps extends BoxProps { }
interface GridContainerProps extends GridProps { }
interface GridItemProps extends GridProps { }
interface CardContainerProps extends CardProps { }
interface LogoContainerProps extends BoxProps { }

export const PageContainerBox = styled(Box)<PageContainerBoxProps>(({ theme }) => ({
  position: "relative",
  minHeight: "100vh",
  "&:before": {
    content: '""',
    background: "radial-gradient(#d2f1df, #d3d7fa, #bad8f4)",
    backgroundSize: "400% 400%",
    animation: `${gradientAnimation} 15s ease infinite`,
    position: "absolute",
    height: "100%",
    width: "100%",
    opacity: "0.3",
    top: 0,
    left: 0,
    zIndex: 0,
  }
}));

export const GridContainer = styled(Grid)<GridContainerProps>(({ theme }) => ({
  justifyContent: "center",
  minHeight: "100vh",
  margin: 0,
  padding: theme.spacing(2)
}));

export const GridItem = styled(Grid)<GridItemProps>(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(2)
}));

export const CardContainer = styled(Card)<CardContainerProps>(({ theme }) => ({
  padding: theme.spacing(5),
  zIndex: 1,
  width: "100%",
  maxWidth: 500,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[9],
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
  }
}));

export const LogoContainer = styled(Box)<LogoContainerProps>(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));