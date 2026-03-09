import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Container,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import VerifiedIcon from "@mui/icons-material/Verified";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import KeyIcon from "@mui/icons-material/Key";
import BusinessIcon from "@mui/icons-material/Business";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Footer } from "../components/Footer";

const heroImages = [
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
];

const featuredProperties = [
  {
    id: 1,
    title: "Villa moderne a Kaloum",
    type: "Vente",
    price: "450 000 000 GNF",
    location: "Kaloum, Conakry",
    details: "4 ch. 3 sdb 250 m2",
    image:
      "https://images.unsplash.com/photo-1622015663381-d2e05ae91b72?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Appartement meuble Ratoma",
    type: "Location",
    price: "3 500 000 GNF/mois",
    location: "Ratoma, Conakry",
    details: "2 ch. 2 sdb 85 m2",
    image:
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Bureau professionnel Almamya",
    type: "Location",
    price: "5 000 000 GNF/mois",
    location: "Almamya, Conakry",
    details: "2 sdb 120 m2",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
  },
];

export function HomePage() {
  const { t } = useTranslation();
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <Box>
      <Box sx={{ position: "relative", minHeight: { xs: 560, md: 720 }, overflow: "hidden" }}>
        {heroImages.map((image, index) => (
          <Box
            key={image}
            sx={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: slideIndex === index ? 1 : 0,
              transition: "opacity 800ms ease",
            }}
          />
        ))}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(120deg, rgba(20,125,184,0.82), rgba(27,191,163,0.62))",
          }}
        />

        <Container sx={{ position: "relative", zIndex: 1, py: { xs: 10, md: 16 } }}>
          <Typography
            variant="h1"
            color="white"
            align="center"
            sx={{ fontSize: { xs: "2.4rem", md: "4.3rem" }, maxWidth: 980, mx: "auto", mb: 3 }}
          >
            {t("home.heroTitle1")}
            <br />
            {t("home.heroTitle2")}
          </Typography>
          <Typography
            align="center"
            color="rgba(255,255,255,0.92)"
            sx={{ fontSize: { xs: "1.1rem", md: "2rem" }, maxWidth: 860, mx: "auto", mb: 7 }}
          >
            {t("home.heroText")}
          </Typography>

          <Box
            sx={{
              backgroundColor: "#f4f5f7",
              borderRadius: 4,
              p: { xs: 2.5, md: 3.5 },
              maxWidth: 1020,
              mx: "auto",
            }}
          >
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 3 }}>
                <FormControl fullWidth size="small">
                  <InputLabel>{t("home.type")}</InputLabel>
                  <Select label={t("home.type")} defaultValue="">
                    <MenuItem value="">{t("home.type")}</MenuItem>
                    <MenuItem value="location">Location</MenuItem>
                    <MenuItem value="vente">Vente</MenuItem>
                    <MenuItem value="meuble">Meuble</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid size={{ xs: 12, md: 3 }}>
                <FormControl fullWidth size="small">
                  <InputLabel>{t("home.city")}</InputLabel>
                  <Select label={t("home.city")} defaultValue="">
                    <MenuItem value="">{t("home.city")}</MenuItem>
                    <MenuItem value="conakry">Conakry</MenuItem>
                    <MenuItem value="kaloum">Kaloum</MenuItem>
                    <MenuItem value="ratoma">Ratoma</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid size={{ xs: 12, md: 3 }}>
                <TextField
                  fullWidth
                  size="small"
                  placeholder={t("home.budget")}
                  InputProps={{ startAdornment: <InputAdornment position="start">GNF</InputAdornment> }}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 3 }}>
                <Button fullWidth variant="contained" size="large" startIcon={<SearchIcon />} sx={{ height: 40 }}>
                  {t("home.search")}
                </Button>
              </Grid>
            </Grid>
          </Box>

          <Stack direction="row" justifyContent="center" spacing={1.2} sx={{ mt: 6 }}>
            {heroImages.map((_, index) => (
              <Box
                key={index}
                onClick={() => setSlideIndex(index)}
                sx={{
                  width: slideIndex === index ? 24 : 8,
                  height: 8,
                  borderRadius: 2,
                  backgroundColor: "white",
                  opacity: slideIndex === index ? 1 : 0.45,
                  cursor: "pointer",
                  transition: "all 250ms ease",
                }}
              />
            ))}
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Box textAlign="center" mb={6}>
          <Typography variant="h3" gutterBottom>
            {t("home.featured")}
          </Typography>
          <Typography color="text.secondary">{t("home.featuredText")}</Typography>
        </Box>

        <Grid container spacing={3}>
          {featuredProperties.map((property) => (
            <Grid key={property.id} size={{ xs: 12, md: 4 }}>
              <Card sx={{ borderRadius: 3, height: "100%" }}>
                <CardMedia component="img" height="220" image={property.image} alt={property.title} />
                <CardContent>
                  <Stack direction="row" spacing={1} mb={2}>
                    <Chip size="small" icon={<VerifiedIcon />} color="success" label={t("home.verified")} />
                    <Chip size="small" color="primary" label={property.type} />
                    {property.id === 2 && <Chip size="small" variant="outlined" label={t("home.furnished")} />}
                  </Stack>
                  <Typography variant="h6" gutterBottom>
                    {property.title}
                  </Typography>
                  <Typography variant="h6" color="primary" gutterBottom>
                    {property.price}
                  </Typography>
                  <Typography color="text.secondary" display="flex" alignItems="center" gap={0.8} mb={0.6}>
                    <HomeWorkIcon fontSize="small" />
                    {property.location}
                  </Typography>
                  <Typography color="text.secondary" mb={2.5}>
                    {property.details}
                  </Typography>
                  <Button
                    component={RouterLink}
                    to={`/property/${property.id}`}
                    fullWidth
                    variant="outlined"
                    sx={{ textTransform: "none" }}
                  >
                    {t("home.details")}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box textAlign="center" mt={6}>
          <Button component={RouterLink} to="/catalog" variant="contained" size="large" sx={{ textTransform: "none" }}>
            {t("home.allProperties")}
          </Button>
        </Box>
      </Container>

      <Box sx={{ py: 10, backgroundColor: "#f3f6f9" }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={6}>
            <Typography variant="h3" gutterBottom>
              {t("home.howItWorks")}
            </Typography>
            <Typography color="text.secondary">{t("home.howItWorksText")}</Typography>
          </Box>

          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box textAlign="center" px={1}>
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    backgroundColor: "rgba(22,152,213,0.12)",
                    display: "grid",
                    placeItems: "center",
                    mx: "auto",
                    mb: 2,
                  }}
                >
                  <SearchIcon sx={{ fontSize: 42, color: "primary.main" }} />
                </Box>
                <Typography variant="h6" gutterBottom>
                  {t("home.step1Title")}
                </Typography>
                <Typography color="text.secondary">{t("home.step1Text")}</Typography>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Box textAlign="center" px={1}>
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    backgroundColor: "rgba(17,184,139,0.12)",
                    display: "grid",
                    placeItems: "center",
                    mx: "auto",
                    mb: 2,
                  }}
                >
                  <CheckCircleIcon sx={{ fontSize: 42, color: "secondary.main" }} />
                </Box>
                <Typography variant="h6" gutterBottom>
                  {t("home.step2Title")}
                </Typography>
                <Typography color="text.secondary">{t("home.step2Text")}</Typography>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Box textAlign="center" px={1}>
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    backgroundColor: "rgba(251,191,36,0.16)",
                    display: "grid",
                    placeItems: "center",
                    mx: "auto",
                    mb: 2,
                  }}
                >
                  <KeyIcon sx={{ fontSize: 42, color: "#d99006" }} />
                </Box>
                <Typography variant="h6" gutterBottom>
                  {t("home.step3Title")}
                </Typography>
                <Typography color="text.secondary">{t("home.step3Text")}</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: 10, backgroundColor: "white" }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={6}>
            <Typography variant="h3" gutterBottom>
              {t("home.whyTitle")}
            </Typography>
            <Typography color="text.secondary">{t("home.whyText")}</Typography>
          </Box>

          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6, lg: 3 }}>
              <Card sx={{ p: 3, height: "100%", textAlign: "center", border: "2px solid #eaf3fb" }}>
                <ShieldOutlinedIcon sx={{ fontSize: 44, color: "primary.main", mb: 1 }} />
                <Typography variant="h6" gutterBottom>
                  {t("home.whySecureTitle")}
                </Typography>
                <Typography color="text.secondary">{t("home.whySecureText")}</Typography>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 3 }}>
              <Card sx={{ p: 3, height: "100%", textAlign: "center", border: "2px solid #ebf8f4" }}>
                <CheckCircleIcon sx={{ fontSize: 44, color: "secondary.main", mb: 1 }} />
                <Typography variant="h6" gutterBottom>
                  {t("home.whyVerifiedTitle")}
                </Typography>
                <Typography color="text.secondary">{t("home.whyVerifiedText")}</Typography>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 3 }}>
              <Card sx={{ p: 3, height: "100%", textAlign: "center", border: "2px solid #fff3d4" }}>
                <StarOutlineIcon sx={{ fontSize: 44, color: "#d99006", mb: 1 }} />
                <Typography variant="h6" gutterBottom>
                  {t("home.whyPremiumTitle")}
                </Typography>
                <Typography color="text.secondary">{t("home.whyPremiumText")}</Typography>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 3 }}>
              <Card sx={{ p: 3, height: "100%", textAlign: "center", border: "2px solid #eaf3fb" }}>
                <BusinessIcon sx={{ fontSize: 44, color: "primary.main", mb: 1 }} />
                <Typography variant="h6" gutterBottom>
                  {t("home.whyCatalogTitle")}
                </Typography>
                <Typography color="text.secondary">{t("home.whyCatalogText")}</Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: 10, backgroundColor: "primary.main", color: "white" }}>
        <Container maxWidth="md">
          <Box textAlign="center">
            <Typography variant="h3" gutterBottom sx={{ color: "white" }}>
              {t("home.ctaTitle")}
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.92)", mb: 4 }}>{t("home.ctaText")}</Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center">
              <Button
                component={RouterLink}
                to="/catalog"
                variant="contained"
                sx={{ backgroundColor: "white", color: "primary.main", textTransform: "none" }}
              >
                {t("home.ctaBrowse")}
              </Button>
              <Button
                component={RouterLink}
                to="/contact"
                variant="outlined"
                startIcon={<PhoneInTalkIcon />}
                sx={{
                  borderColor: "white",
                  color: "white",
                  textTransform: "none",
                  "&:hover": { borderColor: "white", backgroundColor: "rgba(255,255,255,0.1)" },
                }}
              >
                {t("home.ctaContact")}
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}
