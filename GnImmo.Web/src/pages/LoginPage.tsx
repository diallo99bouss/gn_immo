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
  TextField,
  Typography,
  Checkbox,
} from "@mui/material";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ShieldIcon from "@mui/icons-material/Shield";
import LockIcon from "@mui/icons-material/Lock";
import { useTranslation } from "react-i18next";

export function LoginPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login - redirect to client dashboard
    console.log("Login:", formData);
    navigate("/dashboard/client");
  };

  return (
    <Box sx={{ minHeight: "100vh", background: "linear-gradient(135deg, rgba(20,125,184,0.06), #ffffff, rgba(27,191,163,0.06))" }}>
      <Container maxWidth="sm" sx={{ py: 6 }}>
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
            {t("login.heroTitle")}
          </Typography>
          <Typography color="text.secondary">{t("login.heroSubtitle")}</Typography>
        </Box>

        <Card sx={{ borderRadius: 3, boxShadow: "0 20px 45px rgba(15,23,42,0.12)" }}>
          <CardHeader
            title={t("login.cardTitle")}
            subheader={t("login.cardSubtitle")}
            sx={{ pb: 0 }}
          />
          <Box component="form" onSubmit={handleSubmit}>
            <CardContent>
              <Stack spacing={2}>
                <TextField
                  label={t("login.emailLabel")}
                  type="email"
                  placeholder={t("login.emailPlaceholder")}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  fullWidth
                />

                <Box>
                  <Stack direction="row" justifyContent="space-between" alignItems="center" mb={1}>
                    <Typography variant="body2" fontWeight={600}>
                      {t("login.passwordLabel")}
                    </Typography>
                    <Button component={RouterLink} to="/forgot-password" size="small" sx={{ textTransform: "none" }}>
                      {t("login.forgotPassword")}
                    </Button>
                  </Stack>
                  <TextField
                    type={showPassword ? "text" : "password"}
                    placeholder={t("login.passwordPlaceholder")}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                    fullWidth
                    InputProps={{
                      endAdornment: (
                        <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                          {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </IconButton>
                      ),
                    }}
                  />
                </Box>

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.rememberMe}
                      onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                    />
                  }
                  label={t("login.rememberMe")}
                />

                <Stack direction="row" spacing={1.5} alignItems="center" sx={{ p: 2, borderRadius: 2, backgroundColor: "rgba(27,191,163,0.08)", border: "1px solid rgba(27,191,163,0.2)" }}>
                  <ShieldIcon sx={{ color: "secondary.main" }} />
                  <Typography variant="caption" color="text.secondary">
                    {t("login.securityNote")}
                  </Typography>
                </Stack>
              </Stack>
            </CardContent>

            <Box sx={{ px: 3, pb: 3 }}>
              <Button type="submit" variant="contained" size="large" fullWidth startIcon={<LockIcon />}>
                {t("login.submit")}
              </Button>

              <Divider sx={{ my: 3 }} />

              <Typography variant="body2" textAlign="center" color="text.secondary">
                {t("login.noAccount")}{" "}
                <Button component={RouterLink} to="/register" size="small" sx={{ textTransform: "none", fontWeight: 600 }}>
                  {t("login.createAccount")}
                </Button>
              </Typography>
            </Box>
          </Box>
        </Card>

        <Stack direction="row" spacing={2} justifyContent="space-between" mt={4}>
          {[
            { value: t("login.trustValue1"), label: t("login.trustLabel1"), color: "primary.main" },
            { value: t("login.trustValue2"), label: t("login.trustLabel2"), color: "secondary.main" },
            { value: t("login.trustValue3"), label: t("login.trustLabel3"), color: "#d97706" },
          ].map((item) => (
            <Box key={item.label} textAlign="center" flex={1}>
              <Typography variant="h5" sx={{ fontWeight: 700, color: item.color }}>
                {item.value}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {item.label}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
