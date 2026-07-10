import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./pages/HomePage";
import { CatalogPage } from "./pages/CatalogPage";
import { ServicesPage } from "./pages/ServicesPage";
import { ContactPage } from "./pages/ContactPage";
import { AdminImagesPage } from "./pages/AdminImagesPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { PropertyDetailPage } from "./pages/PropertyDetailPage";
import { BookingPage } from "./pages/BookingPage";
import { ClientDashboard } from "./pages/ClientDashboard";
import { OwnerDashboard } from "./pages/OwnerDashboard";
import { AdminDashboard } from "./pages/AdminDashboard";
import { AboutPage } from "./pages/AboutPage";
import { FAQPage } from "./pages/FAQPage";
import { TermsPage } from "./pages/TermsPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { LegalPage } from "./pages/LegalPage";

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Box minHeight="100vh" display="flex" flexDirection="column">
        <Navigation />
        <Box component="main" flex={1}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/admin/images" element={<AdminImagesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/property/:id" element={<PropertyDetailPage />} />
            <Route path="/booking/:id" element={<BookingPage />} />
            <Route path="/dashboard/client" element={<ClientDashboard />} />
            <Route path="/dashboard/owner" element={<OwnerDashboard />} />
            <Route path="/dashboard/admin" element={<AdminDashboard />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/legal" element={<LegalPage />} />
            <Route path="/faq" element={<FAQPage />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
