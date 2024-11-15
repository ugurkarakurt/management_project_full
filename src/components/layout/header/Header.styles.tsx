import { styled } from "@mui/material/styles";
import {
  AppBar,
  Toolbar,
  Box,
  Stack,
  IconButton,
} from "@mui/material";

export const AppBarStyled = styled(AppBar)`
  box-shadow: none;
  background: transparent !important;
  justify-content: center;
  ${props => props.theme.breakpoints.up('lg')} {
    min-height: 70px;
  }
`;

export const ToolbarStyled = styled(Toolbar)`
  width: 100%;
  color: ${props => props.theme.palette.text.secondary};
`;

export const MenuIconButton = styled(IconButton)`
  ${props => props.theme.breakpoints.up('lg')} {
    display: none;
  }
  ${props => props.theme.breakpoints.down('lg')} {
    display: inline;
  }
`;

export const ActionIconButton = styled(IconButton)`
  color: inherit;
  &:hover {
    background-color: ${props => props.theme.palette.action.hover};
  }
`;

export const FlexGrow = styled(Box)`
  flex-grow: 1;
`;

export const ActionStack = styled(Stack)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${props => props.theme.spacing(1)};
`;

export const NotificationBadgeWrapper = styled(Box)`
  .MuiBadge-dot {
    background-color: ${props => props.theme.palette.primary.main};
  }
`;