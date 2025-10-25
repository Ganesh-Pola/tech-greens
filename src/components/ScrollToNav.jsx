// components/ScrollToNav.js
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToNav = ({ showAfter = 200 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > showAfter);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showAfter]);

  const scrollToNav = () => {
    const nav =
      document.getElementById("navbar") ||
      document.querySelector("header nav") ||
      document.querySelector("nav");

    if (nav) {
      nav.scrollIntoView({ behavior: "smooth", block: "start" });
      try {
        nav.focus?.();
      } catch (e) {}
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      aria-label="Back to top / Nav"
      title="Back to menu"
      onClick={scrollToNav}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        width: "56px",
        height: "56px",
        borderRadius: "50%",
        border: "none",
        backgroundColor: isHover ? "#4b823f" : "#5a9a4d",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: isHover
          ? "0 10px 22px rgba(0,0,0,0.35)"
          : "0 6px 15px rgba(0,0,0,0.25)",
        cursor: "pointer",
        outline: "none",
        zIndex: 1200,
        transition: "opacity 0.4s ease, transform 0.4s ease, background 0.2s",
        fontSize: "20px",

        // 👇 fade + scale effect
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "scale(1)" : "scale(0.85)",
        pointerEvents: isVisible ? "auto" : "none", // prevents ghost clicks
      }}
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToNav;

































// // components/ScrollToNav.js
// import React, { useState, useEffect } from "react";
// import { FaArrowUp } from "react-icons/fa";

// const ScrollToNav = ({ showAfter = 200 }) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [isHover, setIsHover] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsVisible(window.scrollY > showAfter);
//     };
//     handleScroll();
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [showAfter]);

//   const scrollToNav = () => {
//     const nav =
//       document.getElementById("navbar") ||
//       document.querySelector("header nav") ||
//       document.querySelector("nav");

//     if (nav) {
//       nav.scrollIntoView({ behavior: "smooth", block: "start" });
//       try {
//         nav.focus?.();
//       } catch (e) {}
//     } else {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }
//   };

//   if (!isVisible) return null;

//   return (
//     <button
//       aria-label="Back to top / Nav"
//       title="Back to menu"
//       onClick={scrollToNav}
//       onMouseEnter={() => setIsHover(true)}
//       onMouseLeave={() => setIsHover(false)}
//       style={{
//         position: "fixed",
//         bottom: "30px",
//         right: "30px",
//         width: "56px",
//         height: "56px",
//         borderRadius: "50%",
//         border: "none",
//         backgroundColor: isHover ? "#4b823f" : "#5a9a4d",
//         color: "#fff",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         boxShadow: isHover
//           ? "0 10px 22px rgba(0,0,0,0.35)"
//           : "0 6px 15px rgba(0,0,0,0.25)",
//         cursor: "pointer",
//         zIndex: 1200,
//         transition: "all 180ms ease",
//         fontSize: "20px",
//       }}
//     >
//       <FaArrowUp />
//     </button>
//   );
// };

// export default ScrollToNav;
