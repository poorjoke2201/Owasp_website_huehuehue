import { useEffect, useRef } from "react";

// Define a target density constant (stars per 1 million pixels)
const STAR_DENSITY_FACTOR = 0.08; // Adjust this value (e.g., 0.08 stars per 1M pixels)

export default function BackgroundStars({ style }) {
  const canvasRef = useRef(null);
  
  // Use a ref to store the star data so it can be re-initialized on resize
  const starDataRef = useRef({ stars: [], mouseX: 0, mouseY: 0 });
  const shootingStarsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    
    // Function to initialize or re-initialize stars based on density
    const initializeStars = () => {
      const { width, height } = canvas;
      
      // Calculate the total number of stars proportional to screen area
      // Area in millions of pixels (width * height / 1,000,000)
      const screenAreaM = (width * height) / 1000000;
      const numStars = Math.floor(screenAreaM * STAR_DENSITY_FACTOR * 1000); // Scaling factor added for visual density

      const newStars = [];
      for (let i = 0; i < numStars; i++) {
        newStars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.5 + 0.5,
          alpha: Math.random() * 0.7 + 0.3,
        });
      }
      starDataRef.current.stars = newStars;
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // CRITICAL: Re-initialize stars whenever the canvas is resized
      initializeStars(); 
    };
    
    // Initial setup
    resize();
    window.addEventListener("resize", resize);

    starDataRef.current.mouseX = canvas.width / 2;
    starDataRef.current.mouseY = canvas.height / 2;

    const createShootingStar = () => {
      shootingStarsRef.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height / 2,
        length: Math.random() * 120 + 80,
        speed: Math.random() * 8 + 4,
        angle: Math.random() * Math.PI / 6 + Math.PI / 6,
      });
    };

    canvas.addEventListener("click", createShootingStar);

    let rafId;

    const drawStars = () => {
      const { stars } = starDataRef.current;
      const shootingStars = shootingStarsRef.current;
      const { mouseX, mouseY } = starDataRef.current;

      // FIX: Use clearRect() or fillRect(black)
      // Since App.jsx provides the black background, use clearRect to avoid double-filling
      ctx.clearRect(0, 0, canvas.width, canvas.height); 

      // Draw normal stars
      stars.forEach((star) => {
        const dx = (mouseX - window.innerWidth / 2) * (star.radius * 0.1);
        const dy = (mouseY - window.innerHeight / 2) * (star.radius * 0.1);

        ctx.beginPath();
        ctx.arc(star.x + dx, star.y + dy, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${star.alpha})`;
        ctx.fill();
      });

      // Draw shooting stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i];
        const x2 = s.x + s.length * Math.cos(s.angle);
        const y2 = s.y + s.length * Math.sin(s.angle);

        const grad = ctx.createLinearGradient(s.x, s.y, x2, y2);
        grad.addColorStop(0, "rgba(100,113,194,0)");
        grad.addColorStop(0.7, "rgba(100,113,194,0.5)");
        const shootingColor = "#6471c2ff";
        grad.addColorStop(1, shootingColor);

        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2.5;
        ctx.lineCap = "round";
        ctx.stroke();

        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;

        if (s.x > canvas.width || s.y > canvas.height) shootingStars.splice(i, 1);
      }

      if (Math.random() < 0.02) createShootingStar();

      rafId = requestAnimationFrame(drawStars);
    };

    document.onmousemove = (ev) => {
      starDataRef.current.mouseX = ev.pageX; 
      starDataRef.current.mouseY = ev.pageY;
    };

    drawStars();
    
    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("click", createShootingStar);
      document.onmousemove = null;
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        display: "block",
        backgroundColor: 'transparent', // Ensure it's transparent over App.jsx's black background
        ...style
      }}
    />
  );
}