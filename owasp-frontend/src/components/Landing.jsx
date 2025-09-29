// src/components/Landing.jsx

import Tagline from "./Tagline";
import { motion } from "framer-motion";
import CobeComponent from "./Cobe"; 
import BackgroundStars from "./BackgroundStars"; 
import "../styles/index.css"; 

export default function Landing() {
  const scrollToAbout = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "black",
        // overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Starry background */}
      <BackgroundStars />

      {/* OWASP Letters + Globe */}
      <div className="letters" style={{ position: "relative", zIndex: 2 }}>
        <motion.div
          initial={{ x: 300, y: -200, opacity: 1 }}
          animate={{ x: -180, y: -180, opacity: 1 }}
          transition={{ duration: 1.6, ease: "circIn" }}
          style={{ zIndex: 10 }}
        >
          <CobeComponent />
        </motion.div>

        {["W", "a", "s", "P"].map((letter, index) => (
          <motion.div
            key={letter}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.25 }}
            transition={{ delay: 1.4 + index * -0.3, duration: 0 }}
            className="letter"
          >
            {letter}
          </motion.div>
        ))}
      </div>

      {/* Tagline with typing effect */}
      <Tagline />

      {/* Scroll-down button */}
      <div
        className="scroll-down-btn"
        onClick={scrollToAbout}
      >
        <div className="arrow"
        onClick={{scrollToAbout}}></div>
      </div>
    </div>
  );
}
