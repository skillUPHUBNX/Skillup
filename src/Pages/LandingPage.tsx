import { useLocation } from "react-router-dom";
import {
  Certification,
  Feature,
  Hero,
  Experience,
  Overlay,
  PromotionCompany,
  Stripe,
  Banner,
  Pricing,
  Archiever,
  GlobalCoverage,
  KickStart,
} from "../components";

import { useEffect, useState } from "react";

const LandingPage = () => {
  // @ts-ignore
  const [isPopupVisible, setPopupVisible] = useState(false);

  const location = useLocation();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const sectionId = params.get("scrollTo");

    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  useEffect(() => {
    const isOpen = localStorage.getItem("popupClosed");
    console.log(isOpen);
  }, []);

  const handleClose = () => {
    setPopupVisible(false);
    localStorage.setItem("popupClosed", "true");
  };

  return (
    <div className="w-full relative">
      <Overlay handleClose={handleClose} />

      <Stripe />
      <Hero />
      <PromotionCompany />
      <div id="feature">
        <Feature />
      </div>
      <Experience />
      <Certification />
      <div id="pricing">
        <Pricing />
      </div>
      <Archiever />
      <Banner />
      <GlobalCoverage />
      <KickStart />
    </div>
  );
};

export default LandingPage;
