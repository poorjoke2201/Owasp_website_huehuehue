import React, { useRef } from "react";
import Landing from "./components/Landing";
import About from "./components/About";
import Team from "./components/Team";
import BackgroundStars from "./components/BackgroundStars";
import Dock from "./components/Dock";
import { Home, Globe, Eye, Image, Users } from "lucide-react";

export default function App() {
  const containerRef = useRef(null);

  // You have 3 full-height sections defined.
  const TOTAL_SECTION_COUNT = 3; 

  const scrollToSection = (sectionId) => {
    const container = containerRef.current;
    const section = document.getElementById(sectionId);
    if (section && container) {
      const sectionTop = section.offsetTop;
      container.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }
  };

  const dockItems = [
    { icon: <Home size={24} />, label: "Home", onClick: () => scrollToSection("landing") },
    { icon: <Globe size={24} />, label: "About", onClick: () => scrollToSection("about") },
    { icon: <Eye size={24} />, label: "Vision", onClick: () => scrollToSection("vision") },
    { icon: <Image size={24} />, label: "Gallery", onClick: () => scrollToSection("gallery") },
    { icon: <Users size={24} />, label: "Team", onClick: () => scrollToSection("team") },
  ];

  return (
    <>
      <Dock
        items={dockItems}
        panelHeight={60}
        baseItemSize={50}
        magnification={0}
        distance={0}
        spring={{ mass: 200, stiffness: 50000, damping: 4000 }}
      />

      <div
        ref={containerRef}
        style={{
          width: "100vw",
          height: "100vh",
          overflowY: "auto",
          overflowX: "hidden", 
          scrollSnapType: "y proximity",
          position: 'relative', 
          // CRITICAL FIX: Elevate the main scroll container above the fixed BackgroundStars (z-index 0)
          zIndex: 5, 
        }}
      >
        {/* BackgroundStars is fixed, so it's rendered here but its Z-index is handled by its own component's style */}
        <BackgroundStars />

        {/* 💡 SCROLL CATCH LAYER: Fixes the dead zones. Z-INDEX 1. */}
        {/* It must be placed *after* BackgroundStars in the JSX flow to benefit from the stacking context. */}
        <div 
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: `${TOTAL_SECTION_COUNT * 100}vh`, 
                width: '100%',
                backgroundColor: 'transparent', 
                pointerEvents: 'auto', 
                // Z-index 1 is lower than the sections (which are z-index 5 by inheritance) 
                // but higher than the background (z-index 0).
                zIndex: 1, 
            }}
        />
        
        {/* Content sections start here and inherit the high z-index from containerRef */}
        <section id="landing" style={{ width: "100vw", height: "100%", scrollSnapAlign: "start" }}>
          <Landing />
        </section>
        <section id="about" style={{ width: "100vw", height: "100%", scrollSnapAlign: "start" }}>
          <About />
        </section>
        <section id="team" style={{ width: "100vw", height: "100%", scrollSnapAlign: "start" }}>
          <Team />
        </section>
      </div>
    </>
  );
}