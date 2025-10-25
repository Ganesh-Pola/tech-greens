// src/components/Footer.js
import React, { useState, useEffect } from "react";
import {
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";


import RoundLogo from "./Images/RoundLogo.jpg"; 
import Wheat from "./Images/Wheat.jpg";
import RootCarrot from "./Images/RootCarrot.jpg";


const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="contact" style={{ marginTop: "40px" }}>
      {/* MAIN AGRICULTURE FOOTER */}
      <footer
        style={{
          backgroundColor: "#265c42",
          color: "#e0e0e0",
          fontFamily: "Segoe UI, sans-serif",
          padding: isMobile ? "40px 20px" : "70px 40px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Faint Background Image */}
        <div
          style={{
            backgroundImage:
              "url('https://www.transparentpng.com/thumb/farm/gRefaN-farm-transparent-background.png')",
            backgroundSize: isMobile ? "200px" : "350px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom right",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: 0.08,
            zIndex: 1,
          }}
        ></div>

        {/* Main Content */}
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: isMobile ? "center" : "space-between",
            maxWidth: "1200px",
            margin: "0 auto",
            position: "relative",
            zIndex: 2,
            flexWrap: "wrap",
            gap: isMobile ? "30px" : "40px",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          {/* Column 1: About & Subscribe */}
          <div style={{ flex: 1.5, minWidth: "260px" }}>
            {/* Logo */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "25px",
                justifyContent: isMobile ? "center" : "flex-start",
              }}
            >
              <img
                src={RoundLogo}
                alt="SarojGreens Logo"
                style={{
                  width: "55px",
                  height: "55px",
                  marginRight: "12px",
                  borderRadius: "50%",
                  boxShadow: "0 0 8px rgba(255,255,255,0.5)",
                }}
              />
              <span
                style={{
                  fontSize: isMobile ? "24px" : "30px",
                  fontWeight: "bold",
                  color: "#fff",
                  letterSpacing: "1px",
                }}
              >
                SarojGreens
              </span>
            </div>
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.8,
                color: "#d0d0d0",
                marginBottom: "25px",
              }}
            >
              Sustainable farming solutions and eco-friendly practices for a
              healthier planet. Together, let’s grow green!
            </p>

            {/* Email Input Form */}
            <div
              style={{
                backgroundColor: "#fff",
                borderRadius: "25px",
                padding: "6px 10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                boxShadow: "0 3px 6px rgba(0,0,0,0.15)",
                flexDirection: isMobile ? "column" : "row",
                gap: isMobile ? "10px" : "0",
              }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  border: "none",
                  outline: "none",
                  background: "transparent",
                  fontSize: "14px",
                  flexGrow: 1,
                  padding: "8px 10px",
                  color: "#333",
                  textAlign: isMobile ? "center" : "left",
                  width: isMobile ? "100%" : "auto",
                }}
              />
              <button
                style={{
                  background: "#ffc107",
                  border: "none",
                  cursor: "pointer",
                  color: "#265c42",
                  fontSize: "18px",
                  padding: "8px 14px",
                  borderRadius: "50%",
                  transition: "0.3s ease",
                  alignSelf: isMobile ? "center" : "flex-end",
                }}
                onMouseOver={(e) => (e.currentTarget.style.background = "#e0a800")}
                onMouseOut={(e) => (e.currentTarget.style.background = "#ffc107")}
              >
                →
              </button>
            </div>

            {/* Social Media Icons */}
            <div
              style={{
                display: "flex",
                gap: "18px",
                marginTop: "30px",
                justifyContent: isMobile ? "center" : "flex-start",
              }}
            >
              <a
                href="https://www.instagram.com/sarojgreens"
                style={{
                  color: "white",
                  fontSize: "22px",
                  textDecoration: "none",
                  transition: "0.3s",
                }}
                onMouseOver={(e) => (e.currentTarget.style.color = "#ffc107")}
                onMouseOut={(e) => (e.currentTarget.style.color = "white")}
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com/@sarojgreens"
                style={{
                  color: "white",
                  fontSize: "22px",
                  textDecoration: "none",
                  transition: "0.3s",
                }}
                onMouseOver={(e) => (e.currentTarget.style.color = "#ffc107")}
                onMouseOut={(e) => (e.currentTarget.style.color = "white")}
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Column 2: Links */}
          <div style={{ flex: 0.8, minWidth: "200px" }}>
            <h3
              style={{
                fontSize: isMobile ? "20px" : "22px",
                color: "#fff",
                marginBottom: "25px",
                borderBottom: "2px solid #ffc107",
                display: "inline-block",
                paddingBottom: "5px",
              }}
            >
              Links
            </h3>
            <div>
              {["Our Projects", "About us", "New Campaign", "Upcoming Events", "Volunteers"].map(
                (item, index) => (
                  <div key={index} style={{ marginBottom: "12px" }}>
                    <a
                      href="#about"
                      style={{
                        color: "#c0c0c0",
                        textDecoration: "none",
                        fontSize: "15px",
                        transition: "0.3s",
                      }}
                      onMouseOver={(e) => (e.currentTarget.style.color = "#ffc107")}
                      onMouseOut={(e) => (e.currentTarget.style.color = "#c0c0c0")}
                    >
                      › {item}
                    </a>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Column 3: News */}
          <div style={{ flex: 1.2, minWidth: "260px" }}>
            <h3
              style={{
                fontSize: isMobile ? "20px" : "22px",
                color: "#fff",
                marginBottom: "25px",
                borderBottom: "2px solid #ffc107",
                display: "inline-block",
                paddingBottom: "5px",
              }}
            >
              News
            </h3>
            {[
              {
                img: Wheat,
                date: "Nov 16, 2024",
                text: "How to grow vegetables in the farms",
              },
              {
                img: RootCarrot,
                date: "Nov 16, 2024",
                text: "Tips to improve wheat farming",
              },
            ].map((news, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginBottom: idx === 0 ? "20px" : 0,
                  flexDirection: isMobile ? "column" : "row",
                  textAlign: isMobile ? "center" : "left",
                }}
              >
                <img
                  src={news.img}
                  alt={news.text}
                  style={{
                    width: "75px",
                    height: "75px",
                    borderRadius: "10px",
                    marginRight: isMobile ? "0" : "15px",
                    marginBottom: isMobile ? "10px" : "0",
                    objectFit: "cover",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
                    alignSelf: isMobile ? "center" : "flex-start",
                  }}
                />
                <div>
                  <span
                    style={{
                      color: "#ffc107",
                      fontSize: "13px",
                      fontWeight: "bold",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {news.date}
                  </span>
                  <p
                    style={{
                      margin: "6px 0 0 0",
                      color: "#fff",
                      fontSize: "16px",
                      lineHeight: 1.4,
                    }}
                  >
                    {news.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Column 4: Contact */}
          <div style={{ flex: 1.2, minWidth: "250px" }}>
            <h3
              style={{
                fontSize: isMobile ? "20px" : "22px",
                color: "#fff",
                marginBottom: "25px",
                borderBottom: "2px solid #ffc107",
                display: "inline-block",
                paddingBottom: "5px",
              }}
            >
              Contact
            </h3>
            {[
              {
                icon: <FaPhoneAlt />,
                text: "+91 8328469942",
              },
              {
                icon: <FaEnvelope />,
                text: "info@sarojgreens.com",
              },
              {
                icon: <FaMapMarkerAlt />,
                text: "Near Bhramanapally road, closer to APR group villas, Ragannaguda.",
              },
            ].map((c, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginBottom: "18px",
                  justifyContent: isMobile ? "center" : "flex-start",
                  textAlign: isMobile ? "center" : "left",
                  flexDirection: isMobile ? "column" : "row",
                  gap: isMobile ? "8px" : "0",
                }}
              >
                <span
                  style={{
                    color: "#ffc107",
                    fontSize: "18px",
                    marginRight: isMobile ? "0" : "12px",
                  }}
                >
                  {c.icon}
                </span>
                <span
                  style={{
                    color: "#c0c0c0",
                    fontSize: "15px",
                    lineHeight: 1.6,
                  }}
                >
                  {c.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </footer>

      {/* COPYRIGHT FOOTER */}
      <footer
        style={{
          backgroundColor: "#1f4d35",
          color: "#fff",
          padding: isMobile ? "12px 10px" : "18px 15px",
          textAlign: "center",
          fontFamily: "Arial, sans-serif",
          fontSize: isMobile ? "12px" : "14px",
          lineHeight: 1.6,
          width: "100%",
          boxSizing: "border-box",
          borderTop: "2px solid #ffc107",
        }}
      >
        <p
          style={{
            fontSize: isMobile ? "14px" : "16px",
            margin: 0,
            letterSpacing: "0.5px",
          }}
        >
          © {new Date().getFullYear()} All Rights Reserved by{" "}
          <a
            href="https://sarojgreens.com"
            style={{
              color: "#ffc107",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Saroj Greens
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Footer;

























//Without responsiveness


// // src/components/Footer.js
// import React from "react";
// import {
//   FaInstagram,
//   FaYoutube,
//   FaPhoneAlt,
//   FaEnvelope,
//   FaMapMarkerAlt,
// } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <div id="contact" style={{ marginTop: "40px" }}>
//       {/* MAIN AGRICULTURE FOOTER */}
//       <footer
//         style={{
//           backgroundColor: "#265c42",
//           color: "#e0e0e0",
//           fontFamily: "Segoe UI, sans-serif",
//           padding: "70px 40px",
//           position: "relative",
//           overflow: "hidden",
//         }}
//       >
//         {/* Faint Background Image */}
//         <div
//           style={{
//             backgroundImage:
//               "url('https://www.transparentpng.com/thumb/farm/gRefaN-farm-transparent-background.png')",
//             backgroundSize: "350px",
//             backgroundRepeat: "no-repeat",
//             backgroundPosition: "bottom right",
//             position: "absolute",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             opacity: 0.08,
//             zIndex: 1,
//           }}
//         ></div>

//         {/* Main Content */}
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             maxWidth: "1200px",
//             margin: "0 auto",
//             position: "relative",
//             zIndex: 2,
//             flexWrap: "wrap",
//             gap: "40px",
//           }}
//         >
//           {/* Column 1: About & Subscribe */}
//           <div style={{ flex: 1.5, minWidth: "260px" }}>
//             {/* Logo */}
//             <div
//               style={{ display: "flex", alignItems: "center", marginBottom: "25px" }}
//             >
//               <img
//                 src="https://res.cloudinary.com/diimorwbz/image/upload/v1756209011/WhatsApp_Image_2025-08-26_at_17.07.42_dihfly.jpg"
//                 alt="SarojGreens Logo"
//                 style={{
//                   width: "55px",
//                   height: "55px",
//                   marginRight: "12px",
//                   borderRadius: "50%",
//                   boxShadow: "0 0 8px rgba(255,255,255,0.5)",
//                 }}
//               />
//               <span
//                 style={{
//                   fontSize: "30px",
//                   fontWeight: "bold",
//                   color: "#fff",
//                   letterSpacing: "1px",
//                 }}
//               >
//                 SarojGreens
//               </span>
//             </div>
//             <p
//               style={{
//                 fontSize: "15px",
//                 lineHeight: 1.8,
//                 color: "#d0d0d0",
//                 marginBottom: "25px",
//               }}
//             >
//               Sustainable farming solutions and eco-friendly practices for a
//               healthier planet. Together, let’s grow green!
//             </p>

//             {/* Email Input Form */}
//             <div
//               style={{
//                 backgroundColor: "#fff",
//                 borderRadius: "25px",
//                 padding: "6px 10px",
//                 display: "flex",
//                 alignItems: "center",
//                 boxShadow: "0 3px 6px rgba(0,0,0,0.15)",
//               }}
//             >
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 style={{
//                   border: "none",
//                   outline: "none",
//                   background: "transparent",
//                   fontSize: "14px",
//                   flexGrow: 1,
//                   padding: "8px 10px",
//                   color: "#333",
//                 }}
//               />
//               <button
//                 style={{
//                   background: "#ffc107",
//                   border: "none",
//                   cursor: "pointer",
//                   color: "#265c42",
//                   fontSize: "18px",
//                   padding: "8px 14px",
//                   borderRadius: "50%",
//                   transition: "0.3s ease",
//                 }}
//                 onMouseOver={(e) => (e.currentTarget.style.background = "#e0a800")}
//                 onMouseOut={(e) => (e.currentTarget.style.background = "#ffc107")}
//               >
//                 →
//               </button>
//             </div>

//             {/* Social Media Icons */}
//             <div style={{ display: "flex", gap: "18px", marginTop: "30px" }}>
//               <a
//                 href="https://www.instagram.com/sarojgreens"
//                 style={{
//                   color: "white",
//                   fontSize: "22px",
//                   textDecoration: "none",
//                   transition: "0.3s",
//                 }}
//                 onMouseOver={(e) => (e.currentTarget.style.color = "#ffc107")}
//                 onMouseOut={(e) => (e.currentTarget.style.color = "white")}
//               >
//                 <FaInstagram />
//               </a>
//               <a
//                 href="https://www.youtube.com/@sarojgreens"
//                 style={{
//                   color: "white",
//                   fontSize: "22px",
//                   textDecoration: "none",
//                   transition: "0.3s",
//                 }}
//                 onMouseOver={(e) => (e.currentTarget.style.color = "#ffc107")}
//                 onMouseOut={(e) => (e.currentTarget.style.color = "white")}
//               >
//                 <FaYoutube />
//               </a>
//             </div>
//           </div>

//           {/* Column 2: Links */}
//           <div style={{ flex: 0.8, minWidth: "200px" }}>
//             <h3
//               style={{
//                 fontSize: "22px",
//                 color: "#fff",
//                 marginBottom: "25px",
//                 borderBottom: "2px solid #ffc107",
//                 display: "inline-block",
//                 paddingBottom: "5px",
//               }}
//             >
//               Links
//             </h3>
//             <div>
//               {["Our Projects", "About us", "New Campaign", "Upcoming Events", "Volunteers"].map(
//                 (item, index) => (
//                   <div key={index} style={{ marginBottom: "12px" }}>
//                     <a
//                       href="#about"
//                       style={{
//                         color: "#c0c0c0",
//                         textDecoration: "none",
//                         fontSize: "15px",
//                         transition: "0.3s",
//                       }}
//                       onMouseOver={(e) => (e.currentTarget.style.color = "#ffc107")}
//                       onMouseOut={(e) => (e.currentTarget.style.color = "#c0c0c0")}
//                     >
//                       › {item}
//                     </a>
//                   </div>
//                 )
//               )}
//             </div>
//           </div>

//           {/* Column 3: News */}
//           <div style={{ flex: 1.2, minWidth: "260px" }}>
//             <h3
//               style={{
//                 fontSize: "22px",
//                 color: "#fff",
//                 marginBottom: "25px",
//                 borderBottom: "2px solid #ffc107",
//                 display: "inline-block",
//                 paddingBottom: "5px",
//               }}
//             >
//               News
//             </h3>
//             {[
//               {
//                 img: "https://res.cloudinary.com/diimorwbz/image/upload/v1756482384/Tables_t8vtcn.jpg",
//                 date: "Nov 16, 2024",
//                 text: "How to grow vegetables in the farms",
//               },
//               {
//                 img: "https://res.cloudinary.com/diimorwbz/image/upload/v1756732622/Wheat_e4zv5g.jpg",
//                 date: "Nov 16, 2024",
//                 text: "Tips to improve wheat farming",
//               },
//             ].map((news, idx) => (
//               <div
//                 key={idx}
//                 style={{
//                   display: "flex",
//                   alignItems: "flex-start",
//                   marginBottom: idx === 0 ? "20px" : 0,
//                 }}
//               >
//                 <img
//                   src={news.img}
//                   alt={news.text}
//                   style={{
//                     width: "75px",
//                     height: "75px",
//                     borderRadius: "10px",
//                     marginRight: "15px",
//                     objectFit: "cover",
//                     boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
//                   }}
//                 />
//                 <div>
//                   <span
//                     style={{
//                       color: "#ffc107",
//                       fontSize: "13px",
//                       fontWeight: "bold",
//                       letterSpacing: "0.5px",
//                     }}
//                   >
//                     {news.date}
//                   </span>
//                   <p
//                     style={{
//                       margin: "6px 0 0 0",
//                       color: "#fff",
//                       fontSize: "16px",
//                       lineHeight: 1.4,
//                     }}
//                   >
//                     {news.text}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Column 4: Contact */}
//           <div style={{ flex: 1.2, minWidth: "250px" }}>
//             <h3
//               style={{
//                 fontSize: "22px",
//                 color: "#fff",
//                 marginBottom: "25px",
//                 borderBottom: "2px solid #ffc107",
//                 display: "inline-block",
//                 paddingBottom: "5px",
//               }}
//             >
//               Contact
//             </h3>
//             {[
//               {
//                 icon: <FaPhoneAlt />,
//                 text: "+91 8328469942",
//               },
//               {
//                 icon: <FaEnvelope />,
//                 text: "info@sarojgreens.com",
//               },
//               {
//                 icon: <FaMapMarkerAlt />,
//                 text: "Near Bhramanapally road, closer to APR group villas, Ragannaguda.",
//               },
//             ].map((c, i) => (
//               <div
//                 key={i}
//                 style={{
//                   display: "flex",
//                   alignItems: "flex-start",
//                   marginBottom: "18px",
//                 }}
//               >
//                 <span style={{ color: "#ffc107", fontSize: "18px", marginRight: "12px" }}>
//                   {c.icon}
//                 </span>
//                 <span
//                   style={{
//                     color: "#c0c0c0",
//                     fontSize: "15px",
//                     lineHeight: 1.6,
//                   }}
//                 >
//                   {c.text}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </footer>

//       {/* COPYRIGHT FOOTER */}
//       <footer
//         style={{
//           backgroundColor: "#1f4d35",
//           color: "#fff",
//           padding: "18px 15px",
//           textAlign: "center",
//           fontFamily: "Arial, sans-serif",
//           fontSize: "14px",
//           lineHeight: 1.6,
//           width: "100%",
//           boxSizing: "border-box",
//           borderTop: "2px solid #ffc107",
//         }}
//       >
//         <p
//           style={{
//             fontSize: "16px",
//             margin: 0,
//             letterSpacing: "0.5px",
//           }}
//         >
//           © {new Date().getFullYear()} All Rights Reserved by{" "}
//           <a
//             href="https://sarojgreens.com"
//             style={{
//               color: "#ffc107",
//               textDecoration: "none",
//               fontWeight: "bold",
//             }}
//           >
//             Saroj Greens
//           </a>
//         </p>
//       </footer>
//     </div>
//   );
// };

// export default Footer;