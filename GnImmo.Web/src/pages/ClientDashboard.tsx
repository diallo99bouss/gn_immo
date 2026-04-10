import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Container,
  Divider,
  Grid,
  LinearProgress,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import PlaceIcon from "@mui/icons-material/Place";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import DescriptionIcon from "@mui/icons-material/Description";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PersonIcon from "@mui/icons-material/Person";
import { useTranslation } from "react-i18next";

export function ClientDashboard() {
  const { t } = useTranslation();
  const [tabValue, setTabValue] = useState(0);

  const user = {
    name: "Amadou Diallo",
    email: "amadou.diallo@example.com",
    avatar: "",
    memberSince: t("clientDashboard.memberSince"),
  };

  const stats = [
    { label: t("clientDashboard.stats.bookings"), value: "3", icon: CalendarTodayIcon, color: "primary.main" },
    { label: t("clientDashboard.stats.favorites"), value: "12", icon: FavoriteIcon, color: "#ef4444" },
    { label: t("clientDashboard.stats.reviews"), value: "5", icon: StarIcon, color: "#d97706" },
    { label: t("clientDashboard.stats.visits"), value: "8", icon: HomeWorkIcon, color: "secondary.main" },
  ];

  const bookings = [
    {
      id: "1",
      property: t("clientDashboard.booking1.title"),
      location: t("clientDashboard.booking1.location"),
      status: "active",
      startDate: t("clientDashboard.booking1.start"),
      endDate: t("clientDashboard.booking1.end"),
      price: t("clientDashboard.booking1.price"),
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=200",
    },
    {
      id: "2",
      property: t("clientDashboard.booking2.title"),
      location: t("clientDashboard.booking2.location"),
      status: "upcoming",
      startDate: t("clientDashboard.booking2.start"),
      endDate: t("clientDashboard.booking2.end"),
      price: t("clientDashboard.booking2.price"),
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=200",
    },
    {
      id: "3",
      property: t("clientDashboard.booking3.title"),
      location: t("clientDashboard.booking3.location"),
      status: "completed",
      startDate: t("clientDashboard.booking3.start"),
      endDate: t("clientDashboard.booking3.end"),
      price: t("clientDashboard.booking3.price"),
      image: "https://images.unsplash.com/photo-1502672260066-6bc35f0af07e?w=200",
    },
  ];

  const favorites = [
    {
      id: "4",
      title: t("clientDashboard.favorite1.title"),
      location: t("clientDashboard.favorite1.location"),
      price: t("clientDashboard.favorite1.price"),
      rating: "4.7",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=200",
    },
    {
      id: "5",
      title: t("clientDashboard.favorite2.title"),
      location: t("clientDashboard.favorite2.location"),
      price: t("clientDashboard.favorite2.price"),
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=200",
    },
  ];

  const getStatusChip = (status: string) => {
    switch (status) {
      case "active":
        return (
          <Chip
            icon={<CheckCircleIcon fontSize="small" />}
            label={t("clientDashboard.status.active")}
            sx={{ backgroundColor: "secondary.main", color: "white" }}
          />
        );
      case "upcoming":
        return (
          <Chip
            icon={<AccessTimeIcon fontSize="small" />}
            label={t("clientDashboard.status.upcoming")}
            sx={{ backgroundColor: "primary.main", color: "white" }}
          />
        );
      case "completed":
        return <Chip variant="outlined" icon={<CheckCircleIcon fontSize="small" />} label={t("clientDashboard.status.completed")} />;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#f4f6f9" }}>
      <Box sx={{ background: "linear-gradient(90deg, #147db8, rgba(20,125,184,0.8))", color: "white" }}>
        <Container maxWidth="lg" sx={{ py: 6 }}>
          <Stack direction={{ xs: "column", md: "row" }} spacing={3} alignItems={{ xs: "flex-start", md: "center" }}>
            <Avatar sx={{ width: 80, height: 80, border: "4px solid rgba(255,255,255,0.2)", bgcolor: "rgba(255,255,255,0.2)" }}>
              {user.name.split(" ").map((n) => n[0]).join("")}
            </Avatar>
            <Box flex={1}>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 0.5 }}>
                {t("clientDashboard.greeting", { name: user.name.split(" ")[0] })}
              </Typography>
              <Typography sx={{ opacity: 0.8 }}>{t("clientDashboard.member", { date: user.memberSince })}</Typography>
            </Box>
            <Stack direction="row" spacing={1}>
              <Button variant="contained" color="secondary" sx={{ minWidth: 44, width: 44, height: 44 }}>
                <NotificationsIcon />
              </Button>
              <Button variant="contained" color="secondary" sx={{ minWidth: 44, width: 44, height: 44 }}>
                <SettingsIcon />
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={2} mb={4}>
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Grid key={stat.label} size={{ xs: 6, md: 3 }}>
                <Card>
                  <CardContent>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" mb={1}>
                      <Icon sx={{ color: stat.color }} />
                      <Typography variant="h5" fontWeight={700}>
                        {stat.value}
                      </Typography>
                    </Stack>
                    <Typography variant="body2" color="text.secondary">
                      {stat.label}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>

        <Tabs value={tabValue} onChange={(_, value) => setTabValue(value)} sx={{ mb: 3 }}>
          <Tab icon={<CalendarTodayIcon fontSize="small" />} iconPosition="start" label={t("clientDashboard.tabs.bookings")} />
          <Tab icon={<FavoriteIcon fontSize="small" />} iconPosition="start" label={t("clientDashboard.tabs.favorites")} />
          <Tab icon={<PersonIcon fontSize="small" />} iconPosition="start" label={t("clientDashboard.tabs.profile")} />
        </Tabs>

        {tabValue === 0 && (
          <Stack spacing={3}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Typography variant="h5" fontWeight={700}>
                {t("clientDashboard.bookingsTitle")}
              </Typography>
              <Button component={RouterLink} to="/catalog" variant="contained" startIcon={<HomeWorkIcon />}>
                {t("clientDashboard.searchProperty")}
              </Button>
            </Stack>

            <Stack spacing={2}>
              {bookings.map((booking) => (
                <Card key={booking.id} sx={{ overflow: "hidden" }}>
                  <CardContent sx={{ p: 0 }}>
                    <Stack direction={{ xs: "column", md: "row" }}>
                      <Box sx={{ width: { xs: "100%", md: 200 }, height: { xs: 200, md: "auto" } }}>
                        <Box component="img" src={booking.image} alt={booking.property} sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      </Box>
                      <Box sx={{ p: 3, flex: 1 }}>
                        <Stack direction="row" justifyContent="space-between" alignItems="flex-start" mb={2}>
                          <Box>
                            <Typography variant="h6" fontWeight={700} gutterBottom>
                              {booking.property}
                            </Typography>
                            <Stack direction="row" spacing={1} alignItems="center">
                              <PlaceIcon sx={{ fontSize: 18, color: "text.secondary" }} />
                              <Typography color="text.secondary">{booking.location}</Typography>
                            </Stack>
                          </Box>
                          {getStatusChip(booking.status)}
                        </Stack>

                        <Grid container spacing={2} mb={2}>
                          {[
                            { label: t("clientDashboard.start"), value: booking.startDate },
                            { label: t("clientDashboard.end"), value: booking.endDate },
                            { label: t("clientDashboard.rent"), value: booking.price },
                          ].map((item) => (
                            <Grid key={item.label} size={{ xs: 12, md: 4 }}>
                              <Typography variant="caption" color="text.secondary">
                                {item.label}
                              </Typography>
                              <Typography fontWeight={600}>{item.value}</Typography>
                            </Grid>
                          ))}
                        </Grid>

                        <Stack direction="row" spacing={1} flexWrap="wrap">
                          <Button component={RouterLink} to={`/property/${booking.id}`} variant="outlined" size="small" startIcon={<HomeWorkIcon />}>
                            {t("clientDashboard.viewProperty")}
                          </Button>
                          {booking.status === "active" && (
                            <>
                              <Button variant="outlined" size="small" startIcon={<DescriptionIcon />}>
                                {t("clientDashboard.contract")}
                              </Button>
                              <Button variant="outlined" size="small" startIcon={<CreditCardIcon />}>
                                {t("clientDashboard.payments")}
                              </Button>
                            </>
                          )}
                          {booking.status === "completed" && (
                            <Button variant="outlined" size="small" startIcon={<StarIcon />}>
                              {t("clientDashboard.review")}
                            </Button>
                          )}
                        </Stack>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              ))}
            </Stack>
          </Stack>
        )}

        {tabValue === 1 && (
          <Stack spacing={3}>
            <Typography variant="h5" fontWeight={700}>
              {t("clientDashboard.favoritesTitle")}
            </Typography>
            <Grid container spacing={2}>
              {favorites.map((property) => (
                <Grid key={property.id} size={{ xs: 12, md: 6 }}>
                  <Card sx={{ overflow: "hidden" }}>
                    <CardContent sx={{ p: 0 }}>
                      <Box sx={{ position: "relative", aspectRatio: "16/9" }}>
                        <Box component="img" src={property.image} alt={property.title} sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        <Button
                          variant="contained"
                          color="secondary"
                          sx={{ position: "absolute", right: 12, top: 12, minWidth: 40, width: 40, height: 40, p: 0 }}
                        >
                          <FavoriteIcon sx={{ color: "#ef4444" }} />
                        </Button>
                      </Box>
                      <Box sx={{ p: 2 }}>
                        <Typography fontWeight={700} sx={{ mb: 0.5 }}>
                          {property.title}
                        </Typography>
                        <Stack direction="row" spacing={1} alignItems="center" mb={1}>
                          <PlaceIcon sx={{ fontSize: 16, color: "text.secondary" }} />
                          <Typography variant="body2" color="text.secondary">
                            {property.location}
                          </Typography>
                        </Stack>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
                          <Typography variant="h6" sx={{ color: "primary.main" }}>
                            {property.price}
                          </Typography>
                          <Stack direction="row" spacing={0.5} alignItems="center">
                            <StarIcon sx={{ fontSize: 16, color: "#d97706" }} />
                            <Typography variant="body2" fontWeight={600}>
                              {property.rating}
                            </Typography>
                          </Stack>
                        </Stack>
                        <Button component={RouterLink} to={`/property/${property.id}`} variant="contained" fullWidth>
                          {t("clientDashboard.viewDetails")}
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Stack>
        )}

        {tabValue === 2 && (
          <Stack spacing={3}>
            <Typography variant="h5" fontWeight={700}>
              {t("clientDashboard.profileTitle")}
            </Typography>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Card>
                  <CardHeader title={t("clientDashboard.personalTitle")} subheader={t("clientDashboard.personalSubtitle")} />
                  <CardContent>
                    <Stack spacing={2}>
                      <Box>
                        <Typography variant="caption" color="text.secondary">
                          {t("clientDashboard.fullName")}
                        </Typography>
                        <Typography fontWeight={600}>{user.name}</Typography>
                      </Box>
                      <Box>
                        <Typography variant="caption" color="text.secondary">
                          {t("clientDashboard.email")}
                        </Typography>
                        <Typography fontWeight={600}>{user.email}</Typography>
                      </Box>
                      <Box>
                        <Typography variant="caption" color="text.secondary">
                          {t("clientDashboard.phone")}
                        </Typography>
                        <Typography fontWeight={600}>+224 XXX XX XX XX</Typography>
                      </Box>
                      <Button variant="outlined">{t("clientDashboard.editInfo")}</Button>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Card>
                  <CardHeader title={t("clientDashboard.profileCompleteTitle")} subheader={t("clientDashboard.profileCompleteSubtitle")} />
                  <CardContent>
                    <Stack spacing={2}>
                      <Stack direction="row" justifyContent="space-between">
                        <Typography variant="caption">{t("clientDashboard.profilePercent")}</Typography>
                        <Typography variant="caption" color="text.secondary">
                          {t("clientDashboard.profileAlmost")}
                        </Typography>
                      </Stack>
                      <LinearProgress variant="determinate" value={75} />
                      <Stack spacing={1}>
                        {[
                          t("clientDashboard.profileItemPhoto"),
                          t("clientDashboard.profileItemEmail"),
                          t("clientDashboard.profileItemPhone"),
                        ].map((item) => (
                          <Stack key={item} direction="row" spacing={1} alignItems="center">
                            <CheckCircleIcon sx={{ fontSize: 16, color: "secondary.main" }} />
                            <Typography variant="body2">{item}</Typography>
                          </Stack>
                        ))}
                        <Stack direction="row" spacing={1} alignItems="center">
                          <ErrorOutlineIcon sx={{ fontSize: 16, color: "text.secondary" }} />
                          <Typography variant="body2" color="text.secondary">
                            {t("clientDashboard.profileItemId")}
                          </Typography>
                        </Stack>
                      </Stack>
                      <Button variant="outlined">{t("clientDashboard.completeProfile")}</Button>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Card>
                  <CardHeader title={t("clientDashboard.prefTitle")} subheader={t("clientDashboard.prefSubtitle")} />
                  <CardContent>
                    <Stack spacing={2}>
                      {[
                        { label: t("clientDashboard.prefEmail"), value: t("clientDashboard.enabled") },
                        { label: t("clientDashboard.prefAlerts"), value: t("clientDashboard.enabled") },
                        { label: t("clientDashboard.prefNewsletter"), value: t("clientDashboard.disabled") },
                      ].map((item) => (
                        <Stack key={item.label} direction="row" justifyContent="space-between" alignItems="center">
                          <Typography variant="body2">{item.label}</Typography>
                          <Chip label={item.value} variant={item.value === t("clientDashboard.enabled") ? "filled" : "outlined"} color={item.value === t("clientDashboard.enabled") ? "secondary" : "default"} />
                        </Stack>
                      ))}
                      <Button variant="outlined">{t("clientDashboard.managePrefs")}</Button>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Card>
                  <CardHeader title={t("clientDashboard.statsTitle")} subheader={t("clientDashboard.statsSubtitle")} />
                  <CardContent>
                    <Stack spacing={2}>
                      {[
                        { icon: TrendingUpIcon, label: t("clientDashboard.statSearches"), value: "47", color: "primary.main" },
                        { icon: HomeWorkIcon, label: t("clientDashboard.statViews"), value: "23", color: "primary.main" },
                        { icon: StarIcon, label: t("clientDashboard.statRating"), value: "4.6", color: "#d97706" },
                      ].map((item) => {
                        const Icon = item.icon;
                        return (
                          <Stack key={item.label} direction="row" justifyContent="space-between" alignItems="center">
                            <Stack direction="row" spacing={1} alignItems="center">
                              <Icon sx={{ fontSize: 18, color: item.color }} />
                              <Typography variant="body2">{item.label}</Typography>
                            </Stack>
                            <Typography fontWeight={700}>{item.value}</Typography>
                          </Stack>
                        );
                      })}
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Stack>
        )}

        <Divider sx={{ mt: 6 }} />
      </Container>
    </Box>
  );
}
