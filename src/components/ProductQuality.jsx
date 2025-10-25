import React, { useState } from "react";

import LinesLand from "./Images/LinesLand.jpg";
import Corn from "./Images/Corn.jpg";

// Detail Section Component (hidden until button click)
const ProductDetail = () => {
  return (
    <div
      style={{
        marginTop: "40px",
        padding: "30px",
        backgroundColor: "#fff",
        borderRadius: "12px",
        boxShadow: "0px 6px 15px rgba(0,0,0,0.15)",
        fontFamily: "'Roboto', sans-serif",
        lineHeight: 1.8,
        color: "#333",
        maxWidth: "1000px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <h2 style={{ color: "#5a9a4d", marginBottom: "20px" }}>
        Why Choose Our Products?
      </h2>
      <p>
        We believe in delivering only the finest quality organic products that
        enhance your everyday living. Each product is carefully sourced and
        crafted with sustainability in mind, ensuring it is safe, natural, and
        nourishing for your family.
      </p>
      <p>
        By choosing our products, you not only enjoy freshness and purity but
        also support eco-friendly practices that protect our planet for future
        generations.
      </p>
    </div>
  );
};

const ProductQuality = () => {
  const [hoverBtn, setHoverBtn] = useState(false);
  const [hoverImg1, setHoverImg1] = useState(false);
  const [hoverImg2, setHoverImg2] = useState(false);
  const [showDetail, setShowDetail] = useState(false); // toggle state

  const particles = Array.from({ length: 15 }).map((_, i) => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: 2 + Math.random() * 6,
    duration: 4 + Math.random() * 4,
  }));

  return (
    <div
      id="products-section"
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        margin: 0,
        fontFamily: "'Roboto', 'Segoe UI', Arial, sans-serif",
      }}
    >
      {/* Ripple / Animated Background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage:
            "url('https://res.cloudinary.com/diimorwbz/image/upload/v1725199684/pexels-suzy-hazelwood-1125212_q6t6o9.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
          animation: "rippleBg 8s ease-in-out infinite",
          filter: "blur(0.5px)",
        }}
      ></div>

      {/* Green Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(90, 154, 77, 0.85)",
          zIndex: 1,
        }}
      ></div>

      {/* Floating Particles */}
      {particles.map((p, idx) => (
        <div
          key={idx}
          style={{
            position: "absolute",
            left: p.left,
            top: p.top,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: "rgba(255,255,255,0.7)",
            borderRadius: "50%",
            boxShadow: `0 0 10px rgba(255,255,255,0.5)`,
            zIndex: 2,
            animation: `floatParticle ${p.duration}s ease-in-out infinite alternate`,
          }}
        ></div>
      ))}

      {/* Main Content Wrapper */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "100px 50px",
          maxWidth: "1200px",
          margin: "auto",
          gap: "60px",
          flexDirection: "column",
        }}
      >
        {/* Top Row: Images + Heading */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "60px",
            width: "100%",
          }}
        >
          {/* Left Column: Images */}
          <div
            style={{
              flex: 1,
              position: "relative",
              height: "450px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={LinesLand}
              alt="Watering plants"
              style={{
                width: "280px",
                height: "420px",
                objectFit: "cover",
                borderRadius: "20px",
                position: "absolute",
                left: 0,
                top: 0,
                zIndex: 2,
                boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.2)",
                transition: "transform 0.3s ease",
                transform: hoverImg1 ? "scale(1.05)" : "scale(1)",
                animation: "floatImg1 6s ease-in-out infinite",
              }}
              onMouseEnter={() => setHoverImg1(true)}
              onMouseLeave={() => setHoverImg1(false)}
            />

            <img
              src={Corn}
              alt="Windmill in a field"
              style={{
                width: "300px",
                height: "280px",
                objectFit: "cover",
                borderRadius: "20px",
                position: "absolute",
                left: "180px",
                bottom: "30px",
                zIndex: 3,
                border: "5px solid #5a9a4d",
                boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.2)",
                transition: "transform 0.3s ease",
                transform: hoverImg2 ? "scale(1.05)" : "scale(1)",
                animation: "floatImg2 5s ease-in-out infinite",
              }}
              onMouseEnter={() => setHoverImg2(true)}
              onMouseLeave={() => setHoverImg2(false)}
            />
          </div>

          {/* Right Column: Text and Button */}
          <div style={{ flex: 1.2, paddingLeft: "40px", textAlign: "left" }}>
            <h1
              style={{
                fontSize: "58px",
                fontWeight: 700,
                lineHeight: 1.3,
                margin: "0 0 30px 0",
                color: "#FFD700", // gold color
                fontFamily: "'Poppins', sans-serif",
                position: "relative",
              }}
            >
              Providing High Quality
              <br />
              Products
            </h1>

            <button
              style={{
                backgroundColor: hoverBtn ? "#e0a63d" : "#f0b94b",
                color: "#333",
                border: "none",
                padding: "16px 35px",
                fontSize: "16px",
                fontWeight: "bold",
                borderRadius: "8px",
                cursor: "pointer",
                outline: "none",
                transition: "all 0.3s ease",
                boxShadow: hoverBtn
                  ? "0px 12px 25px rgba(0,0,0,0.4)"
                  : "0px 4px 10px rgba(0,0,0,0.2)",
                transform: hoverBtn ? "translateY(-5px)" : "translateY(0px)",
                fontFamily: "'Roboto', sans-serif",
              }}
              onMouseEnter={() => setHoverBtn(true)}
              onMouseLeave={() => setHoverBtn(false)}
              onClick={() => setShowDetail(!showDetail)}
            >
              {showDetail ? "Hide Details" : "Discover More"}
            </button>
          </div>
        </div>

        {/* Conditionally Render ProductDetail */}
        {showDetail && <ProductDetail />}
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes rippleBg {
            0% { transform: scale(1) translateY(0); }
            25% { transform: scale(1.02) translateY(-10px); }
            50% { transform: scale(1) translateY(0); }
            75% { transform: scale(1.02) translateY(10px); }
            100% { transform: scale(1) translateY(0); }
          }

          @keyframes floatImg1 {
            0% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0); }
          }

          @keyframes floatImg2 {
            0% { transform: translateY(0); }
            50% { transform: translateY(8px); }
            100% { transform: translateY(0); }
          }

          @keyframes floatParticle {
            0% { transform: translateY(0) scale(1); opacity: 0.7; }
            50% { transform: translateY(-15px) scale(1.2); opacity: 0.9; }
            100% { transform: translateY(0) scale(1); opacity: 0.7; }
          }
        `}
      </style>
    </div>
  );
};

export default ProductQuality;



























//18-09-2025
// import React, { useState } from "react";

// const ProductQuality = () => {
//   const [hoverBtn, setHoverBtn] = useState(false);
//   const [hoverImg1, setHoverImg1] = useState(false);
//   const [hoverImg2, setHoverImg2] = useState(false);

//   const particles = Array.from({ length: 15 }).map((_, i) => ({
//     left: `${Math.random() * 100}%`,
//     top: `${Math.random() * 100}%`,
//     size: 2 + Math.random() * 6,
//     duration: 4 + Math.random() * 4,
//   }));

//   return (
//     <div
//       id="products-section"
//       style={{
//         position: "relative",
//         width: "100%",
//         overflow: "hidden",
//         margin: 0,
//         fontFamily: "'Roboto', 'Segoe UI', Arial, sans-serif", // updated body font
//       }}
//     >
//       {/* Ripple / Animated Background */}
//       <div
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           backgroundImage:
//             "url('https://res.cloudinary.com/diimorwbz/image/upload/v1725199684/pexels-suzy-hazelwood-1125212_q6t6o9.jpg')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           zIndex: 0,
//           animation: "rippleBg 8s ease-in-out infinite",
//           filter: "blur(0.5px)",
//         }}
//       ></div>

//       {/* Green Overlay */}
//       <div
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           backgroundColor: "rgba(90, 154, 77, 0.85)",
//           zIndex: 1,
//         }}
//       ></div>

//       {/* Floating Particles */}
//       {particles.map((p, idx) => (
//         <div
//           key={idx}
//           style={{
//             position: "absolute",
//             left: p.left,
//             top: p.top,
//             width: `${p.size}px`,
//             height: `${p.size}px`,
//             backgroundColor: "rgba(255,255,255,0.7)",
//             borderRadius: "50%",
//             boxShadow: `0 0 10px rgba(255,255,255,0.5)`,
//             zIndex: 2,
//             animation: `floatParticle ${p.duration}s ease-in-out infinite alternate`,
//           }}
//         ></div>
//       ))}

//       {/* Main Content Wrapper */}
//       <div
//         style={{
//           position: "relative",
//           zIndex: 3,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           padding: "100px 50px",
//           maxWidth: "1200px",
//           margin: "auto",
//           gap: "60px",
//         }}
//       >
//         {/* Left Column: Images */}
//         <div
//           style={{
//             flex: 1,
//             position: "relative",
//             height: "450px",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <img
//             src="https://res.cloudinary.com/diimorwbz/image/upload/v1756713497/Five_vqk0ry.jpg"
//             alt="Watering plants"
//             style={{
//               width: "280px",
//               height: "420px",
//               objectFit: "cover",
//               borderRadius: "20px",
//               position: "absolute",
//               left: 0,
//               top: 0,
//               zIndex: 2,
//               boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.2)",
//               transition: "transform 0.3s ease",
//               transform: hoverImg1 ? "scale(1.05)" : "scale(1)",
//               animation: "floatImg1 6s ease-in-out infinite",
//             }}
//             onMouseEnter={() => setHoverImg1(true)}
//             onMouseLeave={() => setHoverImg1(false)}
//           />

//           <img
//             src="https://res.cloudinary.com/diimorwbz/image/upload/v1756713508/Six_mhdti6.jpg"
//             alt="Windmill in a field"
//             style={{
//               width: "300px",
//               height: "280px",
//               objectFit: "cover",
//               borderRadius: "20px",
//               position: "absolute",
//               left: "180px",
//               bottom: "30px",
//               zIndex: 3,
//               border: "5px solid #5a9a4d",
//               boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.2)",
//               transition: "transform 0.3s ease",
//               transform: hoverImg2 ? "scale(1.05)" : "scale(1)",
//               animation: "floatImg2 5s ease-in-out infinite",
//             }}
//             onMouseEnter={() => setHoverImg2(true)}
//             onMouseLeave={() => setHoverImg2(false)}
//           />
//         </div>

//         {/* Right Column: Text and Button */}
//         <div style={{ flex: 1.2, paddingLeft: "40px", textAlign: "left" }}>
//           <h1
//             style={{
//               fontSize: "58px",
//               fontWeight: 700,
//               lineHeight: 1.3,
//               margin: "0 0 30px 0",
//               color: "#FFD700", // gold color
//               fontFamily: "'Poppins', sans-serif", // updated heading font
//               position: "relative",
//             }}
//           >
//             Providing High Quality
//             <br />
//             Products
//           </h1>

//           <button
//             style={{
//               backgroundColor: hoverBtn ? "#e0a63d" : "#f0b94b",
//               color: "#333",
//               border: "none",
//               padding: "16px 35px",
//               fontSize: "16px",
//               fontWeight: "bold",
//               borderRadius: "8px",
//               cursor: "pointer",
//               transition: "all 0.3s ease",
//               boxShadow: hoverBtn
//                 ? "0px 12px 25px rgba(0,0,0,0.4)"
//                 : "0px 4px 10px rgba(0,0,0,0.2)",
//               transform: hoverBtn ? "translateY(-5px)" : "translateY(0px)",
//               fontFamily: "'Roboto', sans-serif", // button font
//             }}
//             onMouseEnter={() => setHoverBtn(true)}
//             onMouseLeave={() => setHoverBtn(false)}
//           >
//             Discover More
//           </button>
//         </div>
//       </div>

//       {/* Animations */}
//       <style>
//         {`
//           @keyframes rippleBg {
//             0% { transform: scale(1) translateY(0); }
//             25% { transform: scale(1.02) translateY(-10px); }
//             50% { transform: scale(1) translateY(0); }
//             75% { transform: scale(1.02) translateY(10px); }
//             100% { transform: scale(1) translateY(0); }
//           }

//           @keyframes floatImg1 {
//             0% { transform: translateY(0); }
//             50% { transform: translateY(-10px); }
//             100% { transform: translateY(0); }
//           }

//           @keyframes floatImg2 {
//             0% { transform: translateY(0); }
//             50% { transform: translateY(8px); }
//             100% { transform: translateY(0); }
//           }

//           @keyframes floatParticle {
//             0% { transform: translateY(0) scale(1); opacity: 0.7; }
//             50% { transform: translateY(-15px) scale(1.2); opacity: 0.9; }
//             100% { transform: translateY(0) scale(1); opacity: 0.7; }
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default ProductQuality;
























//6

// import React, { useState } from "react";

// const ProductQuality = () => {
//   const [hoverBtn, setHoverBtn] = useState(false);
//   const [hoverImg1, setHoverImg1] = useState(false);
//   const [hoverImg2, setHoverImg2] = useState(false);

//   const particles = Array.from({ length: 15 }).map((_, i) => ({
//     left: `${Math.random() * 100}%`,
//     top: `${Math.random() * 100}%`,
//     size: 2 + Math.random() * 6,
//     duration: 4 + Math.random() * 4,
//   }));

//   return (
//     <div
//       id="products-section"
//       style={{
//         position: "relative",
//         width: "100%",
//         overflow: "hidden",
//         margin: 0,
//         fontFamily: "'Segoe UI', Arial, sans-serif",
//       }}
//     >
//       {/* Ripple / Animated Background */}
//       <div
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           backgroundImage:
//             "url('https://res.cloudinary.com/diimorwbz/image/upload/v1725199684/pexels-suzy-hazelwood-1125212_q6t6o9.jpg')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           zIndex: 0,
//           animation: "rippleBg 8s ease-in-out infinite",
//           filter: "blur(0.5px)",
//         }}
//       ></div>

//       {/* Green Overlay */}
//       <div
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           backgroundColor: "rgba(90, 154, 77, 0.85)",
//           zIndex: 1,
//         }}
//       ></div>

//       {/* Floating Particles */}
//       {particles.map((p, idx) => (
//         <div
//           key={idx}
//           style={{
//             position: "absolute",
//             left: p.left,
//             top: p.top,
//             width: `${p.size}px`,
//             height: `${p.size}px`,
//             backgroundColor: "rgba(255,255,255,0.7)",
//             borderRadius: "50%",
//             boxShadow: `0 0 10px rgba(255,255,255,0.5)`,
//             zIndex: 2,
//             animation: `floatParticle ${p.duration}s ease-in-out infinite alternate`,
//           }}
//         ></div>
//       ))}

//       {/* Main Content Wrapper */}
//       <div
//         style={{
//           position: "relative",
//           zIndex: 3,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           padding: "100px 50px",
//           maxWidth: "1200px",
//           margin: "auto",
//           gap: "60px",
//         }}
//       >
//         {/* Left Column: Images */}
//         <div
//           style={{
//             flex: 1,
//             position: "relative",
//             height: "450px",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <img
//             src="https://res.cloudinary.com/diimorwbz/image/upload/v1756713497/Five_vqk0ry.jpg"
//             alt="Watering plants"
//             style={{
//               width: "280px",
//               height: "420px",
//               objectFit: "cover",
//               borderRadius: "20px",
//               position: "absolute",
//               left: 0,
//               top: 0,
//               zIndex: 2,
//               boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.2)",
//               transition: "transform 0.3s ease",
//               transform: hoverImg1 ? "scale(1.05)" : "scale(1)",
//               animation: "floatImg1 6s ease-in-out infinite",
//             }}
//             onMouseEnter={() => setHoverImg1(true)}
//             onMouseLeave={() => setHoverImg1(false)}
//           />

//           <img
//             src="https://res.cloudinary.com/diimorwbz/image/upload/v1756713508/Six_mhdti6.jpg"
//             alt="Windmill in a field"
//             style={{
//               width: "300px",
//               height: "280px",
//               objectFit: "cover",
//               borderRadius: "20px",
//               position: "absolute",
//               left: "180px",
//               bottom: "30px",
//               zIndex: 3,
//               border: "5px solid #5a9a4d",
//               boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.2)",
//               transition: "transform 0.3s ease",
//               transform: hoverImg2 ? "scale(1.05)" : "scale(1)",
//               animation: "floatImg2 5s ease-in-out infinite",
//             }}
//             onMouseEnter={() => setHoverImg2(true)}
//             onMouseLeave={() => setHoverImg2(false)}
//           />
//         </div>

//         {/* Right Column: Text and Button */}
//         <div style={{ flex: 1.2, paddingLeft: "40px", textAlign: "left" }}>
//           <h1
//             style={{
//               fontSize: "58px",
//               fontWeight: 700,
//               lineHeight: 1.3,
//               margin: "0 0 30px 0",
//               color: "#FFD700", // gold color
//               fontFamily: "'Inria Serif', serif",
//               position: "relative",
//             }}
//           >
//             Providing High Quality
//             <br />
//             Products
//           </h1>

//           <button
//             style={{
//               backgroundColor: hoverBtn ? "#e0a63d" : "#f0b94b",
//               color: "#333",
//               border: "none",
//               padding: "16px 35px",
//               fontSize: "16px",
//               fontWeight: "bold",
//               borderRadius: "8px",
//               cursor: "pointer",
//               transition: "all 0.3s ease",
//               boxShadow: hoverBtn
//                 ? "0px 12px 25px rgba(0,0,0,0.4)"
//                 : "0px 4px 10px rgba(0,0,0,0.2)",
//               transform: hoverBtn ? "translateY(-5px)" : "translateY(0px)",
//             }}
//             onMouseEnter={() => setHoverBtn(true)}
//             onMouseLeave={() => setHoverBtn(false)}
//           >
//             Discover More
//           </button>
//         </div>
//       </div>

//       {/* Animations */}
//       <style>
//         {`
//           @keyframes rippleBg {
//             0% { transform: scale(1) translateY(0); }
//             25% { transform: scale(1.02) translateY(-10px); }
//             50% { transform: scale(1) translateY(0); }
//             75% { transform: scale(1.02) translateY(10px); }
//             100% { transform: scale(1) translateY(0); }
//           }

//           @keyframes floatImg1 {
//             0% { transform: translateY(0); }
//             50% { transform: translateY(-10px); }
//             100% { transform: translateY(0); }
//           }

//           @keyframes floatImg2 {
//             0% { transform: translateY(0); }
//             50% { transform: translateY(8px); }
//             100% { transform: translateY(0); }
//           }

//           @keyframes floatParticle {
//             0% { transform: translateY(0) scale(1); opacity: 0.7; }
//             50% { transform: translateY(-15px) scale(1.2); opacity: 0.9; }
//             100% { transform: translateY(0) scale(1); opacity: 0.7; }
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default ProductQuality;







































//5
// import React, { useState } from "react";

// const ProductQuality = () => {
//   const [hoverBtn, setHoverBtn] = useState(false);
//   const [hoverImg1, setHoverImg1] = useState(false);
//   const [hoverImg2, setHoverImg2] = useState(false);

//   // Generate random particles
//   const particles = Array.from({ length: 15 }).map((_, i) => ({
//     left: `${Math.random() * 100}%`,
//     top: `${Math.random() * 100}%`,
//     size: 2 + Math.random() * 6, // size in px
//     duration: 4 + Math.random() * 4, // animation duration
//   }));

//   return (
//     <div
//       id="products-section"
//       style={{
//         position: "relative",
//         width: "100%",
//         overflow: "hidden",
//         margin: 0,
//         fontFamily: "'Segoe UI', Arial, sans-serif",
//       }}
//     >
//       {/* Ripple / Animated Background */}
//       <div
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           backgroundImage:
//             "url('https://res.cloudinary.com/diimorwbz/image/upload/v1725199684/pexels-suzy-hazelwood-1125212_q6t6o9.jpg')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           zIndex: 0,
//           animation: "rippleBg 8s ease-in-out infinite",
//           filter: "blur(0.5px)",
//         }}
//       ></div>

//       {/* Green Overlay */}
//       <div
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           backgroundColor: "rgba(90, 154, 77, 0.85)",
//           zIndex: 1,
//         }}
//       ></div>

//       {/* Floating Particles */}
//       {particles.map((p, idx) => (
//         <div
//           key={idx}
//           style={{
//             position: "absolute",
//             left: p.left,
//             top: p.top,
//             width: `${p.size}px`,
//             height: `${p.size}px`,
//             backgroundColor: "rgba(255,255,255,0.7)",
//             borderRadius: "50%",
//             boxShadow: `0 0 10px rgba(255,255,255,0.5)`,
//             zIndex: 2,
//             animation: `floatParticle ${p.duration}s ease-in-out infinite alternate`,
//           }}
//         ></div>
//       ))}

//       {/* Main Content Wrapper */}
//       <div
//         style={{
//           position: "relative",
//           zIndex: 3,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           padding: "100px 50px",
//           maxWidth: "1200px",
//           margin: "auto",
//           gap: "60px",
//         }}
//       >
//         {/* Left Column: Images */}
//         <div
//           style={{
//             flex: 1,
//             position: "relative",
//             height: "450px",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           {/* Watering Can Image */}
//           <img
//             src="https://res.cloudinary.com/diimorwbz/image/upload/v1756713497/Five_vqk0ry.jpg"
//             alt="Watering plants"
//             style={{
//               width: "280px",
//               height: "420px",
//               objectFit: "cover",
//               borderRadius: "20px",
//               position: "absolute",
//               left: 0,
//               top: 0,
//               zIndex: 2,
//               boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.2)",
//               transition: "transform 0.3s ease",
//               transform: hoverImg1 ? "scale(1.05)" : "scale(1)",
//               animation: "floatImg1 6s ease-in-out infinite",
//             }}
//             onMouseEnter={() => setHoverImg1(true)}
//             onMouseLeave={() => setHoverImg1(false)}
//           />

//           {/* Windmill Image */}
//           <img
//             src="https://res.cloudinary.com/diimorwbz/image/upload/v1756713508/Six_mhdti6.jpg"
//             alt="Windmill in a field"
//             style={{
//               width: "300px",
//               height: "280px",
//               objectFit: "cover",
//               borderRadius: "20px",
//               position: "absolute",
//               left: "180px",
//               bottom: "30px",
//               zIndex: 3,
//               border: "5px solid #5a9a4d",
//               boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.2)",
//               transition: "transform 0.3s ease",
//               transform: hoverImg2 ? "scale(1.05)" : "scale(1)",
//               animation: "floatImg2 5s ease-in-out infinite",
//             }}
//             onMouseEnter={() => setHoverImg2(true)}
//             onMouseLeave={() => setHoverImg2(false)}
//           />
//         </div>

//         {/* Right Column: Text and Button */}
//         <div style={{ flex: 1.2, paddingLeft: "40px", textAlign: "left" }}>
//           <h1
//             style={{
//               fontSize: "58px",
//               color: "white",
//               fontWeight: 700,
//               lineHeight: 1.3,
//               margin: "0 0 30px 0",
//               textShadow: "1px 1px 5px rgba(0,0,0,0.15)",
//               fontFamily: "'Inria Serif', serif",
//             }}
//           >
//             Providing High Quality
//             <br />
//             Products
//           </h1>
//           <button
//             style={{
//               backgroundColor: hoverBtn ? "#e0a63d" : "#f0b94b",
//               color: "#333",
//               border: "none",
//               padding: "16px 35px",
//               fontSize: "16px",
//               fontWeight: "bold",
//               borderRadius: "8px",
//               cursor: "pointer",
//               transition: "all 0.3s ease",
//               boxShadow: hoverBtn
//                 ? "0px 12px 25px rgba(0,0,0,0.4)"
//                 : "0px 4px 10px rgba(0,0,0,0.2)",
//               transform: hoverBtn ? "translateY(-5px)" : "translateY(0px)",
//             }}
//             onMouseEnter={() => setHoverBtn(true)}
//             onMouseLeave={() => setHoverBtn(false)}
//           >
//             Discover More
//           </button>
//         </div>
//       </div>

//       {/* Animations */}
//       <style>
//         {`
//           @keyframes rippleBg {
//             0% { transform: scale(1) translateY(0); }
//             25% { transform: scale(1.02) translateY(-10px); }
//             50% { transform: scale(1) translateY(0); }
//             75% { transform: scale(1.02) translateY(10px); }
//             100% { transform: scale(1) translateY(0); }
//           }

//           @keyframes floatImg1 {
//             0% { transform: translateY(0); }
//             50% { transform: translateY(-10px); }
//             100% { transform: translateY(0); }
//           }

//           @keyframes floatImg2 {
//             0% { transform: translateY(0); }
//             50% { transform: translateY(8px); }
//             100% { transform: translateY(0); }
//           }

//           @keyframes floatParticle {
//             0% { transform: translateY(0) scale(1); opacity: 0.7; }
//             50% { transform: translateY(-15px) scale(1.2); opacity: 0.9; }
//             100% { transform: translateY(0) scale(1); opacity: 0.7; }
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default ProductQuality;
























//4
// import React, { useState } from "react";

// const ProductQuality = () => {
//   const [hoverBtn, setHoverBtn] = useState(false);
//   const [hoverImg1, setHoverImg1] = useState(false);
//   const [hoverImg2, setHoverImg2] = useState(false);

//   return (
//     <div
//       id="products-section"
//       style={{
//         position: "relative",
//         width: "100%",
//         overflow: "hidden",
//         margin: 0,
//         fontFamily: "'Segoe UI', Arial, sans-serif",
//       }}
//     >
//       {/* Ripple / Animated Background */}
//       <div
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           backgroundImage:
//             "url('https://res.cloudinary.com/diimorwbz/image/upload/v1725199684/pexels-suzy-hazelwood-1125212_q6t6o9.jpg')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           zIndex: 0,
//           animation: "rippleBg 8s ease-in-out infinite",
//           filter: "blur(0.5px)",
//         }}
//       ></div>

//       {/* Green Overlay */}
//       <div
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           backgroundColor: "rgba(90, 154, 77, 0.85)",
//           zIndex: 1,
//         }}
//       ></div>

//       {/* Main Content Wrapper */}
//       <div
//         style={{
//           position: "relative",
//           zIndex: 2,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           padding: "100px 50px",
//           maxWidth: "1200px",
//           margin: "auto",
//           gap: "60px",
//         }}
//       >
//         {/* Left Column: Images */}
//         <div
//           style={{
//             flex: 1,
//             position: "relative",
//             height: "450px",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           {/* Watering Can Image */}
//           <img
//             src="https://res.cloudinary.com/diimorwbz/image/upload/v1756713497/Five_vqk0ry.jpg"
//             alt="Watering plants"
//             style={{
//               width: "280px",
//               height: "420px",
//               objectFit: "cover",
//               borderRadius: "20px",
//               position: "absolute",
//               left: 0,
//               top: 0,
//               zIndex: 2,
//               boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.2)",
//               transition: "transform 0.3s ease",
//               transform: hoverImg1 ? "scale(1.05)" : "scale(1)",
//               animation: "floatImg1 6s ease-in-out infinite",
//             }}
//             onMouseEnter={() => setHoverImg1(true)}
//             onMouseLeave={() => setHoverImg1(false)}
//           />

//           {/* Windmill Image */}
//           <img
//             src="https://res.cloudinary.com/diimorwbz/image/upload/v1756713508/Six_mhdti6.jpg"
//             alt="Windmill in a field"
//             style={{
//               width: "300px",
//               height: "280px",
//               objectFit: "cover",
//               borderRadius: "20px",
//               position: "absolute",
//               left: "180px",
//               bottom: "30px",
//               zIndex: 3,
//               border: "5px solid #5a9a4d",
//               boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.2)",
//               transition: "transform 0.3s ease",
//               transform: hoverImg2 ? "scale(1.05)" : "scale(1)",
//               animation: "floatImg2 5s ease-in-out infinite",
//             }}
//             onMouseEnter={() => setHoverImg2(true)}
//             onMouseLeave={() => setHoverImg2(false)}
//           />
//         </div>

//         {/* Right Column: Text and Button */}
//         <div style={{ flex: 1.2, paddingLeft: "40px", textAlign: "left" }}>
//           <h1
//             style={{
//               fontSize: "58px",
//               color: "white",
//               fontWeight: 700,
//               lineHeight: 1.3,
//               margin: "0 0 30px 0",
//               textShadow: "1px 1px 5px rgba(0,0,0,0.15)",
//               fontFamily: "'Inria Serif', serif",
//             }}
//           >
//             Providing High Quality
//             <br />
//             Products
//           </h1>
//           <button
//             style={{
//               backgroundColor: hoverBtn ? "#e0a63d" : "#f0b94b",
//               color: "#333",
//               border: "none",
//               padding: "16px 35px",
//               fontSize: "16px",
//               fontWeight: "bold",
//               borderRadius: "8px",
//               cursor: "pointer",
//               transition: "all 0.3s ease",
//               boxShadow: hoverBtn
//                 ? "0px 12px 25px rgba(0,0,0,0.4)"
//                 : "0px 4px 10px rgba(0,0,0,0.2)",
//               transform: hoverBtn ? "translateY(-5px)" : "translateY(0px)",
//             }}
//             onMouseEnter={() => setHoverBtn(true)}
//             onMouseLeave={() => setHoverBtn(false)}
//           >
//             Discover More
//           </button>
//         </div>
//       </div>

//       {/* Animations */}
//       <style>
//         {`
//           @keyframes rippleBg {
//             0% { transform: scale(1) translateY(0); }
//             25% { transform: scale(1.02) translateY(-10px); }
//             50% { transform: scale(1) translateY(0); }
//             75% { transform: scale(1.02) translateY(10px); }
//             100% { transform: scale(1) translateY(0); }
//           }

//           @keyframes floatImg1 {
//             0% { transform: translateY(0); }
//             50% { transform: translateY(-10px); }
//             100% { transform: translateY(0); }
//           }

//           @keyframes floatImg2 {
//             0% { transform: translateY(0); }
//             50% { transform: translateY(8px); }
//             100% { transform: translateY(0); }
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default ProductQuality;























//3
// import React, { useState } from "react";

// const ProductQuality = () => {
//   const [hoverBtn, setHoverBtn] = useState(false);
//   const [hoverImg1, setHoverImg1] = useState(false);
//   const [hoverImg2, setHoverImg2] = useState(false);

//   return (
//     <div
//       id="products-section"
//       style={{
//         position: "relative",
//         width: "100%",
//         overflow: "hidden",
//         backgroundImage:
//           "url('https://res.cloudinary.com/diimorwbz/image/upload/v1725199684/pexels-suzy-hazelwood-1125212_q6t6o9.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         margin: 0,
//         fontFamily: "'Segoe UI', Arial, sans-serif",
//         animation: "floatBg 6s ease-in-out infinite", // bouncing background
//       }}
//     >
//       <style>
//         {`
//           @keyframes floatBg {
//             0% { transform: translateY(0px); }
//             50% { transform: translateY(-15px); }
//             100% { transform: translateY(0px); }
//           }
//         `}
//       </style>

//       {/* Green Overlay */}
//       <div
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           backgroundColor: "rgba(90, 154, 77, 0.9)",
//           zIndex: 1,
//         }}
//       ></div>

//       {/* Main Content Wrapper */}
//       <div
//         style={{
//           position: "relative",
//           zIndex: 2,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           padding: "100px 50px",
//           maxWidth: "1200px",
//           margin: "auto",
//           gap: "60px",
//         }}
//       >
//         {/* Left Column: Images */}
//         <div
//           style={{
//             flex: 1,
//             position: "relative",
//             height: "450px",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           {/* Watering Can Image */}
//           <img
//             src="https://res.cloudinary.com/diimorwbz/image/upload/v1756713497/Five_vqk0ry.jpg"
//             alt="Watering plants"
//             style={{
//               width: "280px",
//               height: "420px",
//               objectFit: "cover",
//               borderRadius: "20px",
//               position: "absolute",
//               left: 0,
//               top: 0,
//               zIndex: 2,
//               boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.2)",
//               transition: "transform 0.3s ease",
//               transform: hoverImg1 ? "scale(1.05)" : "scale(1)",
//             }}
//             onMouseEnter={() => setHoverImg1(true)}
//             onMouseLeave={() => setHoverImg1(false)}
//           />

//           {/* Windmill Image */}
//           <img
//             src="https://res.cloudinary.com/diimorwbz/image/upload/v1756713508/Six_mhdti6.jpg"
//             alt="Windmill in a field"
//             style={{
//               width: "300px",
//               height: "280px",
//               objectFit: "cover",
//               borderRadius: "20px",
//               position: "absolute",
//               left: "180px",
//               bottom: "30px",
//               zIndex: 3,
//               border: "5px solid #5a9a4d",
//               boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.2)",
//               transition: "transform 0.3s ease",
//               transform: hoverImg2 ? "scale(1.05)" : "scale(1)",
//             }}
//             onMouseEnter={() => setHoverImg2(true)}
//             onMouseLeave={() => setHoverImg2(false)}
//           />
//         </div>

//         {/* Right Column: Text and Button */}
//         <div style={{ flex: 1.2, paddingLeft: "40px", textAlign: "left" }}>
//           <h1
//             style={{
//               fontSize: "58px",
//               color: "white",
//               fontWeight: 700,
//               lineHeight: 1.3,
//               margin: "0 0 30px 0",
//               textShadow: "1px 1px 5px rgba(0,0,0,0.15)",
//               fontFamily: "'Inria Serif', serif",
//             }}
//           >
//             Providing High Quality
//             <br />
//             Products
//           </h1>
//           <button
//             style={{
//               backgroundColor: hoverBtn ? "#e0a63d" : "#f0b94b",
//               color: "#333",
//               border: "none",
//               padding: "16px 35px",
//               fontSize: "16px",
//               fontWeight: "bold",
//               borderRadius: "8px",
//               cursor: "pointer",
//               transition: "all 0.3s ease",
//               boxShadow: hoverBtn
//                 ? "0px 8px 20px rgba(0,0,0,0.3)"
//                 : "0px 4px 10px rgba(0,0,0,0.2)",
//               transform: hoverBtn ? "translateY(-4px)" : "translateY(0px)",
//             }}
//             onMouseEnter={() => setHoverBtn(true)}
//             onMouseLeave={() => setHoverBtn(false)}
//           >
//             Discover More
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductQuality;


































//2
// import React, { useState } from "react";

// const ProductQuality = () => {
//   const [hoverBtn, setHoverBtn] = useState(false);
//   const [hoverImg1, setHoverImg1] = useState(false);
//   const [hoverImg2, setHoverImg2] = useState(false);

//   return (
//     <div
//       id="products-section"
//       style={{
//         position: "relative",
//         width: "100%",
//         overflow: "hidden",
//         backgroundImage:
//           "url('https://res.cloudinary.com/diimorwbz/image/upload/v1725199684/pexels-suzy-hazelwood-1125212_q6t6o9.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         margin: 0,
//         fontFamily: "'Segoe UI', Arial, sans-serif",
//       }}
//     >
//       {/* Green Overlay */}
//       <div
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           backgroundColor: "rgba(90, 154, 77, 0.9)",
//           zIndex: 1,
//         }}
//       ></div>

//       {/* Main Content Wrapper */}
//       <div
//         style={{
//           position: "relative",
//           zIndex: 2,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           padding: "100px 50px",
//           maxWidth: "1200px",
//           margin: "auto",
//           gap: "60px",
//         }}
//       >
//         {/* Left Column: Images */}
//         <div
//           style={{
//             flex: 1,
//             position: "relative",
//             height: "450px",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           {/* Watering Can Image */}
//           <img
//             src="https://res.cloudinary.com/diimorwbz/image/upload/v1756713497/Five_vqk0ry.jpg"
//             alt="Watering plants"
//             style={{
//               width: "280px",
//               height: "420px",
//               objectFit: "cover",
//               borderRadius: "20px",
//               position: "absolute",
//               left: 0,
//               top: 0,
//               zIndex: 2,
//               boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.2)",
//               transition: "transform 0.3s ease",
//               transform: hoverImg1 ? "scale(1.05)" : "scale(1)",
//             }}
//             onMouseEnter={() => setHoverImg1(true)}
//             onMouseLeave={() => setHoverImg1(false)}
//           />

//           {/* Windmill Image */}
//           <img
//             src="https://res.cloudinary.com/diimorwbz/image/upload/v1756713508/Six_mhdti6.jpg"
//             alt="Windmill in a field"
//             style={{
//               width: "300px",
//               height: "280px",
//               objectFit: "cover",
//               borderRadius: "20px",
//               position: "absolute",
//               left: "180px",
//               bottom: "30px",
//               zIndex: 3,
//               border: "5px solid #5a9a4d",
//               boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.2)",
//               transition: "transform 0.3s ease",
//               transform: hoverImg2 ? "scale(1.05)" : "scale(1)",
//             }}
//             onMouseEnter={() => setHoverImg2(true)}
//             onMouseLeave={() => setHoverImg2(false)}
//           />
//         </div>

//         {/* Right Column: Text and Button */}
//         <div style={{ flex: 1.2, paddingLeft: "40px", textAlign: "left" }}>
//           <h1
//             style={{
//               fontSize: "58px",
//               color: "white",
//               fontWeight: 700,
//               lineHeight: 1.3,
//               margin: "0 0 30px 0",
//               textShadow: "1px 1px 5px rgba(0,0,0,0.15)",
//               fontFamily: "'Inria Serif', serif",
//             }}
//           >
//             Providing High Quality
//             <br />
//             Products
//           </h1>
//           <button
//             style={{
//               backgroundColor: hoverBtn ? "#e0a63d" : "#f0b94b",
//               color: "#333",
//               border: "none",
//               padding: "16px 35px",
//               fontSize: "16px",
//               fontWeight: "bold",
//               borderRadius: "8px",
//               cursor: "pointer",
//               transition: "background-color 0.3s ease",
//             }}
//             onMouseEnter={() => setHoverBtn(true)}
//             onMouseLeave={() => setHoverBtn(false)}
//           >
//             Discover More
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductQuality;





























//1
// import React from "react";

// const ProductQuality = () => {
//   return (
//     <div
//       id="products-section"
//       style={{
//         position: "relative",
//         width: "100%",
//         overflow: "hidden",
//         backgroundImage:
//           "url('https://res.cloudinary.com/diimorwbz/image/upload/v1725199684/pexels-suzy-hazelwood-1125212_q6t6o9.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         margin: 0,
//         fontFamily: "'Segoe UI', Arial, sans-serif",
//       }}
//     >
//       {/* Green Overlay */}
//       <div
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           backgroundColor: "rgba(90, 154, 77, 0.9)",
//           zIndex: 1,
//         }}
//       ></div>

//       {/* Main Content Wrapper */}
//       <div
//         style={{
//           position: "relative",
//           zIndex: 2,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           padding: "100px 50px",
//           maxWidth: "1200px",
//           margin: "auto",
//           gap: "60px",
//         }}
//       >
//         {/* Left Column: Images */}
//         <div
//           style={{
//             flex: 1,
//             position: "relative",
//             height: "450px",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           {/* Watering Can Image */}
//           <img
//             src="https://res.cloudinary.com/diimorwbz/image/upload/v1756713497/Five_vqk0ry.jpg"
//             alt="Watering plants"
//             style={{
//               width: "280px",
//               height: "420px",
//               objectFit: "cover",
//               borderRadius: "20px",
//               position: "absolute",
//               left: 0,
//               top: 0,
//               zIndex: 2,
//               boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.2)",
//             }}
//           />

//           {/* Windmill Image */}
//           <img
//             src="https://res.cloudinary.com/diimorwbz/image/upload/v1756713508/Six_mhdti6.jpg"
//             alt="Windmill in a field"
//             style={{
//               width: "300px",
//               height: "280px",
//               objectFit: "cover",
//               borderRadius: "20px",
//               position: "absolute",
//               left: "180px",
//               bottom: "30px",
//               zIndex: 3,
//               border: "5px solid #5a9a4d",
//               boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.2)",
//             }}
//           />
//         </div>

//         {/* Right Column: Text and Button */}
//         <div style={{ flex: 1.2, paddingLeft: "40px", textAlign: "left" }}>
//           <h1
//             style={{
//               fontSize: "58px",
//               color: "white",
//               fontWeight: 700,
//               lineHeight: 1.3,
//               margin: "0 0 30px 0",
//               textShadow: "1px 1px 5px rgba(0,0,0,0.15)",
//               fontFamily: "'Inria Serif', serif",
//             }}
//           >
//             Providing High Quality
//             <br />
//             Products
//           </h1>
//           <button
//             style={{
//               backgroundColor: "#f0b94b",
//               color: "#333",
//               border: "none",
//               padding: "16px 35px",
//               fontSize: "16px",
//               fontWeight: "bold",
//               borderRadius: "8px",
//               cursor: "pointer",
//               transition: "background-color 0.3s ease",
//             }}
//           >
//             Discover More
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductQuality;
