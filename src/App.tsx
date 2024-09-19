import AboutWork from "./components/AboutWork";
import AboutWorkTwo from "./components/AboutWorkTwo";
import FirstSectionSwiper from "./components/FirstSectionSwiper";
import GamesSection from "./components/GamesSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

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
    </>
  );
}

export default App;
