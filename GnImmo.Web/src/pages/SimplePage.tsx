import { Box, Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

type Props = {
  titleKey: string;
};

export function SimplePage({ titleKey }: Props) {
  const { t } = useTranslation();

  return (
    <Container maxWidth="lg" sx={{ py: 10 }}>
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: 3,
          border: "1px solid #e5e7eb",
          p: { xs: 3, md: 6 },
        }}
      >
        <Typography variant="h3" gutterBottom>
          {t(titleKey)}
        </Typography>
        <Typography color="text.secondary">
          Cette page est prete pour ton contenu. / This page is ready for your content.
        </Typography>
      </Box>
    </Container>
  );
}
