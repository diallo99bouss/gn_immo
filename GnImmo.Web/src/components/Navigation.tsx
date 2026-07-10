import { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import ApartmentIcon from "@mui/icons-material/Apartment";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const navLinkStyle = ({ isActive }: { isActive: boolean }) => ({
  color: isActive ? "#1698d5" : "#1f2937",
  fontWeight: isActive ? 700 : 500,
  textDecoration: "none",
  borderBottom: isActive ? "2px solid #1698d5" : "2px solid transparent",
  paddingBottom: 6,
});

const mobileNavLinkStyle = ({ isActive }: { isActive: boolean }) => ({
  color: isActive ? "#1698d5" : "#1f2937",
  fontWeight: isActive ? 700 : 500,
  textDecoration: "none",
  fontSize: "1.1rem",
});

const navLinks = [
  { to: "/", key: "nav.home" },
  { to: "/catalog", key: "nav.catalog" },
  { to: "/services", key: "nav.services" },
  { to: "/about", key: "nav.about" },
  { to: "/contact", key: "nav.contact" },
] as const;

export function Navigation() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const next = i18n.language === "fr" ? "en" : "fr";
    void i18n.changeLanguage(next);
  };

  return (
    <AppBar position="sticky" elevation={1} color="inherit">
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ py: 1.5, gap: { xs: 1, md: 3 } }}>
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            component={RouterLink}
            to="/"
            sx={{ textDecoration: "none", color: "primary.main", mr: { xs: 0, md: 2 } }}
          >
            <ApartmentIcon />
            <Typography variant="h5" fontWeight={800}>
              GN IMMO
            </Typography>
          </Stack>

          <Stack direction="row" spacing={3} sx={{ flex: 1, display: { xs: "none", md: "flex" } }}>
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} style={navLinkStyle}>
                {t(link.key)}
              </NavLink>
            ))}
          </Stack>

          <Box sx={{ ml: "auto", display: { xs: "none", md: "flex" }, alignItems: "center", gap: 1.25 }}>
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

          <Box sx={{ ml: "auto", display: { xs: "flex", md: "none" }, alignItems: "center", gap: 0.5 }}>
            <IconButton onClick={toggleLanguage} aria-label={t("nav.language")} color="inherit">
              <LanguageIcon fontSize="small" />
            </IconButton>
            <IconButton onClick={() => setMenuOpen(true)} aria-label={t("nav.menu")} color="inherit">
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      <Drawer anchor="right" open={menuOpen} onClose={() => setMenuOpen(false)}>
        <Box sx={{ width: 280, p: 3, display: "flex", flexDirection: "column", height: "100%" }}>
          <Stack direction="row" alignItems="center" spacing={1} sx={{ color: "primary.main", mb: 3 }}>
            <ApartmentIcon />
            <Typography variant="h6" fontWeight={800}>
              GN IMMO
            </Typography>
          </Stack>

          <Stack spacing={2.5} onClick={() => setMenuOpen(false)}>
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} style={mobileNavLinkStyle}>
                {t(link.key)}
              </NavLink>
            ))}
          </Stack>

          <Divider sx={{ my: 3 }} />

          <Stack spacing={1.5} onClick={() => setMenuOpen(false)}>
            <Button component={RouterLink} to="/login" color="inherit" variant="outlined" fullWidth sx={{ textTransform: "none" }}>
              {t("nav.login")}
            </Button>
            <Button component={RouterLink} to="/register" variant="contained" fullWidth sx={{ textTransform: "none" }}>
              {t("nav.register")}
            </Button>
          </Stack>
        </Box>
      </Drawer>
    </AppBar>
  );
}
