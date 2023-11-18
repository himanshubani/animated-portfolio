import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Parallax from "./components/Parallax/Parallax";
import Projects from "./components/Projects/Projects";
import {motion, useScroll, useSpring} from 'framer-motion'

const App = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
  <>

      <motion.div className="progress-bar" style={{ scaleX }} />

      <Navbar />
      <Hero />
      <About />
      <Parallax />
      <Projects />
      <Contact />
      </>
  );
};

export default App;
