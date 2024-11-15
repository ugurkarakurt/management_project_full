import { styled, Container, Box } from "@mui/material";
import {
  MainWrapperProps,
  PageWrapperProps,
  ContentContainerProps,
  PageContentProps
} from "./dashboard.types";

export const MainWrapper = styled("div")<MainWrapperProps>(({ theme }) => ({
  display: "flex",
  minHeight: "100vh",
  width: "100%",
  position: "relative",

}));

export const PageWrapper = styled("div")<PageWrapperProps>(({ theme }) => ({
  display: "flex",
  flexGrow: 1,
  paddingBottom: theme.spacing(7.5),
  flexDirection: "column",
  backgroundColor: theme.palette.background.default,
}));

export const ContentContainer = styled(Container)<ContentContainerProps>(({ theme }) => ({
  paddingTop: theme.spacing(0),
}));

export const PageContent = styled(Box)<PageContentProps>(({ theme }) => ({
  minHeight: "calc(100vh - 170px)",
}));