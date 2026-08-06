import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Menu from '@/components/sections/Menu';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Gallery from '@/components/sections/Gallery';
import Testimonials from '@/components/sections/Testimonials';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import LoadingScreen from '@/components/ui/LoadingScreen';
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp';

function App() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default App;
