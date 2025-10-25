import React from "react";

import WaterFields from "./Images/WaterFields.jpg";

// --- Component ---
const AgricultureGrowthSection = () => {
  const leaves = Array.from({ length: 12 }).map((_, i) => ({
    left: Math.random() * 90 + "%",
    size: Math.random() * 20 + 15 + "px",
    delay: Math.random() * 5 + "s",
    duration: Math.random() * 10 + 10 + "s",
    rotation: Math.random() * 360 + "deg",
    color: ["#34A853", "#FFC107", "#F4A261"][Math.floor(Math.random() * 3)],
  }));

  return (
    <div
      style={{
        backgroundColor: "#F9F8F4",
        fontFamily: "sans-serif",
        padding: "80px 40px",
        position: "relative",
        overflow: "hidden",
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url('https://www.transparentpng.com/thumb/farm/gRefaN-farm-transparent-background.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom center",
        backgroundSize: "80% auto",
        opacity: 0.95,
        borderRadius: "15px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        transition: "all 0.4s ease-in-out",
      }}
    >
      {/* Floating Leaves */}
      {leaves.map((leaf, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            bottom: "-50px",
            left: leaf.left,
            width: leaf.size,
            height: leaf.size,
            backgroundColor: leaf.color,
            borderRadius: "50% 30% 50% 30%",
            opacity: 0.7,
            transform: `rotate(${leaf.rotation})`,
            animation: `floatLeaf${i} ${leaf.duration} linear infinite`,
            animationDelay: leaf.delay,
          }}
        ></div>
      ))}

      {/* Content Wrapper */}
      <div
        className="agriculture-wrapper"
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
          animation: "fadeIn 1s ease-in",
        }}
      >
        {/* Left Section */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "25px",
            flex: 1,
            paddingRight: "20px",
          }}
        >
          <div
            style={{
              color: "#2E7D32",
              fontSize: "60px",
              marginTop: "5px",
              transition: "transform 0.3s ease",
            }}
          >
            <i className="fas fa-tractor"></i>
          </div>

          <div>
            <h2
              style={{
                fontSize: "36px",
                fontWeight: "bold",
                color: "#044723",
                margin: "0 0 15px 0",
                textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
              }}
            >
              We Care About Our Agriculture Growth
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "#555",
                lineHeight: 1.7,
                maxWidth: "500px",
                margin: 0,
              }}
            >
              We care about our agriculture growth by adopting sustainable
              methods and maintaining the highest standards of quality. Our
              commitment ensures consistent progress, healthier yields, and
              long-term value for future generations.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <div
            style={{
              width: "12px",
              height: "100px",
              backgroundColor: "#FFC107",
              borderRadius: "6px",
            }}
          ></div>
          <img
            src={WaterFields}
            alt="Farm landscape"
            style={{
              width: "320px",
              height: "auto",
              borderRadius: "12px",
              boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
              transition: "transform 0.3s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </div>
      </div>

      {/* Animations + Mobile Styles */}
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          ${leaves
            .map(
              (_, i) => `
              @keyframes floatLeaf${i} {
                0% { transform: translateY(0) rotate(0deg); opacity: 0.7; }
                25% { transform: translateY(-150px) translateX(10px) rotate(90deg); opacity: 0.6; }
                50% { transform: translateY(-300px) translateX(-10px) rotate(180deg); opacity: 0.5; }
                75% { transform: translateY(-450px) translateX(10px) rotate(270deg); opacity: 0.4; }
                100% { transform: translateY(-600px) rotate(360deg); opacity: 0; }
              }
          `
            )
            .join("\n")}

          /* --- Mobile Responsiveness --- */
          @media (max-width: 768px) {
            .agriculture-wrapper {
              flex-direction: column;
              text-align: center;
              padding: 20px !important;
            }
            .agriculture-wrapper h2 {
              font-size: 24px !important;
            }
            .agriculture-wrapper p {
              font-size: 14px !important;
              max-width: 100% !important;
            }
            .agriculture-wrapper img {
              width: 100% !important;
              max-width: 280px;
              margin-top: 20px;
            }
            .agriculture-wrapper > div:first-child {
              padding-right: 0 !important;
              flex-direction: column !important;
              align-items: center !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default AgricultureGrowthSection;
























//Without responsiveness

// import React from "react";

// // --- Component ---
// const AgricultureGrowthSection = () => {
//   // Generate 12 floating leaves with random positions, colors, and animations
//   const leaves = Array.from({ length: 12 }).map((_, i) => ({
//     left: Math.random() * 90 + "%",
//     size: Math.random() * 20 + 15 + "px",
//     delay: Math.random() * 5 + "s",
//     duration: Math.random() * 10 + 10 + "s",
//     rotation: Math.random() * 360 + "deg",
//     color: ["#34A853", "#FFC107", "#F4A261"][Math.floor(Math.random() * 3)], // green, yellow, orange
//   }));

//   return (
//     <div
//       style={{
//         backgroundColor: "#F9F8F4",
//         fontFamily: "sans-serif",
//         padding: "80px 40px",
//         position: "relative",
//         overflow: "hidden",
//         backgroundImage:
//           "linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url('https://www.transparentpng.com/thumb/farm/gRefaN-farm-transparent-background.png')",
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "bottom center",
//         backgroundSize: "80% auto",
//         opacity: 0.95,
//         borderRadius: "15px",
//         boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
//         transition: "all 0.4s ease-in-out",
//       }}
//     >
//       {/* Floating Leaves */}
//       {leaves.map((leaf, i) => (
//         <div
//           key={i}
//           style={{
//             position: "absolute",
//             bottom: "-50px",
//             left: leaf.left,
//             width: leaf.size,
//             height: leaf.size,
//             backgroundColor: leaf.color,
//             borderRadius: "50% 30% 50% 30%",
//             opacity: 0.7,
//             transform: `rotate(${leaf.rotation})`,
//             animation: `floatLeaf${i} ${leaf.duration} linear infinite`,
//             animationDelay: leaf.delay,
//           }}
//         ></div>
//       ))}

//       {/* Content Wrapper */}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-around",
//           alignItems: "center",
//           maxWidth: "1200px",
//           margin: "0 auto",
//           position: "relative",
//           zIndex: 2,
//           animation: "fadeIn 1s ease-in",
//         }}
//       >
//         {/* Left Section: Icon + Text */}
//         <div
//           style={{
//             display: "flex",
//             alignItems: "flex-start",
//             gap: "25px",
//             flex: 1,
//             paddingRight: "20px",
//           }}
//         >
//           {/* Icon */}
//           <div
//             style={{
//               color: "#2E7D32",
//               fontSize: "60px",
//               marginTop: "5px",
//               transition: "transform 0.3s ease",
//             }}
//           >
//             <i className="fas fa-tractor"></i>
//           </div>

//           {/* Text */}
//           <div>
//             <h2
//               style={{
//                 fontSize: "36px",
//                 fontWeight: "bold",
//                 color: "#044723",
//                 margin: "0 0 15px 0",
//                 textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
//               }}
//             >
//               We Care About Our Agriculture Growth
//             </h2>
//             <p
//               style={{
//                 fontSize: "16px",
//                 color: "#555",
//                 lineHeight: 1.7,
//                 maxWidth: "500px",
//                 margin: 0,
//               }}
//             >
//               We care about our agriculture growth by adopting sustainable methods and 
//               maintaining the highest standards of quality. Our commitment ensures consistent progress, 
//               healthier yields, and long-term value for future generations.
//             </p>
//           </div>
//         </div>

//         {/* Right Section: Yellow Bar + Image */}
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             gap: "15px",
//           }}
//         >
//           <div
//             style={{
//               width: "12px",
//               height: "100px",
//               backgroundColor: "#FFC107",
//               borderRadius: "6px",
//             }}
//           ></div>
//           <img
//             src="https://res.cloudinary.com/diimorwbz/image/upload/v1756474538/Fields_huk1gi.jpg"
//             alt="Farm landscape"
//             style={{
//               width: "320px",
//               height: "auto",
//               borderRadius: "12px",
//               boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
//               transition: "transform 0.3s ease",
//             }}
//             onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
//             onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
//           />
//         </div>
//       </div>

//       {/* Animations */}
//       <style>
//         {`
//           @keyframes fadeIn {
//             0% { opacity: 0; transform: translateY(20px); }
//             100% { opacity: 1; transform: translateY(0); }
//           }
//           ${leaves
//             .map(
//               (_, i) => `
//             @keyframes floatLeaf${i} {
//               0% { transform: translateY(0) rotate(0deg); opacity: 0.7; }
//               25% { transform: translateY(-150px) translateX(10px) rotate(90deg); opacity: 0.6; }
//               50% { transform: translateY(-300px) translateX(-10px) rotate(180deg); opacity: 0.5; }
//               75% { transform: translateY(-450px) translateX(10px) rotate(270deg); opacity: 0.4; }
//               100% { transform: translateY(-600px) rotate(360deg); opacity: 0; }
//             }
//           `
//             )
//             .join("\n")}
//         `}
//       </style>
//     </div>
//   );
// };

// export default AgricultureGrowthSection;

