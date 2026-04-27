import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import ScrollToTop from './components/ScrollToTop';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import PromotionalPopup from '@/components/PromotionalPopup';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PricingPage from './pages/PricingPage';
import GalleryPage from './pages/GalleryPage';
import LocationsPage from './pages/LocationsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <FloatingWhatsAppButton />
      <PromotionalPopup />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
