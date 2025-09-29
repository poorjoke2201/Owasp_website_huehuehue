import { useEffect, useRef } from "react";

export default function BackgroundLetters() {
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

    // Characters setup
    const characterList = "abcdefghijklmnopqrstuvwxyz".split("");
    const layers = {
      n: 5,
      letters: [100, 60, 40, 30, 20], // ⬅️ more letters now
      coef: [0.1, 0.2, 0.4, 0.6, 0.8],
      size: [6, 9, 15, 18, 19], // bigger range for depth effect
      color: ["#fff", "#eee", "#ddd", "#bbb", "#999"],
      font: "Courier",
    };

    let characters = [];
    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;

    const rnd = {
      btwn: (min, max) => Math.floor(Math.random() * (max - min) + min),
      choose: (list) => list[rnd.btwn(0, list.length)],
    };

    function createLetters() {
      for (let i = 0; i < layers.n; i++) {
        for (let j = 0; j < layers.letters[i]; j++) {
          const character = rnd.choose(characterList);
          const x = rnd.btwn(0, canvas.width);
          const y = rnd.btwn(0, canvas.height);
          characters.push({
            char: character,
            font: layers.font,
            size: layers.size[i],
            color: layers.color[i],
            coef: layers.coef[i],
            posX: x,
            posY: y,
          });
        }
      }
    }

    function drawLetter(char) {
      ctx.font = `${char.size}px ${char.font}`;
      ctx.fillStyle = char.color;
      const x = char.posX + (mouseX - canvas.width / 2) * char.coef;
      const y = char.posY + (mouseY - canvas.height / 2) * char.coef;
      ctx.fillText(char.char, x, y);
    }

    function render() {
      ctx.fillStyle = "black"; // ⬅️ background stays black
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      characters.forEach(drawLetter);
      requestAnimationFrame(render);
    }

    document.onmousemove = (ev) => {
      mouseX = ev.pageX - canvas.offsetLeft;
      mouseY = ev.pageY - canvas.offsetTop;
    };

    createLetters();
    render();

    return () => {
      window.removeEventListener("resize", resize);
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
