// src/components/Cobe.jsx

import { useEffect, useRef } from "react";
import createGlobe from "cobe";

export default function CobeComponent() {
  const canvasRef = useRef(null);

  useEffect(() => {
    let phi = 0;
    let width = 0;

    const onResize = () => {
      if (canvasRef.current) width = canvasRef.current.offsetWidth;
    };

    window.addEventListener("resize", onResize);
    onResize();

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 1,
      mapSamples: 16000,
      mapBrightness: 1.2,
      baseColor: [1, 1, 1],
      markerColor: [251 / 255, 100 / 255, 21 / 255],
      glowColor: [0.8, 0.8, 0.8],
      markers: [],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.015;
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    if (canvasRef.current) {
      setTimeout(() => {
        canvasRef.current.style.opacity = "1";
      });
    }

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="globe-container">
      <canvas
        ref={canvasRef}
        style={{
          width: "255%",
          height: "255%",
          opacity: 1,
          transition: "opacity 1s ease",
        }}
      />
    </div>
  );
}