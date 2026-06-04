import LandingNavbar from "../components/LandingPage/LandingNavbar";
import LandingHeroSection from "../components/LandingPage/LandingHeroSection";
import LandingProblemsSection from "../components/LandingPage/LandingProblemsSection";
import LandingHowItWorksSection from "../components/LandingPage/LandingHowItWorksSection";
import LandingUstaadSection from "../components/LandingPage/LandingUstaadSection";
import LandingFounderSection from "../components/LandingPage/LandingFounderSection";
import LandingCTAFormSection from "../components/LandingPage/LandingCTAFormSection";
import LandingFooter from "../components/LandingPage/LandingFooter";

const LandingPage = () => {
  return (
    <div>
      <LandingNavbar />
      <LandingHeroSection />
      <LandingProblemsSection />
      <LandingHowItWorksSection />
      <LandingUstaadSection />
      <LandingFounderSection />
      <LandingCTAFormSection />
      <LandingFooter />
    </div>
  );
};

export default LandingPage;
