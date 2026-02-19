import { Suspense, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Scene from "./components/Scene";
// import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import SideNav from "./components/SideNav";
import Loader from "./components/os/Loader";
import CustomCursor from "./components/CustomCursor";

function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "skills", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Custom Cursor */}
      <CustomCursor />

      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* 3D Background */}
            <div className="canvas-container">
              <Suspense fallback={null}>
                <Scene />
              </Suspense>
            </div>

            {/* Side Navigation */}
            <SideNav activeSection={activeSection} />

            {/* Main Content */}
            <div className="content-layer">
              {/* <Navbar /> */}
              <Hero />
              <About />
              <Projects />
              <Skills />
              <Contact />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
