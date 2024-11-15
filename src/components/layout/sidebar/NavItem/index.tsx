import React, { useState, useEffect } from "react";
import {
  ListItemIcon,
  ListItem,
  List,
  styled,
  ListItemText,
  useTheme,
  ListItemButton,
  Collapse,
} from "@mui/material";
import Link from "next/link";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";

// Types
type NavGroup = {
  id?: string;
  title?: string;
  icon?: any;
  href?: string;
  external?: boolean;
  disabled?: boolean;
  children?: NavGroup[];
};

interface ItemType {
  item: NavGroup;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  level?: number;
  pathDirect: string;
}

// Styled Components
const ListItemStyled = styled(ListItem)(({ theme }) => ({
  padding: 0,
  width: "100%",

  ".MuiButtonBase-root": {
    width: "100%",
    marginBottom: "2px",
    padding: "8px 10px",
    borderRadius: "8px",
    backgroundColor: "inherit",
    color: theme.palette.text.secondary,
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
      color: theme.palette.primary.main,
    },
    "&.Mui-selected": {
      color: "white",
      backgroundColor: theme.palette.primary.dark,
      "&:hover": {
        backgroundColor: theme.palette.action.hover,
        color: theme.palette.primary.main,
      },
    },
    "&.has-active-child": {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.primary.main,
    },
  },
}));

const StyledListButton = styled(ListItemButton)({
  textDecoration: "none",
  width: "100%",
});

const ChildListItem = styled(ListItem)<{ level?: number }>(({ theme, level }) => ({
  padding: 0,
  marginTop: 1,
  width: "100%",
  ".MuiButtonBase-root": {
    fontSize: "0.875rem",
    borderRadius: "8px",
    backgroundColor: "inherit",
    color: theme.palette.text.secondary,
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
      color: theme.palette.primary.main,
    },
    "&.Mui-selected": {
      color: "white",
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

const NavItem: React.FC<ItemType> = ({ item, level = 0, pathDirect, onClick }) => {
  const theme = useTheme();
  const Icon = item.icon;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (item.children) {
      const isChildActive = item.children.some((child) => child.href === pathDirect);
      setOpen(isChildActive);
    }
  }, [item.children, pathDirect]);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (item.children) {
      setOpen((prev) => !prev);
    } else {
      onClick(e);
    }
  };

  const renderIcon = item.icon ? <Icon stroke={1.5} size="1.3rem" /> : null;

  if (item.children) {
    const hasActiveChild = item.children.some((child) => child.href === pathDirect);

    return (
      <>
        <ListItemStyled>
          <StyledListButton
            onClick={handleClick}
            selected={hasActiveChild}
            className={hasActiveChild ? "has-active-child" : ""}
          >
            <ListItemIcon sx={{ minWidth: "36px", color: "inherit" }}>
              {renderIcon}
            </ListItemIcon>
            <ListItemText primary={item.title} primaryTypographyProps={{ fontSize: "0.8rem" }} />
            {open ? <IconChevronUp size="0.8rem" /> : <IconChevronDown size="0.8rem" />}
          </StyledListButton>
        </ListItemStyled>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {item.children.map((child) => (
              <ChildListItem key={child.id} level={level + 1}>
                <Link
                  href={child.href || ""}
                  passHref
                  style={{ textDecoration: "none", width: "100%" }}
                  target={child.external ? "_blank" : undefined}
                >
                  <StyledListButton
                    onClick={onClick}
                    selected={pathDirect === child.href}
                    disabled={child.disabled}
                  >
                    {/* {child.icon && (
                      <ListItemIcon sx={{ minWidth: "36px", color: "inherit" }}>
                        <child.icon stroke={1.5} size="1.1rem" />
                      </ListItemIcon>
                    )} */}
                    <ListItemText
                      primary={child.title}
                      primaryTypographyProps={{ fontSize: "0.8rem", fontWeight: 400, marginLeft: "30px" }}
                    />
                  </StyledListButton>
                </Link>
              </ChildListItem>
            ))}
          </List>
        </Collapse>
      </>
    );
  }

  return (
    <ListItemStyled>
      <Link
        href={item.href || ""}
        passHref
        style={{ textDecoration: "none", width: "100%" }}
        target={item.external ? "_blank" : undefined}
      >
        <StyledListButton
          onClick={onClick}
          selected={pathDirect === item.href}
          disabled={item.disabled}
        >
          <ListItemIcon sx={{ minWidth: "36px", color: "inherit" }}>
            {renderIcon}
          </ListItemIcon>
          <ListItemText primary={item.title} />
        </StyledListButton>
      </Link>
    </ListItemStyled>
  );
};

export default NavItem;
