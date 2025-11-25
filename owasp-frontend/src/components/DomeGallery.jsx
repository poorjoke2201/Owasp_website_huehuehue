

import { useEffect, useMemo, useRef, useCallback, useState } from 'react';
import { useGesture } from '@use-gesture/react';
import './styles/DomeGallery.css';


import img1 from "../assets/eventPhotos/askOwasp3.0/01.webp";
import img2 from "../assets/eventPhotos/askOwasp3.0/02.webp";
import img3 from "../assets/eventPhotos/askOwasp3.0/03.webp";
import img4 from "../assets/eventPhotos/askOwasp3.0/04.webp";
import img5 from "../assets/eventPhotos/askOwasp3.0/05.webp";
import img6 from "../assets/eventPhotos/askOwasp3.0/06.webp";
import img7 from "../assets/eventPhotos/askOwasp3.0/07.webp";
import img8 from "../assets/eventPhotos/askOwasp3.0/08.webp";
import img9 from "../assets/eventPhotos/askOwasp3.0/09.webp";
import img10 from "../assets/eventPhotos/askOwasp3.0/010.webp";
import img11 from "../assets/eventPhotos/askOwasp3.0/011.webp";
import img12 from "../assets/eventPhotos/askOwasp3.0/012.webp";
import img13 from "../assets/eventPhotos/askOwasp3.0/013.webp";
import img14 from "../assets/eventPhotos/askOwasp3.0/014.webp";
import img15 from "../assets/eventPhotos/askOwasp3.0/015.webp";
import img16 from "../assets/eventPhotos/askOwasp3.0/016.webp";
import img17 from "../assets/eventPhotos/askOwasp3.0/017.webp";
import img18 from "../assets/eventPhotos/askOwasp3.0/018.webp";
import img19 from "../assets/eventPhotos/askOwasp3.0/019.webp";
import img20 from "../assets/eventPhotos/askOwasp3.0/020.webp";
import img21 from "../assets/eventPhotos/askOwasp3.0/021.webp";
import img22 from "../assets/eventPhotos/askOwasp3.0/022.webp";
import img23 from "../assets/eventPhotos/askOwasp3.0/023.webp";
import img24 from "../assets/eventPhotos/askOwasp3.0/024.webp";
import img25 from "../assets/eventPhotos/askOwasp3.0/025.webp";
import img26 from "../assets/eventPhotos/askOwasp3.0/026.webp";
import img27 from "../assets/eventPhotos/askOwasp3.0/027.webp";
import img28 from "../assets/eventPhotos/askOwasp3.0/028.webp";
import img29 from "../assets/eventPhotos/askOwasp3.0/029.webp";
import img30 from "../assets/eventPhotos/askOwasp3.0/030.webp";
import img31 from "../assets/eventPhotos/askOwasp3.0/031.webp";
import img32 from "../assets/eventPhotos/askOwasp3.0/032.webp";
import img33 from "../assets/eventPhotos/askOwasp3.0/033.webp";
import img34 from "../assets/eventPhotos/askOwasp3.0/034.webp";
import img35 from "../assets/eventPhotos/askOwasp3.0/035.webp";
import img36 from "../assets/eventPhotos/askOwasp3.0/036.webp";
import img37 from "../assets/eventPhotos/askOwasp3.0/037.webp";
import img38 from "../assets/eventPhotos/askOwasp3.0/038.webp";
import img39 from "../assets/eventPhotos/askOwasp3.0/039.webp";
import img40 from "../assets/eventPhotos/askOwasp3.0/040.webp";
import img41 from "../assets/eventPhotos/askOwasp3.0/041.webp";
import img42 from "../assets/eventPhotos/askOwasp3.0/042.webp";
import img43 from "../assets/eventPhotos/askOwasp3.0/043.webp";
import img44 from "../assets/eventPhotos/askOwasp3.0/044.webp";
import img45 from "../assets/eventPhotos/askOwasp3.0/045.webp";
import img46 from "../assets/eventPhotos/askOwasp3.0/046.webp";
import img47 from "../assets/eventPhotos/askOwasp3.0/047.webp";

// import img1 from "../assets/eventPhotos/askOwasp3.0/01.png";
// import img2 from "../assets/eventPhotos/askOwasp3.0/02.png";
// import img3 from "../assets/eventPhotos/askOwasp3.0/03.png";
// import img4 from "../assets/eventPhotos/askOwasp3.0/04.png";
// import img5 from "../assets/eventPhotos/askOwasp3.0/05.png";
// import img6 from "../assets/eventPhotos/askOwasp3.0/06.png";
// import img7 from "../assets/eventPhotos/askOwasp3.0/07.png";
// import img8 from "../assets/eventPhotos/askOwasp3.0/08.png";
// import img9 from "../assets/eventPhotos/askOwasp3.0/09.png";
// import img10 from "../assets/eventPhotos/askOwasp3.0/010.png";
// import img11 from "../assets/eventPhotos/askOwasp3.0/011.png";
// import img12 from "../assets/eventPhotos/askOwasp3.0/012.png";
// import img13 from "../assets/eventPhotos/askOwasp3.0/013.png";
// import img14 from "../assets/eventPhotos/askOwasp3.0/014.png";
// import img15 from "../assets/eventPhotos/askOwasp3.0/015.png";
// import img16 from "../assets/eventPhotos/askOwasp3.0/016.png";
// import img17 from "../assets/eventPhotos/askOwasp3.0/017.png";
// import img18 from "../assets/eventPhotos/askOwasp3.0/018.png";
// import img19 from "../assets/eventPhotos/askOwasp3.0/019.png";
// import img20 from "../assets/eventPhotos/askOwasp3.0/020.png";
// import img21 from "../assets/eventPhotos/askOwasp3.0/021.png";
// import img22 from "../assets/eventPhotos/askOwasp3.0/022.png";
// import img23 from "../assets/eventPhotos/askOwasp3.0/023.png";
// import img24 from "../assets/eventPhotos/askOwasp3.0/024.png";
// import img25 from "../assets/eventPhotos/askOwasp3.0/025.png";
// import img26 from "../assets/eventPhotos/askOwasp3.0/026.png";
// import img27 from "../assets/eventPhotos/askOwasp3.0/027.png";
// import img28 from "../assets/eventPhotos/askOwasp3.0/028.png";
// import img29 from "../assets/eventPhotos/askOwasp3.0/029.png";
// import img30 from "../assets/eventPhotos/askOwasp3.0/030.png";
// import img31 from "../assets/eventPhotos/askOwasp3.0/031.png";
// import img32 from "../assets/eventPhotos/askOwasp3.0/032.png";
// import img33 from "../assets/eventPhotos/askOwasp3.0/033.png";
// import img34 from "../assets/eventPhotos/askOwasp3.0/034.png";
// import img35 from "../assets/eventPhotos/askOwasp3.0/035.png";
// import img36 from "../assets/eventPhotos/askOwasp3.0/036.png";
// import img37 from "../assets/eventPhotos/askOwasp3.0/037.png";
// import img38 from "../assets/eventPhotos/askOwasp3.0/038.png";
// import img39 from "../assets/eventPhotos/askOwasp3.0/039.png";
// import img40 from "../assets/eventPhotos/askOwasp3.0/040.png";
// import img41 from "../assets/eventPhotos/askOwasp3.0/041.png";
// import img42 from "../assets/eventPhotos/askOwasp3.0/042.png";
// import img43 from "../assets/eventPhotos/askOwasp3.0/043.png";
// import img44 from "../assets/eventPhotos/askOwasp3.0/044.png";
// import img45 from "../assets/eventPhotos/askOwasp3.0/045.png";
// import img46 from "../assets/eventPhotos/askOwasp3.0/046.png";
// import img47 from "../assets/eventPhotos/askOwasp3.0/047.png";





// --- CONFIGURATION ---
const TAGLINE_MESSAGE = "Curated Chaos, Just for You.";
const SHUFFLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()[]{}<>?/|\\~";
const SHUFFLE_TIME_OFFSET = 3; 
const TAGLINE_COLOR = '#8b949e';
// ---------------------



const DEFAULT_IMAGES = [
  { src: img1, alt: "AskOwasp 3.0 Event Photo 1" },
  { src: img2, alt: "AskOwasp 3.0 Event Photo 2" },
  { src: img3, alt: "AskOwasp 3.0 Event Photo 3" },
  { src: img4, alt: "AskOwasp 3.0 Event Photo 4" },
  { src: img5, alt: "AskOwasp 3.0 Event Photo 5" },
  { src: img6, alt: "AskOwasp 3.0 Event Photo 6" },
  { src: img7, alt: "AskOwasp 3.0 Event Photo 7" },
  { src: img8, alt: "AskOwasp 3.0 Event Photo 8" },
  { src: img9, alt: "AskOwasp 3.0 Event Photo 9" },
  { src: img10, alt: "AskOwasp 3.0 Event Photo 10" },
  { src: img11, alt: "AskOwasp 3.0 Event Photo 11" },
  { src: img12, alt: "AskOwasp 3.0 Event Photo 12" },
  { src: img13, alt: "AskOwasp 3.0 Event Photo 13" },
  { src: img14, alt: "AskOwasp 3.0 Event Photo 14" },
  { src: img15, alt: "AskOwasp 3.0 Event Photo 15" },
  { src: img16, alt: "AskOwasp 3.0 Event Photo 16" },
  { src: img17, alt: "AskOwasp 3.0 Event Photo 17" },
  { src: img18, alt: "AskOwasp 3.0 Event Photo 18" },
  { src: img19, alt: "AskOwasp 3.0 Event Photo 19" },
  { src: img20, alt: "AskOwasp 3.0 Event Photo 20" },
  { src: img21, alt: "AskOwasp 3.0 Event Photo 21" },
  { src: img22, alt: "AskOwasp 3.0 Event Photo 22" },
  { src: img23, alt: "AskOwasp 3.0 Event Photo 23" },
  { src: img24, alt: "AskOwasp 3.0 Event Photo 24" },
  { src: img25, alt: "AskOwasp 3.0 Event Photo 25" },
  { src: img26, alt: "AskOwasp 3.0 Event Photo 26" },
  { src: img27, alt: "AskOwasp 3.0 Event Photo 27" },
  { src: img28, alt: "AskOwasp 3.0 Event Photo 28" },
  { src: img29, alt: "AskOwasp 3.0 Event Photo 29" },
  { src: img30, alt: "AskOwasp 3.0 Event Photo 30" },
  { src: img31, alt: "AskOwasp 3.0 Event Photo 31" },
  { src: img32, alt: "AskOwasp 3.0 Event Photo 32" },
  { src: img33, alt: "AskOwasp 3.0 Event Photo 33" },
  { src: img34, alt: "AskOwasp 3.0 Event Photo 34" },
  { src: img35, alt: "AskOwasp 3.0 Event Photo 35" },
  { src: img36, alt: "AskOwasp 3.0 Event Photo 36" },
  { src: img37, alt: "AskOwasp 3.0 Event Photo 37" },
  { src: img38, alt: "AskOwasp 3.0 Event Photo 38" },
  { src: img39, alt: "AskOwasp 3.0 Event Photo 39" },
  { src: img40, alt: "AskOwasp 3.0 Event Photo 40" },
  { src: img41, alt: "AskOwasp 3.0 Event Photo 41" },
  { src: img42, alt: "AskOwasp 3.0 Event Photo 42" },
  { src: img43, alt: "AskOwasp 3.0 Event Photo 43" },
  { src: img44, alt: "AskOwasp 3.0 Event Photo 44" },
  { src: img45, alt: "AskOwasp 3.0 Event Photo 45" },
  { src: img46, alt: "AskOwasp 3.0 Event Photo 46" },
  { src: img47, alt: "AskOwasp 3.0 Event Photo 47" },
];


const DEFAULTS = {
  autorotate: true,
  autorotateSpeed: 0.2, // Faster speed maintained
  minRadius: 600,
  fit: 1,
  maxVerticalRotationDeg: 5,
  dragSensitivity: 20,
  enlargeTransitionMs: 300,
  segments: 35
};

const clamp = (v, min, max) => Math.min(Math.max(v, min), max);
const normalizeAngle = d => ((d % 360) + 360) % 360;
const wrapAngleSigned = deg => {
  const a = (((deg + 180) % 360) + 360) % 360;
  return a - 180;
};
const getDataNumber = (el, name, fallback) => {
  const attr = el.dataset[name] ?? el.getAttribute(`data-${name}`);
  const n = attr == null ? NaN : parseFloat(attr);
  return Number.isFinite(n) ? n : fallback;
};

function buildItems(pool, seg) {
  const xCols = Array.from({ length: seg }, (_, i) => -37 + i * 2);
  const evenYs = [-4, -2, 0, 2, 4];
  const oddYs = [-3, -1, 1, 3, 5];

  const coords = xCols.flatMap((x, c) => {
    const ys = c % 2 === 0 ? evenYs : oddYs;
    return ys.map(y => ({ x, y, sizeX: 2, sizeY: 2 }));
  });

  const totalSlots = coords.length;
  if (pool.length === 0) {
    return coords.map(c => ({ ...c, src: '', alt: '' }));
  }
  if (pool.length > totalSlots) {
    console.warn(
      `[DomeGallery] Provided image count (${pool.length}) exceeds available tiles (${totalSlots}). Some images will not be shown.`
    );
  }

  const normalizedImages = pool.map(image => {
    if (typeof image === "string") {
      return { src: image, alt: "" };
    }
    return { src: image.src || "", alt: image.alt || "" };
  });

  const usedImages = Array.from({ length: totalSlots }, (_, i) => normalizedImages[i % normalizedImages.length]);

  for (let i = 1; i < usedImages.length; i++) {
    if (usedImages[i].src === usedImages[i - 1].src) {
      for (let j = i + 1; j < usedImages.length; j++) {
        if (usedImages[j].src !== usedImages[i].src) {
          const tmp = usedImages[i];
          usedImages[i] = usedImages[j];
          usedImages[j] = tmp;
          break;
        }
      }
    }
  }

  return coords.map((c, i) => ({
    ...c,
    src: usedImages[i].src,
    alt: usedImages[i].alt
  }));
}

function computeItemBaseRotation(offsetX, offsetY, sizeX, sizeY, segments) {
  const unit = 360 / segments / 2;
  const rotateY = unit * (offsetX + (sizeX - 1) / 2);
  const rotateX = unit * (offsetY - (sizeY - 1) / 2);
  return { rotateX, rotateY };
}

// Helper for generating a random character (used in the shuffle)
const getRandCharacter = (chars, characterToReplace) => {
    if (characterToReplace === " ") return ' ';
    const randNum = Math.floor(Math.random() * chars.length);
    return chars[randNum]; 
};

export default function DomeGallery({
  images = DEFAULT_IMAGES,
  fit = 0.5,
  fitBasis = 'auto',
  minRadius = 600,
  maxRadius = Infinity,
  padFactor = 0.25,
  overlayBlurColor = '#060010',
  maxVerticalRotationDeg = DEFAULTS.maxVerticalRotationDeg,
  dragSensitivity = DEFAULTS.dragSensitivity,
  enlargeTransitionMs = DEFAULTS.enlargeTransitionMs,
  segments = DEFAULTS.segments,
  dragDampening = 2,
  openedImageWidth = '250px', 
  openedImageHeight = '350px', 
  imageBorderRadius = '30px',
  openedImageBorderRadius = '30px',
  grayscale = true,
  autorotate = DEFAULTS.autorotate,
  autorotateSpeed = DEFAULTS.autorotateSpeed 
}) {
  const rootRef = useRef(null);
  const mainRef = useRef(null);
  const sphereRef = useRef(null);
  const frameRef = useRef(null);
  const viewerRef = useRef(null);
  const scrimRef = useRef(null);
  const focusedElRef = useRef(null);
  const originalTilePositionRef = useRef(null);

  const rotationRef = useRef({ x: 0, y: 0 });
  const startRotRef = useRef({ x: 0, y: 0 });
  const startPosRef = useRef(null);
  const draggingRef = useRef(false);
  const movedRef = useRef(false);
  const inertiaRAF = useRef(null);
  const autorotateRAF = useRef(null);
  const openingRef = useRef(false);
  const openStartedAtRef = useRef(0);
  const lastDragEndAt = useRef(0);

  const scrollLockedRef = useRef(false);
  const lockScroll = useCallback(() => {
    if (scrollLockedRef.current) return;
    scrollLockedRef.current = true;
    document.body.classList.add('dg-scroll-lock');
  }, []);
  const unlockScroll = useCallback(() => {
    if (!scrollLockedRef.current) return;
    if (rootRef.current?.getAttribute('data-enlarging') === 'true') return;
    scrollLockedRef.current = false;
    document.body.classList.remove('dg-scroll-lock');
  }, []);

  const items = useMemo(() => buildItems(images, segments), [images, segments]);

  const applyTransform = (xDeg, yDeg) => {
    const el = sphereRef.current;
    if (el) {
      el.style.transform = `translateZ(calc(var(--radius) * -1)) rotateX(${xDeg}deg) rotateY(${yDeg}deg)`;
    }
  };

  const lockedRadiusRef = useRef(null);
  
  // --- Animation State ---
  // Initialize with scrambled placeholder
  const initialPlaceholder = TAGLINE_MESSAGE.split('').map(char => 
      getRandCharacter(SHUFFLE_CHARS.split(''), char)
  ).join('');

  const [taglineHtml, setTaglineHtml] = useState({ __html: `<span style="color:${TAGLINE_COLOR};">${initialPlaceholder}</span>` });
  
  const animationRafRef = useRef(null);
  const animationStateRef = useRef({
      currentWord: TAGLINE_MESSAGE.split(''),
      currentWordLength: TAGLINE_MESSAGE.length,
      currentCharacter: 0,
      currentTimeOffset: 0,
      timeOffset: SHUFFLE_TIME_OFFSET, 
      interval: 1000 / 30, // ~30 FPS
      chars: SHUFFLE_CHARS.split(''),
      colors: ['#4f74e5', '#ff9800', '#00bcd4', '#9c27b0'], 
      isUpdating: false,
      lastTime: Date.now(),
  });

  const generateSingleCharacter = (color, character) => {
    return `<span style="color: ${color};">${character}</span>`;
  };

  const updateCharacter = useCallback(() => {
    const state = animationStateRef.current;
    const { currentCharacter, currentWordLength, currentTimeOffset, timeOffset, interval, currentWord, chars, colors } = state;
    
    if (!state.isUpdating) return; 

    if (Date.now() - state.lastTime > interval) {
        state.currentTimeOffset++;

        if (state.currentTimeOffset >= timeOffset && currentCharacter < currentWordLength) {
            state.currentCharacter++;
            state.currentTimeOffset = 0;
        }

        let outputHtml = '';
        const isFinished = state.currentCharacter >= currentWordLength;

        for (let k = 0; k < currentCharacter; k++) {
            outputHtml += generateSingleCharacter(TAGLINE_COLOR, currentWord[k]);
        }

        for (let i = 0; i < currentWordLength - currentCharacter; i++) {
            const color = colors[Math.floor(Math.random() * colors.length)];
            const char = getRandCharacter(chars, currentWord[currentCharacter + i]);
            outputHtml += generateSingleCharacter(color, char);
        }

        setTaglineHtml({ __html: outputHtml });

        if (!isFinished) {
            animationRafRef.current = requestAnimationFrame(updateCharacter);
        } else {
            // Animation finished: ensure final text is rendered
            setTaglineHtml({ __html: `<span style="color:${TAGLINE_COLOR};">${TAGLINE_MESSAGE}</span>` });
            state.isUpdating = false;
        }
        state.lastTime = Date.now();
    } else {
        animationRafRef.current = requestAnimationFrame(updateCharacter);
    }
  }, []);

  const startShuffleAnimation = useCallback(() => {
      const state = animationStateRef.current;
      
      // Reset state for new animation run
      state.isUpdating = true;
      state.currentCharacter = 0;
      state.currentTimeOffset = 0;
      state.lastTime = Date.now();

      // Immediately set the initial placeholder for a clean start
      const initialPlaceholderHtml = TAGLINE_MESSAGE.split('').map(char => 
          generateSingleCharacter(TAGLINE_COLOR, getRandCharacter(SHUFFLE_CHARS.split(''), char))
      ).join('');
      setTaglineHtml({ __html: initialPlaceholderHtml });
      
      animationRafRef.current = requestAnimationFrame(updateCharacter);
  }, [updateCharacter]);


  // --- Autorotate Logic ---
  const stopAutorotate = useCallback(() => {
    if (autorotateRAF.current) {
      cancelAnimationFrame(autorotateRAF.current);
      autorotateRAF.current = null;
    }
  }, []);

  const startAutorotate = useCallback(() => {
    if (autorotateRAF.current || !autorotate || openingRef.current || draggingRef.current) return;

    const step = () => {
      if (inertiaRAF.current || draggingRef.current || openingRef.current) {
        stopAutorotate();
        return;
      }

      const nextY = wrapAngleSigned(rotationRef.current.y + autorotateSpeed);
      rotationRef.current = { ...rotationRef.current, y: nextY };
      applyTransform(rotationRef.current.x, nextY);
      autorotateRAF.current = requestAnimationFrame(step);
    };

    autorotateRAF.current = requestAnimationFrame(step);
  }, [autorotate, autorotateSpeed, stopAutorotate]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    // --- INTERSECTION OBSERVER LOGIC ---
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                // If the gallery section comes into view and the animation is not currently running
                if (entry.isIntersecting && !animationStateRef.current.isUpdating) {
                    // FIX: Delay the start slightly for stability, then trigger
                    setTimeout(() => {
                        startShuffleAnimation();
                    }, 50); 
                }
            });
        },
        // Use a low threshold (e.g., 0.1) so it triggers as soon as it enters the screen
        { root: null, threshold: 0.1 } 
    );

    observer.observe(root);
    // ------------------------------------
    
    // Start Autorotate (This runs independently of the text animation)
    if (autorotate) {
      startAutorotate();
    } else {
      stopAutorotate();
    }

    return () => {
        observer.disconnect(); // Disconnect observer on unmount
        stopAutorotate();
        cancelAnimationFrame(animationRafRef.current);
    };
  }, [autorotate, startAutorotate, stopAutorotate, startShuffleAnimation]);
  // --------------------------

  // ... (rest of the component logic) ...

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const ro = new ResizeObserver(entries => {
      const cr = entries[0].contentRect;
      const w = Math.max(1, cr.width),
        h = Math.max(1, cr.height);
      const minDim = Math.min(w, h),
        maxDim = Math.max(w, h),
        aspect = w / h;
      let basis;
      switch (fitBasis) {
        case 'min':
          basis = minDim;
          break;
        case 'max':
          basis = maxDim;
          break;
        case 'width':
          basis = w;
          break;
        case 'height':
          basis = h;
          break;
        default:
          basis = aspect >= 1.3 ? w : minDim;
      }
      let radius = basis * fit;
      const heightGuard = h * 1.35;
      radius = Math.min(radius, heightGuard);
      radius = clamp(radius, minRadius, maxRadius);
      lockedRadiusRef.current = Math.round(radius);

      const viewerPad = Math.max(8, Math.round(minDim * padFactor));
      root.style.setProperty('--radius', `${lockedRadiusRef.current}px`);
      root.style.setProperty('--viewer-pad', `${viewerPad}px`);
      root.style.setProperty('--overlay-blur-color', overlayBlurColor);
      root.style.setProperty('--tile-radius', imageBorderRadius);
      root.style.setProperty('--enlarge-radius', openedImageBorderRadius);
      root.style.setProperty('--image-filter', grayscale ? 'grayscale(1)' : 'none');
      applyTransform(rotationRef.current.x, rotationRef.current.y);

      const enlargedOverlay = viewerRef.current?.querySelector('.enlarge');
      if (enlargedOverlay && frameRef.current && mainRef.current) {
        const frameR = frameRef.current.getBoundingClientRect();
        const mainR = mainRef.current.getBoundingClientRect();

        const hasCustomSize = openedImageWidth && openedImageHeight;
        if (hasCustomSize) {
          const tempDiv = document.createElement('div');
          tempDiv.style.cssText = `position: absolute; width: ${openedImageWidth}; height: ${openedImageHeight}; visibility: hidden;`;
          document.body.appendChild(tempDiv);
          const tempRect = tempDiv.getBoundingClientRect();
          document.body.removeChild(tempDiv);

          const centeredLeft = frameR.left - mainR.left + (frameR.width - tempRect.width) / 2;
          const centeredTop = frameR.top - mainR.top + (frameR.height - tempRect.height) / 2;

          enlargedOverlay.style.left = `${centeredLeft}px`;
          enlargedOverlay.style.top = `${centeredTop}px`;
        } else {
          enlargedOverlay.style.left = `${frameR.left - mainR.left}px`;
          enlargedOverlay.style.top = `${frameR.top - mainR.top}px`;
          enlargedOverlay.style.width = `${frameR.width}px`;
          enlargedOverlay.style.height = `${frameR.height}px`;
        }
      }
    });
    ro.observe(root);
    return () => ro.disconnect();
  }, [
    fit,
    fitBasis,
    minRadius,
    maxRadius,
    padFactor,
    overlayBlurColor,
    grayscale,
    imageBorderRadius,
    openedImageBorderRadius,
    openedImageWidth,
    openedImageHeight
  ]);

  useEffect(() => {
    applyTransform(rotationRef.current.x, rotationRef.current.y);
  }, []);

  const stopInertia = useCallback(() => {
    if (inertiaRAF.current) {
      cancelAnimationFrame(inertiaRAF.current);
      inertiaRAF.current = null;
    }
  }, []);

  const startInertia = useCallback(
    (vx, vy) => {
      const MAX_V = 1.4;
      let vX = clamp(vx, -MAX_V, MAX_V) * 80;
      let vY = clamp(vy, -MAX_V, MAX_V) * 80;
      let frames = 0;
      const d = clamp(dragDampening ?? 0.6, 0, 1);
      const frictionMul = 0.94 + 0.055 * d;
      const stopThreshold = 0.015 - 0.01 * d;
      const maxFrames = Math.round(90 + 270 * d);
      const step = () => {
        vX *= frictionMul;
        vY *= frictionMul;
        if (Math.abs(vX) < stopThreshold && Math.abs(vY) < stopThreshold) {
          inertiaRAF.current = null;
          startAutorotate();
          return;
        }
        if (++frames > maxFrames) {
          inertiaRAF.current = null;
          startAutorotate();
          return;
        }
        const nextX = clamp(rotationRef.current.x - vY / 200, -maxVerticalRotationDeg, maxVerticalRotationDeg);
        const nextY = wrapAngleSigned(rotationRef.current.y + vX / 200);
        rotationRef.current = { x: nextX, y: nextY };
        applyTransform(nextX, nextY);
        inertiaRAF.current = requestAnimationFrame(step);
      };
      stopInertia();
      inertiaRAF.current = requestAnimationFrame(step);
    },
    [dragDampening, maxVerticalRotationDeg, stopInertia, startAutorotate]
  );

  useGesture(
    {
      onDragStart: ({ event }) => {
        if (focusedElRef.current) return;
        stopInertia();
        stopAutorotate();
        const evt = event;
        draggingRef.current = true;
        movedRef.current = false;
        startRotRef.current = { ...rotationRef.current };
        startPosRef.current = { x: evt.clientX, y: evt.clientY };
      },
      onDrag: ({ event, delta: [, dy] }) => { 
        if (focusedElRef.current || !draggingRef.current || !startPosRef.current) return;
        
        const evt = event;
        const dxTotal = evt.clientX - startPosRef.current.x;
        const dyTotal = evt.clientY - startPosRef.current.y;
        
        if (!movedRef.current) {
          const dist2 = dxTotal * dxTotal + dyTotal * dyTotal;
          if (dist2 > 16) movedRef.current = true;
        }
        
        const nextXAttempt = startRotRef.current.x - dyTotal / dragSensitivity;
        
        // --- CRITICAL INTELLIGENT SCROLL LOGIC ---
        let shouldPreventDefault = true;

        if (dy > 0 && rotationRef.current.x <= -maxVerticalRotationDeg) {
          shouldPreventDefault = false;
        } else if (dy < 0 && rotationRef.current.x >= maxVerticalRotationDeg) {
          shouldPreventDefault = false;
        } else if (nextXAttempt < -maxVerticalRotationDeg && dy > 0) {
          shouldPreventDefault = false;
        } else if (nextXAttempt > maxVerticalRotationDeg && dy < 0) {
          shouldPreventDefault = false;
        }
        
        if (shouldPreventDefault && evt.cancelable) {
            evt.preventDefault(); 
        }
        // ------------------------------------------

        // Apply rotation, clamping it to the limits regardless of preventDefault status
        const nextX = clamp(
            startRotRef.current.x - dyTotal / dragSensitivity,
            -maxVerticalRotationDeg,
            maxVerticalRotationDeg
        );
        const nextY = wrapAngleSigned(startRotRef.current.y + dxTotal / dragSensitivity);

        if (rotationRef.current.x !== nextX || rotationRef.current.y !== nextY) {
          rotationRef.current = { x: nextX, y: nextY };
          applyTransform(nextX, nextY);
        }
      },
      onDragEnd: ({ velocity = [0, 0], direction = [0, 0], movement }) => {
        if (focusedElRef.current) return;

        draggingRef.current = false;
        let [vMagX, vMagY] = velocity;
        const [dirX, dirY] = direction;
        let vx = vMagX * dirX;
        let vy = vMagY * dirY;

        if (Math.abs(vx) < 0.001 && Math.abs(vy) < 0.001 && Array.isArray(movement)) {
          const [mx, my] = movement;
          vx = clamp((mx / dragSensitivity) * 0.02, -1.2, 1.2);
          vy = clamp((my / dragSensitivity) * 0.02, -1.2, 1.2);
        }
        if (Math.abs(vx) > 0.005 || Math.abs(vy) > 0.005) {
          startInertia(vx, vy);
        } else {
          startAutorotate();
        }
        if (movedRef.current) lastDragEndAt.current = performance.now();
        movedRef.current = false;
      }
    },
    { 
      target: mainRef, 
      eventOptions: { passive: false } 
    }
  );

  useEffect(() => {
    const scrim = scrimRef.current;
    if (!scrim) return;
    const close = () => {
      if (performance.now() - openStartedAtRef.current < 250) return;
      const el = focusedElRef.current;
      if (!el) return;

      stopAutorotate();

      const parent = el.parentElement;
      const overlay = viewerRef.current?.querySelector('.enlarge');
      if (!overlay) return;
      const refDiv = parent.querySelector('.item__image--reference');
      const originalPos = originalTilePositionRef.current;
      if (!originalPos) {
        overlay.remove();
        if (refDiv) refDiv.remove();
        parent.style.setProperty('--rot-y-delta', '0deg');
        parent.style.setProperty('--rot-x-delta', '0deg');
        el.style.visibility = '';
        el.style.zIndex = 0;
        focusedElRef.current = null;
        rootRef.current?.removeAttribute('data-enlarging');
        openingRef.current = false;
        unlockScroll();
        startAutorotate();
        return;
      }
      const currentRect = overlay.getBoundingClientRect();
      const rootRect = rootRef.current.getBoundingClientRect();
      const originalPosRelativeToRoot = {
        left: originalPos.left - rootRect.left,
        top: originalPos.top - rootRect.top,
        width: originalPos.width,
        height: originalPos.height
      };
      const overlayRelativeToRoot = {
        left: currentRect.left - rootRect.left,
        top: currentRect.top - rootRect.top,
        width: currentRect.width,
        height: currentRect.height
      };
      const animatingOverlay = document.createElement('div');
      animatingOverlay.className = 'enlarge-closing';
      animatingOverlay.style.cssText = `position:absolute;left:${overlayRelativeToRoot.left}px;top:${overlayRelativeToRoot.top}px;width:${overlayRelativeToRoot.width}px;height:${overlayRelativeToRoot.height}px;z-index:9999;border-radius: var(--enlarge-radius, 32px);overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,.35);transition:all ${enlargeTransitionMs}ms ease-out;pointer-events:none;margin:0;transform:none;`;
      const originalImg = overlay.querySelector('img');
      if (originalImg) {
        const img = originalImg.cloneNode();
        img.style.cssText = 'width:100%;height:100%;object-fit:cover;';
        animatingOverlay.appendChild(img);
      }
      overlay.remove();
      rootRef.current.appendChild(animatingOverlay);
      void animatingOverlay.getBoundingClientRect();
      requestAnimationFrame(() => {
        animatingOverlay.style.left = originalPosRelativeToRoot.left + 'px';
        animatingOverlay.style.top = originalPosRelativeToRoot.top + 'px';
        animatingOverlay.style.width = originalPosRelativeToRoot.width + 'px';
        animatingOverlay.style.height = originalPosRelativeToRoot.height + 'px';
        animatingOverlay.style.opacity = '0';
      });
      const cleanup = () => {
        animatingOverlay.remove();
        originalTilePositionRef.current = null;
        if (refDiv) refDiv.remove();
        parent.style.transition = 'none';
        el.style.transition = 'none';
        parent.style.setProperty('--rot-y-delta', '0deg');
        parent.style.setProperty('--rot-x-delta', '0deg');
        requestAnimationFrame(() => {
          el.style.visibility = '';
          el.style.opacity = '0';
          el.style.zIndex = 0;
          focusedElRef.current = null;
          rootRef.current?.removeAttribute('data-enlarging');
          requestAnimationFrame(() => {
            parent.style.transition = '';
            el.style.transition = 'opacity 300ms ease-out';
            requestAnimationFrame(() => {
              el.style.opacity = '1';
              setTimeout(() => {
                el.style.transition = '';
                el.style.opacity = '';
                openingRef.current = false;
                if (!draggingRef.current && rootRef.current?.getAttribute('data-enlarging') !== 'true')
                  document.body.classList.remove('dg-scroll-lock');
                startAutorotate();
              }, 300);
            });
          });
        });
      };
      animatingOverlay.addEventListener('transitionend', cleanup, { once: true });
    };
    scrim.addEventListener('click', close);
    const onKey = e => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      scrim.removeEventListener('click', close);
      window.removeEventListener('keydown', onKey);
    };
  }, [enlargeTransitionMs, unlockScroll, startAutorotate, stopAutorotate]);

  const openItemFromElement = useCallback(
    el => {
      if (openingRef.current) return;
      openingRef.current = true;
      openStartedAtRef.current = performance.now();
      lockScroll();
      stopInertia();
      stopAutorotate();

      const parent = el.parentElement;
      focusedElRef.current = el;
      el.setAttribute('data-focused', 'true');
      const offsetX = getDataNumber(parent, 'offsetX', 0);
      const offsetY = getDataNumber(parent, 'offsetY', 0);
      const sizeX = getDataNumber(parent, 'sizeX', 2);
      const sizeY = getDataNumber(parent, 'sizeY', 2);
      const parentRot = computeItemBaseRotation(offsetX, offsetY, sizeX, sizeY, segments);
      const parentY = normalizeAngle(parentRot.rotateY);
      const globalY = normalizeAngle(rotationRef.current.y);
      let rotY = -(parentY + globalY) % 360;
      if (rotY < -180) rotY += 360;
      const rotX = -parentRot.rotateX - rotationRef.current.x;
      parent.style.setProperty('--rot-y-delta', `${rotY}deg`);
      parent.style.setProperty('--rot-x-delta', `${rotX}deg`);
      const refDiv = document.createElement('div');
      refDiv.className = 'item__image item__image--reference';
      refDiv.style.opacity = '0';
      refDiv.style.transform = `rotateX(${-parentRot.rotateX}deg) rotateY(${-parentRot.rotateY}deg)`;
      parent.appendChild(refDiv);
      const tileR = refDiv.getBoundingClientRect();
      const mainR = mainRef.current.getBoundingClientRect();
      const frameR = frameRef.current.getBoundingClientRect();
      originalTilePositionRef.current = { left: tileR.left, top: tileR.top, width: tileR.width, height: tileR.height };
      el.style.visibility = 'hidden';
      el.style.zIndex = 0;
      const overlay = document.createElement('div');
      overlay.className = 'enlarge';
      overlay.style.position = 'absolute';
      
      overlay.style.left = frameR.left - mainR.left + 'px';
      overlay.style.top = frameR.top - mainR.top + 'px';
      overlay.style.width = frameR.width + 'px';
      overlay.style.height = frameR.height + 'px';
      
      overlay.style.opacity = '0';
      overlay.style.zIndex = '30';
      overlay.style.willChange = 'transform, opacity';
      overlay.style.transformOrigin = 'top left';
      overlay.style.transition = `transform ${enlargeTransitionMs}ms ease, opacity ${enlargeTransitionMs}ms ease`;
      const rawSrc = parent.dataset.src || el.querySelector('img')?.src || '';
      const img = document.createElement('img');
      img.src = rawSrc;
      overlay.appendChild(img);
      viewerRef.current.appendChild(overlay);
      const tx0 = tileR.left - frameR.left;
      const ty0 = tileR.top - frameR.top;
      const sx0 = tileR.width / frameR.width;
      const sy0 = tileR.height / frameR.height;
      
      overlay.style.transform = `translate(${tx0}px, ${ty0}px) scale(${sx0}, ${sy0})`;
      
      requestAnimationFrame(() => {
        overlay.style.opacity = '1';
        overlay.style.transform = 'translate(0px, 0px) scale(1,1)';
        rootRef.current?.setAttribute('data-enlarging', 'true');
      });
      
      const wantsResize = openedImageWidth || openedImageHeight;
      if (wantsResize) {
        const onFirstEnd = ev => {
          if (ev.propertyName !== 'transform') return;
          overlay.removeEventListener('transitionend', onFirstEnd);
          
          const tempWidth = openedImageWidth || `${frameR.width}px`;
          const tempHeight = openedImageHeight || `${frameR.height}px`;
          
          const tempDiv = document.createElement('div');
          tempDiv.style.cssText = `position: absolute; width: ${tempWidth}; height: ${tempHeight}; visibility: hidden;`;
          document.body.appendChild(tempDiv);
          const tempRect = tempDiv.getBoundingClientRect();
          document.body.removeChild(tempDiv);
          
          const prevTransition = overlay.style.transition;
          overlay.style.transition = 'none';
          
          overlay.style.width = tempWidth;
          overlay.style.height = tempHeight;

          const centeredLeft = frameR.left - mainR.left + (frameR.width - tempRect.width) / 2;
          const centeredTop = frameR.top - mainR.top + (frameR.height - tempRect.height) / 2;
          
          overlay.style.transition = `left ${enlargeTransitionMs}ms ease, top ${enlargeTransitionMs}ms ease, width ${enlargeTransitionMs}ms ease, height ${enlargeTransitionMs}ms ease`;

          requestAnimationFrame(() => {
            overlay.style.left = `${centeredLeft}px`;
            overlay.style.top = `${centeredTop}px`;
          });
          
          const cleanupSecond = () => {
            overlay.removeEventListener('transitionend', cleanupSecond);
            overlay.style.transition = prevTransition;
          };
          setTimeout(cleanupSecond, enlargeTransitionMs + 50);
        };
        overlay.addEventListener('transitionend', onFirstEnd);
      }
    },
    [enlargeTransitionMs, lockScroll, openedImageHeight, openedImageWidth, segments, stopInertia, stopAutorotate]
  );

  const onTileClick = useCallback(
    e => {
      if (draggingRef.current) return;
      if (performance.now() - lastDragEndAt.current < 80) return;
      if (openingRef.current) return;
      openItemFromElement(e.currentTarget);
    },
    [openItemFromElement]
  );

  const onTilePointerUp = useCallback(
    e => {
      if (e.pointerType !== 'touch') return;
      if (draggingRef.current) return;
      if (performance.now() - lastDragEndAt.current < 80) return;
      if (openingRef.current) return;
      openItemFromElement(e.currentTarget);
    },
    [openItemFromElement]
  );

  const onTileTouchEnd = useCallback(
    e => {
      if (draggingRef.current) return;
      if (performance.now() - lastDragEndAt.current < 80) return;
      if (openingRef.current) return;
      openItemFromElement(e.currentTarget);
    },
    [openItemFromElement]
  );

  useEffect(() => {
    return () => {
      document.body.classList.remove('dg-scroll-lock');
      stopAutorotate();
      stopInertia();
    };
  }, [stopAutorotate, stopInertia]);

  // Utility function to scroll to the next section (Team)
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("team");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        color: "#c9d1d9",
        background: "transparent",
        position: "relative", // Necessary for absolute positioning of the button
      }}
    >
      {/* HEADER WRAPPER with Z-index fix and new font styles */}
      <div
        style={{
          position: "relative",
          zIndex: 100,
          textAlign: "center",
          padding: "85px 0 40px",
          width: "100%",
          maxWidth: "800px",
        }}
      >
        {/* HEADING with Anton font and responsive size */}
        <h1
          style={{
            fontFamily: "Anton, sans-serif",
            fontSize: "min(9vw, 3rem)",
            textShadow: "0 0 10px rgba(255,255,255,0.12)",

            fontWeight: 700,
            margin: "0 0 0.1em 0",
            color: "#ffffff",
          }}
        >
          GALLERY
        </h1>
        {/* TAGLINE with Montserrat font and responsive size */}
        <p
          style={{
            fontSize: "min(2.5vw, 1.15rem)",
            fontFamily: "Montserrat, sans-serif",

            fontWeight: 300,
            color: "#8b949e",
            margin: 0,
            minHeight: "1.15rem", 
          }}
          dangerouslySetInnerHTML={taglineHtml} 
        />
      </div>

      <div
        ref={rootRef}
        className="sphere-root"
        style={{
          ["--segments-x"]: segments,
          ["--segments-y"]: segments,
          ["--overlay-blur-color"]: overlayBlurColor,
          ["--tile-radius"]: imageBorderRadius,
          ["--enlarge-radius"]: openedImageBorderRadius,
          ["--image-filter"]: grayscale ? "grayscale(1)" : "none",
          flexGrow: 1,
          minHeight: "60vh",
          width: "100%",
          margin: "0 auto",
        }}
      >
        <main ref={mainRef} className="sphere-main">
          <div className="stage">
            <div ref={sphereRef} className="sphere">
              {items.map((it, i) => (
                <div
                  key={`${it.x},${it.y},${i}`}
                  className="item"
                  data-src={it.src}
                  data-offset-x={it.x}
                  data-offset-y={it.y}
                  data-size-x={it.sizeX}
                  data-size-y={it.sizeY}
                  style={{
                    ["--offset-x"]: it.x,
                    ["--offset-y"]: it.y,
                    ["--item-size-x"]: it.sizeX,
                    ["--item-size-y"]: it.sizeY,
                  }}
                >
                  <div
                    className="item__image"
                    role="button"
                    tabIndex={0}
                    aria-label={it.alt || "Open image"}
                    onClick={onTileClick}
                    onPointerUp={onTilePointerUp}
                    onTouchEnd={onTileTouchEnd}
                  >
                    <img src={it.src} draggable={false} alt={it.alt} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="overlay" />
          <div className="overlay overlay--blur" />
          <div className="edge-fade edge-fade--top" />
          <div className="edge-fade edge-fade--bottom" />

          <div className="viewer" ref={viewerRef}>
            <div ref={scrimRef} className="scrim" />
            <div ref={frameRef} className="frame" />
          </div>
        </main>
      </div>

      {/* Scroll-down button component */}
      <div
        className="scroll-down-btn"
        onClick={scrollToNextSection}
        style={{
          position: "absolute",
          bottom: "30px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "40px",
          height: "60px",
          border: "2px solid #fff",
          borderRadius: "25px",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          cursor: "pointer",
          zIndex: 100, // Ensure it's above the dome
          pointerEvents: "auto", // Must be interactive
          backgroundColor: "transparent",
          transition: "border-color 0.3s",
        }}
      >
        <div
          className="arrow"
          style={{
            width: "10px",
            height: "10px",
            borderBottom: "2px solid #fff",
            borderRight: "2px solid #fff",
            transform: "rotate(45deg)",
            marginTop: "10px",
            transition: "border-color 0.3s",
          }}
        ></div>

        {/* Inline CSS for the animation (as used in Landing page) */}
        <style>{`
            @keyframes arrowMove {
              0% { transform: rotate(45deg) translateY(0); opacity: 1; }
              100% { transform: rotate(45deg) translateY(1vh); opacity: 0.8; }
            }
        `}</style>
      </div>
    </div>
  );
}