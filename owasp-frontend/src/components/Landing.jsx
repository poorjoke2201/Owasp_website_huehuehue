// src/components/Landing.jsx
'use client';

import Tagline from "./Tagline";
import { motion } from "framer-motion";
import CobeComponent from "./Cobe"; 
import BackgroundStars from "./BackgroundStars"; 

export default function Landing() {
  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
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
        // Keeping background black ensures it is an opaque scroll sink
        background: "black", 
        position: "relative",
        // CRITICAL: Must be auto to catch scroll events
        pointerEvents: 'auto',
        
      }}
    >
      {/* Starry background */}
      <BackgroundStars />

      {/* OWASP Letters + Globe + Tagline (shifted lower) */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          transform: "translateY(80px)",
        }}
      >
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
      </div>

      {/* Scroll-down button */}
      <div
        className="scroll-down-btn"
        onClick={() => scrollToSection("about")}
      >
        <div className="arrow"></div>
      </div>
    </div>
  );
}