// src/components/About.js
import React, { useState, useEffect } from "react"; 

import LeafyWall from "./Images/LeafyWall.jpg";
import PaddyRole from "./Images/PaddyRole.jpg";

const About = () => {
  const [hover, setHover] = useState(false);
  const [btnHover, setBtnHover] = useState(false);
  const [expHover, setExpHover] = useState(false);
  const [floatOffset, setFloatOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Floating animation
  useEffect(() => {
    const interval = setInterval(() => {
      setFloatOffset((prev) => (prev === 10 ? -10 : prev + 1));
    }, 30);
    return () => clearInterval(interval);
  }, []);

  // Detect screen resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /*** BASE STYLES (desktop/laptop, unchanged from your code) ***/
  const sectionStyle = {
    position: "relative",
    padding: "80px 20px",
    backgroundColor: "#f9f9f9",
    fontFamily: "Arial, sans-serif",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box",
  };

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    maxWidth: "1200px",
    width: "100%",
    borderRadius: "12px",
    overflow: "visible",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
    background: "#fff",
    position: "relative",
  };

  const leftColStyle = {
    flex: "1 1 50%",
    position: "relative",
    minWidth: "300px",
  };

  const rightColStyle = {
    flex: "1 1 50%",
    padding: "40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minWidth: "300px",
    boxSizing: "border-box",
    borderLeft: "6px solid #6ab04c",
    background: "linear-gradient(135deg, #ffffff, #f7fff7)",
    borderRadius: "0 12px 12px 0",
    position: "relative",
    overflow: "hidden",
  };

  const accentStyle = {
    position: "absolute",
    width: "250px",
    height: "250px",
    borderRadius: "50%",
    backgroundColor: "rgba(106,176,76,0.1)",
    top: `${-50 + floatOffset}px`,
    right: "-100px",
    zIndex: 0,
    transition: "top 0.03s linear",
  };

  const bigImageStyle = {
    width: "100%",
    height: "100%",
    minHeight: "500px",
    objectFit: "cover",
    borderRadius: "12px 0 0 12px",
    position: "relative",
    zIndex: 1,
  };

  const smallImageStyle = {
    position: "absolute",
    width: "45%",
    maxWidth: "260px",
    bottom: "-50px",
    left: "-40px",
    borderRadius: "12px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
    zIndex: 5,
  };

  const farmingStyle = {
    fontSize: "36px",
    fontWeight: "700",
    color: "#222",
    marginBottom: "20px",
    textShadow: "2px 2px 5px rgba(0,0,0,0.2)",
    transform: hover ? "scale(1.05)" : "scale(1)",
    transition: "all 0.3s ease",
    cursor: "pointer",
    borderBottom: hover ? "3px solid #6ab04c" : "3px solid transparent",
    display: "inline-block",
    paddingBottom: "5px",
    position: "relative",
    zIndex: 1,
  };

  const experienceTextStyle = {
    fontSize: "18px",
    fontFamily: "'Georgia', serif",
    color: "#555",
    lineHeight: 1.6,
    marginBottom: "15px",
    transition: "all 0.3s ease",
    transform: expHover ? "scale(1.02)" : "scale(1)",
    textShadow: expHover ? "1px 1px 5px rgba(0,0,0,0.1)" : "none",
    cursor: "default",
    position: "relative",
    zIndex: 1,
  };

  const btnStyle = {
    display: "inline-block",
    padding: "10px",
    backgroundColor: btnHover ? "#58b74a" : "#6ab04c",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    transition: "all 0.3s ease",
    boxShadow: btnHover
      ? "0 0 15px rgba(106,176,76,0.8)"
      : "0 4px 10px rgba(0,0,0,0.2)",
    transform: btnHover ? "scale(1.08)" : "scale(1)",
    position: "relative",
    zIndex: 1,
  };

  const pStyle = {
    fontSize: "16px",
    color: "#555",
    marginBottom: "15px",
    lineHeight: "1.6",
    position: "relative",
    zIndex: 1,
  };

  /*** MOBILE OVERRIDES (only apply if isMobile = true) ***/
  const mobileOverrides = {
    containerStyle: {
      flexDirection: "column",
    },
    leftColStyle: {
      flex: "1 1 100%",
      minWidth: "100%",
      order: 2,
    },
    rightColStyle: {
      flex: "1 1 100%",
      padding: "20px",
      minWidth: "100%",
      borderLeft: "none",
      borderTop: "6px solid #6ab04c",
      borderRadius: "0 0 12px 12px",
      order: 1,
    },
    accentStyle: {
      width: "150px",
      height: "150px",
      right: "-50px",
    },
    bigImageStyle: {
      minHeight: "250px",
      borderRadius: "0",
    },
    smallImageStyle: {
      width: "60%",
      maxWidth: "180px",
      bottom: "-30px",
      left: "10px",
    },
    farmingStyle: {
      fontSize: "24px",
      textAlign: "center",
    },
    experienceTextStyle: {
      fontSize: "16px",
      textAlign: "center",
    },
    pStyle: {
      textAlign: "center",
    },
    btnStyle: {
      padding: "10px 16px",
      alignSelf: "center",
    },
  };

  // Merge base + overrides when mobile
  const merge = (base, mobile) => (isMobile ? { ...base, ...mobile } : base);

  return (
    <section id="about" style={sectionStyle}>
      <div style={merge(containerStyle, mobileOverrides.containerStyle)}>
        {/* Left Column */}
        <div style={merge(leftColStyle, mobileOverrides.leftColStyle)}>
          <img
            src={LeafyWall}
            alt="Main"
            style={merge(bigImageStyle, mobileOverrides.bigImageStyle)}
          />
          <img
            src={PaddyRole}
            alt="Small"
            style={merge(smallImageStyle, mobileOverrides.smallImageStyle)}
          />
        </div>

        {/* Right Column */}
        <div style={merge(rightColStyle, mobileOverrides.rightColStyle)}>
          <div style={merge(accentStyle, mobileOverrides.accentStyle)}></div>

          <div style={{ marginBottom: "20px", position: "relative", zIndex: 1 }}>
            <h3
              style={merge(farmingStyle, mobileOverrides.farmingStyle)}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              Better Farming for Better Future
            </h3>
          </div>

          <p
            style={merge(experienceTextStyle, mobileOverrides.experienceTextStyle)}
            onMouseEnter={() => setExpHover(true)}
            onMouseLeave={() => setExpHover(false)}
          >
            We have{" "}
            <span style={{ fontWeight: "bold", color: "#6ab04c" }}>6 years</span>{" "}
            of agriculture & eco farming experience nationally.
          </p>

          <p style={merge(pStyle, mobileOverrides.pStyle)}>
            Embracing innovative and sustainable farming techniques to nurture
            healthy crops. Growing fruits, vegetables, and leafy greens
            responsibly for a greener tomorrow.
          </p>

          <a
            href="#farmer-story"
            style={merge(btnStyle, mobileOverrides.btnStyle)}
            onMouseEnter={() => setBtnHover(true)}
            onMouseLeave={() => setBtnHover(false)}
          >
            Discover More
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;





























//Without responsiveness

// // src/components/About.js
// import React, { useState, useEffect } from "react";

// const About = () => {
//   const [hover, setHover] = useState(false);
//   const [btnHover, setBtnHover] = useState(false);
//   const [expHover, setExpHover] = useState(false);
//   const [floatOffset, setFloatOffset] = useState(0);

//   // Floating animation for accent circle
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setFloatOffset((prev) => (prev === 10 ? -10 : prev + 1));
//     }, 30);
//     return () => clearInterval(interval);
//   }, []);

//   const sectionStyle = {
//     position: "relative",
//     padding: "80px 20px",
//     backgroundColor: "#f9f9f9",
//     fontFamily: "Arial, sans-serif",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     boxSizing: "border-box",
//   };

//   const containerStyle = {
//     display: "flex",
//     flexWrap: "wrap",
//     maxWidth: "1200px",
//     width: "100%",
//     borderRadius: "12px",
//     overflow: "visible",
//     boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
//     background: "#fff",
//     position: "relative",
//   };

//   const leftColStyle = {
//     flex: "1 1 50%",
//     position: "relative",
//     minWidth: "300px",
//   };

//   const rightColStyle = {
//     flex: "1 1 50%",
//     padding: "40px",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     minWidth: "300px",
//     boxSizing: "border-box",
//     borderLeft: "6px solid #6ab04c",
//     background: "linear-gradient(135deg, #ffffff, #f7fff7)",
//     borderRadius: "0 12px 12px 0",
//     position: "relative",
//     overflow: "hidden",
//   };

//   // Floating accent circle
//   const accentStyle = {
//     position: "absolute",
//     width: "250px",
//     height: "250px",
//     borderRadius: "50%",
//     backgroundColor: "rgba(106,176,76,0.1)",
//     top: `${-50 + floatOffset}px`,
//     right: "-100px",
//     zIndex: 0,
//     transition: "top 0.03s linear",
//   };

//   const bigImageStyle = {
//     width: "100%",
//     height: "100%",
//     minHeight: "500px",
//     objectFit: "cover",
//     borderRadius: "12px 0 0 12px",
//     position: "relative",
//     zIndex: 1,
//   };

//   const smallImageStyle = {
//     position: "absolute",
//     width: "45%",
//     maxWidth: "260px",
//     bottom: "-50px",
//     left: "-40px",
//     borderRadius: "12px",
//     boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
//     zIndex: 5,
//   };

//   const blockTitleStyle = {
//     marginBottom: "20px",
//     position: "relative",
//     zIndex: 1,
//   };

//   const welcomeStyle = {
//     fontSize: "18px",
//     fontWeight: "600",
//     letterSpacing: "1px",
//     marginBottom: "5px",
//     background: "linear-gradient(90deg, #6ab04c, #badc58)",
//     WebkitBackgroundClip: "text",
//     WebkitTextFillColor: "transparent",
//     textTransform: "uppercase",
//   };

//   const farmingStyle = {
//     fontSize: "36px",
//     fontWeight: "700",
//     color: "#222",
//     marginBottom: "20px",
//     textShadow: "2px 2px 5px rgba(0,0,0,0.2)",
//     transform: hover ? "scale(1.05)" : "scale(1)",
//     transition: "all 0.3s ease",
//     cursor: "pointer",
//     borderBottom: hover ? "3px solid #6ab04c" : "3px solid transparent",
//     display: "inline-block",
//     paddingBottom: "5px",
//     position: "relative",
//     zIndex: 1,
//   };

//   const experienceTextStyle = {
//     fontSize: "18px",
//     fontFamily: "'Georgia', serif",
//     color: "#555",
//     lineHeight: 1.6,
//     marginBottom: "15px",
//     transition: "all 0.3s ease",
//     transform: expHover ? "scale(1.02)" : "scale(1)",
//     textShadow: expHover ? "1px 1px 5px rgba(0,0,0,0.1)" : "none",
//     cursor: "default",
//     position: "relative",
//     zIndex: 1,
//   };

//   const btnStyle = {
//     display: "inline-block",
//     padding: "10px", // further decreased width
//     backgroundColor: btnHover ? "#58b74a" : "#6ab04c",
//     color: "#fff",
//     textDecoration: "none",
//     borderRadius: "8px",
//     fontWeight: "bold",
//     transition: "all 0.3s ease",
//     boxShadow: btnHover
//       ? "0 0 15px rgba(106,176,76,0.8)"
//       : "0 4px 10px rgba(0,0,0,0.2)",
//     transform: btnHover ? "scale(1.08)" : "scale(1)",
//     position: "relative",
//     zIndex: 1,
//   };

//   const pStyle = {
//     fontSize: "16px",
//     color: "#555",
//     marginBottom: "15px",
//     lineHeight: "1.6",
//     position: "relative",
//     zIndex: 1,
//   };

//   return (
//     <section id="about" style={sectionStyle}>
//       <div style={containerStyle}>
//         {/* Left Column */}
//         <div style={leftColStyle}>
//           <img
//             src="https://res.cloudinary.com/diimorwbz/image/upload/v1756462031/Organic_lro1oa.jpg"
//             alt="Main"
//             style={bigImageStyle}
//           />
//           <img
//             src="https://res.cloudinary.com/diimorwbz/image/upload/v1756462117/paddy_ohltfe.jpg"
//             alt="Small"
//             style={smallImageStyle}
//           />
//         </div>

//         {/* Right Column */}
//         <div style={rightColStyle}>
//           {/* Floating accent circle */}
//           <div style={accentStyle}></div>

//           <div style={blockTitleStyle}>
//             {/* <p style={welcomeStyle}>Welcome to SarojGreens</p> */}
//             <h3
//               style={farmingStyle}
//               onMouseEnter={() => setHover(true)}
//               onMouseLeave={() => setHover(false)}
//             >
//               Better Farming for Better Future
//             </h3>
//           </div>

//           {/* Enhanced 6 years experience paragraph */}
//           <p
//             style={experienceTextStyle}
//             onMouseEnter={() => setExpHover(true)}
//             onMouseLeave={() => setExpHover(false)}
//           >
//             We have{" "}
//             <span style={{ fontWeight: "bold", color: "#6ab04c" }}>6 years</span>{" "}
//             of agriculture & eco farming experience nationally.
//           </p>

//           <p style={pStyle}>
//             Embracing innovative and sustainable farming techniques to nurture healthy crops.
//             Growing fruits, vegetables, and leafy greens responsibly for a greener tomorrow.
//           </p>

//           <a
//             href="#farmer-story"
//             style={btnStyle}
//             onMouseEnter={() => setBtnHover(true)}
//             onMouseLeave={() => setBtnHover(false)}
//           >
//             Discover More
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
