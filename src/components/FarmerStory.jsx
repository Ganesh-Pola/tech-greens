

import React, { useState, useEffect } from "react";
import Founder from "./Images/Founder.jpg";

// FarmerDetail Component
const FarmerDetail = () => {
  return (
    <div
      style={{
        marginTop: "40px",
        padding: "30px",
        backgroundColor: "#f9f9f9",
        borderRadius: "12px",
        boxShadow: "0px 6px 15px rgba(0,0,0,0.1)",
        fontFamily: "'Roboto', sans-serif",
        lineHeight: 1.8,
        color: "#333",
      }}
    >
      <h2 style={{ color: "#5a9a4d", marginBottom: "20px" }}>
        Farmer's Full Story
      </h2>
      <p>
        Ram Mohan’s journey from software engineering to farming is an inspiring
        tale of following one’s passion. He left behind the corporate world to
        embrace sustainable farming practices, ensuring his community receives
        fresh and organic produce.
      </p>
      <p>
        His efforts not only empower local farmers but also encourage the next
        generation to respect nature and value traditional agricultural wisdom.
      </p>
    </div>
  );
};

const FarmerStory = () => {
  const [showDetail, setShowDetail] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isHovered, setIsHovered] = useState(false);

  // Update on resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      id="farmer-story"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: isMobile ? "40px 20px" : "80px 50px",
        maxWidth: "1200px",
        margin: "auto",
        gap: "50px",
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: isMobile ? "30px" : "50px",
          alignItems: "center",
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        {/* Left Side: Farmer Image */}
        <div
          style={{
            flex: 1,
            position: "relative",
            width: "fit-content",
            margin: "0 auto",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={Founder}
            alt="Farmer working in the field"
            style={{
              display: "block",
              margin: "0 auto",
              width: isMobile ? "90%" : "450px",
              height: "auto",
              borderRadius: "20px",
              boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.25)",
              objectFit: "cover",
              transition: "transform 0.4s ease",
              position: "relative",
              zIndex: 1,
              transform: isHovered ? "scale(1.05)" : "scale(1)",
            }}
          />

          {!isMobile && (
            <div
              style={{
                position: "absolute",
                top: "-25px",
                left: "-25px",
                width: "calc(100% + 50px)",
                height: "calc(100% + 50px)",
                borderRadius: "25px",
                border: "6px solid #5a9a4d",
                zIndex: 0,
                transition: "box-shadow 0.6s ease-in-out",
                boxShadow: isHovered
                  ? "0px 20px 40px rgba(90,154,77,0.7)"
                  : "0px 12px 25px rgba(90,154,77,0.4)",
              }}
            ></div>
          )}
        </div>

        {/* Right Side: Story Content */}
        <div style={{ flex: 1.2 }}>
          <h2
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: isMobile ? "26px" : "42px",
              fontWeight: 700,
              color: "#5a9a4d",
              marginBottom: "20px",
              textAlign: isMobile ? "center" : "left",
            }}
          >
            From Software to Soil: A Farmer's Journey
          </h2>
          <p
            style={{
              fontSize: isMobile ? "16px" : "18px",
              lineHeight: 1.8,
              color: "#333",
              marginBottom: "30px",
              textAlign: isMobile ? "center" : "left",
            }}
          >
            Meet <strong>Ram Mohan</strong>, a humble farmer from Ragannaguda
            who has dedicated his life to sustainable farming. Every morning,
            before the sun rises, he tends to his fields with care and devotion.
            His story is not just about farming—it’s about resilience, hope, and
            the love for nature that flows through every seed he plants.
          </p>

          <p
            style={{
              fontSize: isMobile ? "16px" : "18px",
              lineHeight: 1.8,
              color: "#333",
              marginBottom: "40px",
              textAlign: isMobile ? "center" : "left",
            }}
          >
            Through his hard work, Ram Mohan ensures that the food reaching your
            plate is not only fresh but also grown with respect for the soil and
            the environment. His journey inspires us to connect back to our
            roots and support local farmers.
          </p>

          {/* Toggle Button */}
          <div style={{ textAlign: isMobile ? "center" : "left" }}>
            <button
              style={{
                backgroundColor: "#f0b94b",
                border: "none",
                padding: isMobile ? "12px 24px" : "14px 30px",
                fontSize: isMobile ? "14px" : "16px",
                fontWeight: "bold",
                borderRadius: "8px",
                cursor: "pointer",
                color: "#333",
                transition: "all 0.3s ease",
                boxShadow: "0px 6px 15px rgba(0,0,0,0.2)",
                outline: "none",
              }}
              onClick={() => setShowDetail(!showDetail)}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#e0a63d")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#f0b94b")
              }
            >
              {showDetail ? "Hide Story" : "Read More"}
            </button>
          </div>
        </div>
      </div>

      {/* Conditionally Render FarmerDetail */}
      {showDetail && <FarmerDetail />}
    </div>
  );
};

export default FarmerStory;



















































// import React, { useState, useEffect } from "react";
// import Founder from "./Images/Founder.jpg";

// // FarmerDetail Component (hidden until button click)
// const FarmerDetail = () => {
//   return (
//     <div
//       style={{
//         marginTop: "40px",
//         padding: "30px",
//         backgroundColor: "#f9f9f9",
//         borderRadius: "12px",
//         boxShadow: "0px 6px 15px rgba(0,0,0,0.1)",
//         fontFamily: "'Roboto', sans-serif",
//         lineHeight: 1.8,
//         color: "#333",
//       }}
//     >
//       <h2 style={{ color: "#5a9a4d", marginBottom: "20px" }}>
//         Farmer's Full Story
//       </h2>
//       <p>
//         Ram Mohan’s journey from software engineering to farming is an inspiring
//         tale of following one’s passion. He left behind the corporate world to
//         embrace sustainable farming practices, ensuring his community receives
//         fresh and organic produce.
//       </p>
//       <p>
//         His efforts not only empower local farmers but also encourage the next
//         generation to respect nature and value traditional agricultural wisdom.
//       </p>
//     </div>
//   );
// };

// const FarmerStory = () => {
//   const [showDetail, setShowDetail] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

//   // Update on resize
//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth <= 768);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div
//       id="farmer-story"
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         padding: isMobile ? "40px 20px" : "80px 50px",
//         maxWidth: "1200px",
//         margin: "auto",
//         gap: "50px",
//         fontFamily: "'Roboto', sans-serif",
//       }}
//     >
//       <div
//         style={{
//           display: "flex",
//           gap: isMobile ? "30px" : "50px",
//           alignItems: "center",
//           flexDirection: isMobile ? "column" : "row",
//         }}
//       >
//         {/* Left Side: Farmer Image */}
//         <div
//           style={{
//             flex: 1,
//             position: "relative",
//             width: "fit-content", // ✅ border wraps image
//             margin: "0 auto",
//           }}
//         >
//           <img
//             src={Founder}
//             alt="Farmer working in the field"
//             style={{
//               display: "block",
//               margin: "0 auto",
//               width: isMobile ? "90%" : "450px", // ✅ consistent scaling
//               height: "auto",
//               borderRadius: "20px",
//               boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.25)",
//               objectFit: "cover",
//               transition: "transform 0.4s ease",
//               position: "relative",
//               zIndex: 1,
//             }}
//             onMouseEnter={(e) =>
//               (e.currentTarget.style.transform = "scale(1.05)")
//             }
//             onMouseLeave={(e) =>
//               (e.currentTarget.style.transform = "scale(1)")
//             }
//           />
//           {!isMobile && (
//             <div
//               style={{
//                 position: "absolute",
//                 top: "-25px", // ✅ frame slightly larger
//                 left: "-25px",
//                 width: "calc(100% + 50px)",
//                 height: "calc(100% + 50px)",
//                 borderRadius: "25px",
//                 border: "6px solid #5a9a4d",
//                 boxShadow:
//                   "0px 12px 25px rgba(90, 154, 77, 0.4)", // ✅ soft green glow
//                 zIndex: 0,
//               }}
//             ></div>
//           )}
//         </div>

//         {/* Right Side: Story Content */}
//         <div style={{ flex: 1.2 }}>
//           <h2
//             style={{
//               fontFamily: "'Poppins', sans-serif",
//               fontSize: isMobile ? "26px" : "42px",
//               fontWeight: 700,
//               color: "#5a9a4d",
//               marginBottom: "20px",
//               textAlign: isMobile ? "center" : "left",
//             }}
//           >
//             From Software to Soil: A Farmer's Journey
//           </h2>
//           <p
//             style={{
//               fontSize: isMobile ? "16px" : "18px",
//               lineHeight: 1.8,
//               color: "#333",
//               marginBottom: "30px",
//               textAlign: isMobile ? "center" : "left",
//             }}
//           >
//             Meet <strong>Ram Mohan</strong>, a humble farmer from Ragannaguda
//             who has dedicated his life to sustainable farming. Every morning,
//             before the sun rises, he tends to his fields with care and devotion.
//             His story is not just about farming—it’s about resilience, hope, and
//             the love for nature that flows through every seed he plants.
//           </p>

//           <p
//             style={{
//               fontSize: isMobile ? "16px" : "18px",
//               lineHeight: 1.8,
//               color: "#333",
//               marginBottom: "40px",
//               textAlign: isMobile ? "center" : "left",
//             }}
//           >
//             Through his hard work, Ram Mohan ensures that the food reaching your
//             plate is not only fresh but also grown with respect for the soil and
//             the environment. His journey inspires us to connect back to our
//             roots and support local farmers.
//           </p>

//           {/* Toggle Button */}
//           <div style={{ textAlign: isMobile ? "center" : "left" }}>
//             <button
//               style={{
//                 backgroundColor: "#f0b94b",
//                 border: "none",
//                 padding: isMobile ? "12px 24px" : "14px 30px",
//                 fontSize: isMobile ? "14px" : "16px",
//                 fontWeight: "bold",
//                 borderRadius: "8px",
//                 cursor: "pointer",
//                 color: "#333",
//                 transition: "all 0.3s ease",
//                 boxShadow: "0px 6px 15px rgba(0,0,0,0.2)",
//                 outline: "none",
//               }}
//               onClick={() => setShowDetail(!showDetail)}
//               onMouseEnter={(e) =>
//                 (e.currentTarget.style.backgroundColor = "#e0a63d")
//               }
//               onMouseLeave={(e) =>
//                 (e.currentTarget.style.backgroundColor = "#f0b94b")
//               }
//             >
//               {showDetail ? "Hide Story" : "Read More"}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Conditionally Render FarmerDetail */}
//       {showDetail && <FarmerDetail />}
//     </div>
//   );
// };

// export default FarmerStory;











































// import React, { useState, useEffect } from "react";
// import Founder from "./Images/Founder.jpg";

// // FarmerDetail Component (hidden until button click)
// const FarmerDetail = () => {
//   return (
//     <div
//       style={{
//         marginTop: "40px",
//         padding: "30px",
//         backgroundColor: "#f9f9f9",
//         borderRadius: "12px",
//         boxShadow: "0px 6px 15px rgba(0,0,0,0.1)",
//         fontFamily: "'Roboto', sans-serif",
//         lineHeight: 1.8,
//         color: "#333",
//       }}
//     >
//       <h2 style={{ color: "#5a9a4d", marginBottom: "20px" }}>
//         Farmer's Full Story
//       </h2>
//       <p>
//         Ram Mohan’s journey from software engineering to farming is an inspiring
//         tale of following one’s passion. He left behind the corporate world to
//         embrace sustainable farming practices, ensuring his community receives
//         fresh and organic produce.
//       </p>
//       <p>
//         His efforts not only empower local farmers but also encourage the next
//         generation to respect nature and value traditional agricultural wisdom.
//       </p>
//     </div>
//   );
// };

// const FarmerStory = () => {
//   const [showDetail, setShowDetail] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

//   // Update on resize
//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth <= 768);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div
//       id="farmer-story"
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         padding: isMobile ? "40px 20px" : "80px 50px",
//         maxWidth: "1200px",
//         margin: "auto",
//         gap: "50px",
//         fontFamily: "'Roboto', sans-serif",
//       }}
//     >
//       <div
//         style={{
//           display: "flex",
//           gap: isMobile ? "30px" : "50px",
//           alignItems: "center",
//           flexDirection: isMobile ? "column" : "row",
//         }}
//       >
//         {/* Left Side: Farmer Image */}
//         <div
//           style={{
//             flex: 1,
//             position: "relative",
//             width: "fit-content", // ✅ border wraps image
//             margin: "0 auto",
//           }}
//         >
//           <img
//             src={Founder}
//             alt="Farmer working in the field"
//             style={{
//               display: "block",
//               margin: "0 auto",
//               width: isMobile ? "90%" : "450px", // ✅ consistent scaling
//               height: "auto",
//               borderRadius: "20px",
//               boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.25)",
//               objectFit: "cover",
//               transition: "transform 0.4s ease",
//               position: "relative",
//               zIndex: 1,
//             }}
//             onMouseEnter={(e) =>
//               (e.currentTarget.style.transform = "scale(1.05)")
//             }
//             onMouseLeave={(e) =>
//               (e.currentTarget.style.transform = "scale(1)")
//             }
//           />
//           {!isMobile && (
//             <div
//               style={{
//                 position: "absolute",
//                 top: "-25px", // ✅ frame slightly larger
//                 left: "-25px",
//                 width: "calc(100% + 50px)", // ✅ extra size around image
//                 height: "calc(100% + 50px)",
//                 borderRadius: "25px",
//                 border: "6px solid #5a9a4d",
//                 zIndex: 0,
//               }}
//             ></div>
//           )}
//         </div>

//         {/* Right Side: Story Content */}
//         <div style={{ flex: 1.2 }}>
//           <h2
//             style={{
//               fontFamily: "'Poppins', sans-serif",
//               fontSize: isMobile ? "26px" : "42px",
//               fontWeight: 700,
//               color: "#5a9a4d",
//               marginBottom: "20px",
//               textAlign: isMobile ? "center" : "left",
//             }}
//           >
//             From Software to Soil: A Farmer's Journey
//           </h2>
//           <p
//             style={{
//               fontSize: isMobile ? "16px" : "18px",
//               lineHeight: 1.8,
//               color: "#333",
//               marginBottom: "30px",
//               textAlign: isMobile ? "center" : "left",
//             }}
//           >
//             Meet <strong>Ram Mohan</strong>, a humble farmer from Ragannaguda
//             who has dedicated his life to sustainable farming. Every morning,
//             before the sun rises, he tends to his fields with care and devotion.
//             His story is not just about farming—it’s about resilience, hope, and
//             the love for nature that flows through every seed he plants.
//           </p>

//           <p
//             style={{
//               fontSize: isMobile ? "16px" : "18px",
//               lineHeight: 1.8,
//               color: "#333",
//               marginBottom: "40px",
//               textAlign: isMobile ? "center" : "left",
//             }}
//           >
//             Through his hard work, Ram Mohan ensures that the food reaching your
//             plate is not only fresh but also grown with respect for the soil and
//             the environment. His journey inspires us to connect back to our
//             roots and support local farmers.
//           </p>

//           {/* Toggle Button */}
//           <div style={{ textAlign: isMobile ? "center" : "left" }}>
//             <button
//               style={{
//                 backgroundColor: "#f0b94b",
//                 border: "none",
//                 padding: isMobile ? "12px 24px" : "14px 30px",
//                 fontSize: isMobile ? "14px" : "16px",
//                 fontWeight: "bold",
//                 borderRadius: "8px",
//                 cursor: "pointer",
//                 color: "#333",
//                 transition: "all 0.3s ease",
//                 boxShadow: "0px 6px 15px rgba(0,0,0,0.2)",
//                 outline: "none",
//               }}
//               onClick={() => setShowDetail(!showDetail)}
//               onMouseEnter={(e) =>
//                 (e.currentTarget.style.backgroundColor = "#e0a63d")
//               }
//               onMouseLeave={(e) =>
//                 (e.currentTarget.style.backgroundColor = "#f0b94b")
//               }
//             >
//               {showDetail ? "Hide Story" : "Read More"}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Conditionally Render FarmerDetail */}
//       {showDetail && <FarmerDetail />}
//     </div>
//   );
// };

// export default FarmerStory;












































// import React, { useState, useEffect } from "react";

// import Founder from "./Images/Founder.jpg";

// // FarmerDetail Component (hidden until button click)
// const FarmerDetail = () => {
//   return (
//     <div
//       style={{
//         marginTop: "40px",
//         padding: "30px",
//         backgroundColor: "#f9f9f9",
//         borderRadius: "12px",
//         boxShadow: "0px 6px 15px rgba(0,0,0,0.1)",
//         fontFamily: "'Roboto', sans-serif",
//         lineHeight: 1.8,
//         color: "#333",
//       }}
//     >
//       <h2 style={{ color: "#5a9a4d", marginBottom: "20px" }}>
//         Farmer's Full Story
//       </h2>
//       <p>
//         Ram Mohan’s journey from software engineering to farming is an inspiring
//         tale of following one’s passion. He left behind the corporate world to
//         embrace sustainable farming practices, ensuring his community receives
//         fresh and organic produce.
//       </p>
//       <p>
//         His efforts not only empower local farmers but also encourage the next
//         generation to respect nature and value traditional agricultural wisdom.
//       </p>
//     </div>
//   );
// };

// const FarmerStory = () => {
//   const [showDetail, setShowDetail] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

//   // Update on resize
//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth <= 768);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div
//       id="farmer-story"
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         padding: isMobile ? "40px 20px" : "80px 50px",
//         maxWidth: "1200px",
//         margin: "auto",
//         gap: "50px",
//         fontFamily: "'Roboto', sans-serif",
//       }}
//     >
//       <div
//         style={{
//           display: "flex",
//           gap: isMobile ? "30px" : "50px",
//           alignItems: "center",
//           flexDirection: isMobile ? "column" : "row",
//         }}
//       >
//         {/* Left Side: Farmer Image */}
//         <div
//           style={{
//             flex: 1,
//             position: "relative",
//             width: isMobile ? "100%" : "auto",
//           }}
//         >
//           <img
//             src={Founder}
//             alt="Farmer working in the field"
//             style={{
//               width: "100%",
//               maxWidth: isMobile ? "100%" : "500px",
//               borderRadius: "20px",
//               boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.25)",
//               objectFit: "cover",
//               transition: "transform 0.4s ease",
//             }}
//             onMouseEnter={(e) =>
//               (e.currentTarget.style.transform = "scale(1.05)")
//             }
//             onMouseLeave={(e) =>
//               (e.currentTarget.style.transform = "scale(1)")
//             }
//           />
//           {!isMobile && (
//             <div
//               style={{
//                 position: "absolute",
//                 top: "-20px",
//                 left: "-20px",
//                 width: "100%",
//                 height: "100%",
//                 borderRadius: "20px",
//                 border: "5px solid #5a9a4d",
//                 zIndex: -1,
//               }}
//             ></div>
//           )}
//         </div>

//         {/* Right Side: Story Content */}
//         <div style={{ flex: 1.2 }}>
//           <h2
//             style={{
//               fontFamily: "'Poppins', sans-serif",
//               fontSize: isMobile ? "26px" : "42px",
//               fontWeight: 700,
//               color: "#5a9a4d",
//               marginBottom: "20px",
//               textAlign: isMobile ? "center" : "left",
//             }}
//           >
//             From Software to Soil: A Farmer's Journey
//           </h2>
//           <p
//             style={{
//               fontSize: isMobile ? "16px" : "18px",
//               lineHeight: 1.8,
//               color: "#333",
//               marginBottom: "30px",
//               textAlign: isMobile ? "center" : "left",
//             }}
//           >
//             Meet <strong>Ram Mohan</strong>, a humble farmer from Ragannaguda
//             who has dedicated his life to sustainable farming. Every morning,
//             before the sun rises, he tends to his fields with care and devotion.
//             His story is not just about farming—it’s about resilience, hope, and
//             the love for nature that flows through every seed he plants.
//           </p>

//           <p
//             style={{
//               fontSize: isMobile ? "16px" : "18px",
//               lineHeight: 1.8,
//               color: "#333",
//               marginBottom: "40px",
//               textAlign: isMobile ? "center" : "left",
//             }}
//           >
//             Through his hard work, Ram Mohan ensures that the food reaching your
//             plate is not only fresh but also grown with respect for the soil and
//             the environment. His journey inspires us to connect back to our
//             roots and support local farmers.
//           </p>

//           {/* Toggle Button */}
//           <div style={{ textAlign: isMobile ? "center" : "left" }}>
//             <button
//               style={{
//                 backgroundColor: "#f0b94b",
//                 border: "none",
//                 padding: isMobile ? "12px 24px" : "14px 30px",
//                 fontSize: isMobile ? "14px" : "16px",
//                 fontWeight: "bold",
//                 borderRadius: "8px",
//                 cursor: "pointer",
//                 color: "#333",
//                 transition: "all 0.3s ease",
//                 boxShadow: "0px 6px 15px rgba(0,0,0,0.2)",
//                 outline: "none",
//               }}
//               onClick={() => setShowDetail(!showDetail)}
//               onMouseEnter={(e) =>
//                 (e.currentTarget.style.backgroundColor = "#e0a63d")
//               }
//               onMouseLeave={(e) =>
//                 (e.currentTarget.style.backgroundColor = "#f0b94b")
//               }
//             >
//               {showDetail ? "Hide Story" : "Read More"}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Conditionally Render FarmerDetail */}
//       {showDetail && <FarmerDetail />}
//     </div>
//   );
// };

// export default FarmerStory;































//Without responsiveness


// import React, { useState } from "react";

// // FarmerDetail Component (hidden until button click)
// const FarmerDetail = () => {
//   return (
//     <div 
//       style={{
//         marginTop: "40px",
//         padding: "30px",
//         backgroundColor: "#f9f9f9",
//         borderRadius: "12px",
//         boxShadow: "0px 6px 15px rgba(0,0,0,0.1)",
//         fontFamily: "'Roboto', sans-serif",
//         lineHeight: 1.8,
//         color: "#333",
//       }}
//     >
//       <h2 style={{ color: "#5a9a4d", marginBottom: "20px" }}>
//         Farmer's Full Story
//       </h2>
//       <p>
//         Ram Mohan’s journey from software engineering to farming is an inspiring
//         tale of following one’s passion. He left behind the corporate world to
//         embrace sustainable farming practices, ensuring his community receives
//         fresh and organic produce.
//       </p>
//       <p>
//         His efforts not only empower local farmers but also encourage the next
//         generation to respect nature and value traditional agricultural wisdom.
//       </p>
//     </div>
//   );
// };

// const FarmerStory = () => {
//   const [showDetail, setShowDetail] = useState(false);

//   return (
//     <div
//       id="farmer-story"
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         padding: "80px 50px",
//         maxWidth: "1200px",
//         margin: "auto",
//         gap: "50px",
//         fontFamily: "'Roboto', sans-serif",
//       }}
//     >
//       <div style={{ display: "flex", gap: "50px", alignItems: "center" }}>
//         {/* Left Side: Farmer Image */}
//         <div style={{ flex: 1, position: "relative" }}>
//           <img
//             src="https://res.cloudinary.com/diimorwbz/image/upload/v1757485216/Sir3_hianw0.jpg"
//             alt="Farmer working in the field"
//             style={{
//               width: "100%",
//               maxWidth: "500px",
//               borderRadius: "20px",
//               boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.25)",
//               objectFit: "cover",
//               transition: "transform 0.4s ease",
//             }}
//             onMouseEnter={(e) =>
//               (e.currentTarget.style.transform = "scale(1.05)")
//             }
//             onMouseLeave={(e) =>
//               (e.currentTarget.style.transform = "scale(1)")
//             }
//           />
//           <div
//             style={{
//               position: "absolute",
//               top: "-20px",
//               left: "-20px",
//               width: "100%",
//               height: "100%",
//               borderRadius: "20px",
//               border: "5px solid #5a9a4d",
//               zIndex: -1,
//             }}
//           ></div>
//         </div>

//         {/* Right Side: Story Content */}
//         <div style={{ flex: 1.2 }}>
//           <h2
//             style={{
//               fontFamily: "'Poppins', sans-serif",
//               fontSize: "42px",
//               fontWeight: 700,
//               color: "#5a9a4d",
//               marginBottom: "20px",
//             }}
//           >
//             From Software to Soil: A Farmer's Journey
//           </h2>
//           <p
//             style={{
//               fontSize: "18px",
//               lineHeight: 1.8,
//               color: "#333",
//               marginBottom: "30px",
//             }}
//           >
//             Meet <strong>Ram Mohan</strong>, a humble farmer from Ragannaguda
//             who has dedicated his life to sustainable farming. Every morning,
//             before the sun rises, he tends to his fields with care and devotion.
//             His story is not just about farming—it’s about resilience, hope, and
//             the love for nature that flows through every seed he plants.
//           </p>

//           <p
//             style={{
//               fontSize: "18px",
//               lineHeight: 1.8,
//               color: "#333",
//               marginBottom: "40px",
//             }}
//           >
//             Through his hard work, Ram Mohan ensures that the food reaching your
//             plate is not only fresh but also grown with respect for the soil and
//             the environment. His journey inspires us to connect back to our
//             roots and support local farmers.
//           </p>

//           {/* Toggle Button */}
//           <button
//             style={{
//               backgroundColor: "#f0b94b",
//               border: "none",
//               padding: "14px 30px",
//               fontSize: "16px",
//               fontWeight: "bold",
//               borderRadius: "8px",
//               cursor: "pointer",
//               color: "#333",
//               transition: "all 0.3s ease",
//               boxShadow: "0px 6px 15px rgba(0,0,0,0.2)",
//               outline: "none",
//             }}
//             onClick={() => setShowDetail(!showDetail)}
//             onMouseEnter={(e) =>
//               (e.currentTarget.style.backgroundColor = "#e0a63d")
//             }
//             onMouseLeave={(e) =>
//               (e.currentTarget.style.backgroundColor = "#f0b94b")
//             }
//           >
//             {showDetail ? "Hide Story" : "Read More"}
//           </button>
//         </div>
//       </div>

//       {/* Conditionally Render FarmerDetail */}
//       {showDetail && <FarmerDetail />}
//     </div>
//   );
// };

// export default FarmerStory;