import { createTheme } from "@mui/material/styles";
import { Plus_Jakarta_Sans } from "next/font/google";

export const plus = Plus_Jakarta_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

// 🌞 Light Theme
const baselightTheme = createTheme({
  direction: "ltr",
  palette: {
    primary: {
      main: '#5D87FF',
    },
    secondary: {
      main: '#49BEFF',
    },
    success: {
      main: '#13DEB9',
    },
    info: {
      main: '#539BFF',
    },
    warning: {
      main: '#FFAE1F',
    },
    error: {
      main: '#FA896B',
    },
    background: {
      default: '#F2F6FA',
    },
  },

  typography: {
    fontFamily: plus.style.fontFamily,
    h1: {
      fontWeight: 600,
      fontSize: "2.25rem",
      lineHeight: "2.75rem",
    },
    h2: {
      fontWeight: 600,
      fontSize: "1.875rem",
      lineHeight: "2.25rem",
    },
    h3: {
      fontWeight: 600,
      fontSize: "1.5rem",
      lineHeight: "1.75rem",
    },
    h4: {
      fontWeight: 600,
      fontSize: "1.3125rem",
      lineHeight: "1.6rem",
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.125rem",
      lineHeight: "1.6rem",
    },
    h6: {
      fontWeight: 600,
      fontSize: "1rem",
      lineHeight: "1.2rem",
    },
    button: {
      textTransform: "capitalize",
      fontWeight: 400,
    },
    body1: {
      fontSize: "0.875rem",
      lineHeight: "1.334rem",
    },
    body2: {
      fontSize: "0.75rem",
      lineHeight: "1rem",
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ".MuiPaper-elevation9, .MuiPopover-root .MuiPaper-elevation": {
          boxShadow:
            "rgb(145 158 171 / 30%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 5px 24px -4px !important",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "7px",
        },
      },
    },
  },
});

// 🌙 Dark Theme
const basedarkTheme = createTheme({
  direction: "ltr",
  palette: {
    mode: "dark",
    primary: {
      main: "#5D87FF",
      light: "#3C4251",
      dark: "#4B6CD9",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#49BEFF",
      light: "#7CCEFF",
      dark: "#3A98CC",
      contrastText: "#FFFFFF",
    },
    success: {
      main: "#13DEB9",
      light: "#50E5CA",
      dark: "#0FB99C",
      contrastText: "#FFFFFF",
    },
    info: {
      main: "#539BFF",
      light: "#75B1FF",
      dark: "#4182DB",
      contrastText: "#FFFFFF",
    },
    error: {
      main: "#FA896B",
      light: "#FFA58D",
      dark: "#D67058",
      contrastText: "#FFFFFF",
    },
    warning: {
      main: "#FFAE1F",
      light: "#FFC14D",
      dark: "#DB9419",
      contrastText: "#000000",
    },
    grey: {
      100: "#1F1F1F",
      200: "#2C2C2C",
      300: "#373737",
      400: "#4D4D4D",
      500: "#6F6F6F",
      600: "#8C8C8C",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#9CA3AF",
    },
    background: {
      default: "#15171d",
      paper: "#24262D",
    },
    action: {
      active: "#FFFFFF",
      hover: "rgba(93, 135, 255, 0.08)",
      selected: "rgba(93, 135, 255, 0.16)",
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
  },
  typography: {
    fontFamily: plus.style.fontFamily,
    h1: { fontWeight: 600, fontSize: "2.25rem", lineHeight: "2.75rem" },
    h2: { fontWeight: 600, fontSize: "1.875rem", lineHeight: "2.25rem" },
    h3: { fontWeight: 600, fontSize: "1.5rem", lineHeight: "1.75rem" },
    h4: { fontWeight: 600, fontSize: "1.3125rem", lineHeight: "1.6rem" },
    h5: { fontWeight: 600, fontSize: "1.125rem", lineHeight: "1.6rem" },
    h6: { fontWeight: 600, fontSize: "1rem", lineHeight: "1.2rem" },
    button: { textTransform: "capitalize", fontWeight: 400 },
    body1: { fontSize: "0.875rem", lineHeight: "1.334rem" },
    body2: { fontSize: "0.75rem", lineHeight: "1rem" },
  },
});

export { baselightTheme, basedarkTheme };
