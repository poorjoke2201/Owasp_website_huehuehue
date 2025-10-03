import { useEffect, useRef } from "react";

export default function BackgroundStars({ style }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      console.log("Canvas resized:", canvas.width, canvas.height);
    };
    resize();
    window.addEventListener("resize", resize);

    const numStars = 200;
    const stars = [];
    const shootingStars = [];
    const shootingColor = "#6471c2ff"; 

    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;

    // Initialize normal stars
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.7 + 0.3,
      });
    }

    const createShootingStar = () => {
      shootingStars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height / 2,
        length: Math.random() * 120 + 80,
        speed: Math.random() * 8 + 4,
        angle: Math.random() * Math.PI / 6 + Math.PI / 6,
      });
    };

    canvas.addEventListener("click", createShootingStar);

    const drawStars = () => {
      // Fill with black background
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

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

      requestAnimationFrame(drawStars);
    };

    document.onmousemove = (ev) => {
      mouseX = ev.pageX; 
      mouseY = ev.pageY;
    };

    drawStars();
    console.log("BackgroundStars animation started");

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("click", createShootingStar);
      document.onmousemove = null;
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
        ...style
      }}
    />
  );
}