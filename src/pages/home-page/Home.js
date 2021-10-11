import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '../../components/HeroSection/HeroSection';
import InfoSection from '../../components/InfoSection/InfoSection';
import scrollToLocation from '../../utils/ScrollToLocation';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    scrollToLocation(location);
  }, [location]);

  return (
    <div>
      <HeroSection />
      <InfoSection />
    </div>
  );
}
