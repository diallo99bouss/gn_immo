import { useState } from "react";
import { Link as RouterLink, useParams } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  Stack,
  Tab,
  Tabs,
  Typography,
  Avatar,
  IconButton,
} from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import ShieldIcon from "@mui/icons-material/Shield";
import StarIcon from "@mui/icons-material/Star";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import WifiIcon from "@mui/icons-material/Wifi";
import OpacityIcon from "@mui/icons-material/Opacity";
import BoltIcon from "@mui/icons-material/Bolt";
import AirIcon from "@mui/icons-material/Air";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useTranslation } from "react-i18next";

const mockProperty = {
  id: "1",
  title: "Villa Moderne avec Piscine - Quartier Residentiel",
  type: "Villa",
  status: "a_louer",
  price: 3500000,
  priceType: "mois",
  location: {
    city: "Conakry",
    district: "Kaloum",
    address: "Avenue de la Republique",
  },
  features: {
    bedrooms: 4,
    bathrooms: 3,
    surface: 250,
    parking: 2,
  },
  description:
    "Magnifique villa moderne situee dans un quartier residentiel calme et securise. Cette propriete exceptionnelle offre des espaces de vie genereux, une piscine privee et un jardin paysage. Ideale pour une famille recherchant confort et tranquillite.",
  amenities: [
    { key: "wifi", icon: WifiIcon },
    { key: "water", icon: OpacityIcon },
    { key: "power", icon: BoltIcon },
    { key: "air", icon: AirIcon },
    { key: "security", icon: ShieldIcon },
    { key: "parking", icon: DirectionsCarIcon },
  ],
  images: [
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
  ],
  owner: {
    name: "Mamadou Diallo",
    avatar: "",
    verified: true,
    rating: 4.8,
    properties: 12,
  },
  rating: 4.9,
  reviews: 24,
  available: true,
};

export function PropertyDetailPage() {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [tabValue, setTabValue] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % mockProperty.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + mockProperty.images.length) % mockProperty.images.length);
  };

  const locale = i18n.language === "fr" ? "fr-FR" : "en-US";

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#f4f6f9" }}>
      <Box sx={{ position: "relative", backgroundColor: "black" }}>
        <Container maxWidth="lg" sx={{ position: "relative", py: 0 }}>
          <Box sx={{ position: "relative", aspectRatio: { xs: "16/9", md: "21/9" } }}>
            <Box
              component="img"
              src={mockProperty.images[currentImageIndex]}
              alt={mockProperty.title}
              sx={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <IconButton
              onClick={prevImage}
              sx={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", backgroundColor: "rgba(255,255,255,0.9)" }}
            >
              <ChevronLeftIcon />
            </IconButton>
            <IconButton
              onClick={nextImage}
              sx={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", backgroundColor: "rgba(255,255,255,0.9)" }}
            >
              <ChevronRightIcon />
            </IconButton>
            <Box sx={{ position: "absolute", right: 16, bottom: 16, backgroundColor: "rgba(0,0,0,0.7)", color: "white", px: 2, py: 0.5, borderRadius: 999 }}>
              {currentImageIndex + 1} / {mockProperty.images.length}
            </Box>
          </Box>
          <Grid container spacing={1} sx={{ p: 2, backgroundColor: "rgba(0,0,0,0.5)" }}>
            {mockProperty.images.map((image, index) => (
              <Grid key={image} size={{ xs: 3 }}>
                <Button
                  variant="text"
                  onClick={() => setCurrentImageIndex(index)}
                  sx={{
                    p: 0,
                    minWidth: "100%",
                    borderRadius: 2,
                    border: currentImageIndex === index ? "2px solid #147db8" : "2px solid transparent",
                    opacity: currentImageIndex === index ? 1 : 0.6,
                    "&:hover": { opacity: 1 },
                  }}
                >
                  <Box component="img" src={image} alt={`View ${index + 1}`} sx={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 2 }} />
                </Button>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, lg: 8 }}>
            <Stack spacing={3}>
              <Box>
                <Stack direction="row" spacing={1} flexWrap="wrap" mb={2}>
                  <Chip label={t("property.statusRent")} color="secondary" />
                  <Chip label={mockProperty.type} variant="outlined" />
                  {mockProperty.available && (
                    <Chip
                      icon={<CheckCircleIcon fontSize="small" />}
                      label={t("property.available")}
                      sx={{ backgroundColor: "rgba(27,191,163,0.1)", color: "secondary.main" }}
                    />
                  )}
                </Stack>
                <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
                  {mockProperty.title}
                </Typography>
                <Stack direction="row" spacing={3} flexWrap="wrap" alignItems="center" mb={2}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <PlaceIcon sx={{ fontSize: 18, color: "text.secondary" }} />
                    <Typography color="text.secondary">
                      {mockProperty.location.district}, {mockProperty.location.city}
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <StarIcon sx={{ fontSize: 18, color: "#d97706" }} />
                    <Typography fontWeight={600}>{mockProperty.rating}</Typography>
                    <Typography color="text.secondary">({mockProperty.reviews} {t("property.reviews")})</Typography>
                  </Stack>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: "primary.main" }}>
                    {mockProperty.price.toLocaleString(locale)} GNF
                    <Typography component="span" variant="body1" color="text.secondary" sx={{ ml: 0.5 }}>
                      /{mockProperty.priceType}
                    </Typography>
                  </Typography>
                  <Box sx={{ ml: "auto", display: "flex", gap: 1 }}>
                    <IconButton onClick={() => setIsFavorite(!isFavorite)}>
                      <FavoriteIcon sx={{ color: isFavorite ? "#ef4444" : "text.secondary" }} />
                    </IconButton>
                    <IconButton>
                      <ShareIcon />
                    </IconButton>
                  </Box>
                </Stack>
              </Box>

              <Card>
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
                    {t("property.featuresTitle")}
                  </Typography>
                  <Grid container spacing={2}>
                    {[
                      { icon: BedIcon, label: t("property.bedrooms"), value: mockProperty.features.bedrooms },
                      { icon: BathtubIcon, label: t("property.bathrooms"), value: mockProperty.features.bathrooms },
                      { icon: CropSquareIcon, label: t("property.surface"), value: `${mockProperty.features.surface} m2` },
                      { icon: DirectionsCarIcon, label: t("property.parking"), value: mockProperty.features.parking },
                    ].map((item) => {
                      const Icon = item.icon;
                      return (
                        <Grid key={item.label} size={{ xs: 6, md: 3 }}>
                          <Stack direction="row" spacing={2} alignItems="center">
                            <Box sx={{ width: 48, height: 48, borderRadius: 2, backgroundColor: "rgba(20,125,184,0.1)", display: "grid", placeItems: "center" }}>
                              <Icon sx={{ color: "primary.main" }} />
                            </Box>
                            <Box>
                              <Typography fontWeight={700}>{item.value}</Typography>
                              <Typography variant="body2" color="text.secondary">
                                {item.label}
                              </Typography>
                            </Box>
                          </Stack>
                        </Grid>
                      );
                    })}
                  </Grid>
                </CardContent>
              </Card>

              <Box>
                <Tabs value={tabValue} onChange={(_, value) => setTabValue(value)}>
                  <Tab label={t("property.tabDescription")} />
                  <Tab label={t("property.tabAmenities")} />
                  <Tab label={t("property.tabLocation")} />
                  <Tab label={t("property.tabReviews", { count: mockProperty.reviews })} />
                </Tabs>
                <Box sx={{ mt: 3 }}>
                  {tabValue === 0 && (
                    <Card>
                      <CardContent>
                        <Typography color="text.secondary">{mockProperty.description}</Typography>
                      </CardContent>
                    </Card>
                  )}
                  {tabValue === 1 && (
                    <Card>
                      <CardContent>
                        <Grid container spacing={2}>
                          {mockProperty.amenities.map((amenity) => {
                            const Icon = amenity.icon;
                            return (
                              <Grid key={amenity.key} size={{ xs: 12, md: 6 }}>
                                <Stack direction="row" spacing={2} alignItems="center">
                                  <Box sx={{ width: 40, height: 40, borderRadius: 2, backgroundColor: "rgba(27,191,163,0.1)", display: "grid", placeItems: "center" }}>
                                    <Icon sx={{ color: "secondary.main" }} />
                                  </Box>
                                  <Typography>{t(`property.amenities.${amenity.key}`)}</Typography>
                                </Stack>
                              </Grid>
                            );
                          })}
                        </Grid>
                      </CardContent>
                    </Card>
                  )}
                  {tabValue === 2 && (
                    <Card>
                      <CardContent>
                        <Stack spacing={2}>
                          <Stack direction="row" spacing={1.5} alignItems="flex-start">
                            <PlaceIcon sx={{ color: "primary.main", mt: "2px" }} />
                            <Box>
                              <Typography fontWeight={600}>{mockProperty.location.address}</Typography>
                              <Typography color="text.secondary">
                                {mockProperty.location.district}, {mockProperty.location.city}
                              </Typography>
                            </Box>
                          </Stack>
                          <Box sx={{ height: 240, borderRadius: 2, backgroundColor: "rgba(15,23,42,0.06)", display: "grid", placeItems: "center" }}>
                            <Stack spacing={1} alignItems="center">
                              <PlaceIcon sx={{ fontSize: 40, color: "text.secondary" }} />
                              <Typography color="text.secondary">{t("property.mapPlaceholder")}</Typography>
                            </Stack>
                          </Box>
                        </Stack>
                      </CardContent>
                    </Card>
                  )}
                  {tabValue === 3 && (
                    <Card>
                      <CardContent>
                        <Typography color="text.secondary">{t("property.reviewsPlaceholder")}</Typography>
                      </CardContent>
                    </Card>
                  )}
                </Box>
              </Box>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, lg: 4 }}>
            <Stack spacing={3}>
              <Card>
                <CardContent>
                  <Stack direction="row" spacing={2} alignItems="center" mb={2}>
                    <Avatar sx={{ width: 48, height: 48, bgcolor: "primary.main" }}>
                      {mockProperty.owner.name.split(" ").map((n) => n[0]).join("")}
                    </Avatar>
                    <Box flex={1}>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Typography fontWeight={700}>{mockProperty.owner.name}</Typography>
                        {mockProperty.owner.verified && <ShieldIcon sx={{ color: "secondary.main", fontSize: 18 }} />}
                      </Stack>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <StarIcon sx={{ fontSize: 14, color: "#d97706" }} />
                        <Typography variant="body2" color="text.secondary">
                          {mockProperty.owner.rating} • {mockProperty.owner.properties} {t("property.ownerProperties")}
                        </Typography>
                      </Stack>
                    </Box>
                  </Stack>
                  <Stack spacing={1.5}>
                    <Button component={RouterLink} to={`/booking/${mockProperty.id}`} variant="contained" size="large">
                      <CalendarTodayIcon sx={{ fontSize: 18, mr: 1 }} />
                      {t("property.bookNow")}
                    </Button>
                    <Button variant="outlined" size="large">
                      <PhoneIcon sx={{ fontSize: 18, mr: 1 }} />
                      {t("property.call")}
                    </Button>
                    <Button variant="outlined" size="large">
                      <MailOutlineIcon sx={{ fontSize: 18, mr: 1 }} />
                      {t("property.message")}
                    </Button>
                  </Stack>
                </CardContent>
              </Card>

              <Card sx={{ backgroundColor: "rgba(27,191,163,0.06)", borderColor: "rgba(27,191,163,0.2)" }}>
                <CardContent>
                  <Stack direction="row" spacing={2} alignItems="flex-start">
                    <ShieldIcon sx={{ color: "secondary.main", fontSize: 32 }} />
                    <Box>
                      <Typography fontWeight={700}>{t("property.trustTitle")}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {t("property.trustText")}
                      </Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>

              <Card>
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                    {t("property.similarTitle")}
                  </Typography>
                  <Stack spacing={2}>
                    {[1, 2].map((item) => (
                      <Stack
                        key={item}
                        component={RouterLink}
                        to={`/property/${item + 1}`}
                        direction="row"
                        spacing={2}
                        sx={{
                          textDecoration: "none",
                          color: "inherit",
                          p: 1.5,
                          borderRadius: 2,
                          "&:hover": { backgroundColor: "rgba(15,23,42,0.04)" },
                        }}
                      >
                        <Box sx={{ width: 72, height: 72, borderRadius: 2, backgroundColor: "rgba(15,23,42,0.06)", display: "grid", placeItems: "center" }}>
                          <HomeWorkIcon sx={{ color: "text.secondary" }} />
                        </Box>
                        <Box flex={1}>
                          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                            {t("property.similarItemTitle")}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {t("property.similarItemLocation")}
                          </Typography>
                          <Typography variant="body2" sx={{ color: "primary.main", fontWeight: 700, mt: 0.5 }}>
                            {t("property.similarItemPrice")}
                          </Typography>
                        </Box>
                      </Stack>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
