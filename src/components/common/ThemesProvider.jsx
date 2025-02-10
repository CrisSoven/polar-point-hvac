import { createTheme, ThemeProvider } from "@mui/material/styles";
import PropTypes from "prop-types";
import CssBaseline from "@mui/material/CssBaseline";
import themeConfig from "../../config/theme";

const theme = createTheme({
  palette: {
    primary: { main: themeConfig.colors.primary },
    secondary: { main: themeConfig.colors.secondary },
    background: { default: themeConfig.colors.gray },
    text: { primary: themeConfig.colors.content },
    error: { main: themeConfig.colors.red },
    success: { main: themeConfig.colors.green },
    warning: { main: themeConfig.colors.yellow },
  },
  typography: {
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: "2.25rem",
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 600,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.6,
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.6,
    },
    subtitle1: {
      fontSize: "0.75rem",
      fontWeight: 500,
      lineHeight: 1.5,
    },
    button: {
      fontWeight: 600,
      textTransform: "none",
    },
  },
});

export const ThemesProvider = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);

ThemesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
