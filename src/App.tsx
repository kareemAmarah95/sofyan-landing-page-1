import AboutWork from "./components/AboutWork";
import AboutWorkTwo from "./components/AboutWorkTwo";
import FirstSectionSwiper from "./components/FirstSectionSwiper";
import Footer from "./components/Footer";
import GamesSection from "./components/GamesSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProductAdvantages from "./components/ProductAdvantages";
import SecondTestimonialCard from "./components/SecondTestimonialCard";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <GamesSection />
      <AboutWork />
      <FirstSectionSwiper />
      <AboutWorkTwo />
      <FirstSectionSwiper />
      <SecondTestimonialCard />
      <ProductAdvantages />
      <Footer />
    </>
  );
}

export default App;
