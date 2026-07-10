import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PersonIcon from "@mui/icons-material/Person";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ShieldIcon from "@mui/icons-material/Shield";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PlaceIcon from "@mui/icons-material/Place";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useTranslation } from "react-i18next";

export function BookingPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [step, setStep] = useState(1);
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    duration: "",
    acceptTerms: false,
  });

  const property = {
    id,
    title: t("booking.propertyTitle"),
    location: t("booking.propertyLocation"),
    price: 3500000,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400",
  };

  const calculateTotal = () => {
    if (formData.duration) {
      const months = parseInt(formData.duration);
      return property.price * months;
    }
    return property.price;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      console.log("Booking submitted:", { ...formData, startDate, endDate });
      navigate("/dashboard/client");
    }
  };

  const locale = i18n.language === "fr" ? "fr-FR" : "en-US";
  const formatDate = (value: string) => (value ? new Date(value).toLocaleDateString(locale) : "");

  const todayIso = useMemo(() => new Date().toISOString().slice(0, 10), []);

  return (
    <Box sx={{ minHeight: "100vh", background: "linear-gradient(135deg, rgba(20,125,184,0.06), #ffffff, rgba(27,191,163,0.06))" }}>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Stack spacing={2} textAlign="center" mb={5}>
          <Box
            sx={{
              width: 64,
              height: 64,
              borderRadius: 3,
              backgroundColor: "primary.main",
              display: "grid",
              placeItems: "center",
              mx: "auto",
              boxShadow: "0 10px 20px rgba(15,23,42,0.2)",
            }}
          >
            <CalendarTodayIcon sx={{ color: "white", fontSize: 30 }} />
          </Box>
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            {t("booking.heroTitle")}
          </Typography>
          <Typography color="text.secondary">{t("booking.heroSubtitle")}</Typography>
        </Stack>

        <Box mb={4}>
          <Stack direction="row" justifyContent="center" spacing={1}>
            {[1, 2, 3].map((s, index) => (
              <Stack key={s} direction="row" alignItems="center" spacing={1}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    display: "grid",
                    placeItems: "center",
                    fontWeight: 700,
                    backgroundColor: step >= s ? "primary.main" : "rgba(15,23,42,0.1)",
                    color: step >= s ? "white" : "text.secondary",
                  }}
                >
                  {step > s ? <CheckCircleIcon fontSize="small" /> : s}
                </Box>
                {index < 2 && (
                  <Box
                    sx={{
                      width: { xs: 40, md: 80 },
                      height: 4,
                      borderRadius: 3,
                      backgroundColor: step > s ? "primary.main" : "rgba(15,23,42,0.1)",
                    }}
                  />
                )}
              </Stack>
            ))}
          </Stack>
          <Stack direction="row" justifyContent="center" spacing={6} mt={2} flexWrap="wrap">
            {[t("booking.stepDates"), t("booking.stepInfo"), t("booking.stepPayment")].map((label, index) => (
              <Typography
                key={label}
                variant="body2"
                sx={{ fontWeight: step >= index + 1 ? 600 : 400, color: step >= index + 1 ? "primary.main" : "text.secondary" }}
              >
                {label}
              </Typography>
            ))}
          </Stack>
        </Box>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, lg: 8 }}>
            <Box component="form" onSubmit={handleSubmit}>
              {step === 1 && (
                <Card>
                  <CardHeader
                    title={
                      <Stack direction="row" spacing={1} alignItems="center">
                        <CalendarTodayIcon fontSize="small" />
                        <span>{t("booking.step1Title")}</span>
                      </Stack>
                    }
                    subheader={t("booking.step1Subtitle")}
                  />
                  <CardContent>
                    <Stack spacing={3}>
                      <FormControl fullWidth>
                        <InputLabel>{t("booking.durationLabel")}</InputLabel>
                        <Select
                          value={formData.duration}
                          label={t("booking.durationLabel")}
                          onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                        >
                          <MenuItem value="1">{t("booking.duration1")}</MenuItem>
                          <MenuItem value="3">{t("booking.duration3")}</MenuItem>
                          <MenuItem value="6">{t("booking.duration6")}</MenuItem>
                          <MenuItem value="12">{t("booking.duration12")}</MenuItem>
                          <MenuItem value="24">{t("booking.duration24")}</MenuItem>
                        </Select>
                      </FormControl>

                      <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 6 }}>
                          <TextField
                            fullWidth
                            type="date"
                            label={t("booking.startDate")}
                            InputLabelProps={{ shrink: true }}
                            inputProps={{ min: todayIso }}
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                          />
                          {startDate && (
                            <Typography variant="caption" color="text.secondary">
                              {t("booking.startDateLabel")}: {formatDate(startDate)}
                            </Typography>
                          )}
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                          <TextField
                            fullWidth
                            type="date"
                            label={t("booking.endDate")}
                            InputLabelProps={{ shrink: true }}
                            inputProps={{ min: startDate || todayIso }}
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                          />
                          {endDate && (
                            <Typography variant="caption" color="text.secondary">
                              {t("booking.endDateLabel")}: {formatDate(endDate)}
                            </Typography>
                          )}
                        </Grid>
                      </Grid>

                      <Stack direction="row" spacing={1.5} alignItems="center" sx={{ p: 2, borderRadius: 2, backgroundColor: "rgba(20,125,184,0.08)", border: "1px solid rgba(20,125,184,0.2)" }}>
                        <AccessTimeIcon sx={{ color: "primary.main" }} />
                        <Typography variant="body2">{t("booking.instantAvailability")}</Typography>
                      </Stack>

                      <Button type="submit" variant="contained" size="large" fullWidth>
                        {t("booking.continue")}
                      </Button>
                    </Stack>
                  </CardContent>
                </Card>
              )}

              {step === 2 && (
                <Card>
                  <CardHeader
                    title={
                      <Stack direction="row" spacing={1} alignItems="center">
                        <PersonIcon fontSize="small" />
                        <span>{t("booking.step2Title")}</span>
                      </Stack>
                    }
                    subheader={t("booking.step2Subtitle")}
                  />
                  <CardContent>
                    <Stack spacing={2.5}>
                      <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
                        <TextField
                          fullWidth
                          label={t("booking.firstName")}
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          required
                        />
                        <TextField
                          fullWidth
                          label={t("booking.lastName")}
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          required
                        />
                      </Stack>
                      <TextField
                        fullWidth
                        type="email"
                        label={t("booking.email")}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                      <TextField
                        fullWidth
                        type="tel"
                        label={t("booking.phone")}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                      <TextField
                        fullWidth
                        multiline
                        rows={4}
                        label={t("booking.messageLabel")}
                        placeholder={t("booking.messagePlaceholder")}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                      <Stack direction="row" spacing={2}>
                        <Button variant="outlined" size="large" fullWidth onClick={() => setStep(1)}>
                          {t("booking.back")}
                        </Button>
                        <Button type="submit" variant="contained" size="large" fullWidth>
                          {t("booking.continue")}
                        </Button>
                      </Stack>
                    </Stack>
                  </CardContent>
                </Card>
              )}

              {step === 3 && (
                <Card>
                  <CardHeader
                    title={
                      <Stack direction="row" spacing={1} alignItems="center">
                        <CreditCardIcon fontSize="small" />
                        <span>{t("booking.step3Title")}</span>
                      </Stack>
                    }
                    subheader={t("booking.step3Subtitle")}
                  />
                  <CardContent>
                    <Stack spacing={3}>
                      <Box>
                        <Typography variant="subtitle2" sx={{ mb: 1.5 }}>
                          {t("booking.paymentMethod")}
                        </Typography>
                        <Stack spacing={2}>
                          <Box
                            sx={{
                              p: 2,
                              borderRadius: 2,
                              border: "2px solid rgba(20,125,184,0.4)",
                              backgroundColor: "rgba(20,125,184,0.08)",
                              display: "flex",
                              gap: 2,
                              alignItems: "center",
                            }}
                          >
                            <Box sx={{ width: 44, height: 44, borderRadius: 2, backgroundColor: "rgba(20,125,184,0.12)", display: "grid", placeItems: "center" }}>
                              <CreditCardIcon sx={{ color: "primary.main" }} />
                            </Box>
                            <Box flex={1}>
                              <Typography fontWeight={600}>{t("booking.cardPayment")}</Typography>
                              <Typography variant="body2" color="text.secondary">
                                {t("booking.cardPaymentDesc")}
                              </Typography>
                            </Box>
                            <Box sx={{ width: 20, height: 20, borderRadius: "50%", backgroundColor: "primary.main", border: "4px solid rgba(20,125,184,0.25)" }} />
                          </Box>
                          {[
                            { title: t("booking.mobileMoney"), desc: t("booking.mobileMoneyDesc"), emoji: "📱" },
                            { title: t("booking.bankTransfer"), desc: t("booking.bankTransferDesc"), emoji: "🏦" },
                          ].map((method) => (
                            <Box
                              key={method.title}
                              sx={{
                                p: 2,
                                borderRadius: 2,
                                border: "2px solid rgba(15,23,42,0.12)",
                                display: "flex",
                                gap: 2,
                                alignItems: "center",
                              }}
                            >
                              <Box sx={{ width: 44, height: 44, borderRadius: 2, backgroundColor: "rgba(15,23,42,0.06)", display: "grid", placeItems: "center" }}>
                                <Typography component="span" fontSize={22}>
                                  {method.emoji}
                                </Typography>
                              </Box>
                              <Box flex={1}>
                                <Typography fontWeight={600}>{method.title}</Typography>
                                <Typography variant="body2" color="text.secondary">
                                  {method.desc}
                                </Typography>
                              </Box>
                              <Box sx={{ width: 20, height: 20, borderRadius: "50%", border: "2px solid rgba(15,23,42,0.2)" }} />
                            </Box>
                          ))}
                        </Stack>
                      </Box>

                      <Box sx={{ p: 2, borderRadius: 2, backgroundColor: "rgba(15,23,42,0.04)" }}>
                        <Stack spacing={2}>
                          <TextField fullWidth label={t("booking.cardNumber")} placeholder="1234 5678 9012 3456" />
                          <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
                            <TextField fullWidth label={t("booking.expiry")} placeholder="MM/AA" />
                            <TextField fullWidth label={t("booking.cvv")} placeholder="123" />
                          </Stack>
                        </Stack>
                      </Box>

                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={formData.acceptTerms}
                            onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
                          />
                        }
                        label={<Typography variant="body2">{t("booking.terms")}</Typography>}
                      />

                      <Stack direction="row" spacing={1.5} alignItems="center" sx={{ p: 2, borderRadius: 2, backgroundColor: "rgba(27,191,163,0.08)", border: "1px solid rgba(27,191,163,0.2)" }}>
                        <ShieldIcon sx={{ color: "secondary.main" }} />
                        <Typography variant="body2">{t("booking.securityNote")}</Typography>
                      </Stack>

                      <Stack direction="row" spacing={2}>
                        <Button variant="outlined" size="large" fullWidth onClick={() => setStep(2)}>
                          {t("booking.back")}
                        </Button>
                        <Button type="submit" variant="contained" size="large" fullWidth disabled={!formData.acceptTerms}>
                          {t("booking.confirmPay")}
                        </Button>
                      </Stack>
                    </Stack>
                  </CardContent>
                </Card>
              )}
            </Box>
          </Grid>

          <Grid size={{ xs: 12, lg: 4 }}>
            <Card sx={{ position: { xs: "static", lg: "sticky" }, top: 16 }}>
              <CardHeader title={t("booking.summaryTitle")} />
              <CardContent>
                <Stack spacing={2}>
                  <Stack direction="row" spacing={2}>
                    <Box
                      component="img"
                      src={property.image}
                      alt={property.title}
                      sx={{ width: 80, height: 80, borderRadius: 2, objectFit: "cover" }}
                    />
                    <Box>
                      <Typography variant="subtitle2" fontWeight={600} gutterBottom>
                        {property.title}
                      </Typography>
                      <Stack direction="row" spacing={0.6} alignItems="center">
                        <PlaceIcon sx={{ fontSize: 16, color: "text.secondary" }} />
                        <Typography variant="caption" color="text.secondary">
                          {property.location}
                        </Typography>
                      </Stack>
                    </Box>
                  </Stack>

                  <Divider />

                  {(startDate || endDate || formData.duration) && (
                    <Stack spacing={1.2}>
                      {startDate && (
                        <Stack direction="row" justifyContent="space-between">
                          <Typography variant="body2" color="text.secondary">
                            {t("booking.arrival")}
                          </Typography>
                          <Typography variant="body2" fontWeight={600}>
                            {formatDate(startDate)}
                          </Typography>
                        </Stack>
                      )}
                      {endDate && (
                        <Stack direction="row" justifyContent="space-between">
                          <Typography variant="body2" color="text.secondary">
                            {t("booking.departure")}
                          </Typography>
                          <Typography variant="body2" fontWeight={600}>
                            {formatDate(endDate)}
                          </Typography>
                        </Stack>
                      )}
                      {formData.duration && (
                        <Stack direction="row" justifyContent="space-between">
                          <Typography variant="body2" color="text.secondary">
                            {t("booking.durationSummary")}
                          </Typography>
                          <Typography variant="body2" fontWeight={600}>
                            {t("booking.durationMonths", { count: parseInt(formData.duration) })}
                          </Typography>
                        </Stack>
                      )}
                    </Stack>
                  )}

                  <Divider />

                  <Stack spacing={1}>
                    <Stack direction="row" justifyContent="space-between">
                      <Typography variant="body2" color="text.secondary">
                        {t("booking.monthlyRent")}
                      </Typography>
                      <Typography variant="body2">{property.price.toLocaleString(locale)} GNF</Typography>
                    </Stack>
                    {formData.duration && parseInt(formData.duration) > 1 && (
                      <Stack direction="row" justifyContent="space-between">
                        <Typography variant="body2" color="text.secondary">
                          {t("booking.multipleMonths", { count: parseInt(formData.duration) })}
                        </Typography>
                        <Typography variant="body2">
                          {(property.price * parseInt(formData.duration)).toLocaleString(locale)} GNF
                        </Typography>
                      </Stack>
                    )}
                    <Stack direction="row" justifyContent="space-between">
                      <Typography variant="body2" color="text.secondary">
                        {t("booking.serviceFee")}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "secondary.main" }}>
                        {t("booking.included")}
                      </Typography>
                    </Stack>
                  </Stack>

                  <Divider />

                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography variant="subtitle1" fontWeight={700}>
                      {t("booking.total")}
                    </Typography>
                    <Typography variant="h6" sx={{ color: "primary.main", fontWeight: 700 }}>
                      {calculateTotal().toLocaleString(locale)} GNF
                    </Typography>
                  </Stack>

                  <Stack direction="row" spacing={1.2} alignItems="flex-start" sx={{ p: 2, borderRadius: 2, backgroundColor: "rgba(15,23,42,0.04)" }}>
                    <ErrorOutlineIcon sx={{ fontSize: 18, color: "text.secondary", mt: "2px" }} />
                    <Typography variant="caption" color="text.secondary">
                      {t("booking.infoNote")}
                    </Typography>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
