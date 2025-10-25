import React, { useState, useEffect } from "react";

import Farmer from "./Images/farmer.jpg";

const Contact = () => {
  const [hovered, setHovered] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleFocus = (e) => {
    e.target.style.borderColor = "#34A853";
    e.target.style.boxShadow = "0 0 5px rgba(52,168,83,0.4)";
  };
  const handleBlur = (e) => {
    e.target.style.borderColor = "#DDD";
    e.target.style.boxShadow = "none";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  const orbitCircles = [
    { radius: 180, speed: 6 },
    { radius: 230, speed: 10 },
    { radius: 280, speed: 14 },
  ];

  const particles = Array.from({ length: 20 }).map(() => ({
    radius: Math.random() * 320 + 180,
    size: Math.random() * 6 + 2,
    angle: Math.random() * 360,
    speed: Math.random() * 8 + 4,
    color: "#F3B63A",
  }));

  return (
    <section
      id="comment"
      style={{
        position: "relative",
        padding: isMobile ? "40px 15px" : "60px 20px",
        backgroundColor: "#F9F9F9",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* Animations */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0px); }
          }
          @keyframes rotateBorder {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes pulse {
            0% { opacity: 0.5; }
            50% { opacity: 1; }
            100% { opacity: 0.5; }
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>

      {/* Success Popup */}
      {showPopup && (
        <div
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            backgroundColor: "#34A853",
            color: "white",
            padding: "20px 30px",
            borderRadius: "10px",
            boxShadow: "0 5px 20px rgba(0,0,0,0.2)",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontSize: "16px",
            fontWeight: "600",
            animation: "fadeIn 0.5s ease",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              backgroundColor: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "14px",
              fontWeight: "bold",
              color: "#34A853",
            }}
          >
            ✓
          </div>
          Sended Successfully!
        </div>
      )}

      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          flexWrap: "wrap",
          maxWidth: "1200px",
          width: "100%",
          gap: "30px",
          justifyContent: "center",
          alignItems: "center",
          textAlign: isMobile ? "center" : "left",
        }}
      >
        {/* Left Image */}
        <div
          style={{
            width: isMobile ? "250px" : "350px",
            height: isMobile ? "250px" : "350px",
            borderRadius: "50%",
            overflow: "visible",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transform: hovered ? "scale(1.05)" : "scale(1)",
            transition: "transform 0.4s ease-in-out",
            cursor: "pointer",
            marginBottom: isMobile ? "20px" : "0",
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div
            style={{
              position: "absolute",
              width: isMobile ? "320px" : "450px",
              height: isMobile ? "320px" : "450px",
              borderRadius: "50%",
              backgroundColor: "rgba(243,182,58,0.15)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          ></div>

          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              border: "5px solid #34A853",
              boxSizing: "border-box",
              animation: "rotateBorder 10s linear infinite",
              pointerEvents: "none",
            }}
          ></div>

          <img
            src={Farmer}
            alt="Contact"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "50%",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              animation: "float 4s ease-in-out infinite",
            }}
          />

          {/* Orbits + particles remain unchanged */}
          {hovered &&
            orbitCircles.map((orbit, idx) => (
              <div
                key={idx}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: "100%",
                  height: "100%",
                  transform: "translate(-50%, -50%)",
                  animation: `rotateOrbit${idx} ${orbit.speed}s linear infinite`,
                }}
              >
                {[0, 90, 180, 270].map((deg, i) => {
                  const rad = (deg * Math.PI) / 180;
                  const x = orbit.radius * Math.cos(rad);
                  const y = orbit.radius * Math.sin(rad);
                  return (
                    <div
                      key={i}
                      style={{
                        position: "absolute",
                        width: "20px",
                        height: "20px",
                        backgroundColor: "#F3B63A",
                        borderRadius: "50%",
                        top: `calc(50% + ${y}px - 10px)`,
                        left: `calc(50% + ${x}px - 10px)`,
                        animation: "pulse 1.5s ease-in-out infinite",
                      }}
                    ></div>
                  );
                })}
              </div>
            ))}

          {hovered &&
            particles.map((p, i) => {
              const rad = (p.angle * Math.PI) / 180;
              const x = p.radius * Math.cos(rad);
              const y = p.radius * Math.sin(rad);
              return (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    width: `${p.size}px`,
                    height: `${p.size}px`,
                    borderRadius: "50%",
                    backgroundColor: p.color,
                    top: `calc(50% + ${y}px - ${p.size / 2}px)`,
                    left: `calc(50% + ${x}px - ${p.size / 2}px)`,
                    animation: `pulse 1.5s ease-in-out infinite, rotateParticle${i} ${p.speed}s linear infinite`,
                  }}
                ></div>
              );
            })}

          <style>
            {orbitCircles
              .map(
                (orbit, idx) => `
                @keyframes rotateOrbit${idx} {
                  0% { transform: translate(-50%, -50%) rotate(0deg); }
                  100% { transform: translate(-50%, -50%) rotate(360deg); }
                }
              `
              )
              .join("\n")}
          </style>
          <style>
            {particles
              .map(
                (p, idx) => `
                @keyframes rotateParticle${idx} {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
              `
              )
              .join("\n")}
          </style>
        </div>

        {/* Middle Section */}
        <div
          style={{
            flex: "1",
            minWidth: "280px",
            maxWidth: "400px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          <p
            style={{
              fontSize: "13px",
              letterSpacing: "2px",
              color: "#888",
              fontWeight: 600,
              margin: 0,
            }}
          >
            Comment now
          </p>
          <h3
            style={{
              fontSize: isMobile ? "22px" : "30px",
              fontWeight: 800,
              color: "#044723",
              lineHeight: 1.2,
              margin: "10px 0",
            }}
          >
            Leave Us A Message
          </h3>
          <p
            style={{
              fontSize: isMobile ? "14px" : "15px",
              color: "#555",
              lineHeight: 1.6,
            }}
          >
            We'd love to hear from you! Send us a message and our team will get
            back to you promptly.
          </p>
        </div>

        {/* Right Form Section */}
        <form
          onSubmit={handleSubmit}
          style={{
            flex: "1",
            minWidth: "280px",
            maxWidth: "400px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
            style={{
              width: "100%",
              padding: "16px 18px",
              border: "1px solid #DDD",
              borderRadius: "10px",
              backgroundColor: "#FAFAFA",
              fontSize: isMobile ? "14px" : "15px",
              boxSizing: "border-box",
              outline: "none",
              transition: "all 0.3s",
            }}
          />
          <input
            type="text"
            name="email"
            placeholder="Email Address"
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
            style={{
              width: "100%",
              padding: "16px 18px",
              border: "1px solid #DDD",
              borderRadius: "10px",
              backgroundColor: "#FAFAFA",
              fontSize: isMobile ? "14px" : "15px",
              boxSizing: "border-box",
              outline: "none",
              transition: "all 0.3s",
            }}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
            style={{
              width: "100%",
              padding: "16px 18px",
              border: "1px solid #DDD",
              borderRadius: "10px",
              backgroundColor: "#FAFAFA",
              fontSize: isMobile ? "14px" : "15px",
              boxSizing: "border-box",
              outline: "none",
              transition: "all 0.3s",
            }}
          />
          <textarea
            name="message"
            placeholder="Write Message"
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
            style={{
              width: "100%",
              padding: "16px 18px",
              border: "1px solid #DDD",
              borderRadius: "10px",
              backgroundColor: "#FAFAFA",
              fontSize: isMobile ? "14px" : "15px",
              boxSizing: "border-box",
              height: "120px",
              resize: "vertical",
              outline: "none",
              transition: "all 0.3s",
            }}
          ></textarea>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "16px 18px",
              border: "none",
              background: "linear-gradient(90deg, #F3B63A, #F4D35E)",
              color: "#333",
              borderRadius: "10px",
              fontSize: isMobile ? "15px" : "16px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;









































// import React, { useState } from 'react';

// const Contact = () => {
//   const [hovered, setHovered] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);

//   const handleFocus = (e) => {
//     e.target.style.borderColor = "#34A853";
//     e.target.style.boxShadow = "0 0 5px rgba(52,168,83,0.4)";
//   };
//   const handleBlur = (e) => {
//     e.target.style.borderColor = "#DDD";
//     e.target.style.boxShadow = "none";
//   }; 

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setShowPopup(true);
//     setTimeout(() => setShowPopup(false), 3000); // hide after 3s
//   };

//   // Main orbit circles configuration
//   const orbitCircles = [
//     { radius: 180, speed: 6 },
//     { radius: 230, speed: 10 },
//     { radius: 280, speed: 14 },
//   ];

//   // Particle halo configuration
//   const particles = Array.from({ length: 20 }).map(() => ({
//     radius: Math.random() * 320 + 180, // distance from center
//     size: Math.random() * 6 + 2, // 2-8px
//     angle: Math.random() * 360,
//     speed: Math.random() * 8 + 4, // 4-12s per rotation
//     color: "#F3B63A",
//   }));

//   return (
//     <section id="comment"
//       style={{
//         position: "relative",
//         padding: "60px 20px",
//         backgroundColor: "#F9F9F9",
//         display: "flex",
//         justifyContent: "center",
//       }}
//     >
//       <style>
//         {`
//           @keyframes float {
//             0% { transform: translateY(0px); }
//             50% { transform: translateY(-15px); }
//             100% { transform: translateY(0px); }
//           }
//           @keyframes rotateBorder {
//             0% { transform: rotate(0deg); }
//             100% { transform: rotate(360deg); }
//           }
//           @keyframes pulse {
//             0% { opacity: 0.5; }
//             50% { opacity: 1; }
//             100% { opacity: 0.5; }
//           }
//           @keyframes fadeIn {
//             from { opacity: 0; transform: translateY(-10px); }
//             to { opacity: 1; transform: translateY(0); }
//           }
//         `}
//       </style>

//       {/* Success Popup */}
//       {showPopup && (
//         <div
//           style={{
//             position: "fixed",
//             top: "20px",
//             right: "20px",
//             backgroundColor: "#34A853",
//             color: "white",
//             padding: "20px 30px",
//             borderRadius: "10px",
//             boxShadow: "0 5px 20px rgba(0,0,0,0.2)",
//             display: "flex",
//             alignItems: "center",
//             gap: "10px",
//             fontSize: "16px",
//             fontWeight: "600",
//             animation: "fadeIn 0.5s ease",
//             zIndex: 1000,
//           }}
//         >
//           <div 
//             style={{
//               width: "20px",
//               height: "20px",
//               borderRadius: "50%",
//               backgroundColor: "white",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               fontSize: "14px",
//               fontWeight: "bold",
//               color: "#34A853",
//             }}
//           >
//             ✓
//           </div>
//           Sended Successfully!
//         </div>
//       )}

//       <div
//         style={{
//           display: "flex",
//           flexWrap: "wrap",
//           maxWidth: "1200px",
//           width: "100%",
//           gap: "30px",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         {/* Left Circular Image with Orbiting Hover Circles and Particles */}
//         <div
//           style={{
//             width: "350px",
//             height: "350px",
//             borderRadius: "50%",
//             overflow: "visible",
//             position: "relative",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             transform: hovered ? "scale(1.05)" : "scale(1)",
//             transition: "transform 0.4s ease-in-out",
//             cursor: "pointer",
//           }}
//           onMouseEnter={() => setHovered(true)}
//           onMouseLeave={() => setHovered(false)}
//         >
//           {/* Outer semi-transparent circle */}
//           <div
//             style={{
//               position: "absolute",
//               width: "450px",
//               height: "450px",
//               borderRadius: "50%",
//               backgroundColor: "rgba(243,182,58,0.15)",
//               top: "50%",
//               left: "50%",
//               transform: "translate(-50%, -50%)",
//             }}
//           ></div>

//           {/* Rotating green border */}
//           <div
//             style={{
//               position: "absolute",
//               width: "100%",
//               height: "100%",
//               borderRadius: "50%",
//               border: "5px solid #34A853",
//               boxSizing: "border-box",
//               animation: "rotateBorder 10s linear infinite",
//               pointerEvents: "none",
//             }}
//           ></div>

//           {/* Main Image */}
//           <img
//             src="https://res.cloudinary.com/diimorwbz/image/upload/v1756474288/Farmer_afs8zr.jpg"
//             alt="Contact"
//             style={{
//               width: "100%",
//               height: "100%",
//               objectFit: "cover",
//               borderRadius: "50%",
//               boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
//               animation: "float 4s ease-in-out infinite",
//             }}
//           />

//           {/* Hover orbiting circles */}
//           {hovered &&
//             orbitCircles.map((orbit, idx) => (
//               <div
//                 key={idx}
//                 style={{
//                   position: "absolute",
//                   top: "50%",
//                   left: "50%",
//                   width: "100%",
//                   height: "100%",
//                   transform: "translate(-50%, -50%)",
//                   animation: `rotateOrbit${idx} ${orbit.speed}s linear infinite`,
//                 }}
//               >
//                 {[0, 90, 180, 270].map((deg, i) => {
//                   const rad = (deg * Math.PI) / 180;
//                   const x = orbit.radius * Math.cos(rad);
//                   const y = orbit.radius * Math.sin(rad);
//                   return (
//                     <div
//                       key={i}
//                       style={{
//                         position: "absolute",
//                         width: "20px",
//                         height: "20px",
//                         backgroundColor: "#F3B63A",
//                         borderRadius: "50%",
//                         top: `calc(50% + ${y}px - 10px)`,
//                         left: `calc(50% + ${x}px - 10px)`,
//                         animation: "pulse 1.5s ease-in-out infinite",
//                       }}
//                     ></div>
//                   );
//                 })}
//               </div>
//             ))}

//           {/* Tiny particles */}
//           {hovered &&
//             particles.map((p, i) => {
//               const rad = (p.angle * Math.PI) / 180;
//               const x = p.radius * Math.cos(rad);
//               const y = p.radius * Math.sin(rad);
//               return (
//                 <div
//                   key={i}
//                   style={{
//                     position: "absolute",
//                     width: `${p.size}px`,
//                     height: `${p.size}px`,
//                     borderRadius: "50%",
//                     backgroundColor: p.color,
//                     top: `calc(50% + ${y}px - ${p.size / 2}px)`,
//                     left: `calc(50% + ${x}px - ${p.size / 2}px)`,
//                     animation: `pulse 1.5s ease-in-out infinite, rotateParticle${i} ${p.speed}s linear infinite`,
//                   }}
//                 ></div>
//               );
//             })}

//           {/* Orbit keyframes for main orbit circles */}
//           <style>
//             {orbitCircles
//               .map(
//                 (orbit, idx) => `
//                 @keyframes rotateOrbit${idx} {
//                   0% { transform: translate(-50%, -50%) rotate(0deg); }
//                   100% { transform: translate(-50%, -50%) rotate(360deg); }
//                 }
//               `
//               )
//               .join("\n")}
//           </style>

//           {/* Orbit keyframes for particles */}
//           <style>
//             {particles
//               .map(
//                 (p, idx) => `
//                 @keyframes rotateParticle${idx} {
//                   0% { transform: rotate(0deg); }
//                   100% { transform: rotate(360deg); }
//                 }
//               `
//               )
//               .join("\n")}
//           </style>
//         </div>

//         {/* Middle Section */}
//         <div
//           style={{
//             flex: "1",
//             minWidth: "280px",
//             maxWidth: "400px",
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//           }}
//         >
//           <p
//             style={{
//               fontSize: "13px",
//               letterSpacing: "2px",
//               color: "#888",
//               fontWeight: 600,
//               margin: 0,
//             }}
//           >
//             Contact now
//           </p>
//           <h3
//             style={{
//               fontSize: "30px",
//               fontWeight: 800,
//               color: "#044723",
//               lineHeight: 1.2,
//               margin: "10px 0",
//             }}
//           >
//             Leave Us A Message
//           </h3>
//           <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.6 }}>
//             We'd love to hear from you! Send us a message and our team will get
//             back to you promptly.
//           </p>
//         </div>

//         {/* Right Form Section */}
//         <form
//           onSubmit={handleSubmit}
//           style={{
//             flex: "1",
//             minWidth: "280px",
//             maxWidth: "400px",
//             display: "flex",
//             flexDirection: "column",
//             gap: "15px",
//           }}
//         >
//           <input
//             type="text"
//             name="name"
//             placeholder="Full Name"
//             onFocus={handleFocus}
//             onBlur={handleBlur}
//             required 
//             style={{
//               width: "100%",
//               padding: "16px 18px",
//               border: "1px solid #DDD",
//               borderRadius: "10px",
//               backgroundColor: "#FAFAFA",
//               fontSize: "15px",
//               boxSizing: "border-box",
//               outline: "none",
//               transition: "all 0.3s", 
//             }}
//           />
//           <input
//             type="text"
//             name="email"
//             placeholder="Email Address"
//             onFocus={handleFocus}
//             onBlur={handleBlur}
//             required 
//             style={{
//               width: "100%",
//               padding: "16px 18px",
//               border: "1px solid #DDD",
//               borderRadius: "10px",
//               backgroundColor: "#FAFAFA",
//               fontSize: "15px",
//               boxSizing: "border-box",
//               outline: "none",
//               transition: "all 0.3s",
//             }}
//           />
//           <input
//             type="text"
//             name="phone"
//             placeholder="Phone Number"
//             onFocus={handleFocus}
//             onBlur={handleBlur}
//             required 
//             style={{
//               width: "100%",
//               padding: "16px 18px",
//               border: "1px solid #DDD",
//               borderRadius: "10px",
//               backgroundColor: "#FAFAFA",
//               fontSize: "15px",
//               boxSizing: "border-box",
//               outline: "none",
//               transition: "all 0.3s",
//             }}
//           />
//           <textarea
//             name="message"
//             placeholder="Write Message"
//             onFocus={handleFocus}
//             onBlur={handleBlur}
//             required 
//             style={{
//               width: "100%",
//               padding: "16px 18px",
//               border: "1px solid #DDD",
//               borderRadius: "10px",
//               backgroundColor: "#FAFAFA",
//               fontSize: "15px",
//               boxSizing: "border-box",
//               height: "120px",
//               resize: "vertical",
//               outline: "none",
//               transition: "all 0.3s",
//             }}
//           ></textarea>
//           <button
//             type="submit"
//             style={{
//               width: "100%",
//               padding: "16px 18px",
//               border: "none",
//               background: "linear-gradient(90deg, #F3B63A, #F4D35E)",
//               color: "#333",
//               borderRadius: "10px",
//               fontSize: "16px",
//               fontWeight: "bold",
//               cursor: "pointer",
//               transition: "all 0.3s",
//             }}
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;

