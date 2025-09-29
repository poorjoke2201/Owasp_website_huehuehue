// src/components/BackgroundStars.jsx

import { useEffect, useRef } from "react";

export default function BackgroundStars() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const numStars = 200;
    const stars = [];
    const shootingStars = [];
    const shootingColor = "#6471c2ff"; // front bright color

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

    // Function to create a shooting star
    const createShootingStar = () => {
      shootingStars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height / 2,
        length: Math.random() * 120 + 80,
        speed: Math.random() * 8 + 4,
        angle: Math.random() * Math.PI / 6 + Math.PI / 6,
      });
    };

    // Click to create shooting star
    canvas.addEventListener("click", createShootingStar);

    // Draw everything
    const drawStars = () => {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Normal stars
      stars.forEach((star) => {
        const dx = (mouseX - canvas.width / 2) * (star.radius * 0.1);
        const dy = (mouseY - canvas.height / 2) * (star.radius * 0.1);

        ctx.beginPath();
        ctx.arc(star.x + dx, star.y + dy, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${star.alpha})`;
        ctx.fill();
      });

      // Shooting stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i];
        const x2 = s.x + s.length * Math.cos(s.angle);
        const y2 = s.y + s.length * Math.sin(s.angle);

        // Create gradient from tail to head
        const grad = ctx.createLinearGradient(s.x, s.y, x2, y2);
        grad.addColorStop(0, "rgba(100,113,194,0)"); // tail (transparent)
        grad.addColorStop(0.7, "rgba(100,113,194,0.5)"); // mid
        grad.addColorStop(1, shootingColor); // head (bright)

        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2.5;
        ctx.lineCap = "round";
        ctx.stroke();

        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;

        // Remove if out of bounds
        if (s.x > canvas.width || s.y > canvas.height) shootingStars.splice(i, 1);
      }

      // Random shooting star creation
      if (Math.random() < 0.02) createShootingStar();

      requestAnimationFrame(drawStars);
    };

    document.onmousemove = (ev) => {
      mouseX = ev.pageX - canvas.offsetLeft;
      mouseY = ev.pageY - canvas.offsetTop;
    };

    drawStars();

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("click", createShootingStar);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 0,
      }}
    />
  );
}
