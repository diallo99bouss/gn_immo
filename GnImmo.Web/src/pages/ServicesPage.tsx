import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import ApartmentIcon from "@mui/icons-material/Apartment";
import PaletteIcon from "@mui/icons-material/Palette";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import BuildIcon from "@mui/icons-material/Build";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Footer } from "../components/Footer";

const heroImage =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80";

const saleImage =
  "https://images.unsplash.com/photo-1722480417283-51eb0a881b54?auto=format&fit=crop&w=1400&q=80";
const designImage =
  "https://images.unsplash.com/photo-1649083048544-a6726e9c8ea3?auto=format&fit=crop&w=1400&q=80";
const cleaningImage =
  "https://images.unsplash.com/photo-1760827797819-4361cd5cd353?auto=format&fit=crop&w=1400&q=80";
const constructionImage =
  "https://images.unsplash.com/photo-1768321901750-f7b96d774456?auto=format&fit=crop&w=1400&q=80";

const serviceCards = [
  {
    key: "sale",
    image: saleImage,
    icon: <ApartmentIcon sx={{ color: "primary.main", fontSize: 34 }} />,
    featureKeys: ["f1", "f2", "f3", "f4"],
  },
  {
    key: "design",
    image: designImage,
    icon: <PaletteIcon sx={{ color: "#d97706", fontSize: 34 }} />,
    featureKeys: ["f1", "f2", "f3", "f4"],
  },
  {
    key: "cleaning",
    image: cleaningImage,
    icon: <AutoAwesomeIcon sx={{ color: "secondary.main", fontSize: 34 }} />,
    featureKeys: ["f1", "f2", "f3", "f4"],
  },
  {
    key: "construction",
    image: constructionImage,
    icon: <BuildIcon sx={{ color: "#6d28d9", fontSize: 34 }} />,
    featureKeys: ["f1", "f2", "f3", "f4"],
  },
];

export function ServicesPage() {
  const { t } = useTranslation();

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "white" }}>
      <Box sx={{ position: "relative", overflow: "hidden", py: { xs: 8, md: 12 } }}>
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, rgba(20,125,184,0.8), rgba(27,191,163,0.7))",
          }}
        />
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <Typography
            variant="h2"
            sx={{ color: "white", fontSize: { xs: "2.3rem", md: "3.6rem" }, fontWeight: 700, mb: 3 }}
          >
            {t("services.heroTitle")}
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.92)", fontSize: { xs: "1rem", md: "1.2rem" } }}>
            {t("services.heroSubtitle")}
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={3}>
          {serviceCards.map((service) => (
            <Grid key={service.key} size={{ xs: 12, md: 6 }}>
              <Card sx={{ borderRadius: 3, overflow: "hidden", border: "2px solid #eef2f7" }}>
                <Box sx={{ position: "relative", height: 200, overflow: "hidden" }}>
                  <Box
                    component="img"
                    src={service.image}
                    alt={t(`services.items.${service.key}.title`)}
                    sx={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(135deg, rgba(0,0,0,0.75), rgba(0,0,0,0.55))",
                    }}
                  />
                  <Box sx={{ position: "relative", zIndex: 1, p: 3 }}>
                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: 2.5,
                        backgroundColor: "white",
                        display: "grid",
                        placeItems: "center",
                        mb: 2,
                        boxShadow: "0 10px 20px rgba(0,0,0,0.18)",
                      }}
                    >
                      {service.icon}
                    </Box>
                    <Typography variant="h5" sx={{ color: "white", fontWeight: 700, mb: 1 }}>
                      {t(`services.items.${service.key}.title`)}
                    </Typography>
                    <Typography sx={{ color: "rgba(255,255,255,0.9)" }}>
                      {t(`services.items.${service.key}.description`)}
                    </Typography>
                  </Box>
                </Box>

                <CardContent>
                  <Stack spacing={1.5}>
                    {service.featureKeys.map((featureKey) => (
                      <Stack key={featureKey} direction="row" spacing={1.5} alignItems="flex-start">
                        <CheckCircleIcon color="secondary" sx={{ fontSize: 20, mt: "2px" }} />
                        <Typography variant="body2">
                          {t(`services.items.${service.key}.features.${featureKey}`)}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>

                  <Button variant="contained" fullWidth sx={{ mt: 3, textTransform: "none" }}>
                    {t("services.quoteButton")}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box sx={{ py: 10, backgroundColor: "#f3f6f9" }}>
        <Container maxWidth="md">
          <Box textAlign="center">
            <Typography variant="h4" gutterBottom>
              {t("services.ctaTitle")}
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 4 }}>
              {t("services.ctaText")}
            </Typography>
            <Button
              component={RouterLink}
              to="/contact"
              variant="contained"
              size="large"
              sx={{ textTransform: "none" }}
            >
              {t("services.ctaButton")}
            </Button>
          </Box>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
