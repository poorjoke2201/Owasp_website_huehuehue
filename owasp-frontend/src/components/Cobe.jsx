import createGlobe from "cobe";
import { useEffect, useRef } from "react";
// Ensure you have this installed: npm install @react-spring/web
import { useSpring } from '@react-spring/web'; 

// Placeholder components—Note: I will remove these placeholders as they aren't necessary for the fix
// const BackgroundStars = () => <div style={{ zIndex: 1, position: 'absolute', width: '100%', height: '100%' }}></div>;
// const OwaspBookshelf = () => <div style={{ background: '#333', padding: '20px' }}>Bookshelf Placeholder</div>;
// const Owasp = 'https://placehold.co/120x120/000/fff?text=OWASP+Logo'; 

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

  // LOCATIONS (remains the same)
  const markers = [
    { location: [12.2958, 76.6552], size: 0.1 }, 
    { location: [34.0522, -118.2437], size: 0.1 }, 
    { location: [51.5074, 0.1278], size: 0.1 },
    { location: [35.6895, 139.6917], size: 0.1 },
    { location: [-33.8688, 151.2093], size: 0.1 }, 
    { location: [52.5200, 13.4050], size: 0.1 },
    { location: [40.7128, -74.0060], size: 0.1 },
    { location: [-23.5505, -46.6333], size: 0.1 },
    { location: [25.276987, 55.296249], size: 0.1 },
    { location: [43.6532, -79.3832], size: 0.1 },
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
      markers: markers,
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

    setTimeout(() => canvasRef.current.style.opacity = '1');

    return () => {
      globe.destroy();
      window.removeEventListener('resize', onResize);
    };
  }, [api, r]); 

  // --- EVENT HANDLERS ---
  
  const handlePointerDown = (e) => {
    // Standard mouse/pointer down handling
    pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = 'grabbing';
    }
  };

  const handlePointerUp = () => {
    // Standard mouse/pointer up handling
    pointerInteracting.current = null;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = 'grab';
    }
  };

  const handlePointerOut = () => {
    // Standard mouse/pointer out handling
    pointerInteracting.current = null;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseMove = (e) => {
    // Standard mouse move handling
    if (pointerInteracting.current !== null) {
      const delta = e.clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      api.start({ r: delta / 130 }); 
    }
  };

  const handleTouchStart = (e) => {
    // CRITICAL FIX 1: Prevent default browser scrolling when touch starts
    if (e.cancelable) {
        e.preventDefault();
    }
    // Set interaction reference based on first touch point
    if (e.touches.length > 0) {
        pointerInteracting.current = e.touches[0].clientX - pointerInteractionMovement.current;
    }
  };

  const handleTouchMove = (e) => {
    // Handle the touch drag movement
    if (pointerInteracting.current !== null && e.touches[0]) {
      const delta = e.touches[0].clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      api.start({ r: delta / 130 }); 
    }
  };
  
  const handleTouchEnd = () => {
      // End interaction on touch end
      pointerInteracting.current = null;
  };
  // -------------------------

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
          /* CRITICAL MOBILE FIX: Tell the browser this element handles scrolling */
          touch-action: none;
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
        // DESKTOP/POINTER HANDLERS
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerOut={handlePointerOut}
        onMouseMove={handleMouseMove}
        
        // MOBILE/TOUCH HANDLERS (CRITICAL)
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        
        // Set passive: false for touch events to allow preventDefault to work
        // NOTE: React uses onTouchMove (which is passive: true by default), 
        // so we must use CSS touch-action: none and explicit preventDefault 
        // on the start event to ensure the gesture is captured.
      />
    </div>
  );
}