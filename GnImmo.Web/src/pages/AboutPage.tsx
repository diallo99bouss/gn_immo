import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import ShieldIcon from "@mui/icons-material/Shield";
import GroupIcon from "@mui/icons-material/Group";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import FavoriteIcon from "@mui/icons-material/Favorite";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Footer } from "../components/Footer";

const heroImage =
  "https://images.unsplash.com/photo-1720700126957-769e2f2fc0fc?auto=format&fit=crop&w=1600&q=80";
const teamImage =
  "https://images.unsplash.com/photo-1720700126957-769e2f2fc0fc?auto=format&fit=crop&w=1200&q=80";

const stats = [
  { key: "s1", icon: HomeWorkIcon },
  { key: "s2", icon: GroupIcon },
  { key: "s3", icon: EmojiEventsIcon },
  { key: "s4", icon: TrendingUpIcon },
];

const values = [
  { key: "v1", icon: ShieldIcon },
  { key: "v2", icon: TrackChangesIcon },
  { key: "v3", icon: FavoriteIcon },
];

const teamLead = { key: "t1", initials: "MBB" };
const teamMembers = [
  { key: "t2", initials: "ISB" },
  { key: "t3", initials: "THB" },
  { key: "t4", initials: "MID" },
  { key: "t5", initials: "DMB" },
];

const milestones = [
  { key: "m1", year: "2014" },
  { key: "m2", year: "2016" },
  { key: "m3", year: "2018" },
  { key: "m4", year: "2020" },
  { key: "m5", year: "2024" },
];

export function AboutPage() {
  const { t } = useTranslation();

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "white" }}>
      <Box sx={{ position: "relative", overflow: "hidden", color: "white" }}>
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
            background: "linear-gradient(135deg, rgba(20,125,184,0.85), rgba(27,191,163,0.75))",
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, py: { xs: 10, md: 14 } }}>
          <Stack spacing={3} alignItems="center" textAlign="center">
            <Chip
              label={t("about.heroBadge")}
              sx={{ backgroundColor: "rgba(255,255,255,0.2)", color: "white", border: "1px solid rgba(255,255,255,0.3)" }}
            />
            <Typography variant="h2" sx={{ fontWeight: 700, fontSize: { xs: "2.4rem", md: "3.8rem" } }}>
              {t("about.heroTitle")}
            </Typography>
            <Typography sx={{ maxWidth: 820, fontSize: { xs: "1rem", md: "1.25rem" }, opacity: 0.95 }}>
              {t("about.heroText")}
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Button component={RouterLink} to="/catalog" variant="contained" size="large">
                {t("about.heroPrimary")}
              </Button>
              <Button
                component={RouterLink}
                to="/contact"
                variant="outlined"
                size="large"
                sx={{ borderColor: "rgba(255,255,255,0.4)", color: "white" }}
              >
                {t("about.heroSecondary")}
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: 2, pb: 8 }}>
        <Grid container spacing={2}>
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Grid key={stat.key} size={{ xs: 6, md: 3 }}>
                <Card sx={{ textAlign: "center", borderRadius: 3, boxShadow: "0 10px 30px rgba(15,23,42,0.08)" }}>
                  <CardContent sx={{ py: 3 }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: "50%",
                        backgroundColor: "rgba(20,125,184,0.1)",
                        display: "grid",
                        placeItems: "center",
                        mx: "auto",
                        mb: 1.5,
                      }}
                    >
                      <Icon sx={{ color: "primary.main" }} />
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 700, color: "primary.main" }}>
                      {t(`about.stats.${stat.key}.value`)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {t(`about.stats.${stat.key}.label`)}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={5} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={2}>
              <Chip
                label={t("about.missionBadge")}
                sx={{ alignSelf: "flex-start", backgroundColor: "rgba(20,125,184,0.1)", color: "primary.main" }}
              />
              <Typography variant="h3" sx={{ fontWeight: 700 }}>
                {t("about.missionTitle")}
              </Typography>
              <Typography color="text.secondary">{t("about.missionText1")}</Typography>
              <Typography color="text.secondary">{t("about.missionText2")}</Typography>
              <Stack spacing={1.2}>
                {["b1", "b2", "b3", "b4"].map((key) => (
                  <Stack key={key} direction="row" spacing={1.5} alignItems="center">
                    <Box
                      sx={{
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        backgroundColor: "rgba(27,191,163,0.12)",
                        display: "grid",
                        placeItems: "center",
                      }}
                    >
                      <CheckCircleIcon sx={{ fontSize: 18, color: "secondary.main" }} />
                    </Box>
                    <Typography>{t(`about.missionBullets.${key}`)}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ position: "relative" }}>
              <Box
                component="img"
                src={teamImage}
                alt={t("about.teamImageAlt")}
                sx={{ width: "100%", borderRadius: 4, objectFit: "cover", minHeight: 320 }}
              />
              <Box
                sx={{
                  position: "absolute",
                  right: { xs: 16, md: -24 },
                  bottom: { xs: 16, md: -24 },
                  backgroundColor: "secondary.main",
                  color: "white",
                  px: 3,
                  py: 2.5,
                  borderRadius: 3,
                  boxShadow: "0 20px 40px rgba(15,23,42,0.25)",
                  maxWidth: 220,
                }}
              >
                <Typography variant="h4" sx={{ fontWeight: 700 }}>
                  10+
                </Typography>
                <Typography variant="body2">{t("about.experienceCard")}</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ backgroundColor: "#f4f6f9", py: 9 }}>
        <Container maxWidth="lg">
          <Stack spacing={2} textAlign="center" mb={6}>
            <Chip
              label={t("about.valuesBadge")}
              sx={{ alignSelf: "center", backgroundColor: "rgba(20,125,184,0.1)", color: "primary.main" }}
            />
            <Typography variant="h3" sx={{ fontWeight: 700 }}>
              {t("about.valuesTitle")}
            </Typography>
            <Typography color="text.secondary">{t("about.valuesSubtitle")}</Typography>
          </Stack>

          <Grid container spacing={3}>
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Grid key={value.key} size={{ xs: 12, md: 4 }}>
                  <Card sx={{ textAlign: "center", borderRadius: 3, height: "100%" }}>
                    <CardContent sx={{ py: 4 }}>
                      <Box
                        sx={{
                          width: 64,
                          height: 64,
                          borderRadius: 3,
                          backgroundColor: "rgba(20,125,184,0.1)",
                          display: "grid",
                          placeItems: "center",
                          mx: "auto",
                          mb: 2,
                        }}
                      >
                        <Icon sx={{ color: "primary.main", fontSize: 32 }} />
                      </Box>
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                        {t(`about.values.${value.key}.title`)}
                      </Typography>
                      <Typography color="text.secondary">
                        {t(`about.values.${value.key}.description`)}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 9 }}>
        <Stack spacing={2} textAlign="center" mb={6}>
          <Chip
            label={t("about.teamBadge")}
            sx={{ alignSelf: "center", backgroundColor: "rgba(20,125,184,0.1)", color: "primary.main" }}
          />
          <Typography variant="h3" sx={{ fontWeight: 700 }}>
            {t("about.teamTitle")}
          </Typography>
          <Typography color="text.secondary">{t("about.teamSubtitle")}</Typography>
        </Stack>

        <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
          <Card sx={{ borderRadius: 3, overflow: "hidden", width: "100%", maxWidth: 420 }}>
            <Box
              sx={{
                height: 200,
                background: "linear-gradient(135deg, rgba(20,125,184,0.12), rgba(27,191,163,0.12))",
                display: "grid",
                placeItems: "center",
              }}
            >
              <Box
                sx={{
                  width: 96,
                  height: 96,
                  borderRadius: "50%",
                  backgroundColor: "primary.main",
                  color: "white",
                  display: "grid",
                  placeItems: "center",
                  fontWeight: 700,
                  fontSize: 30,
                }}
              >
                {teamLead.initials}
              </Box>
            </Box>
            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                {t(`about.team.${teamLead.key}.name`)}
              </Typography>
              <Typography color="primary.main" sx={{ fontWeight: 600, mb: 1 }}>
                {t(`about.team.${teamLead.key}.role`)}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {t(`about.team.${teamLead.key}.description`)}
              </Typography>
              <Stack direction="row" spacing={1} justifyContent="center">
                <Button size="small" variant="outlined" sx={{ minWidth: 0, width: 36, height: 36, borderRadius: "50%" }}>
                  <LinkedInIcon sx={{ fontSize: 18 }} />
                </Button>
                <Button size="small" variant="outlined" sx={{ minWidth: 0, width: 36, height: 36, borderRadius: "50%" }}>
                  <MailOutlineIcon sx={{ fontSize: 18 }} />
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Box>

        <Grid container spacing={3}>
          {teamMembers.map((member) => (
            <Grid key={member.key} size={{ xs: 12, md: 3 }}>
              <Card sx={{ borderRadius: 3, overflow: "hidden", height: "100%" }}>
                <Box
                  sx={{
                    height: 200,
                    background: "linear-gradient(135deg, rgba(20,125,184,0.12), rgba(27,191,163,0.12))",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: 90,
                      height: 90,
                      borderRadius: "50%",
                      backgroundColor: "primary.main",
                      color: "white",
                      display: "grid",
                      placeItems: "center",
                      fontWeight: 700,
                      fontSize: 28,
                    }}
                  >
                    {member.initials}
                  </Box>
                </Box>
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                    {t(`about.team.${member.key}.name`)}
                  </Typography>
                  <Typography color="primary.main" sx={{ fontWeight: 600, mb: 1 }}>
                    {t(`about.team.${member.key}.role`)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {t(`about.team.${member.key}.description`)}
                  </Typography>
                  <Stack direction="row" spacing={1} justifyContent="center">
                    <Button size="small" variant="outlined" sx={{ minWidth: 0, width: 36, height: 36, borderRadius: "50%" }}>
                      <LinkedInIcon sx={{ fontSize: 18 }} />
                    </Button>
                    <Button size="small" variant="outlined" sx={{ minWidth: 0, width: 36, height: 36, borderRadius: "50%" }}>
                      <MailOutlineIcon sx={{ fontSize: 18 }} />
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box sx={{ background: "linear-gradient(135deg, rgba(20,125,184,0.08), rgba(27,191,163,0.08))", py: 9 }}>
        <Container maxWidth="md">
          <Stack spacing={2} textAlign="center" mb={6}>
            <Chip
              label={t("about.timelineBadge")}
              sx={{ alignSelf: "center", backgroundColor: "rgba(20,125,184,0.1)", color: "primary.main" }}
            />
            <Typography variant="h3" sx={{ fontWeight: 700 }}>
              {t("about.timelineTitle")}
            </Typography>
          </Stack>

          <Stack spacing={3} position="relative">
            <Box
              sx={{
                position: "absolute",
                left: "50%",
                top: 0,
                bottom: 0,
                width: 2,
                backgroundColor: "rgba(20,125,184,0.2)",
                transform: "translateX(-50%)",
                display: { xs: "none", md: "block" },
              }}
            />
            {milestones.map((milestone, index) => (
              <Stack
                key={milestone.key}
                direction={{ xs: "column", md: index % 2 === 0 ? "row" : "row-reverse" }}
                spacing={3}
                alignItems="center"
              >
                <Box flex={1} textAlign={{ xs: "left", md: index % 2 === 0 ? "right" : "left" }}>
                  <Card sx={{ display: "inline-block", borderRadius: 3 }}>
                    <CardContent sx={{ px: 3.5 }}>
                      <Typography variant="h4" sx={{ color: "primary.main", fontWeight: 700 }}>
                        {milestone.year}
                      </Typography>
                      <Typography color="text.secondary">{t(`about.timeline.${milestone.key}`)}</Typography>
                    </CardContent>
                  </Card>
                </Box>
                <Box
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    backgroundColor: "primary.main",
                    border: "4px solid white",
                    boxShadow: "0 10px 20px rgba(15,23,42,0.15)",
                    display: { xs: "none", md: "block" },
                  }}
                />
                <Box flex={1} />
              </Stack>
            ))}
          </Stack>
        </Container>
      </Box>

      <Box sx={{ background: "linear-gradient(90deg, #147db8, #1bbfa3)", color: "white", py: 8 }}>
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
            {t("about.ctaTitle")}
          </Typography>
          <Typography sx={{ opacity: 0.9, mb: 4 }}>
            {t("about.ctaText")}
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center">
            <Button component={RouterLink} to="/register" variant="contained" color="secondary" size="large">
              {t("about.ctaPrimary")}
            </Button>
            <Button
              component={RouterLink}
              to="/contact"
              variant="outlined"
              size="large"
              sx={{ borderColor: "rgba(255,255,255,0.5)", color: "white" }}
            >
              {t("about.ctaSecondary")}
            </Button>
          </Stack>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
