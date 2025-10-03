import createGlobe from "cobe";
import { useEffect, useRef } from "react";
// Ensure you have this installed: npm install @react-spring/web
import { useSpring } from '@react-spring/web'; 

// Placeholder components to resolve compilation errors
const BackgroundStars = () => <div style={{ zIndex: 1, position: 'absolute', width: '100%', height: '100%' }}></div>;
const OwaspBookshelf = () => <div style={{ background: '#333', padding: '20px' }}>Bookshelf Placeholder</div>;
const Owasp = 'https://placehold.co/120x120/000/fff?text=OWASP+Logo'; // Placeholder URL

export default function CobeComponent() {
  const canvasRef = useRef(null);
  
  // DRAGGING STATE
  const pointerInteracting = useRef(null);
  const pointerInteractionMovement = useRef(0);
  
  // REACT-SPRING: State for smooth rotation value 'r'
  const [{ r }, api] = useSpring(() => ({
    r: 1,
    config: {
      mass: 1,
      tension: 250,
      friction: 40,
      precision: 0.001,
    },
  }));

  // LOCATIONS: Added Major OWASP and Tech Hub Locations
  const markers = [
    // --- Existing Markers ---
    // 1. NIE Mysuru, India
    { location: [12.2958, 76.6552], size: 0.1 }, 
    // 2. OWASP Foundation Headquarters (Los Angeles Area, US)
    { location: [34.0522, -118.2437], size: 0.1 }, 
    // 3. London, UK
    { location: [51.5074, 0.1278], size: 0.1 },
    // 4. Tokyo, Japan
    { location: [35.6895, 139.6917], size: 0.1 },
    // 5. Sydney, Australia (APAC Tech Hub)
    { location: [-33.8688, 151.2093], size: 0.1 }, 
    // 6. Berlin, Germany (European Tech/Cyber Hub)
    { location: [52.5200, 13.4050], size: 0.1 },
    // 7. New York City, USA
    { location: [40.7128, -74.0060], size: 0.1 },
    // 8. São Paulo, Brazil (South America Tech Center)
    { location: [-23.5505, -46.6333], size: 0.1 },
    // 9. Dubai, UAE (Middle East Hub)
    { location: [25.276987, 55.296249], size: 0.1 },
    // 10. Toronto, Canada
    { location: [43.6532, -79.3832], size: 0.1 },
    // 11. Amsterdam, Netherlands
    { location: [52.3676, 4.9041], size: 0.1 },
  ];

  useEffect(() => {
    let phi = 0;
    let width = 0;

    const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth);
    window.addEventListener('resize', onResize);
    onResize();

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 0.0005,
      mapSamples: 16000,
      mapBrightness: 1.2,
      baseColor: [1, 1, 1],
      markerColor: [251 / 255, 100 / 255, 21 / 255],
      glowColor: [0.8, 0.8, 0.8],
      markers: markers, // Added markers here
      onRender: (state) => {
        // Auto-rotate only when NOT dragging
        if (!pointerInteracting.current) {
          phi += 0.015; 
        }
        
        state.phi = phi + r.get();
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    // FADE-IN FIX: Removed unnecessary conditional check
    setTimeout(() => canvasRef.current.style.opacity = '1');

    return () => {
      globe.destroy();
      window.removeEventListener('resize', onResize);
    };
  }, [api, r]); 

  return (
    <div className="globe-container">
      <style>{`
        /* Responsive sizing using clamp to ensure minimum and maximum dimensions */
        .globe-container {
          /* Desktop/Tablet sizes */
          width: clamp(140px, 22vw, 240px); 
          height: clamp(140px, 22vw, 240px);
          position: relative;
        }

        .globe-container canvas {
          /* Oversized canvas for better visual effect and glow bleed */
          width: 155%;
          height: 155%;
          opacity: 0;
          transition: opacity 1s ease;
          cursor: grab;
          position: absolute; /* Allows oversized canvas to be positioned */
          top: -27.5%; /* Center the 155% canvas */
          left: -27.5%;
        }

        /* Adjust size for smaller tablets */
        @media (max-width: 900px) {
          .globe-container {
            width: clamp(100px, 30vw, 180px);
            height: clamp(100px, 30vw, 180px);
          }
        }

        /* Adjust size for mobile phones */
        @media (max-width: 600px) {
          .globe-container {
            width: clamp(80px, 35vw, 140px);
            height: clamp(80px, 35vw, 140px);
          }
        }
      `}</style>
      
      <canvas
        ref={canvasRef}
        // EVENT HANDLERS
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
          if (canvasRef.current) {
            canvasRef.current.style.cursor = 'grabbing';
          }
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) {
            canvasRef.current.style.cursor = 'grab';
          }
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) {
            canvasRef.current.style.cursor = 'grab';
          }
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            api.start({ r: delta / 130 }); 
          }
        }}
        onTouchMove={(e) => {
          if (pointerInteracting.current !== null && e.touches[0]) {
            const delta = e.touches[0].clientX - pointerInteracting.current;
            // Note: delta is based only on X movement for horizontal spin
            pointerInteractionMovement.current = delta;
            api.start({ r: delta / 130 }); 
          }
        }}
        // Removed unnecessary inline style from canvas since CSS handles it
      />
    </div>
  );
}
