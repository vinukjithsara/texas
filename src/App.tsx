import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import FeaturedDishes from '@/components/sections/FeaturedDishes';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Gallery from '@/components/sections/Gallery';
import Testimonials from '@/components/sections/Testimonials';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedDishes />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
