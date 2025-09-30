import React, { useEffect, useRef, useState } from "react";
import BackgroundStars from "./BackgroundStars";
import OwaspBookshelf from "./OwaspBookshelf";
import Owasp from "../assets/OWASP_20250923_094805_0000.png"
export default function About() {
  const aboutRef = useRef(null);
  const rafRef = useRef(null);
  const frameRef = useRef(0);
  const [displayedText, setDisplayedText] = useState("");
  const fullMessage = "→ Explore more by clicking on the books!";
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()[]{}<>?/|\\~";

  // start the decrypting animation (fresh each time)
  const startAnimation = () => {
    cancelAnimationFrame(rafRef.current);
    frameRef.current = 0;

    const len = fullMessage.length;
    const maxFrames = len * 3; // controls speed / reveal pace

    const step = () => {
      frameRef.current += 1;
      const progress = frameRef.current;

      if (progress < maxFrames) {
        const revealCount = Math.floor(progress / 3);
        let output = "";
        for (let i = 0; i < len; i++) {
          if (i < revealCount) output += fullMessage.charAt(i);
          else output += chars[Math.floor(Math.random() * chars.length)];
        }
        setDisplayedText(output);
        rafRef.current = requestAnimationFrame(step);
      } else {
        setDisplayedText(fullMessage);
        cancelAnimationFrame(rafRef.current);
      }
    };

    rafRef.current = requestAnimationFrame(step);
  };

  // stop/reset animation (so it can replay next time)
  const stopAnimation = () => {
    cancelAnimationFrame(rafRef.current);
    frameRef.current = 0;
    setDisplayedText("");
  };

  useEffect(() => {
    const el = aboutRef.current;
    if (!el) return;

    // IntersectionObserver will detect when About enters the viewport.
    // If you use a custom scroll container (not window), pass that element as `root`.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // element is visible -> start animation
            startAnimation();
          } else {
            // element left viewport -> stop/reset so it can replay later
            stopAnimation();
          }
        });
      },
      {
        root: null, // null = browser viewport. If you scroll a custom div, set root to that container element.
        threshold: 0.55, // 55% visible before animation starts (adjust if needed)
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section
      ref={aboutRef}
      style={{
        width: "100vw",
        minHeight: "10vh",
        background: "black",
        color: "white",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background stars - if you already render BackgroundStars globally (in App),
          remove this line to avoid duplicate canvases */}
      <BackgroundStars />

      {/* Left side - Text content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "520px",
          flex: 1,
        }}
      >
        {/* Logo */}
        <img 
          src={Owasp} 
          alt="OWASP Logo" 
          style={{
            width: "120px",
            height: "auto",
            marginTop: "0rem",
            marginBottom: "0.5rem",
          }}
        />
        
        <h1
          style={{
            fontFamily: "Anton, sans-serif",
            marginTop: "0rem",
            fontSize: "3rem",
            marginBottom: "1rem",
            textShadow: "0 0 10px rgba(255,255,255,0.12)",
          }}
        >
          About OWASP
        </h1>

        <p
          style={{
            fontSize: "1.15rem",
            fontFamily: "Montserrat, sans-serif",
            textAlign: "justify",
            lineHeight: 1.75,
            marginBottom: "1rem",
          }}
        >
          The Open Worldwide Application Security Project (OWASP) is an open community
          dedicated to enabling organizations to develop, purchase, and maintain
          applications that can be trusted. Our mission is to make software security
          visible, so that individuals and organizations can make informed decisions
          about true software security risks.
        </p>

        <p
          style={{
            fontSize: "1.15rem",
            fontFamily: "Montserrat, sans-serif",
            textAlign: "justify",
            lineHeight: 1.75,
          }}
        >
          Through education, tools, and community-driven projects, OWASP empowers
          developers, organizations, and security enthusiasts to create secure web
          applications and protect against cyber threats.
        </p>

        {/* Animated Interactive prompt (decrypt effect plays when section becomes visible) */}
        <p
          style={{
            fontSize: "1.05rem",
            fontFamily: "monospace",
            lineHeight: 1.6,
            marginTop: "2rem",
            color: "#4f74e5",
            fontStyle: "italic",
            textShadow: "0 0 8px rgba(0,191,255,0.25), 0 0 12px rgba(0,191,255,0.12)",
            minHeight: "1.6em", // reserve height to avoid layout shift during animation
            whiteSpace: "pre-wrap",
          }}
        >
          {displayedText}
        </p>
      </div>

      {/* Right side - Interactive Bookshelf */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "600px",
        }}
      >
        <OwaspBookshelf />
      </div>
    </section>
  );
}