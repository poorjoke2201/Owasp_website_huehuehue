import React, { useEffect, useRef, useState } from "react";

import OwaspBookshelf from "./OwaspBookshelf";
import Owasp from "../assets/OWASP_20250923_094805_0000.png";

export default function About() {
  const aboutRef = useRef(null);
  const rafRef = useRef(null);
  const frameRef = useRef(0);
  const [displayedText, setDisplayedText] = useState("");
  const fullMessage = "→ Explore more by clicking on the books!";
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()[]{}<>?/|\\~";
  
  // CRITICAL FIX: Ref to track if the animation has completed
  const hasAnimatedRef = useRef(false); 

  // --- Decrypt animation (logic remains the same) ---
  const startAnimation = () => {
    cancelAnimationFrame(rafRef.current);
    frameRef.current = 0;

    const len = fullMessage.length;
    const maxFrames = len * 3;

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

  const stopAnimation = () => {
    // We remove the stop animation logic since we only want it to run once.
    // However, we keep the function body to satisfy the original logic structure.
    cancelAnimationFrame(rafRef.current);
    frameRef.current = 0;
    // We intentionally DO NOT reset displayedText to empty string here.
  };

  useEffect(() => {
    const el = aboutRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Check if intersecting AND the animation hasn't played yet
          if (entry.isIntersecting && !hasAnimatedRef.current) { 
            startAnimation();
            hasAnimatedRef.current = true; // Set flag to prevent future runs
          } 
          // We no longer call stopAnimation on exiting intersection, 
          // ensuring the final text remains visible.
        });
      },
      // Keep low threshold to ensure it triggers immediately upon entering view
      { root: null, threshold: 0.01 } 
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <style>{`
        .about-section {
         width: 100vw;
          min-height: 100vh;
          background: transparent;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 2vh 4vw;
          position: relative;
          overflow: hidden;
        }

        .about-container {
          position: relative;
          z-index: 2;
          width: 100%;
         max-width: 1400px;
          height: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          /* Align to the start of the container */
          align-items: flex-start; 
          gap: 4vw;
          /* Reduce padding-top to give more vertical space */
          padding-top: 40px; 
        }

        .text-column {
          flex: 1 1 45%;
          min-width: 300px;
          max-width: 600px;
          /* Align self to start to cooperate with container alignment */
          align-self: flex-start; 
          padding: 0; /* Reduced padding-top to 0 */
          /* Shift up slightly, counteract any default margin */
          margin-top: 0; 
        }

        .bookshelf-column {
          flex: 1 1 50%;
          min-width: 300px;
          max-width: 700px;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          /* Shift bookshelf down to match visual height of text content */
          margin-top: 50px; 
        }

        .owasp-logo {
          width: min(10vw, 120px);
          height: auto;
          margin-bottom: 1vh;
        }

        .about-title {
          font-family: Anton, sans-serif;
          font-size: min(6vw, 3rem);
          margin-bottom: 2vh;
          text-shadow: 0 0 10px rgba(255,255,255,0.12);
        }

        .about-paragraph {
          font-size: min(2.5vw, 1.15rem);
          font-family: Montserrat, sans-serif;
          text-align: justify;
          line-height: 1.75;
          margin-bottom: 2vh;
        }

        .decrypt-text {
          font-size: min(2vw, 1.05rem);
          font-family: monospace;
          line-height: 1.6;
          margin-top: 4vh;
          color: #4f74e5;
          font-style: italic;
          text-shadow: 0 0 8px rgba(0,191,255,0.25);
          min-height: 1.6em;
          white-space: pre-wrap;
        }

        @media (max-width: 900px) {
          .about-section {
            height: auto; 
            min-height: 100vh;
            padding: 4vh 4vw;
          }

          .about-container {
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            padding-top: 20px;
          }

          .text-column {
            order: 1;
            flex: 0 0 auto;
            min-width: 90vw;
            max-width: 90vw;
            padding: 20px 0;
            margin-bottom: 0;
            margin-top: 0; /* Ensure no unwanted margin on mobile */
            align-self: center; /* Center mobile column again */
          }

          .bookshelf-column {
            order: 2;
            flex: 0 0 auto;
            min-width: 90vw;
            max-width: 90vw;
            height: auto;
            min-height: 60vh;
            margin-top: 0; /* Resetting margin for vertical stack */
          }

          .about-paragraph {
            font-size: 1rem;
            text-align: left;
          }

          .about-title {
            font-size: 2rem;
          }

          .owasp-logo {
            width: 80px;
          }

          .decrypt-text {
            font-size: 0.95rem;
          }
        }
      `}</style>

      <section id="about" ref={aboutRef} className="about-section">
       
        {/* Main container */}
        <div className="about-container">
          {/* Left column: Logo + Text */}
          <div className="text-column">
            <img
              src={Owasp}
              alt="OWASP Logo"
              className="owasp-logo"
            />

            <h1 className="about-title">
              About OWASP
            </h1>

            <p className="about-paragraph">
              The Open Worldwide Application Security Project (OWASP) is an open
              community dedicated to enabling organizations to develop, purchase,
              and maintain applications that can be trusted. Our mission is to
              make software security visible, so that individuals and organizations
              can make informed decisions about true software security risks.
            </p>

            <p className="about-paragraph">
              Through education, tools, and community-driven projects, OWASP
              empowers developers, organizations, and security enthusiasts to
              create secure web applications and protect against cyber threats.
            </p>

            <p className="decrypt-text">
              {displayedText}
            </p>
          </div>

          {/* Right column: Bookshelf */}
          <div className="bookshelf-column">
            <OwaspBookshelf />
          </div>
        </div>
      </section>
    </>
  );
}