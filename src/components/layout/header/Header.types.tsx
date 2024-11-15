import { Theme } from "@mui/material";

export interface HeaderProps {
  toggleMobileSidebar: (event: React.MouseEvent<HTMLElement>) => void;
}

export interface AppBarStyledProps {
  theme?: Theme;
}

export interface ToolbarStyledProps {
  theme?: Theme;
}

export interface IconButtonProps {
  isVisible?: boolean;
}