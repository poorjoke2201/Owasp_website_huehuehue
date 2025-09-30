import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import "../styles/index.css"; // Make sure this file exists or styles included below

const DockItem = ({ icon, label, onClick, mouseX, baseItemSize, distance = 250, magnification = 55 }) => {
  const ref = useRef(null);

  const mouseDistance = useTransform(mouseX, (val) => {
    const rect = ref.current?.getBoundingClientRect() ?? { x: 0, width: baseItemSize };
    return val - rect.x - baseItemSize / 2;
  });

  const size = useSpring(useTransform(mouseDistance, [-distance, 0, distance], [baseItemSize, magnification, baseItemSize]), { stiffness: 150, damping: 12 });

  return (
    <motion.div
      ref={ref}
      style={{ width: size, height: size }}
      className="dock-item"
      onClick={onClick}
    >
      <div className="dock-icon">{icon}</div>
      <motion.div
        className="dock-label"
        style={{ opacity: size ? 1 : 0 }}
      >
        {label}
      </motion.div>
    </motion.div>
  );
};

export default function Dock({ items, baseItemSize = 50, panelHeight = 68 }) {
  const mouseX = useMotionValue(Infinity);

  return (
    <div className="dock-outer">
      <div
        className="dock-panel"
        style={{ height: panelHeight }}
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
      >
        {items.map((item, idx) => (
          <DockItem
            key={idx}
            icon={item.icon}
            label={item.label}
            onClick={item.onClick}
            mouseX={mouseX}
            baseItemSize={baseItemSize}
          />
        ))}
      </div>
    </div>
  );
}
