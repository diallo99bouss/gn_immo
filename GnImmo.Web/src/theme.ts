import { createTheme } from "@mui/material/styles";

export const appTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1698d5",
    },
    secondary: {
      main: "#11b88b",
    },
    background: {
      default: "#f5f8fb",
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: '"Inter", "Segoe UI", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 800 },
    h2: { fontWeight: 800 },
    h3: { fontWeight: 700 },
  },
  shape: {
    borderRadius: 12,
  },
});
