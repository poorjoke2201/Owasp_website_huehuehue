// src/App.jsx
import React, { useRef, useEffect } from "react";
import Landing from "./components/Landing";
import About from "./components/About";
import BackgroundStars from "./components/BackgroundStars";
import Dock from "./components/Dock";
import { Home, Globe, Eye, Image, Users } from "lucide-react";

export default function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const onWheel = (e) => {
      e.preventDefault();
      const direction = e.deltaY > 0 ? 1 : -1;
      container.scrollBy({
        top: direction * window.innerHeight,
        behavior: "smooth",
      });
    };

    container.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", onWheel);
    };
  }, []);

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
      {/* Dock at App level - stays visible across all sections */}
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
          overflow: "hidden",
          scrollSnapType: "y mandatory",
        }}
      >
        <BackgroundStars />
        <section id="landing" style={{ width: "100vw", height: "100vh", scrollSnapAlign: "start" }}>
          <Landing />
        </section>
        <section id="about" style={{ width: "100vw", height: "100vh", scrollSnapAlign: "start" }}>
          <About />
        </section>
      </div>
    </>
  );
}