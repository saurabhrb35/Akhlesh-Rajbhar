import { useEffect, useState } from 'react';
import { BookingSection, type ServiceMode } from './components/BookingSection';
import { ContactAndFooter } from './components/ContactAndFooter';
import { CoverageAndAbout } from './components/CoverageAndAbout';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { RepairProcessAndBrands } from './components/RepairProcessAndBrands';
import { ReviewsAndFaq } from './components/ReviewsAndFaq';
import { ServicesSection } from './components/ServicesSection';
import { ShopAddressSection } from './components/ShopAddressSection';
import { MOBILE_BRANDS, type Language, type ServiceId } from './data/content';

export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('akhlesh_lang');
      return saved === 'hi' ? 'hi' : 'en';
    } catch {
      return 'en';
    }
  });

  const [selectedService, setSelectedService] =
    useState<ServiceId>('display-replacement');
  const [selectedBrand, setSelectedBrand] = useState<string>(MOBILE_BRANDS[0]);
  const [serviceMode, setServiceMode] = useState<ServiceMode>('home');

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem('akhlesh_lang', lang);
    } catch {
      // Ignore storage restrictions
    }
  }, [lang]);

  const scrollToBooking = () => {
    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleBookHomeService = () => {
    setServiceMode('home');
    scrollToBooking();
  };

  const handleSelectService = (serviceId: ServiceId) => {
    setSelectedService(serviceId);
    scrollToBooking();
  };

  const handleSelectBrand = (brand: string) => {
    setSelectedBrand(brand);
    scrollToBooking();
  };

  return (
    <div className="min-h-screen bg-[#06080F] text-slate-100">
      <Navbar lang={lang} onBookHomeService={handleBookHomeService} />

      <main>
        <HeroSection
          lang={lang}
          onChangeLang={setLang}
          onBookHomeService={handleBookHomeService}
        />

        <ServicesSection
          lang={lang}
          onSelectService={handleSelectService}
          onScheduleHomeVisit={handleBookHomeService}
        />

        <RepairProcessAndBrands
          lang={lang}
          onSelectBrand={handleSelectBrand}
          onSelectService={handleSelectService}
        />

        <BookingSection
          lang={lang}
          selectedService={selectedService}
          selectedBrand={selectedBrand}
          serviceMode={serviceMode}
          onChangeServiceMode={setServiceMode}
          onChangeSelectedService={setSelectedService}
          onChangeSelectedBrand={setSelectedBrand}
        />

        <CoverageAndAbout lang={lang} />

        <ShopAddressSection lang={lang} />

        <ReviewsAndFaq lang={lang} />

        <ContactAndFooter lang={lang} />
      </main>
    </div>
  );
}
