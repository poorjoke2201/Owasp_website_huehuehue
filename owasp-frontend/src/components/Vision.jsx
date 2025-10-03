import InfiniteScroll from "./InfiniteScroll";
import BackgroundStars from "./BackgroundStars";

export default function Vision() {
  const items = [
    {
      content: (
        <img
          src="/askOwasp3.png"
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
          src="/gitGud.png"
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
          src="/gamingNight.png"
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
       
      }}
    >
     

      {/* InfiniteScroll full width */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "90%", // increase width
          maxWidth: "1200px", // optional max width
          height: "500px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "grab",
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
    </div>
  );
}