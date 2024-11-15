"use client"
import { styled } from "@mui/material";
import Stack from '@mui/material/Stack';

export const RootLoadingPage = styled(Stack)(({ theme }) => ({
  width: "100%",
  height: "100vh",
  position: "fixed",
  inset: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 99999,
  backgroundColor: theme.palette.background.default,
}));

export const CodeTag = styled("code")(({ theme }) => ({
  backgroundColor: theme.palette.action.focus,
  color: theme.palette.warning.dark,
  borderRadius: 4,
  padding: "0 4px",
  margin: "0 4px"
}));


export const DashboardLoadingPage = styled(Stack)(({ theme }) => ({
  height: "calc(100vh - 170px)",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9,
}));

