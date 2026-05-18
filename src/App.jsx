import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import AboutStrip from './components/AboutStrip';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import WhyUs from './components/WhyUs';
import Process from './components/Process';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <AboutStrip />
      <Services />
      <Portfolio />
      <WhyUs />
      <Process />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
