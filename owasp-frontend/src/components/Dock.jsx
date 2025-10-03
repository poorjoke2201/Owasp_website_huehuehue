// import React, { useRef } from "react";
// import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
// import "../styles/index.css";

// const DockItem = ({ icon, label, onClick, mouseX, baseItemSizeVW = 6, distanceVW = 30, magnificationVW = 10 }) => {
//   const ref = useRef(null);

//   // Convert base size to pixels dynamically
//   const baseItemSize = (window.innerWidth * baseItemSizeVW) / 170;
//   const distance = (window.innerWidth * distanceVW) / 100;
//   const magnification = (window.innerWidth * magnificationVW) / 230;

//   const mouseDistance = useTransform(mouseX, (val) => {
//     const rect = ref.current?.getBoundingClientRect() ?? { x: 0, width: baseItemSize };
//     return val - rect.x - baseItemSize / 2;
//   });

//   const size = useSpring(
//     useTransform(
//       mouseDistance,
//       [-distance, 0, distance],
//       [baseItemSize, magnification, baseItemSize]
//     ),
//     { stiffness: 150, damping: 12 }
//   );

//   return (
//     <motion.div
//       ref={ref}
//       style={{ width: size, height: size }}
//       className="dock-item"
//       onClick={onClick}
//     >
//       <div className="dock-icon">{icon}</div>
//       <motion.div className="dock-label" style={{ opacity: size ? 1 : 0 }}>
//         {label}
//       </motion.div>
//     </motion.div>
//   );
// };

// export default function Dock({ items, baseItemSizeVW = 6, panelHeightVW = 8 }) {
//   const mouseX = useMotionValue(Infinity);

//   const panelHeight = (window.innerHeight * panelHeightVW) / 100;

//   return (
//     <div className="dock-outer">
//       <div
//         className="dock-panel"
//         style={{ height: panelHeight }}
//         onMouseMove={(e) => mouseX.set(e.pageX)}
//         onMouseLeave={() => mouseX.set(Infinity)}
//       >
//         {items.map((item, idx) => (
//           <DockItem
//             key={idx}
//             icon={item.icon}
//             label={item.label}
//             onClick={item.onClick}
//             mouseX={mouseX}
//             baseItemSizeVW={baseItemSizeVW}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// import React, { useRef } from "react";
// import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
// import "../styles/index.css"; // Make sure this file exists or styles included below

// const DockItem = ({ icon, label, onClick, mouseX, baseItemSize, distance = 250, magnification = 55 }) => {
//   const ref = useRef(null);

//   const mouseDistance = useTransform(mouseX, (val) => {
//     const rect = ref.current?.getBoundingClientRect() ?? { x: 0, width: baseItemSize };
//     return val - rect.x - baseItemSize / 2;
//   });

//   const size = useSpring(useTransform(mouseDistance, [-distance, 0, distance], [baseItemSize, magnification, baseItemSize]), { stiffness: -150, damping: 12 });

//   return (
//     <motion.div
//       ref={ref}
//       style={{ width: size, height: size }}
//       className="dock-item"
//       onClick={onClick}
//     >
//       <div className="dock-icon">{icon}</div>
//       <motion.div
//         className="dock-label"
//         style={{ opacity: size ? 1 : 0 }}
//       >
//         {label}
//       </motion.div>
//     </motion.div>
//   );
// };

// export default function Dock({ items, baseItemSize = 50, panelHeight = 68 }) {
//   const mouseX = useMotionValue(Infinity);

//   return (
//     <div className="dock-outer">
//       <div
//         className="dock-panel"
//         style={{ height: panelHeight }}
//         onMouseMove={(e) => mouseX.set(e.pageX)}
//         onMouseLeave={() => mouseX.set(Infinity)}
//       >
//         {items.map((item, idx) => (
//           <DockItem
//             key={idx}
//             icon={item.icon}
//             label={item.label}
//             onClick={item.onClick}
//             mouseX={mouseX}
//             baseItemSize={baseItemSize}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }


// import React, { useRef } from "react";
// import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
// import "../styles/index.css"; // External styles are referenced here

// // Helper to safely extract number and unit from a string like "65.5vmin"
// const parseSize = (size) => {
//   const value = parseFloat(size) || 50;
//   const unit = typeof size === 'string' ? size.replace(value, '') : 'px';
//   return { value, unit };
// };

// // --- Dock Item Component ---
// const DockItem = ({ icon, label, onClick, mouseX, baseItemSize, distance = 250, magnification }) => {
//   const ref = useRef(null);

//   // Parse initial size from props (e.g., 65.5 and "vmin")
//   const { value: baseValue, unit } = parseSize(baseItemSize);
  
//   // Calculate the numerical peak size using the magnification factor
//   const maxSizeValue = baseValue * magnification; 

//   const mouseDistance = useTransform(mouseX, (val) => {
//     // Get the actual width of the element for precise centering
//     const rect = ref.current?.getBoundingClientRect() ?? { x: 0, width: baseValue };
//     return val - rect.x - rect.width / 2;
//   });

//   // 1. NUMERIC MOTION VALUE for Size (Used for all internal calculations: y and opacity)
//   const sizeValue = useSpring(
//     useTransform(mouseDistance, [-distance, 0, distance], [baseValue, maxSizeValue, baseValue]),
//     { stiffness: 200, damping: 12 } 
//   );
  
//   // 2. FINAL STYLED MOTION VALUE (Adds unit back for CSS width/height)
//   // This is a string MotionValue (e.g., "65.5vmin")
//   const sizeWithUnit = useTransform(sizeValue, (s) => `${s}${unit}`); 

//   // 3. FLOWING EFFECT: Controls the vertical lift (y translation)
//   // Lifts the icon up proportional to its magnification. The lift height is calculated dynamically.
//   const y = useTransform(sizeValue, [baseValue, maxSizeValue], [0, -(maxSizeValue * 0.18)]);

//   // 4. LABEL OPACITY: Use mouseDistance proximity to fade the label in/out
//   const labelOpacity = useTransform(mouseDistance, [-distance * 0.5, 0, distance * 0.5], [0, 1, 0]);

//   return (
//     <motion.div
//       ref={ref}
//       style={{ width: sizeWithUnit, height: sizeWithUnit, y }} // Apply size and vertical motion
//       className="dock-item"
//       onClick={onClick}
//     >
//       <div className="dock-icon">{icon}</div>
//       <motion.div
//         className="dock-label"
//         style={{ opacity: labelOpacity }} 
//       >
//         {label}
//       </motion.div>
//     </motion.div>
//   );
// };

// // --- Dock Main Component ---
// export default function Dock({ items, baseItemSize = "50px", panelHeight = 68, magnification = 1.8, distance = 250 }) {
//   const mouseX = useMotionValue(Infinity);
  
//   // We need to pass the string format of baseItemSize to DockItem
//   const finalBaseItemSize = typeof baseItemSize === 'string' ? baseItemSize : `${baseItemSize}px`;

//   return (
//     <>
//       {/* Inline styles for the Dock for guaranteed visibility of essential structure */}
//       <style>{`
//         /* Positioning and basic styling for the dock */
//         .dock-outer {
//           position: fixed;
//           top: 0.5rem;
//           left: 50%;
//           transform: translateX(-50%);
//           z-index: 9999;
//           pointer-events: auto;
//         }

//         .dock-panel {
//           display: flex;
//           gap: 1rem;
//           background: rgba(0, 0, 0, 0.5);
//           padding: 0.5rem 1rem;
//           border: 0.5px solid gray;
//           border-radius: 12px;
//           align-items: flex-end;
//           backdrop-filter: blur(6px);
//           -webkit-backdrop-filter: blur(6px); /* Safari support */
//         }

//         .dock-item {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           cursor: pointer;
//           position: relative;
//           transition: transform 0.1s ease-out; /* For non-motion effects */
//         }

//         .dock-icon {
//           font-size: 1.25rem;
//           color: white;
//           width: 100%;
//           height: 100%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         .dock-label {
//           position: absolute;
//           bottom: -1.2rem;
//           font-size: 0.75rem;
//           color: white;
//           white-space: nowrap;
//           transition: opacity 0.2s;
//         }
//       `}</style>
      
//       <div className="dock-outer">
//         <div
//           className="dock-panel"
//           style={{ height: panelHeight }}
//           onMouseMove={(e) => mouseX.set(e.pageX)}
//           onMouseLeave={() => mouseX.set(Infinity)}
//         >
//           {items.map((item, idx) => (
//             <DockItem
//               key={idx}
//               icon={item.icon}
//               label={item.label}
//               onClick={item.onClick}
//               mouseX={mouseX}
//               baseItemSize={finalBaseItemSize}
//               magnification={magnification}
//               distance={distance}
//             />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }


// import React, { useRef } from "react";
// import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// // Helper to safely extract number and unit from a size string like "6vmin"
// const parseSize = (size) => {
//   const value = parseFloat(size) || 50;
//   // If size is a string (e.g., "6vmin"), extract "vmin". Otherwise, default to "px".
//   const unit = typeof size === 'string' ? size.replace(value, '') : 'px';
//   return { value, unit };
// };

// // --- Dock Item Component ---
// const DockItem = ({ icon, label, onClick, mouseX, baseItemSize, distance = 250, magnification }) => {
//   const ref = useRef(null);

//   // 1. UNIT AND VALUE PARSING
//   const { value: baseValue, unit } = parseSize(baseItemSize);
//   // Calculate the numerical peak size using the magnification factor
//   const maxSizeValue = baseValue * magnification; 

//   // Ensure distance is positive and non-zero for calculations
//   const safeDistance = Math.max(200, distance); 

//   const mouseDistance = useTransform(mouseX, (val) => {
//     // Get the actual width of the element for precise centering
//     const rect = ref.current?.getBoundingClientRect() ?? { x: 0, width: baseValue };
//     return val - rect.x - rect.width / 2;
//   });

//   // 2. NUMERIC MOTION VALUE for Size (Used for all internal calculations: y and opacity)
//   const sizeValue = useSpring(
//     useTransform(mouseDistance, [-safeDistance, 0, safeDistance], [baseValue, maxSizeValue, baseValue]),
//     { stiffness: 200, damping: 12 } 
//   );
  
//   // 3. FINAL STYLED MOTION VALUE (Adds unit back for CSS width/height)
//   const sizeWithUnit = useTransform(sizeValue, (s) => `${s}${unit}`); 

//   // 4. FLOWING EFFECT: Controls the vertical lift (y translation)
//   // Lifts the icon up proportional to its magnification. Lifts by ~18% of the maximum size.
//   const y = useTransform(sizeValue, [baseValue, maxSizeValue], [0, -(maxSizeValue * 0.18)]);

//   // 5. LABEL OPACITY: Use mouseDistance proximity to fade the label in/out
//   // The label starts fading in when the mouse is within half the safeDistance.
//   const labelOpacity = useTransform(mouseDistance, [-safeDistance * 0.5, 0, safeDistance * 0.5], [0, 1, 0]);

//   return (
//     <motion.div
//       ref={ref}
//       style={{ width: sizeWithUnit, height: sizeWithUnit, y }} // Apply size and vertical motion
//       className="dock-item"
//       onClick={onClick}
//     >
//       <div className="dock-icon">{icon}</div>
//       <motion.div
//         className="dock-label"
//         style={{ opacity: labelOpacity }} 
//       >
//         {label}
//       </motion.div>
//     </motion.div>
//   );
// };

// // --- Dock Main Component ---
// export default function Dock({ items, baseItemSize = "50px", panelHeight = 68, magnification = 1.8, distance = 250 }) {
//   const mouseX = useMotionValue(Infinity);
  
//   // Ensure baseItemSize is passed as a string unit to DockItem for parsing
//   const finalBaseItemSize = typeof baseItemSize === 'string' ? baseItemSize : `${baseItemSize}px`;

//   return (
//     <>
//       {/* Inline styles for the Dock to ensure it looks good and works */}
//       <style>{`
//         /* Positioning and basic styling for the dock */
//         .dock-outer {
//           position: fixed;
//           top: 0.5rem;
//           left: 50%;
//           transform: translateX(-50%);
//           z-index: 9999;
//           pointer-events: auto;
//         }

//         .dock-panel {
//           display: flex;
//           gap: 1rem;
//           background: rgba(0, 0, 0, 0.5);
//           padding: 0.5rem 1rem;
//           border: 0.5px solid gray;
//           border-radius: 12px;
//           align-items: flex-end;
//           backdrop-filter: blur(6px);
//           -webkit-backdrop-filter: blur(6px); /* Safari support */
//         }

//         .dock-item {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           cursor: pointer;
//           position: relative;
//           transition: transform 0.1s ease-out; /* For non-motion effects */
//         }

//         .dock-icon {
//           font-size: 1.25rem;
//           color: white;
//           width: 100%;
//           height: 100%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         .dock-label {
//           position: absolute;
//           bottom: 0.5rem;
//           font-size: 0.75rem;
//           color: white;
//           white-space: nowrap;
//           transition: opacity 0.2s;
//         }
//       `}</style>
      
//       <div className="dock-outer">
//         <div
//           className="dock-panel"
//           style={{ height: panelHeight }}
//           onMouseMove={(e) => mouseX.set(e.pageX)}
//           onMouseLeave={() => mouseX.set(Infinity)}
//         >
//           {items.map((item, idx) => (
//             <DockItem
//               key={idx}
//               icon={item.icon}
//               label={item.label}
//               onClick={item.onClick}
//               mouseX={mouseX}
//               baseItemSize={finalBaseItemSize}
//               magnification={magnification}
//               distance={distance}
//             />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion'; // FIX: Corrected import to framer-motion
// import { Children, cloneElement, useEffect, useMemo, useRef, useState } from 'react';

// import '../styles/index.css'; // Assuming Dock.css is available

// function DockItem({ children, className = '', onClick, mouseX, spring, distance, magnification, baseItemSize }) {
//   const ref = useRef(null);
//   const isHovered = useMotionValue(0);

//   // Helper to safely extract number and unit from a size string
//   const parseSize = (size) => {
//     const value = parseFloat(size) || 50;
//     const unit = typeof size === 'string' ? size.replace(value, '') : 'px';
//     return { value, unit };
//   };

//   // Parse initial size from props (e.g., 50 and "px")
//   const { value: baseValue, unit } = useMemo(() => parseSize(baseItemSize), [baseItemSize]);
//   const maxSizeValue = baseValue * magnification;
//   const safeDistance = Math.max(200, distance); // Ensure distance is effective

//   const mouseDistance = useTransform(mouseX, val => {
//     const rect = ref.current?.getBoundingClientRect() ?? {
//       x: 0,
//       width: baseValue
//     };
//     return val - rect.x - rect.width / 2;
//   });

//   // 1. NUMERIC MOTION VALUE for Size
//   const sizeValue = useSpring(
//     useTransform(mouseDistance, [-safeDistance, 0, safeDistance], [baseValue, maxSizeValue, baseValue]),
//     spring
//   );

//   // 2. FINAL STYLED MOTION VALUE (Adds unit back for CSS width/height)
//   const size = useTransform(sizeValue, (s) => `${s}${unit}`); 

//   return (
//     <motion.div
//       ref={ref}
//       style={{
//         width: size,
//         height: size
//       }}
//       onHoverStart={() => isHovered.set(1)}
//       onHoverEnd={() => isHovered.set(0)}
//       onFocus={() => isHovered.set(1)}
//       onBlur={() => isHovered.set(0)}
//       onClick={onClick}
//       className={`dock-item ${className}`}
//       tabIndex={0}
//       role="button"
//       aria-haspopup="true"
//     >
//       {Children.map(children, child => cloneElement(child, { isHovered }))}
//     </motion.div>
//   );
// }

// function DockLabel({ children, className = '', ...rest }) {
//   const { isHovered } = rest;
//   const [isVisible, setIsVisible] = useState(false);

//   // --- Vertical Flow / Lift Effect ---
//   // The y translation should be tied to the isHovered state in this structure
//   const y = useSpring(useTransform(isHovered, [0, 1], [0, -12]), { stiffness: 200, damping: 15 });

//   useEffect(() => {
//     const unsubscribe = isHovered.on('change', latest => {
//       setIsVisible(latest === 1);
//     });
//     return () => unsubscribe();
//   }, [isHovered]);

//   return (
//     <AnimatePresence>
//       {isVisible && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.2 }}
//           className={`dock-label ${className}`}
//           role="tooltip"
//           style={{ x: '-50%', y }} // Apply vertical lift
//         >
//           {children}
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }

// function DockIcon({ children, className = '', isHovered }) {
//     // --- Responsive Font Size for Icon ---
//     // The size is dynamically injected by the parent DockItem via the cloneElement call.
//     return <div className={`dock-icon ${className}`}>{children}</div>;
// }

// export default function Dock({
//   items,
//   className = '',
//   spring = { mass: 0.1, stiffness: 150, damping: 12 },
//   magnification = 70,
//   distance = 200,
//   panelHeight = 68,
//   dockHeight = 256,
//   baseItemSize = 50
// }) {
//   const mouseX = useMotionValue(Infinity);
//   const isHovered = useMotionValue(0);

//   const maxHeight = useMemo(
//     () => Math.max(dockHeight, magnification + magnification / 2 + 4),
//     [magnification, dockHeight]
//   );
//   const heightRow = useTransform(isHovered, [0, 1], [panelHeight, maxHeight]);
//   const height = useSpring(heightRow, spring);

//   return (
//     <motion.div style={{ height, scrollbarWidth: 'none' }} className="dock-outer">
//       <motion.div
//         onMouseMove={({ pageX }) => {
//           isHovered.set(1);
//           mouseX.set(pageX);
//         }}
//         onMouseLeave={() => {
//           isHovered.set(0);
//           mouseX.set(Infinity);
//         }}
//         className={`dock-panel ${className}`}
//         // Removed height: panelHeight style here as the main motion.div handles height animation
//         role="toolbar"
//         aria-label="Application dock"
//       >
//         {items.map((item, index) => (
//           <DockItem
//             key={index}
//             onClick={item.onClick}
//             className={item.className}
//             mouseX={mouseX}
//             spring={spring}
//             distance={distance}
//             magnification={magnification}
//             baseItemSize={baseItemSize}
//           >
//             <DockIcon>{item.icon}</DockIcon>
//             <DockLabel>{item.label}</DockLabel>
//           </DockItem>
//         ))}
//       </motion.div>
//     </motion.div>
//   );
// }

import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { Children, cloneElement, useEffect, useMemo, useRef, useState } from 'react';

// Assuming Dock.css is available and contains the final responsive styles
// NOTE: I am not including the CSS here as it was provided separately,
// but the component relies on the styles being applied via the className attributes.

function DockItem({ children, className = '', onClick, mouseX, spring, distance, magnification, baseItemSize }) {
  const ref = useRef(null);
  const isHovered = useMotionValue(0);

  // Helper to safely extract number and unit from a size string (e.g., "6vmin")
  const parseSize = (size) => {
    const value = parseFloat(size) || 50;
    const unit = typeof size === 'string' ? size.replace(value, '') : 'px';
    return { value, unit };
  };

  // Parse initial size from props (e.g., 50 and "px")
  const { value: baseValue, unit } = useMemo(() => parseSize(baseItemSize), [baseItemSize]);
  const maxSizeValue = baseValue * magnification;
  const safeDistance = Math.max(200, distance); // Ensure distance is effective

  const mouseDistance = useTransform(mouseX, val => {
    const rect = ref.current?.getBoundingClientRect() ?? { x: 0, width: baseValue };
    return val - rect.x - rect.width / 2;
  });

  // 1. NUMERIC MOTION VALUE for Size
  const sizeValue = useSpring(
    useTransform(mouseDistance, [-safeDistance, 0, safeDistance], [baseValue, maxSizeValue, baseValue]),
    spring
  );

  // 2. FINAL STYLED MOTION VALUE (Adds unit back for CSS width/height)
  const size = useTransform(sizeValue, (s) => `${s}${unit}`); 

  // 3. FLOWING EFFECT: Controls the vertical lift (y translation)
  const y = useTransform(sizeValue, [baseValue, maxSizeValue], [0, -(maxSizeValue * 0.18)]);

  // 4. ICON FONT SIZE: Scales font size proportionally (30% of base size)
  const iconBaseFontSizeValue = baseValue * 0.3; 
  const iconFontSize = useTransform(sizeValue, [baseValue, maxSizeValue], [iconBaseFontSizeValue, iconBaseFontSizeValue * magnification * 0.9]);
  const iconFontSizeWithUnit = useTransform(iconFontSize, (s) => `${s}${unit}`);

  return (
    <motion.div
      ref={ref}
      style={{
        width: size,
        height: size
      }}
      onHoverStart={() => isHovered.set(1)}
      onHoverEnd={() => isHovered.set(0)}
      onFocus={() => isHovered.set(1)}
      onBlur={() => isHovered.set(0)}
      onClick={onClick}
      className={`dock-item ${className}`}
      tabIndex={0}
      role="button"
      aria-haspopup="true"
    >
      {/* DockIcon needs the font size and the vertical lift (y) */}
      {Children.map(children, child => {
          if (child.type === DockIcon) {
              return cloneElement(child, { 
                  isHovered, 
                  style: { 
                      fontSize: iconFontSizeWithUnit,
                      y: y 
                  } 
              });
          }
          if (child.type === DockLabel) {
              // Pass hover state and calculated font size to label
              const labelBaseFontSizeValue = baseValue * 0.2; 
              const labelFontSize = useTransform(sizeValue, [baseValue, maxSizeValue], [labelBaseFontSizeValue, labelBaseFontSizeValue * magnification * 0.9]);
              const labelFontSizeWithUnit = useTransform(labelFontSize, (s) => `${s}${unit}`);

              return cloneElement(child, { 
                  isHovered,
                  style: { 
                      fontSize: labelFontSizeWithUnit 
                  } 
              });
          }
          return child;
      })}
    </motion.div>
  );
}

function DockLabel({ children, className = '', style, ...rest }) {
  const { isHovered } = rest;
  const [isVisible, setIsVisible] = useState(false);

  // Vertical Lift/Flow for Label is relative to its tooltip position, so we lift it further up.
  // We use AnimatePresence for clean mount/unmount fade transitions.

  useEffect(() => {
    const unsubscribe = isHovered.on('change', latest => {
      setIsVisible(latest === 1);
    });
    return () => unsubscribe();
  }, [isHovered]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -10 }} // Lift tooltip 10px up on hover
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.2 }}
          className={`dock-label ${className}`}
          role="tooltip"
          // We apply x transform in CSS, and merge dynamic font size/style props
          style={{ ...style, x: '-50%' }} 
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function DockIcon({ children, className = '', style }) {
    // DockIcon receives the responsive font size and the vertical lift (y) as style props
    return <motion.div className={`dock-icon ${className}`} style={style}>{children}</motion.div>;
}

export default function Dock({
  items,
  className = '',
  spring = { mass: 0.1, stiffness: 150, damping: 12 },
  magnification = 70,
  distance = 200,
  panelHeight = 68,
  baseItemSize = 50
}) {
  const mouseX = useMotionValue(Infinity);
  const isHovered = useMotionValue(0);

  // Removed height animation logic, as the goal is to keep the panel stationary.

  return (
    <motion.div className="dock-outer">
      <motion.div
        onMouseMove={({ pageX }) => {
          isHovered.set(1);
          mouseX.set(pageX);
        }}
        onMouseLeave={() => {
          isHovered.set(0);
          mouseX.set(Infinity);
        }}
        className={`dock-panel ${className}`}
        role="toolbar"
        aria-label="Application dock"
      >
        {items.map((item, index) => (
          <DockItem
            key={index}
            onClick={item.onClick}
            className={item.className}
            mouseX={mouseX}
            spring={spring}
            distance={distance}
            magnification={magnification}
            baseItemSize={baseItemSize}
          >
            <DockIcon>{item.icon}</DockIcon>
            <DockLabel>{item.label}</DockLabel>
          </DockItem>
        ))}
      </motion.div>
    </motion.div>
  );
}