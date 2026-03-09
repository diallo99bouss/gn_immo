import { Box, Container, IconButton, Link, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Building2, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "#08183A", color: "white", borderTop: "8px solid #0ea5e9" }}>
      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 }, py: 7 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr", lg: "repeat(4, 1fr)" },
            gap: { xs: 4, lg: 7 },
          }}
        >
          <Box>
            <Stack direction="row" alignItems="center" spacing={1} mb={2}>
              <Building2 size={34} />
              <Typography sx={{ fontSize: { xs: 28, md: 36 }, lineHeight: 1, fontWeight: 800 }}>
                GN IMMO
              </Typography>
            </Stack>
            <Typography sx={{ color: "#9aabc2", mb: 2.5, fontSize: { xs: 16, md: 18 }, lineHeight: 1.5, maxWidth: 390 }}>
              Votre partenaire immobilier de confiance en Guinée. Location, vente et services premium.
            </Typography>
            <Stack direction="row" spacing={1.5}>
              <IconButton sx={{ color: "#9aabc2" }}><Facebook size={22} /></IconButton>
              <IconButton sx={{ color: "#9aabc2" }}><Instagram size={22} /></IconButton>
              <IconButton sx={{ color: "#9aabc2" }}><Twitter size={22} /></IconButton>
            </Stack>
          </Box>

          <Box>
            <Typography sx={{ fontSize: { xs: 24, md: 30 }, fontWeight: 700, mb: 2.5 }}>Liens rapides</Typography>
            <Stack spacing={1}>
              <Link component={RouterLink} to="/catalog" underline="none" sx={{ color: "#9aabc2", fontSize: { xs: 16, md: 18 } }}>
                Nos logements
              </Link>
              <Link component={RouterLink} to="/services" underline="none" sx={{ color: "#9aabc2", fontSize: { xs: 16, md: 18 } }}>
                Services
              </Link>
              <Link component={RouterLink} to="/about" underline="none" sx={{ color: "#9aabc2", fontSize: { xs: 16, md: 18 } }}>
                À propos
              </Link>
              <Link component={RouterLink} to="/faq" underline="none" sx={{ color: "#9aabc2", fontSize: { xs: 16, md: 18 } }}>
                FAQ
              </Link>
            </Stack>
          </Box>

          <Box>
            <Typography sx={{ fontSize: { xs: 24, md: 30 }, fontWeight: 700, mb: 2.5 }}>Nos Services</Typography>
            <Stack spacing={1} sx={{ color: "#9aabc2", fontSize: { xs: 16, md: 18 } }}>
              <Typography fontSize="inherit">Location meublée</Typography>
              <Typography fontSize="inherit">Vente immobilière</Typography>
              <Typography fontSize="inherit">Design & décoration</Typography>
              <Typography fontSize="inherit">Construction</Typography>
            </Stack>
          </Box>

          <Box>
            <Typography sx={{ fontSize: { xs: 24, md: 30 }, fontWeight: 700, mb: 2.5 }}>Contact</Typography>
            <Stack spacing={1.4}>
              <Stack direction="row" alignItems="center" spacing={1.5} sx={{ color: "#9aabc2", fontSize: { xs: 16, md: 18 } }}>
                <MapPin size={26} />
                <Typography fontSize="inherit">Conakry, Guinée</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1.5} sx={{ color: "#9aabc2", fontSize: { xs: 16, md: 18 } }}>
                <Phone size={26} />
                <Typography fontSize="inherit">+224 XXX XXX XXX</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1.5} sx={{ color: "#9aabc2", fontSize: { xs: 16, md: 18 } }}>
                <Mail size={26} />
                <Typography fontSize="inherit">contact@gnimmo.gn</Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>

        <Box sx={{ borderTop: "1px solid #1a2b53", mt: 6, pt: 4 }}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            alignItems="center"
            justifyContent="space-between"
            spacing={2}
          >
            <Typography sx={{ color: "#9aabc2", fontSize: { xs: 14, md: 16 } }}>© 2026 GN IMMO. Tous droits réservés.</Typography>
            <Stack direction="row" flexWrap="wrap" gap={3} sx={{ fontSize: { xs: 14, md: 16 } }}>
              <Link component={RouterLink} to="/terms" underline="none" sx={{ color: "#9aabc2", fontSize: "inherit" }}>
                Conditions générales
              </Link>
              <Link component={RouterLink} to="/privacy" underline="none" sx={{ color: "#9aabc2", fontSize: "inherit" }}>
                Confidentialité
              </Link>
              <Link component={RouterLink} to="/legal" underline="none" sx={{ color: "#9aabc2", fontSize: "inherit" }}>
                Mentions légales
              </Link>
              <Link component={RouterLink} to="/admin/images" underline="none" sx={{ color: "white", fontSize: "inherit", fontWeight: 600 }}>
                📸 Gérer les images
              </Link>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
