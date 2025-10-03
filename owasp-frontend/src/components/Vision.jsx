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


import InfiniteScroll from "./InfiniteScroll";
import BackgroundStars from "./BackgroundStars";
import gitgud from "../assets/gitGud.png";
import askowasp from "../assets/askOwasp3.png";
import gamingnight from "../assets/gamingNight.png";

export default function Vision() {
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
        // Main container aligns all children to the center
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        position: "relative",
        padding: "0 20px",
      }}
    >
      {/* --- Header Section (Centered) --- */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          color: "white",
          textAlign: "left", 
          alignSelf: "center", // This ensures the text block itself is centered horizontally
          maxWidth: "900px", 
          width: "100%", 
          marginTop: "80px", 
          marginBottom: "40px", 
        }}
      >
        <h1
          style={{
            // Consistent Heading Styles
            fontFamily: "Anton, sans-serif",
            fontSize: "min(6vw, 3rem)",
            fontWeight: 700,
            margin: "0 0 10px 0",
            textShadow: "0 0 10px rgba(255,255,255,0.12)",
            whiteSpace: "nowrap", // Ensure heading remains on one line
            lineHeight: 1,
          }}
        >
          OUR FLAGSHIP EVENTS
        </h1>
        <p
          style={{
            // Consistent Paragraph Styles
            fontFamily: "Montserrat, sans-serif",
            fontSize: "min(2.5vw, 1.15rem)",
            opacity: 0.8,
            margin: 0,
            lineHeight: 1.5,
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
          // CRITICAL: Ensure this wrapper is centered horizontally
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
    </div>
  );
}