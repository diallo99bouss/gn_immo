import { AppBar, Box, Button, Container, Stack, Toolbar, Typography } from "@mui/material";
import ApartmentIcon from "@mui/icons-material/Apartment";
import LanguageIcon from "@mui/icons-material/Language";
import { Link as RouterLink, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const navLinkStyle = ({ isActive }: { isActive: boolean }) => ({
  color: isActive ? "#1698d5" : "#1f2937",
  fontWeight: isActive ? 700 : 500,
  textDecoration: "none",
  borderBottom: isActive ? "2px solid #1698d5" : "2px solid transparent",
  paddingBottom: 6,
});

export function Navigation() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const next = i18n.language === "fr" ? "en" : "fr";
    void i18n.changeLanguage(next);
  };

  return (
    <AppBar position="sticky" elevation={1} color="inherit">
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ py: 1.5, gap: 3 }}>
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            component={RouterLink}
            to="/"
            sx={{ textDecoration: "none", color: "primary.main", mr: 2 }}
          >
            <ApartmentIcon />
            <Typography variant="h5" fontWeight={800}>
              GN IMMO
            </Typography>
          </Stack>

          <Stack direction="row" spacing={3} sx={{ flex: 1, display: { xs: "none", md: "flex" } }}>
            <NavLink to="/" style={navLinkStyle}>
              {t("nav.home")}
            </NavLink>
            <NavLink to="/catalog" style={navLinkStyle}>
              {t("nav.catalog")}
            </NavLink>
            <NavLink to="/services" style={navLinkStyle}>
              {t("nav.services")}
            </NavLink>
            <NavLink to="/about" style={navLinkStyle}>
              {t("nav.about")}
            </NavLink>
            <NavLink to="/contact" style={navLinkStyle}>
              {t("nav.contact")}
            </NavLink>
          </Stack>

          <Box sx={{ ml: "auto", display: "flex", alignItems: "center", gap: 1.25 }}>
            <Button
              variant="text"
              startIcon={<LanguageIcon />}
              onClick={toggleLanguage}
              sx={{ textTransform: "none" }}
            >
              {i18n.language.toUpperCase()}
            </Button>
            <Button component={RouterLink} to="/login" color="inherit" sx={{ textTransform: "none" }}>
              {t("nav.login")}
            </Button>
            <Button component={RouterLink} to="/register" variant="contained" sx={{ textTransform: "none" }}>
              {t("nav.register")}
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
