import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { useTranslation } from "react-i18next";
import { Footer } from "../components/Footer";

export function ContactPage() {
  const { t } = useTranslation();

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#f4f6f9" }}>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Stack spacing={2} textAlign="center" mb={6}>
          <Typography variant="h2" sx={{ fontWeight: 700, fontSize: { xs: "2.2rem", md: "3.4rem" } }}>
            {t("contact.heroTitle")}
          </Typography>
          <Typography color="text.secondary">{t("contact.heroSubtitle")}</Typography>
        </Stack>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, lg: 4 }}>
            <Stack spacing={2.5}>
              <Card>
                <CardContent>
                  <Stack direction="row" spacing={2}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: 2,
                        backgroundColor: "rgba(20,125,184,0.1)",
                        display: "grid",
                        placeItems: "center",
                      }}
                    >
                      <PhoneIcon sx={{ color: "primary.main" }} />
                    </Box>
                    <Stack spacing={0.3}>
                      <Typography variant="subtitle1" fontWeight={600}>
                        {t("contact.phoneTitle")}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {t("contact.phoneLine1")}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {t("contact.phoneLine2")}
                      </Typography>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>

              <Card>
                <CardContent>
                  <Stack direction="row" spacing={2}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: 2,
                        backgroundColor: "rgba(27,191,163,0.1)",
                        display: "grid",
                        placeItems: "center",
                      }}
                    >
                      <MailOutlineIcon sx={{ color: "secondary.main" }} />
                    </Box>
                    <Stack spacing={0.3}>
                      <Typography variant="subtitle1" fontWeight={600}>
                        {t("contact.emailTitle")}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {t("contact.emailLine1")}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {t("contact.emailLine2")}
                      </Typography>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>

              <Card>
                <CardContent>
                  <Stack direction="row" spacing={2}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: 2,
                        backgroundColor: "rgba(217,119,6,0.12)",
                        display: "grid",
                        placeItems: "center",
                      }}
                    >
                      <LocationOnIcon sx={{ color: "#d97706" }} />
                    </Box>
                    <Stack spacing={0.3}>
                      <Typography variant="subtitle1" fontWeight={600}>
                        {t("contact.addressTitle")}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {t("contact.addressLine1")}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {t("contact.addressLine2")}
                      </Typography>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>

              <Card sx={{ backgroundColor: "primary.main", color: "white" }}>
                <CardContent>
                  <Stack direction="row" spacing={2}>
                    <ChatBubbleOutlineIcon />
                    <Stack spacing={1}>
                      <Typography variant="subtitle1" fontWeight={600}>
                        {t("contact.chatTitle")}
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.9 }}>
                        {t("contact.chatText")}
                      </Typography>
                      <Button variant="contained" color="secondary" size="small" sx={{ alignSelf: "flex-start" }}>
                        {t("contact.chatButton")}
                      </Button>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, lg: 8 }}>
            <Card>
              <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
                  {t("contact.formTitle")}
                </Typography>
                <Box component="form">
                  <Grid container spacing={2.5}>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <TextField fullWidth label={t("contact.fullName")} placeholder={t("contact.fullNamePlaceholder")} />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <TextField
                        fullWidth
                        type="email"
                        label={t("contact.emailLabel")}
                        placeholder={t("contact.emailPlaceholder")}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <TextField
                        fullWidth
                        type="tel"
                        label={t("contact.phoneLabel")}
                        placeholder={t("contact.phonePlaceholder")}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <TextField fullWidth label={t("contact.subjectLabel")} placeholder={t("contact.subjectPlaceholder")} />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        multiline
                        rows={6}
                        label={t("contact.messageLabel")}
                        placeholder={t("contact.messagePlaceholder")}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <FormControlLabel
                        control={<Checkbox />}
                        label={<Typography variant="body2" color="text.secondary">{t("contact.consent")}</Typography>}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <Button type="submit" variant="contained" size="large" fullWidth>
                        {t("contact.submit")}
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </Box>
  );
}
