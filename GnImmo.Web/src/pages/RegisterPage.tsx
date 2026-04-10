import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  FormControlLabel,
  IconButton,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
  Checkbox,
} from "@mui/material";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ShieldIcon from "@mui/icons-material/Shield";
import PersonIcon from "@mui/icons-material/Person";
import ApartmentIcon from "@mui/icons-material/Apartment";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useTranslation } from "react-i18next";

export function RegisterPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [accountType, setAccountType] = useState<"client" | "owner">("client");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert(t("register.passwordMismatch"));
      return;
    }
    if (!formData.acceptTerms) {
      alert(t("register.acceptTermsAlert"));
      return;
    }
    // Simulate registration
    console.log("Register:", { ...formData, accountType });
    navigate("/dashboard/client");
  };

  return (
    <Box sx={{ minHeight: "100vh", background: "linear-gradient(135deg, rgba(20,125,184,0.06), #ffffff, rgba(27,191,163,0.06))" }}>
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Box textAlign="center" mb={4}>
          <Box
            sx={{
              width: 64,
              height: 64,
              borderRadius: 3,
              backgroundColor: "primary.main",
              display: "grid",
              placeItems: "center",
              mx: "auto",
              mb: 2,
              boxShadow: "0 10px 20px rgba(15,23,42,0.2)",
            }}
          >
            <HomeWorkIcon sx={{ color: "white", fontSize: 32 }} />
          </Box>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
            {t("register.heroTitle")}
          </Typography>
          <Typography color="text.secondary">{t("register.heroSubtitle")}</Typography>
        </Box>

        <Card sx={{ borderRadius: 3, boxShadow: "0 20px 45px rgba(15,23,42,0.12)" }}>
          <CardHeader title={t("register.cardTitle")} subheader={t("register.cardSubtitle")} sx={{ pb: 0 }} />

          <Box component="form" onSubmit={handleSubmit}>
            <CardContent>
              <Stack spacing={3}>
                <Box>
                  <Tabs value={accountType} onChange={(_, value) => setAccountType(value)} variant="fullWidth">
                    <Tab
                      value="client"
                      icon={<PersonIcon fontSize="small" />}
                      iconPosition="start"
                      label={t("register.tabClient")}
                    />
                    <Tab
                      value="owner"
                      icon={<ApartmentIcon fontSize="small" />}
                      iconPosition="start"
                      label={t("register.tabOwner")}
                    />
                  </Tabs>

                  <Box sx={{ mt: 2 }}>
                    {accountType === "client" ? (
                      <Box sx={{ p: 2, borderRadius: 2, border: "1px solid rgba(20,125,184,0.2)", backgroundColor: "rgba(20,125,184,0.06)" }}>
                        <Stack direction="row" spacing={1.5} alignItems="flex-start">
                          <CheckCircleIcon sx={{ color: "primary.main", mt: "2px" }} />
                          <Box>
                            <Typography fontWeight={600}>{t("register.clientTitle")}</Typography>
                            <Typography variant="body2" color="text.secondary">
                              {t("register.clientText")}
                            </Typography>
                          </Box>
                        </Stack>
                      </Box>
                    ) : (
                      <Box sx={{ p: 2, borderRadius: 2, border: "1px solid rgba(27,191,163,0.2)", backgroundColor: "rgba(27,191,163,0.06)" }}>
                        <Stack direction="row" spacing={1.5} alignItems="flex-start">
                          <CheckCircleIcon sx={{ color: "secondary.main", mt: "2px" }} />
                          <Box>
                            <Typography fontWeight={600}>{t("register.ownerTitle")}</Typography>
                            <Typography variant="body2" color="text.secondary">
                              {t("register.ownerText")}
                            </Typography>
                          </Box>
                        </Stack>
                      </Box>
                    )}
                  </Box>
                </Box>

                <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
                  <TextField
                    fullWidth
                    label={t("register.firstName")}
                    placeholder={t("register.firstNamePlaceholder")}
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    required
                  />
                  <TextField
                    fullWidth
                    label={t("register.lastName")}
                    placeholder={t("register.lastNamePlaceholder")}
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    required
                  />
                </Stack>

                <TextField
                  fullWidth
                  type="email"
                  label={t("register.emailLabel")}
                  placeholder={t("register.emailPlaceholder")}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />

                <TextField
                  fullWidth
                  type="tel"
                  label={t("register.phoneLabel")}
                  placeholder={t("register.phonePlaceholder")}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />

                <TextField
                  fullWidth
                  type={showPassword ? "text" : "password"}
                  label={t("register.passwordLabel")}
                  placeholder={t("register.passwordPlaceholder")}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                  inputProps={{ minLength: 8 }}
                  InputProps={{
                    endAdornment: (
                      <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </IconButton>
                    ),
                  }}
                />

                <TextField
                  fullWidth
                  type="password"
                  label={t("register.confirmPasswordLabel")}
                  placeholder={t("register.confirmPasswordPlaceholder")}
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  required
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.acceptTerms}
                      onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
                    />
                  }
                  label={
                    <Typography variant="body2" color="text.secondary">
                      {t("register.acceptTerms")}{" "}
                      <Button component={RouterLink} to="/terms" size="small" sx={{ textTransform: "none" }}>
                        {t("register.termsLink")}
                      </Button>{" "}
                      {t("register.and")}{" "}
                      <Button component={RouterLink} to="/privacy" size="small" sx={{ textTransform: "none" }}>
                        {t("register.privacyLink")}
                      </Button>
                    </Typography>
                  }
                />

                <Stack direction="row" spacing={1.5} alignItems="center" sx={{ p: 2, borderRadius: 2, backgroundColor: "rgba(27,191,163,0.08)", border: "1px solid rgba(27,191,163,0.2)" }}>
                  <ShieldIcon sx={{ color: "secondary.main" }} />
                  <Typography variant="caption" color="text.secondary">
                    {t("register.securityNote")}
                  </Typography>
                </Stack>
              </Stack>
            </CardContent>

            <Box sx={{ px: 3, pb: 3 }}>
              <Button type="submit" variant="contained" size="large" fullWidth>
                {t("register.submit")}
              </Button>

              <Divider sx={{ my: 3 }} />

              <Typography variant="body2" textAlign="center" color="text.secondary">
                {t("register.haveAccount")}{" "}
                <Button component={RouterLink} to="/login" size="small" sx={{ textTransform: "none", fontWeight: 600 }}>
                  {t("register.loginLink")}
                </Button>
              </Typography>
            </Box>
          </Box>
        </Card>
      </Container>
    </Box>
  );
}
