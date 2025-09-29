// src/components/App.jsx
import React, { useRef, useEffect } from "react";
import Landing from "./components/Landing";
import About from "./components/About";
import BackgroundStars from "./components/BackgroundStars";

export default function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const onWheel = (e) => {
      e.preventDefault();
      // scroll by viewport height
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

  return (
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
      <section style={{ width: "100vw", height: "100vh", scrollSnapAlign: "start" }}>
        <Landing />
      </section>
      <section style={{ width: "100vw", height: "100vh", scrollSnapAlign: "start" }}>
        <About />
      </section>
    </div>
  );
}
