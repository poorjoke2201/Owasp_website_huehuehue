// import InfiniteScroll from "./InfiniteScroll";
// import BackgroundStars from "./BackgroundStars";
// // NOTE: Assuming these imports are correctly configured in your project
// import askowasp from "../assets/askOwasp3.png"; 
// import gitgud from "../assets/gitGud.png";
// import gamingnight from "../assets/gamingNight.png";

// export default function Vision() {
//   const items = [
//     {
//       content: (
//         <img
//           src={askowasp}
//           alt="Pic 1"
//           style={{
//             width: "100%",
//             height: "100%",
//             objectFit: "cover",
//             borderRadius: "12px",
//           }}
//         />
//       ),
//     },
//     {
//       content: (
//         <img
//           src={gitgud}
//           alt="Pic 2"
//           style={{
//             width: "100%",
//             height: "100%",
//             objectFit: "cover",
//             borderRadius: "12px",
//           }}
//         />
//       ),
//     },
//     {
//       content: (
//         <img
//           src={gamingnight}
//           alt="Pic 3"
//           style={{
//             width: "100%",
//             height: "100%",
//             objectFit: "cover",
//             borderRadius: "12px",
//           }}
//         />
//       ),
//     },
//   ];

//   return (
//     <div
//       style={{
//         width: "100vw",
//         height: "100vh",
//         display: "flex",
//         // Main container must align everything to the CENTER
//         justifyContent: "center",
//         alignItems: "center",
//         flexDirection: "column",
//         position: "relative",
//         padding: "0 20px",
//       }}
//     >
//       {/* --- Header Section (Centered) --- */}
//       <div
//         style={{
//           position: "relative",
//           zIndex: 2,
//           color: "white",
//           textAlign: "left", 
//           alignSelf: "center", // This centers the header block itself
//           maxWidth: "900px", 
//           width: "100%", 
//           marginTop: "80px", 
//           marginBottom: "40px", 
//         }}
//       >
//         <h1
//           style={{
//             fontFamily: "Anton, sans-serif",
//             fontSize: "min(6vw, 3rem)",
//             fontWeight: 700,
//             margin: "0 0 10px 0",
//             textShadow: "0 0 10px rgba(255,255,255,0.12)",
//             whiteSpace: "nowrap", 
//             lineHeight: 1,
//           }}
//         >
//           OUR FLAGSHIP EVENTS
//         </h1>
//         <p
//           style={{
//             fontFamily: "Montserrat, sans-serif",
//             fontSize: "min(2.5vw, 1.15rem)",
//             opacity: 0.8,
//             margin: 0,
//             lineHeight: 1.5,
//           }}
//         >
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam.
//         </p>
//       </div>

//       {/* --- InfiniteScroll Component (Forced Center) --- */}
//       <div
//         style={{
//           position: "relative",
//           zIndex: 2,
//           width: "90%",
//           maxWidth: "1200px",
//           height: "500px", 
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           cursor: "grab",
//           // CRITICAL FIX: Ensure the wrapper is explicitly centered horizontally
//           // using margin: auto.
//           margin: "0 auto", 
//         }}
//       >
//         <InfiniteScroll
//           items={items}
//           isTilted={true}
//           tiltDirection="left"
//           autoplay={true}
//           autoplaySpeed={1.5}
//           autoplayDirection="down"
//           pauseOnHover={true}
//         />
//       </div>
      
//       {/* Added flex-grow to push content block up, keeping it off the bottom */}
//       <div style={{ flexGrow: 1 }} />
//     </div>
//   );
// }


// import InfiniteScroll from "./InfiniteScroll";
// import BackgroundStars from "./BackgroundStars";
// import gitgud from "../assets/gitGud.png";
// import askowasp from "../assets/askOwasp3.png";
// import gamingnight from "../assets/gamingNight.png";

// export default function Vision() {
//   // Utility function to scroll to the next section (Gallery)
//   const scrollToSection = (sectionId) => {
//     const el = document.getElementById(sectionId);
//     if (el) {
//       el.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   const items = [
//     {
//       content: (
//         <img
//           src={askowasp}
//           alt="Pic 1"
//           style={{
//             width: "100%",
//             height: "100%",
//             objectFit: "cover",
//             borderRadius: "12px",
//           }}
//         />
//       ),
//     },
//     {
//       content: (
//         <img
//           src={gitgud}
//           alt="Pic 2"
//           style={{
//             width: "100%",
//             height: "100%",
//             objectFit: "cover",
//             borderRadius: "12px",
//           }}
//         />
//       ),
//     },
//     {
//       content: (
//         <img
//           src={gamingnight}
//           alt="Pic 3"
//           style={{
//             width: "100%",
//             height: "100%",
//             objectFit: "cover",
//             borderRadius: "12px",
//           }}
//         />
//       ),
//     },
//   ];

//   return (
//     <div
//       style={{
//         width: "100vw",
//         height: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         flexDirection: "column",
//         position: "relative",
//         padding: "0 0px",
//       }}
//     >
//       {/* --- Header Section (Centered) --- */}
//       <div
//         style={{
//           position: "relative",
//           zIndex: 2,
//           color: "white",
//           textAlign: "left", 
//           alignSelf: "center", 
//           maxWidth: "900px", 
//           width: "100%", 
//           marginTop: "80px", 
//           marginBottom: "40px", 
//         }}
//       >
//         <h1
//           style={{
//             fontFamily: "Anton, sans-serif",
//             fontSize: "min(6vw, 3rem)",
//             fontWeight: 700,
//             margin: "0 0 10px 0",
//             textShadow: "0 0 10px rgba(255,255,255,0.12)",
//             whiteSpace: "nowrap",
//             lineHeight: 1,
//           }}
//         >
//           OUR FLAGSHIP EVENTS
//         </h1>
//         <p
//           style={{
//             fontFamily: "Montserrat, sans-serif",
//             fontSize: "min(2.5vw, 1.15rem)",
//             opacity: 0.8,
//             margin: 0,
//             lineHeight: 1.5,
//           }}
//         >
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam.
//         </p>
//       </div>

//       {/* --- InfiniteScroll Component (Perfectly Centered) --- */}
//       <div
//         style={{
//           position: "relative",
//           zIndex: 2,
//           width: "90%",
//           maxWidth: "1200px",
//           height: "500px", 
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           cursor: "grab",
//           margin: "0 auto", 
//         }}
//       >
//         <InfiniteScroll
//           items={items}
//           isTilted={true}
//           tiltDirection="left"
//           autoplay={true}
//           autoplaySpeed={1.5}
//           autoplayDirection="down"
//           pauseOnHover={true}
//         />
//       </div>
      
//       {/* Added flex-grow to push content block up, keeping it centered vertically */}
//       <div style={{ flexGrow: 1 }} />
      
//       {/* --- Scroll-down button (Targets Gallery) --- */}
//       <div
//         className="scroll-down-btn"
//         onClick={() => scrollToSection("gallery")}
//         style={{
//           position: "absolute",
//           bottom: "30px",
//           left: "50%",
//           transform: "translateX(-50%)",
//           width: "40px",
//           height: "60px",
//           border: "2px solid #fff",
//           borderRadius: "25px",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "flex-start",
//           cursor: "pointer",
//           zIndex: 3, // Ensure it's above the background but below Dock/Modal
//         }}
//       >
//         <div
//           className="arrow"
//           style={{
//             width: "10px",
//             height: "10px",
//             borderBottom: "2px solid #fff",
//             borderRight: "2px solid #fff",
//             transform: "rotate(45deg)",
//             marginTop: "10px",
//             // The animation CSS is provided separately in index.css or landing.jsx style block
//           }}
//         ></div>
//       </div>

//       <style>{`
//         /* This style block ensures the animation is defined locally if not in index.css */
//         @keyframes arrowMove {
//           0% { transform: rotate(45deg) translateY(0); opacity: 1; }
//           100% { transform: rotate(45deg) translateY(1vh); opacity: 0.8; }
//         }
//         .scroll-down-btn .arrow {
//             // animation: arrowMove 1s infinite alternate;
//             transition: all 0.2s;
//         }
//       `}</style>
//     </div>
//   );
// }

import InfiniteScroll from "./InfiniteScroll";
import BackgroundStars from "./BackgroundStars";
import gitgud from "../assets/gitGud.png";
import askowasp from "../assets/askOwasp3.png";
import gamingnight from "../assets/gamingNight.png";

export default function Vision() {
  // Utility function to scroll to the next section (Gallery)
  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const items = [
    {
      content: (
        <img
          src={askowasp}
          alt="Pic 1"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "12px",
          }}
        />
      ),
    },
    {
      content: (
        <img
          src={gitgud}
          alt="Pic 2"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "12px",
          }}
        />
      ),
    },
    {
      content: (
        <img
          src={gamingnight}
          alt="Pic 3"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "12px",
          }}
        />
      ),
    },
  ];

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        position: "relative",
        padding: "0 0px", // Removed outer padding to rely on max-width/inner padding
      }}
    >
      {/* --- Header Section (Centered and Responsive) --- */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          color: "white",
          textAlign: "left", 
          alignSelf: "center", 
          maxWidth: "900px", 
          width: "100%", 
          marginTop: "80px", 
          marginBottom: "40px", 
          // FIX: Add safe horizontal padding to ensure text doesn't hit screen edges
          padding: '0 5vw',
          boxSizing: 'border-box',
        }}
      >
        <h1
          style={{
            fontFamily: "Anton, sans-serif",
            fontSize: "min(6vw, 3rem)",
            fontWeight: 700,
            margin: "0 0 10px 0",
            textShadow: "0 0 10px rgba(255,255,255,0.12)",
            whiteSpace: "nowrap", // Keep the heading on one line
            lineHeight: 1,
          }}
        >
          OUR FLAGSHIP EVENTS
        </h1>
        <p
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "min(2.5vw, 1.15rem)",
            opacity: 0.8,
            margin: 0,
            lineHeight: 1.5,
            // FIX: Ensure the text can and will wrap
            whiteSpace: 'normal', 
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </div>

      {/* --- InfiniteScroll Component (Perfectly Centered) --- */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "90%",
          maxWidth: "1200px",
          height: "500px", 
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "grab",
          margin: "0 auto", 
        }}
      >
        <InfiniteScroll
          items={items}
          isTilted={true}
          tiltDirection="left"
          autoplay={true}
          autoplaySpeed={1.5}
          autoplayDirection="down"
          pauseOnHover={true}
        />
      </div>
      
      {/* Added flex-grow to push content block up, keeping it centered vertically */}
      <div style={{ flexGrow: 1 }} />
      
      {/* --- Scroll-down button (Targets Gallery) --- */}
      <div
        className="scroll-down-btn"
        onClick={() => scrollToSection("gallery")}
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
          zIndex: 3, 
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
          }}
        ></div>

        <style>{`
            @keyframes arrowMove {
              0% { transform: rotate(45deg) translateY(0); opacity: 1; }
              100% { transform: rotate(45deg) translateY(1vh); opacity: 0.8; }
            }
            .scroll-down-btn .arrow {
                //animation: arrowMove 1s infinite alternate;
                transition: all 0.2s;
            }
        `}</style>
      </div>
    </div>
  );
}