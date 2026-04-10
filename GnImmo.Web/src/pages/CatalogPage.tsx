import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Drawer,
  FormControl,
  FormControlLabel,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  Stack,
  TextField,
  Typography,
  Checkbox,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import { Link as RouterLink } from "react-router-dom";
import { Footer } from "../components/Footer";
import { useTranslation } from "react-i18next";

const heroImage =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80";

const properties = [
  {
    id: 1,
    title: "Villa moderne a Kaloum",
    type: "sale",
    price: "450 000 000 GNF",
    location: "Kaloum, Conakry",
    bedrooms: 4,
    bathrooms: 3,
    surface: "250 m2",
    verified: true,
    furnished: true,
    image:
      "https://images.unsplash.com/photo-1638369022547-1c763b1b9b3b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Appartement meuble Ratoma",
    type: "rent",
    price: "3 500 000 GNF/mois",
    location: "Ratoma, Conakry",
    bedrooms: 2,
    bathrooms: 2,
    surface: "85 m2",
    verified: true,
    furnished: true,
    image:
      "https://images.unsplash.com/photo-1657129824033-1803902780b3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Bureau professionnel Almamya",
    type: "rent",
    price: "5 000 000 GNF/mois",
    location: "Almamya, Conakry",
    bedrooms: 0,
    bathrooms: 2,
    surface: "120 m2",
    verified: true,
    furnished: false,
    image:
      "https://images.unsplash.com/photo-1622015663319-e97e697503ee?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title: "Maison familiale Camayenne",
    type: "sale",
    price: "380 000 000 GNF",
    location: "Camayenne, Conakry",
    bedrooms: 5,
    bathrooms: 4,
    surface: "320 m2",
    verified: true,
    furnished: false,
    image:
      "https://images.unsplash.com/photo-1765484699057-e373a8bbcfc0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    title: "Studio meuble Dixinn",
    type: "rent",
    price: "2 500 000 GNF/mois",
    location: "Dixinn, Conakry",
    bedrooms: 1,
    bathrooms: 1,
    surface: "45 m2",
    verified: true,
    furnished: true,
    image:
      "https://images.unsplash.com/photo-1723110994499-df46435aa4b3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 6,
    title: "Villa de luxe Nongo",
    type: "sale",
    price: "650 000 000 GNF",
    location: "Nongo, Conakry",
    bedrooms: 6,
    bathrooms: 5,
    surface: "450 m2",
    verified: true,
    furnished: true,
    image:
      "https://images.unsplash.com/photo-1667375721269-448f78e68022?auto=format&fit=crop&w=1200&q=80",
  },
];

export function CatalogPage() {
  const [priceRange, setPriceRange] = useState<number[]>([0, 1000000000]);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#f4f6f9" }}>
      <Box sx={{ position: "relative", overflow: "hidden", py: { xs: 8, md: 10 } }}>
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
            background: "linear-gradient(135deg, rgba(20,125,184,0.85), rgba(27,191,163,0.7))",
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Box textAlign="center" mb={5}>
            <Typography
              variant="h2"
              sx={{ color: "white", fontSize: { xs: "2.2rem", md: "3.6rem" }, fontWeight: 700, mb: 2 }}
            >
              {t("catalog.heroTitle")}
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.92)", fontSize: { xs: "1rem", md: "1.2rem" } }}>
              {t("catalog.heroSubtitle", { count: properties.length })}
            </Typography>
          </Box>

          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: 4,
              p: { xs: 2.5, md: 3.5 },
              boxShadow: "0 20px 60px rgba(15, 23, 42, 0.2)",
              maxWidth: 1100,
              mx: "auto",
            }}
          >
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 5 }}>
                <TextField
                  fullWidth
                  size="small"
                  placeholder={t("catalog.searchPlaceholder")}
                  InputProps={{ startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment> }}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 2.5 }}>
                <FormControl fullWidth size="small">
                  <InputLabel>{t("catalog.typeLabel")}</InputLabel>
                  <Select label={t("catalog.typeLabel")} defaultValue="all">
                    <MenuItem value="all">{t("catalog.allTypes")}</MenuItem>
                    <MenuItem value="sale">{t("catalog.sale")}</MenuItem>
                    <MenuItem value="rent">{t("catalog.rent")}</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid size={{ xs: 12, md: 2.5 }}>
                <FormControl fullWidth size="small">
                  <InputLabel>{t("catalog.cityLabel")}</InputLabel>
                  <Select label={t("catalog.cityLabel")} defaultValue="all">
                    <MenuItem value="all">{t("catalog.allCities")}</MenuItem>
                    <MenuItem value="kaloum">Kaloum</MenuItem>
                    <MenuItem value="ratoma">Ratoma</MenuItem>
                    <MenuItem value="matam">Matam</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid size={{ xs: 12, md: 2 }}>
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<TuneIcon />}
                  sx={{
                    height: 40,
                    borderColor: "primary.main",
                    color: "primary.main",
                    textTransform: "none",
                    "&:hover": { backgroundColor: "primary.main", color: "white" },
                  }}
                  onClick={() => setFiltersOpen(true)}
                >
                  {t("catalog.filterAdvanced")}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={3}>
          {properties.map((property) => (
            <Grid key={property.id} size={{ xs: 12, md: 6, lg: 4 }}>
              <Card sx={{ borderRadius: 3, overflow: "hidden", height: "100%" }}>
                <Box sx={{ position: "relative" }}>
                  <CardMedia component="img" height="200" image={property.image} alt={property.title} />
                  <Stack direction="row" spacing={1} sx={{ position: "absolute", top: 12, left: 12 }}>
                    <Chip
                      size="small"
                      color="primary"
                      label={property.type === "sale" ? t("catalog.sale") : t("catalog.rent")}
                    />
                  </Stack>
                  {property.verified && (
                    <Chip
                      size="small"
                      icon={<CheckCircleIcon />}
                      color="secondary"
                      label={t("catalog.verifiedBadge")}
                      sx={{ position: "absolute", top: 12, right: 12 }}
                    />
                  )}
                </Box>
                <CardContent>
                  <Typography variant="h6" gutterBottom noWrap>
                    {property.title}
                  </Typography>
                  <Typography variant="h6" color="primary" gutterBottom>
                    {property.price}
                  </Typography>
                  <Stack direction="row" spacing={0.8} alignItems="center" mb={1}>
                    <HomeWorkIcon fontSize="small" color="action" />
                    <Typography color="text.secondary">{property.location}</Typography>
                  </Stack>
                  <Stack direction="row" spacing={2} color="text.secondary" mb={2}>
                    {property.bedrooms > 0 && (
                      <Stack direction="row" spacing={0.6} alignItems="center">
                        <BedIcon fontSize="small" />
                        <Typography variant="body2">{property.bedrooms}</Typography>
                      </Stack>
                    )}
                    <Stack direction="row" spacing={0.6} alignItems="center">
                      <BathtubIcon fontSize="small" />
                      <Typography variant="body2">{property.bathrooms}</Typography>
                    </Stack>
                    <Stack direction="row" spacing={0.6} alignItems="center">
                      <SquareFootIcon fontSize="small" />
                      <Typography variant="body2">{property.surface}</Typography>
                    </Stack>
                  </Stack>
                  {property.furnished && <Chip size="small" variant="outlined" label={t("catalog.furnished")} />}
                  <Button
                    component={RouterLink}
                    to={`/property/${property.id}`}
                    variant="outlined"
                    fullWidth
                    sx={{ textTransform: "none", mt: 2 }}
                  >
                    {t("catalog.viewDetails")}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Drawer anchor="right" open={filtersOpen} onClose={() => setFiltersOpen(false)}>
        <Box sx={{ width: { xs: 320, sm: 380 }, p: 3 }}>
          <Typography variant="h6" gutterBottom>
            {t("catalog.filtersTitle")}
          </Typography>
          <Box sx={{ mt: 3 }}>
            <Typography variant="subtitle2" gutterBottom>
              {t("catalog.budgetLabel")}
            </Typography>
            <Slider
              value={priceRange}
              onChange={(_, value) => setPriceRange(value as number[])}
              min={0}
              max={1000000000}
              step={1000000}
              valueLabelDisplay="auto"
            />
            <Stack direction="row" justifyContent="space-between" mt={1}>
              <Typography variant="body2" color="text.secondary">
                {priceRange[0].toLocaleString("fr-FR")}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {priceRange[1].toLocaleString("fr-FR")}
              </Typography>
            </Stack>
          </Box>

          <Box sx={{ mt: 4 }}>
            <FormControl fullWidth size="small">
              <InputLabel>{t("catalog.bedroomsLabel")}</InputLabel>
              <Select label={t("catalog.bedroomsLabel")} defaultValue="any">
                <MenuItem value="any">{t("catalog.bedroomsAny")}</MenuItem>
                <MenuItem value="1">{t("catalog.bedrooms1")}</MenuItem>
                <MenuItem value="2">{t("catalog.bedrooms2")}</MenuItem>
                <MenuItem value="3">{t("catalog.bedrooms3")}</MenuItem>
                <MenuItem value="4">{t("catalog.bedrooms4")}</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ mt: 3 }}>
            <FormControlLabel control={<Checkbox />} label={t("catalog.verifiedOnly")} />
            <FormControlLabel control={<Checkbox />} label={t("catalog.furnished")} />
          </Box>

          <Button fullWidth variant="contained" sx={{ mt: 3 }} onClick={() => setFiltersOpen(false)}>
            {t("catalog.applyFilters")}
          </Button>
        </Box>
      </Drawer>

      <Footer />
    </Box>
  );
}
