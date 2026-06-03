import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import StatsBar from './components/StatsBar/StatsBar';
import AboutSection from './components/AboutSection/AboutSection';
import ProgramsSection from './components/ProgramsSection/ProgramsSection';
import TransformBanner from './components/TransformBanner/TransformBanner';
import TestimonialsSection from './components/TestimonialsSection/TestimonialsSection';
import RoadmapSection from './components/RoadmapSection/RoadmapSection';
import ClientsSaySection from './components/ClientsSaySection/ClientsSaySection';
import FooterCTA from './components/FooterCTA/FooterCTA';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <StatsBar />
      <AboutSection />
      <ProgramsSection />
      <TransformBanner />
      <TestimonialsSection />
      <RoadmapSection />
      <ClientsSaySection />
      <FooterCTA />
      <Footer />
    </>
  );
}

export default App;
