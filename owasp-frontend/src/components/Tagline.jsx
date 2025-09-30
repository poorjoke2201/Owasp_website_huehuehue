// src/components/Tagline.jsx

import { useState, useEffect } from "react";

const taglines = [
  "Open Worldwide Application Security Project",
  "Code. Create. Conquer.",
  "Innovating the Web, One Layer at a Time.",
  "Think Different. Think Secure. Think OWASP.",
  "From Curiosity to Cybersecurity",
  "Your Gateway to the Tech Underground",
  "Zeroes, Ones, and Infinite Possibilities",
  "Beyond Firewalls and Code",
  "Debugging Tomorrow’s Web Today",
  "Shaping the Next Era of Tech"
];

export default function Tagline() {
  const [currentTagline, setCurrentTagline] = useState("");
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const speed = isDeleting ? 40 : 80; // delete faster
    const timeout = setTimeout(() => {
      const fullText = taglines[taglineIndex].toUpperCase(); // make uppercase

      if (!isDeleting) {
        // typing
        setCurrentTagline(fullText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === fullText.length) {
          // pause before deleting
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        // deleting
        setCurrentTagline(fullText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex === 0) {
          // move to next tagline
          setIsDeleting(false);
          setTaglineIndex((taglineIndex + 1) % taglines.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, taglineIndex]);

  return (
    <div
      className="tagline"
      style={{
        marginTop: "2rem",
        fontSize: "1.6rem", // slightly bigger than before
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: 900, // bold
        letterSpacing: "2px",
        textAlign: "center",
        whiteSpace: "nowrap",
        overflow: "hidden",
        borderRight: "5px solid #4f74e5", // blue cursor
        paddingRight: "3px",
        textTransform: "uppercase", // ensure block letters
        zIndex: 2,
        position: "relative"
      }}
    >
      {currentTagline}
    </div>
  );
}
