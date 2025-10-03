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
        background: "transparent",
        position: "relative",
        
      }}
    >
      {/* Starry background */}
      {/* <BackgroundStars /> */}

      {/* OWASP Letters + Globe + Tagline */}
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
        {/* CLIPPED CONTAINER: Globe + WASP letters */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "2vw", // spacing scaled to viewport width
            marginBottom: "4vh", // spacing above tagline scaled to viewport height
            overflow:"visible",
          }}
        >
          {/* Cobe Component (Globe) */}
          <motion.div
            initial={{ x: 300, y: -50, opacity: 1 }}
            animate={{ x: 10, y: -50, opacity: 1 }}
            transition={{ duration: 1.5, ease: "circIn" }}
            style={{ zIndex: 10 }}
          >
            <CobeComponent />
          </motion.div>

          {/* WASP Letters */}
          <div style={{ display: "flex", alignItems: "center" }}>
            {["W", "a", "s", "P"].map((letter, index) => (
              <motion.div
                key={letter}
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 + index * -0.1, duration: 0 }}
                className="letter"
                style={{
                  fontSize: 'clamp(3rem, 6vw, 8rem)', // responsive font
                }}
              >
                {letter}
              </motion.div>
            ))}
          </div>
        </div>
        {/* END: CLIPPED CONTAINER */}

        {/* Tagline */}
        <Tagline />
      </div>

      {/* Scroll-down button */}
      <div
        className="scroll-down-btn"
        onClick={() => scrollToSection("about")}
        // style={{
        //   position: "absolute",
        //   bottom: "3vh",
        //   left: "50%",
        //   transform: "translateX(-50%)",
        //   width: "2vw",
        //   height: "4vh",
        //   border: "0.3vh solid #fff",
        //   borderRadius: "50%",
        //   display: "flex",
        //   justifyContent: "center",
        //   alignItems: "flex-start",
        //   cursor: "pointer",
        //   zIndex: 3,
        // }}
      >
        <div
          className="arrow"
          // style={{
          //   width: "0.8vw",
          //   height: "0.8vw",
          //   borderBottom: "0.2vh solid #fff",
          //   borderRight: "0.2vh solid #fff",
          //   transform: "rotate(45deg)",
          //   marginTop: "0.8vh",
          //   animation: "arrowMove 1s infinite alternate",
          // }}
        ></div>
      </div>

      <style>{`
        @keyframes arrowMove {
          0% { transform: rotate(45deg) translateY(0); opacity: 1; }
          100% { transform: rotate(45deg) translateY(1vh); opacity: 0.8; }
        }
      `}</style>
    </div>
  );
}
