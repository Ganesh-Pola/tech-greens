// src/components/MainSlider.js
import React, { useRef, useEffect, useState } from "react"; 

import W1 from "./Images/WallPaper1.png";
import W2 from "./Images/WallPaper2.png";

const MainSlider = () => {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const intervalRef = useRef(null);

  const slides = [
    {
      tagline: "Welcome to Saroj Greens",
      title: "Hydroponics",
      text: "It is a method of growing plants without soil, using nutrient-rich water solutions.",
      popup: {
        heading: "Hydroponics Explained",
        content:
          "Hydroponics allows plants to grow faster using nutrient-rich water, saving space and water. Ideal for sustainable and urban farming.",
      },
      image: W1,
      textColor: "#222222",
    },
    {
      tagline: "Welcome to Agriculture Farm",
      title: "Agriculture & Eco Farming",
      text: "Our farms focus on organic practices to cultivate healthy crops and livestock.",
      popup: {
        heading: "Eco Farming Practices",
        content:
          "We promote organic and sustainable agriculture, ensuring soil health, water conservation, and nutritious produce for a better environment.",
      },
      image: W2,
      textColor: "#ffffff",
    },
  ];

  const startCarousel = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
      const slider = sliderRef.current;
      const slideWidth = slider.scrollWidth / slides.length;
      slider.scrollTo({
        left: ((activeIndex + 1) % slides.length) * slideWidth,
        behavior: "smooth",
      });
    }, 5000);
  };

  const stopCarousel = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startCarousel();
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    showPopup ? stopCarousel() : startCarousel();
  }, [showPopup]);

  const renderAnimatedText = (text, color) =>
    text.split("").map((char, i) => (
      <span
        key={i}
        style={{
          display: "inline-block",
          opacity: 0,
          transform: "translateY(-20px)",
          animation: `fadeInUp 0.5s forwards`,
          animationDelay: `${i * 0.05}s`,
          color: color,
        }}
      >
        {char}
      </span>
    ));

  return (
    <section
      id="home"
      className="main-slider"
      style={{ position: "relative", width: "100%", overflow: "hidden" }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100px",
          backgroundColor: "#ffffff",
          zIndex: 0,
        }}
      ></div>

      <div
        ref={sliderRef}
        className="slider-container"
        style={{
          display: "flex",
          overflowX: "hidden",
          scrollSnapType: "x mandatory",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${activeIndex === index ? "active" : ""}`}
            style={{
              flex: "0 0 100%",
              scrollSnapAlign: "start",
              position: "relative",
              height: "600px",
              overflow: "hidden",
            }}
          >
            {/* Top SVG Wave */}
            <svg
              viewBox="0 0 1440 150"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100px",
                zIndex: 2,
              }}
              preserveAspectRatio="none"
            >
              <path
                d="M0,80 C360,0 1080,160 1440,80 L1440,0 L0,0 Z"
                fill="#ffffff"
              />
            </svg>

            {/* Slider Image */}
            <div
              className="image-layer"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100%",
                width: "100%",
                position: "relative",
                animation: "zoomParallax 10s ease-in-out infinite alternate",
                zIndex: 1,
              }}
            />

            {/* Text Container */}
            <div
              className="container"
              style={{
                position: "absolute",
                top: "30%",
                left: "50%",
                transform: "translateX(-50%)",
                width: "100%",
                maxWidth: "800px",
                textAlign: "left",
                color: slide.textColor,
                transition: "all 1s ease",
                opacity: activeIndex === index ? 1 : 0,
                zIndex: 3,
              }}
            >
              <span
                className="tagline"
                style={{
                  fontSize: "24px",
                  display: "block",
                  marginBottom: "10px",
                  letterSpacing: "4px",
                  wordSpacing: "12px",
                  lineHeight: 1.2,
                }}
              >
                {renderAnimatedText(slide.tagline, slide.textColor)}
              </span>
              <h2 style={{ fontSize: "42px", margin: "10px 0", lineHeight: 1.2 }}>
                {renderAnimatedText(slide.title, slide.textColor)}
              </h2>
              {slide.text && (
                <p style={{ fontSize: "16px", margin: "10px 0", color: slide.textColor }}>
                  {slide.text}
                </p>
              )}

              {/* Discover More Button */}
              <a
                href="/#"
                className="thm-btn"
                onMouseEnter={() => setShowPopup(true)}
                onMouseLeave={() => setShowPopup(false)}
                style={{
                  display: "inline-block",
                  padding: "12px 24px",
                  background: "#FFA500",
                  color: "#fff",
                  textDecoration: "none",
                  fontWeight: "bold",
                  borderRadius: "8px",
                  transition: "all 0.3s ease",
                  marginTop: "15px",
                  position: "relative",
                }}
              >
                Discover More

                {/* Popup Card */}
                {showPopup && activeIndex === index && (
                  <div
                    style={{
                      position: "absolute",
                      top: "150%",
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "#fff",
                      color: "#333",
                      padding: "30px",
                      borderRadius: "15px",
                      boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
                      width: "800px",
                      textAlign: "center",
                      zIndex: 10,
                      border: "2px solid #FFA500",
                      animation: "fadeInUp 0.5s ease forwards",
                    }}
                  >
                    <h4
                      style={{
                        margin: "0 0 15px 0",
                        color: "#071C1F",
                        fontSize: "24px",
                        fontWeight: "bold",
                      }}
                    >
                      {slide.popup.heading}
                    </h4>
                    <p
                      style={{
                        fontSize: "16px",
                        color: "#555",
                        lineHeight: "1.6",
                        margin: 0,
                      }}
                    >
                      {slide.popup.content}
                    </p>
                  </div>
                )}
              </a>
            </div>

            {/* Bottom Orange Wave */}
            <svg
              viewBox="0 0 1440 150"
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "100px",
                zIndex: 2,
              }}
              preserveAspectRatio="none"
            >
              <path
                d="M0,80 C360,160 1080,0 1440,80 L1440,150 L0,150 Z"
                fill="#FFA500"
              />
            </svg>
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes zoomParallax {
            0% { transform: scale(1) translateX(0); }
            25% { transform: scale(1.05) translateX(-10px); }
            50% { transform: scale(1.1) translateX(0); }
            75% { transform: scale(1.05) translateX(10px); }
            100% { transform: scale(1) translateX(0); }
          }

          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </section>
  );
};

export default MainSlider;




































//4

// // src/components/MainSlider.js
// import React, { useRef, useEffect, useState } from "react";

// const MainSlider = () => {
//   const sliderRef = useRef(null);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [showPopup, setShowPopup] = useState(false);
//   const intervalRef = useRef(null); // store interval ID

//   const slides = [
//     {
//       tagline: "Welcome to Saroj Greens",
//       title: "Hydroponics",
//       text: "It is a method of growing plants without soil, using nutrient-rich water solutions.",
//       image: "https://res.cloudinary.com/diimorwbz/image/upload/v1756220876/saroj1_y5o5xp.png",
//       textColor: "#222222",
//     },
//     {
//       tagline: "Welcome to Agriculture Farm",
//       title: "Agriculture & Eco Farming",
//       text: "",
//       image: "https://res.cloudinary.com/diimorwbz/image/upload/v1756220893/saroj2_u1on1i.png",
//       textColor: "#ffffff",
//     },
//   ];

//   // Function to start the carousel
//   const startCarousel = () => {
//     if (intervalRef.current) clearInterval(intervalRef.current);
//     intervalRef.current = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % slides.length);
//       const slider = sliderRef.current;
//       const slideWidth = slider.scrollWidth / slides.length;
//       slider.scrollTo({
//         left: ((activeIndex + 1) % slides.length) * slideWidth,
//         behavior: "smooth",
//       });
//     }, 5000);
//   };

//   // Function to stop the carousel
//   const stopCarousel = () => {
//     if (intervalRef.current) clearInterval(intervalRef.current);
//   };

//   // Start carousel initially
//   useEffect(() => {
//     startCarousel();
//     return () => clearInterval(intervalRef.current);
//   }, []);

//   // Pause/resume carousel based on popup state
//   useEffect(() => {
//     if (showPopup) stopCarousel();
//     else startCarousel();
//   }, [showPopup]);

//   const renderAnimatedText = (text, color) =>
//     text.split("").map((char, i) => (
//       <span
//         key={i}
//         style={{
//           display: "inline-block",
//           opacity: 0,
//           transform: "translateY(-20px)",
//           animation: `fadeInUp 0.5s forwards`,
//           animationDelay: `${i * 0.05}s`,
//           color: color,
//         }}
//       >
//         {char}
//       </span>
//     ));

//   return (
//     <section
//       id="home"
//       className="main-slider"
//       style={{ position: "relative", width: "100%", overflow: "hidden" }}
//     >
//       {/* Top Background Layer */}
//       <div
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100px",
//           backgroundColor: "#ffffff",
//           zIndex: 0,
//         }}
//       ></div>

//       <div
//         ref={sliderRef}
//         className="slider-container"
//         style={{
//           display: "flex",
//           overflowX: "hidden",
//           scrollSnapType: "x mandatory",
//           width: "100%",
//           position: "relative",
//           zIndex: 1,
//         }}
//       >
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`slide ${activeIndex === index ? "active" : ""}`}
//             style={{
//               flex: "0 0 100%",
//               scrollSnapAlign: "start",
//               position: "relative",
//               height: "600px",
//               overflow: "hidden",
//             }}
//           >
//             {/* Top SVG Wave */}
//             <svg
//               viewBox="0 0 1440 150"
//               style={{
//                 position: "absolute",
//                 top: 0,
//                 left: 0,
//                 width: "100%",
//                 height: "100px",
//                 zIndex: 2,
//               }}
//               preserveAspectRatio="none"
//             >
//               <path
//                 d="M0,80 C360,0 1080,160 1440,80 L1440,0 L0,0 Z"
//                 fill="#ffffff"
//               />
//             </svg>

//             {/* Slider Image */}
//             <div
//               className="image-layer"
//               style={{
//                 backgroundImage: `url(${slide.image})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 height: "100%",
//                 width: "100%",
//                 position: "relative",
//                 animation: "zoomParallax 10s ease-in-out infinite alternate",
//                 zIndex: 1,
//               }}
//             />

//             {/* Text Container */}
//             <div
//               className="container"
//               style={{
//                 position: "absolute",
//                 top: "30%",
//                 left: "50%",
//                 transform: "translateX(-50%)",
//                 width: "100%",
//                 maxWidth: "800px",
//                 textAlign: "left",
//                 color: slide.textColor,
//                 transition: "all 1s ease",
//                 opacity: activeIndex === index ? 1 : 0,
//                 zIndex: 3,
//               }}
//             >
//               <span
//                 className="tagline"
//                 style={{
//                   fontSize: "24px",
//                   display: "block",
//                   marginBottom: "10px",
//                   letterSpacing: "4px",
//                   wordSpacing: "12px",
//                   lineHeight: 1.2,
//                 }}
//               >
//                 {renderAnimatedText(slide.tagline, slide.textColor)}
//               </span>
//               <h2 style={{ fontSize: "42px", margin: "10px 0", lineHeight: 1.2 }}>
//                 {renderAnimatedText(slide.title, slide.textColor)}
//               </h2>
//               {slide.text && (
//                 <p style={{ fontSize: "16px", margin: "10px 0", color: slide.textColor }}>
//                   {slide.text}
//                 </p>
//               )}
//               <a
//                 href="/#"
//                 className="thm-btn"
//                 onMouseEnter={() => setShowPopup(true)}
//                 onMouseLeave={() => setShowPopup(false)}
//                 style={{
//                   display: "inline-block",
//                   padding: "12px 24px",
//                   background: "#FFA500",
//                   color: "#fff",
//                   textDecoration: "none",
//                   fontWeight: "bold",
//                   borderRadius: "8px",
//                   transition: "all 0.3s ease",
//                   marginTop: "15px",
//                   position: "relative",
//                 }}
//               >
//                 Discover More

//                 {/* Popup Card */}
//                 {showPopup && (
//                   <div
//                     style={{
//                       position: "absolute",
//                       top: "150%",
//                       left: "50%",
//                       transform: "translateX(-50%)",
//                       background: "#fff",
//                       color: "#333",
//                       padding: "20px",
//                       borderRadius: "10px",
//                       boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
//                       width: "750px",
//                       textAlign: "center",
//                       zIndex: 10,
//                       border: "2px solid #FFA500",
//                       animation: "fadeInUp 0.5s ease forwards",
//                     }}
//                   >
//                     <h4
//                       style={{
//                         margin: "0 0 15px 0",
//                         color: "#071C1F",
//                         fontSize: "22px",
//                         fontWeight: "bold",
//                       }}
//                     >
//                       More About Us
//                     </h4>
//                     <p
//                       style={{
//                         fontSize: "16px",
//                         color: "#555",
//                         lineHeight: "1.6",
//                         margin: 0,
//                       }}
//                     >
//                       We care about sustainable agriculture growth, ensuring
//                       healthy produce and eco-friendly farming practices.
//                     </p>
//                   </div>
//                 )}
//               </a>
//             </div>

//             {/* Bottom Orange Wave */}
//             <svg
//               viewBox="0 0 1440 150"
//               style={{
//                 position: "absolute",
//                 bottom: 0,
//                 left: 0,
//                 width: "100%",
//                 height: "100px",
//                 zIndex: 2,
//               }}
//               preserveAspectRatio="none"
//             >
//               <path
//                 d="M0,80 C360,160 1080,0 1440,80 L1440,150 L0,150 Z"
//                 fill="#FFA500"
//               />
//             </svg>
//           </div>
//         ))}
//       </div>

//       <style>
//         {`
//           @keyframes zoomParallax {
//             0% { transform: scale(1) translateX(0); }
//             25% { transform: scale(1.05) translateX(-10px); }
//             50% { transform: scale(1.1) translateX(0); }
//             75% { transform: scale(1.05) translateX(10px); }
//             100% { transform: scale(1) translateX(0); }
//           }

//           @keyframes fadeInUp {
//             0% { opacity: 0; transform: translateY(20px); }
//             100% { opacity: 1; transform: translateY(0); }
//           }
//         `}
//       </style>
//     </section>
//   );
// };

// export default MainSlider;






























//3


// // src/components/MainSlider.js
// import React, { useRef, useEffect, useState } from "react";

// const MainSlider = () => {
//   const sliderRef = useRef(null);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [showPopup, setShowPopup] = useState(false);

//   const slides = [
//     {
//       tagline: "Welcome to Saroj Greens",
//       title: "Hydroponics",
//       text: "There are many passages of Lorem Ipsum, but the majority have suffered alteration in some form.",
//       image: "https://res.cloudinary.com/diimorwbz/image/upload/v1756220876/saroj1_y5o5xp.png",
//       textColor: "#222222",
//     },
//     {
//       tagline: "Welcome to Agriculture Farm",
//       title: "Agriculture & Eco Farming",
//       text: "",
//       image: "https://res.cloudinary.com/diimorwbz/image/upload/v1756220893/saroj2_u1on1i.png",
//       textColor: "#ffffff",
//     },
//   ];

//   useEffect(() => {
//     const slider = sliderRef.current;
//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % slides.length);
//       const slideWidth = slider.scrollWidth / slides.length;
//       slider.scrollTo({
//         left: ((activeIndex + 1) % slides.length) * slideWidth,
//         behavior: "smooth",
//       });
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [activeIndex, slides.length]);

//   const renderAnimatedText = (text, color) =>
//     text.split("").map((char, i) => (
//       <span
//         key={i}
//         style={{
//           display: "inline-block",
//           opacity: 0,
//           transform: "translateY(-20px)",
//           animation: `fadeInUp 0.5s forwards`,
//           animationDelay: `${i * 0.05}s`,
//           color: color,
//         }}
//       >
//         {char}
//       </span>
//     ));

//   return (
//     <section
//       id="home"
//       className="main-slider"
//       style={{ position: "relative", width: "100%", overflow: "hidden" }}
//     >
//       {/* Top Background Color Layer */}
//       <div
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100px",
//           backgroundColor: "#ffffff",
//           zIndex: 0,
//         }}
//       ></div>

//       <div
//         ref={sliderRef}
//         className="slider-container"
//         style={{
//           display: "flex",
//           overflowX: "hidden",
//           scrollSnapType: "x mandatory",
//           width: "100%",
//           position: "relative",
//           zIndex: 1,
//         }}
//       >
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`slide ${activeIndex === index ? "active" : ""}`}
//             style={{
//               flex: "0 0 100%",
//               scrollSnapAlign: "start",
//               position: "relative",
//               height: "600px",
//               overflow: "hidden",
//             }}
//           >
//             {/* Top SVG Wave */}
//             <svg
//               viewBox="0 0 1440 150"
//               style={{
//                 position: "absolute",
//                 top: 0,
//                 left: 0,
//                 width: "100%",
//                 height: "100px",
//                 zIndex: 2,
//               }}
//               preserveAspectRatio="none"
//             >
//               <path
//                 d="M0,80 C360,0 1080,160 1440,80 L1440,0 L0,0 Z"
//                 fill="#ffffff"
//               />
//             </svg>

//             {/* Slider Image */}
//             <div
//               className="image-layer"
//               style={{
//                 backgroundImage: `url(${slide.image})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 height: "100%",
//                 width: "100%",
//                 position: "relative",
//                 animation: "zoomParallax 10s ease-in-out infinite alternate",
//                 zIndex: 1,
//               }}
//             />

//             {/* Text Container */}
//             <div
//               className="container"
//               style={{
//                 position: "absolute",
//                 top: "30%",
//                 left: "50%",
//                 transform: "translateX(-50%)",
//                 width: "100%",
//                 maxWidth: "800px",
//                 textAlign: "left",
//                 color: slide.textColor,
//                 transition: "all 1s ease",
//                 opacity: activeIndex === index ? 1 : 0,
//                 zIndex: 3,
//               }}
//             >
//               <span
//                 className="tagline"
//                 style={{
//                   fontSize: "24px",
//                   display: "block",
//                   marginBottom: "10px",
//                   letterSpacing: "4px",
//                   wordSpacing: "12px",
//                   lineHeight: 1.2,
//                 }}
//               >
//                 {renderAnimatedText(slide.tagline, slide.textColor)}
//               </span>
//               <h2 style={{ fontSize: "42px", margin: "10px 0", lineHeight: 1.2 }}>
//                 {renderAnimatedText(slide.title, slide.textColor)}
//               </h2>
//               {slide.text && (
//                 <p style={{ fontSize: "16px", margin: "10px 0", color: slide.textColor }}>
//                   {slide.text}
//                 </p>
//               )}
//               <a
//                 href="/#"
//                 className="thm-btn"
//                 onMouseEnter={() => setShowPopup(true)}
//                 onMouseLeave={() => setShowPopup(false)}
//                 style={{
//                   display: "inline-block",
//                   padding: "10px 20px",
//                   background: "#FFA500",
//                   color: "#fff",
//                   textDecoration: "none",
//                   fontWeight: "bold",
//                   borderRadius: "6px",
//                   transition: "all 0.3s ease",
//                   marginTop: "15px",
//                   position: "relative",
//                 }}
//               >
//                 Discover More
//                 {/* Popup Card */}
//                 {showPopup && (
//                   <div
//                     style={{
//                       position: "absolute",
//                       top: "150%",
//                       left: "50%",
//                       transform: "translateX(-50%)",
//                       background: "#fff",
//                       color: "#333",
//                       padding: "20px",
//                       borderRadius: "10px",
//                       boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
//                       width: "750px",
//                       textAlign: "center",
//                       zIndex: 10,
//                       border: "2px solid #FFA500",
//                       animation: "fadeInUp 0.5s ease forwards",
//                     }}
//                   >
//                     <h4 style={{ margin: "0 0 10px 0", color: "#071C1F" }}>
//                       More About Us
//                     </h4>
//                     <p style={{ fontSize: "14px", color: "#555", margin: 0 }}>
//                       We care about sustainable agriculture growth, ensuring
//                       healthy produce and eco-friendly farming practices.
//                     </p>
//                   </div>
//                 )}
//               </a>
//             </div>

//             {/* Bottom Orange Wave */}
//             <svg
//               viewBox="0 0 1440 150"
//               style={{
//                 position: "absolute",
//                 bottom: 0,
//                 left: 0,
//                 width: "100%",
//                 height: "100px",
//                 zIndex: 2,
//               }}
//               preserveAspectRatio="none"
//             >
//               <path
//                 d="M0,80 C360,160 1080,0 1440,80 L1440,150 L0,150 Z"
//                 fill="#FFA500"
//               />
//             </svg>
//           </div>
//         ))}
//       </div>

//       <style>
//         {`
//           @keyframes zoomParallax {
//             0% { transform: scale(1) translateX(0); }
//             25% { transform: scale(1.05) translateX(-10px); }
//             50% { transform: scale(1.1) translateX(0); }
//             75% { transform: scale(1.05) translateX(10px); }
//             100% { transform: scale(1) translateX(0); }
//           }

//           @keyframes fadeInUp {
//             0% { opacity: 0; transform: translateY(20px); }
//             100% { opacity: 1; transform: translateY(0); }
//           }
//         `}
//       </style>
//     </section>
//   );
// };

// export default MainSlider;






























//2
// // src/components/MainSlider.js
// import React, { useRef, useEffect, useState } from "react";

// const MainSlider = () => {
//   const sliderRef = useRef(null);
//   const [activeIndex, setActiveIndex] = useState(0);

//   const slides = [
//     {
//       tagline: "Welcome to Saroj Greens",
//       title: "Hydroponics",
//       text: "There are many passages of Lorem Ipsum, but the majority have suffered alteration in some form.",
//       image: "https://res.cloudinary.com/diimorwbz/image/upload/v1756220876/saroj1_y5o5xp.png",
//       textColor: "#222222",
//     },
//     {
//       tagline: "Welcome to Agriculture Farm",
//       title: "Agriculture & Eco Farming",
//       text: "",
//       image: "https://res.cloudinary.com/diimorwbz/image/upload/v1756220893/saroj2_u1on1i.png",
//       textColor: "#ffffff",
//     },
//   ];

//   useEffect(() => {
//     const slider = sliderRef.current;
//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % slides.length);
//       const slideWidth = slider.scrollWidth / slides.length;
//       slider.scrollTo({
//         left: ((activeIndex + 1) % slides.length) * slideWidth,
//         behavior: "smooth",
//       });
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [activeIndex, slides.length]);

//   const renderAnimatedText = (text, color) =>
//     text.split("").map((char, i) => (
//       <span
//         key={i}
//         style={{
//           display: "inline-block",
//           opacity: 0,
//           transform: "translateY(-20px)",
//           animation: `fadeInUp 0.5s forwards`,
//           animationDelay: `${i * 0.05}s`,
//           color: color,
//         }}
//       >
//         {char}
//       </span>
//     ));

//   return (
//     <section 
//       id="home"
//       className="main-slider"
//       style={{ position: "relative", width: "100%", overflow: "hidden" }}
//     >
//       {/* Top Background Color Layer */}
//       <div
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100px",
//           backgroundColor: "#ffffff",
//           zIndex: 0,
//         }}
//       ></div>

//       <div
//         ref={sliderRef}
//         className="slider-container"
//         style={{
//           display: "flex",
//           overflowX: "hidden",
//           scrollSnapType: "x mandatory",
//           width: "100%",
//           position: "relative",
//           zIndex: 1,
//         }}
//       >
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`slide ${activeIndex === index ? "active" : ""}`}
//             style={{
//               flex: "0 0 100%",
//               scrollSnapAlign: "start",
//               position: "relative",
//               height: "600px",
//               overflow: "hidden",
//             }}
//           >
//             {/* Top SVG Wave */}
//             <svg
//               viewBox="0 0 1440 150"
//               style={{
//                 position: "absolute",
//                 top: 0,
//                 left: 0,
//                 width: "100%",
//                 height: "100px",
//                 zIndex: 2,
//               }}
//               preserveAspectRatio="none"
//             >
//               <path
//                 d="M0,80 C360,0 1080,160 1440,80 L1440,0 L0,0 Z"
//                 fill="#ffffff"
//               />
//             </svg>

//             {/* Slider Image */}
//             <div
//               className="image-layer"
//               style={{
//                 backgroundImage: `url(${slide.image})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 height: "100%",
//                 width: "100%",
//                 position: "relative",
//                 animation: "zoomParallax 10s ease-in-out infinite alternate",
//                 zIndex: 1,
//               }}
//             />

//             {/* Text Container */}
//             <div
//               className="container"
//               style={{
//                 position: "absolute",
//                 top: "30%",
//                 left: "50%",
//                 transform: "translateX(-50%)",
//                 width: "100%",
//                 maxWidth: "800px",
//                 textAlign: "left",
//                 color: slide.textColor,
//                 transition: "all 1s ease",
//                 opacity: activeIndex === index ? 1 : 0,
//                 zIndex: 3,
//               }}
//             >
//               <span
//                 className="tagline"
//                 style={{
//                   fontSize: "24px",
//                   display: "block",
//                   marginBottom: "10px",
//                   letterSpacing: "4px",
//                   wordSpacing: "12px",
//                   lineHeight: 1.2,
//                 }}
//               >
//                 {renderAnimatedText(slide.tagline, slide.textColor)}
//               </span>
//               <h2 style={{ fontSize: "42px", margin: "10px 0", lineHeight: 1.2 }}>
//                 {renderAnimatedText(slide.title, slide.textColor)}
//               </h2>
//               {slide.text && (
//                 <p style={{ fontSize: "16px", margin: "10px 0", color: slide.textColor }}>
//                   {slide.text}
//                 </p>
//               )}
//               <a
//                 href="/#"
//                 className="thm-btn"
//                 style={{
//                   display: "inline-block",
//                   padding: "10px 20px",
//                   background: "#FFA500",
//                   color: "#fff",
//                   textDecoration: "none",
//                   fontWeight: "bold",
//                   borderRadius: "6px",
//                   transition: "all 0.3s ease",
//                   marginTop: "15px",
//                 }}
//               >
//                 Discover More
//               </a>
//             </div>

//             {/* Bottom Orange Wave */}
//             <svg
//               viewBox="0 0 1440 150"
//               style={{
//                 position: "absolute",
//                 bottom: 0,
//                 left: 0,
//                 width: "100%",
//                 height: "100px",
//                 zIndex: 2,
//               }}
//               preserveAspectRatio="none"
//             >
//               <path
//                 d="M0,80 C360,160 1080,0 1440,80 L1440,150 L0,150 Z"
//                 fill="#FFA500"
//               />
//             </svg>
//           </div>
//         ))}
//       </div>

//       <style>
//         {`
//           @keyframes zoomParallax {
//             0% { transform: scale(1) translateX(0); }
//             25% { transform: scale(1.05) translateX(-10px); }
//             50% { transform: scale(1.1) translateX(0); }
//             75% { transform: scale(1.05) translateX(10px); }
//             100% { transform: scale(1) translateX(0); }
//           }

//           @keyframes fadeInUp {
//             0% { opacity: 0; transform: translateY(20px); }
//             100% { opacity: 1; transform: translateY(0); }
//           }

//           @media (max-width: 992px) {
//             .main-slider .container h2 { font-size: 36px; }
//             .main-slider .container .tagline { font-size: 20px; }
//           }

//           @media (max-width: 768px) {
//             .main-slider { height: 450px; }
//             .main-slider .container h2 { font-size: 28px; }
//             .main-slider .container .tagline { font-size: 18px; }
//           }

//           @media (max-width: 576px) {
//             .main-slider { height: 350px; }
//             .main-slider .container h2 { font-size: 22px; }
//             .main-slider .container .tagline { font-size: 16px; }
//           }
//         `}
//       </style>
//     </section>
//   );
// };

// export default MainSlider;




































//1
// // src/components/MainSlider.js
// import React, { useRef, useEffect, useState } from "react";

// const MainSlider = () => {
//   const sliderRef = useRef(null);
//   const [activeIndex, setActiveIndex] = useState(0);

//   const slides = [
//     {
//       tagline: "Welcome to Saroj Greens",
//       title: "Hydroponics",
//       text: "There are many passages of Lorem Ipsum, but the majority have suffered alteration in some form.",
//       image: "https://res.cloudinary.com/diimorwbz/image/upload/v1756220893/saroj2_u1on1i.png",
//       textColor: "#ffffff" // white text
//     },
//     {
//       tagline: "Welcome to Agriculture Farm",
//       title: "Agriculture & Eco Farming",
//       text: "",
//       image: "https://res.cloudinary.com/diimorwbz/image/upload/v1756220876/saroj1_y5o5xp.png",
//       textColor: "#222222" // dark text for better contrast
//     }
//   ];

//   useEffect(() => {
//     const slider = sliderRef.current;
//     const interval = setInterval(() => {
//       setActiveIndex(prev => (prev + 1) % slides.length);
//       const slideWidth = slider.scrollWidth / slides.length;
//       slider.scrollTo({
//         left: ((activeIndex + 1) % slides.length) * slideWidth,
//         behavior: "smooth"
//       });
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [activeIndex, slides.length]);

//   const renderAnimatedText = (text, color) =>
//     text.split("").map((char, i) => (
//       <span
//         key={i}
//         style={{
//           display: "inline-block",
//           opacity: 0,
//           transform: "translateY(-20px)",
//           animation: `fadeInUp 0.5s forwards`,
//           animationDelay: `${i * 0.05}s`,
//           color: color
//         }}
//       >
//         {char}
//       </span>
//     ));

//   return (
//     <section className="main-slider" style={{ position: "relative", width: "100%" }}>
//       {/* Top Background Color Layer */}
//       <div
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100px",
//           backgroundColor: "#ffffff",
//           zIndex: 0
//         }}
//       ></div>

//       <div
//         ref={sliderRef}
//         className="slider-container"
//         style={{
//           display: "flex",
//           overflowX: "hidden",
//           scrollSnapType: "x mandatory",
//           width: "100%",
//           position: "relative",
//           zIndex: 1
//         }}
//       >
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`slide ${activeIndex === index ? "active" : ""}`}
//             style={{
//               flex: "0 0 100%",
//               scrollSnapAlign: "start",
//               position: "relative",
//               height: "600px",
//               overflow: "hidden",
//             }}
//           >
//             {/* Top SVG Wave */}
//             <svg
//               viewBox="0 0 1440 150"
//               style={{
//                 position: "absolute",
//                 top: 0,
//                 left: 0,
//                 width: "100%",
//                 height: "100px",
//                 zIndex: 2
//               }}
//               preserveAspectRatio="none"
//             >
//               <path
//                 d="M0,80 C360,0 1080,160 1440,80 L1440,0 L0,0 Z"
//                 fill="#ffffff"
//               />
//             </svg>

//             {/* Slider Image */}
//             <div
//               className="image-layer"
//               style={{
//                 backgroundImage: `url(${slide.image})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 height: "100%",
//                 width: "100%",
//                 position: "relative",
//                 animation: "zoomParallax 10s ease-in-out infinite alternate",
//                 zIndex: 1
//               }}
//             />

//             {/* Text Container */}
//             <div
//               className="container"
//               style={{
//                 position: "absolute",
//                 top: "30%",
//                 left: "10%",
//                 color: slide.textColor,
//                 transition: "all 1s ease",
//                 opacity: activeIndex === index ? 1 : 0,
//                 transform: activeIndex === index ? "translateY(0)" : "translateY(20px)",
//                 zIndex: 3
//               }}
//             >
//               <span className="tagline" style={{ fontSize: "24px", display: "block", marginBottom: "10px", letterSpacing:"4px", wordSpacing: "12px" }}>
//                 {renderAnimatedText(slide.tagline, slide.textColor)}
//               </span>
//               <h2 style={{ fontSize: "48px", margin: "10px 0" }}>
//                 {renderAnimatedText(slide.title, slide.textColor)}
//               </h2>
//               {slide.text && <p style={{ fontSize: "18px", margin: "10px 0", color: slide.textColor }}>{slide.text}</p>}
//               <a
//                 href="/#"
//                 className="thm-btn"
//                 style={{
//                   display: "inline-block",
//                   padding: "10px 20px",
//                   background: "#FFA500",
//                   color: "#fff",
//                   textDecoration: "none",
//                   fontWeight: "bold",
//                   borderRadius: "6px",
//                   transition: "all 0.3s ease",
//                   marginTop: "15px"
//                 }}
//               >
//                 Discover More
//               </a>
//             </div>

//             {/* Bottom Orange Wave */}
//             <svg
//               viewBox="0 0 1440 150"
//               style={{
//                 position: "absolute",
//                 bottom: 0,
//                 left: 0,
//                 width: "100%",
//                 height: "100px",
//                 zIndex: 2
//               }}
//               preserveAspectRatio="none"
//             >
//               <path
//                 d="M0,80 C360,160 1080,0 1440,80 L1440,150 L0,150 Z"
//                 fill="#FFA500"
//               />
//             </svg>
//           </div>
//         ))}
//       </div>

//       <style>
//         {`
//           @keyframes zoomParallax {
//             0% { transform: scale(1) translateX(0); }
//             25% { transform: scale(1.05) translateX(-10px); }
//             50% { transform: scale(1.1) translateX(0); }
//             75% { transform: scale(1.05) translateX(10px); }
//             100% { transform: scale(1) translateX(0); }
//           }

//           @keyframes fadeInUp {
//             0% { opacity: 0; transform: translateY(20px); }
//             100% { opacity: 1; transform: translateY(0); }
//           }
//         `}
//       </style>
//     </section>
//   );
// };

// export default MainSlider;


































