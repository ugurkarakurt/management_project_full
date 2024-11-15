import { BoxProps, ContainerProps } from "@mui/material";

export interface LayoutProps {
  children: React.ReactNode;
}

export type DeviceType = 'tv' | 'laptop' | 'tablet' | 'phone';

export interface MainWrapperProps { }

export interface PageWrapperProps { }

export interface ContentContainerProps extends ContainerProps { }

export interface PageContentProps extends BoxProps { }