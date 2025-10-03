import React, { useRef } from "react";
import Landing from "./components/Landing";
import About from "./components/About";
import Team from "./components/Team";
import BackgroundStars from "./components/BackgroundStars";
import Dock from "./components/Dock";
// FIX: Restoring all 5 required lucide-react icons
import { Home, Globe, Eye, Image, Users } from "lucide-react"; 
// FIX: Restoring imports for Vision and Gallery sections
import Vision from "./components/Vision"; 
import DomeGallery from "./components/DomeGallery";
import "./styles/index.css"; // Import global styles

export default function App() {
  const containerRef = useRef(null);
  // FIX: Updating the total section count to 5
  const TOTAL_SECTION_COUNT = 5; 

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Use scrollIntoView on the section element itself
      section.scrollIntoView({ behavior: "smooth" });
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
        // CRITICAL: Using vmin for responsive base size
        baseItemSize="6vmin" 
        magnification={1.8}
        distance={250}
        spring={{ mass:200,stiffness:50000,damping:4000}}
      />

      {/* Main Scroll Container */}
      <div
        ref={containerRef}
        style={{
          width: "100vw",
          height: "100vh",
          overflowY: "scroll",
          overflowX: "hidden", 
          // CRITICAL: Apply scroll snap type here
          scrollSnapType: "y proximity", 
          position: 'relative', 
          zIndex: 5,
        }}
      >
        {/* BackgroundStars is fixed and z-index 0 */}
        <BackgroundStars />
        
        {/* Content sections, each filling 100vh and snapping */}
        <section id="landing" style={{ scrollSnapAlign: "start", minHeight: "100vh" }}>
          <Landing />
        </section>
        
        <section id="about" style={{ scrollSnapAlign: "start", minHeight: "100vh" }}>
          <About />
        </section>

        {/* FIX: Restoring Vision section */}
        <section id="vision" style={{ scrollSnapAlign: "start", minHeight: "100vh" }}>
          <Vision />
        </section>
        
        {/* FIX: Restoring Gallery section */}
        <section id="gallery" style={{ scrollSnapAlign: "start", minHeight: "100vh" }}>
          <div style={{ width: '100vw', height: '100vh' }}>
      <DomeGallery/>
    </div>
          
        </section>
        
        <section id="team" style={{ scrollSnapAlign: "start", minHeight: "100vh" }}>
          <Team />
        </section>
      </div>
    </>
  );
}