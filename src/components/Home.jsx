import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Publications from './Publications';
import Certifications from './Certifications';
import Contact from './Contact';

// Home is the original single-page portfolio (all sections).
// It also handles "navigate-home-then-scroll" requests coming from the
// Navbar when a section link is clicked from another route (e.g. /blog).
const Home = () => {
  const location = useLocation();
  const handledKey = useRef(null);

  useEffect(() => {
    const scrollTo = location.state?.scrollTo;
    if (scrollTo && handledKey.current !== location.key) {
      handledKey.current = location.key;
      const el = document.getElementById(scrollTo);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Publications />
      <Certifications />
      <Contact />
    </>
  );
};

export default Home;
