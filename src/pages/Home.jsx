import Navbar from "../components/layout/Navbar";
import Hero from "../sections/Hero";
import Services from "../sections/Services";
import AboutStrip from "../sections/AboutStrip";
import Portfolio from "../sections/Portfolio";
import Marquee from "../sections/Marquee";
import WhyUs from "../sections/WhyUs";
import Process from "../sections/Process";
import Pricing from "../sections/Pricing";
import Testimonials from "../sections/Testimonials";
import Contact from "../sections/Contact";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <AboutStrip />
      <Portfolio />
      <Marquee />
      <WhyUs />
      <Process />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
