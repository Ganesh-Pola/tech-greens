// src/components/Services.js
import React, { useState } from "react";

import Carrots from "./Images/Carrots.png";
import Sunflower from "./Images/Sunflower.png";
import Harvest from "./Images/Harvest.png";

const ServiceCard = ({ image, title }) => {
  const [hover, setHover] = useState(false);

  const boxStyle = {
    background: "#fff",
    borderRadius: "16px",
    overflow: "hidden",
    textAlign: "center",
    maxWidth: "370px",
    cursor: "pointer",
    transform: hover ? "scale(1.05)" : "scale(1)",
    boxShadow: hover
      ? "0 12px 24px rgba(0,0,0,0.2)"
      : "0 6px 14px rgba(0,0,0,0.08)",
    transition: "transform 0.4s ease, box-shadow 0.4s ease",
    animation: hover ? "floatCard 1s ease-in-out infinite alternate" : "none",
    width: "100%", // ensures responsiveness
  };

  const imgStyle = {
    width: "100%",
    height: "280px",
    objectFit: "cover",
    borderRadius: "16px 16px 0 0",
    transition: "transform 0.6s ease, filter 0.6s ease",
    transform: hover ? "scale(1.08)" : "scale(1)",
    filter: hover ? "blur(0px)" : "blur(3px)",
  };

  const contentStyle = {
    background: "#fff",
    padding: "20px",
    borderRadius: "0 0 16px 16px",
  };

  const headingStyle = {
    fontSize: "20px",
    fontWeight: "700",
    color: "#135f2a",
    margin: "0",
    letterSpacing: "0.5px",
  };

  return (
    <div
      style={boxStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={image} alt={title} style={imgStyle} />
      <div style={contentStyle}>
        <h3 style={headingStyle}>{title}</h3>
      </div>
    </div>
  );
};

const Services = () => {
  const sectionStyle = {
    backgroundColor: "#f5c45b",
    padding: "80px 20px",
    position: "relative",
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const rowStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    flexWrap: "wrap",
  };

  const colStyle = {
    flex: "1 1 300px", // min width 300px for each card
    display: "flex",
    justifyContent: "center",
  };

  return (
    <section style={sectionStyle}>
      {/* Keyframes for floating effect */}
      <style>
        {`
          @keyframes floatCard {
            0% { transform: scale(1.05) translateY(0px); }
            100% { transform: scale(1.05) translateY(-10px); }
          }
        `}
      </style>

      <div style={containerStyle}>
        <div style={rowStyle}>
          <div style={colStyle}>
            <ServiceCard
              image={Carrots}
              title="Agriculture Leader"
            />
          </div>
          <div style={colStyle}>
            <ServiceCard
              image={Sunflower}
              title="Quality Standards"
            />
          </div>
          <div style={colStyle}>
            <ServiceCard
              image={Harvest}
              title="Organic Services"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;


















































//1
// import React, { useState } from "react";

// const ServiceCard = ({ image, title }) => {
//   const [hover, setHover] = useState(false);

//   const boxStyle = {
//     background: "#fff",
//     borderRadius: "16px",
//     overflow: "hidden",
//     textAlign: "center",
//     maxWidth: "370px",
//     cursor: "pointer",
//     transform: hover ? "scale(1.05)" : "scale(1)",
//     boxShadow: hover
//       ? "0 12px 24px rgba(0,0,0,0.2)"
//       : "0 6px 14px rgba(0,0,0,0.08)",
//     transition: "transform 0.4s ease, box-shadow 0.4s ease",
//     animation: hover ? "floatCard 1s ease-in-out infinite alternate" : "none",
//   };

//   const imgStyle = {
//     width: "100%",
//     height: "280px",
//     objectFit: "cover",
//     borderRadius: "16px 16px 0 0",
//     transition: "transform 0.6s ease, filter 0.6s ease",
//     transform: hover ? "scale(1.08)" : "scale(1)",
//     filter: hover ? "blur(0px)" : "blur(3px)", // <<< key change
//   };

//   const contentStyle = {
//     background: "#fff",
//     padding: "20px",
//     borderRadius: "0 0 16px 16px",
//   };

//   const headingStyle = {
//     fontSize: "20px",
//     fontWeight: "700",
//     color: "#135f2a",
//     margin: "0",
//     letterSpacing: "0.5px",
//   };

//   return (
//     <div
//       style={boxStyle}
//       onMouseEnter={() => setHover(true)}
//       onMouseLeave={() => setHover(false)}
//     >
//       <img src={image} alt={title} style={imgStyle} />
//       <div style={contentStyle}>
//         <h3 style={headingStyle}>{title}</h3>
//       </div>
//     </div>
//   );
// };

// const Services = () => {
//   const sectionStyle = {
//     backgroundColor: "#f5c45b",
//     padding: "80px 0",
//     position: "relative",
//   };

//   const containerStyle = {
//     maxWidth: "1200px",
//     margin: "0 auto",
//   };

//   const rowStyle = {
//     display: "flex",
//     justifyContent: "center",
//     gap: "40px",
//     flexWrap: "wrap",
//   };

//   const colStyle = {
//     flex: "1 1 30%",
//     display: "flex",
//     justifyContent: "center",
//   };

//   return (
//     <section style={sectionStyle}>
//       {/* Keyframes for floating effect */}
//       <style>
//         {`
//           @keyframes floatCard {
//             0% { transform: scale(1.05) translateY(0px); }
//             100% { transform: scale(1.05) translateY(-10px); }
//           }
//         `}
//       </style>

//       <div style={containerStyle}>
//         <div style={rowStyle}>
//           <div style={colStyle}>
//             <ServiceCard
//               image="https://res.cloudinary.com/diimorwbz/image/upload/v1756359056/Carrots_cs8prz.avif"
//               title="Agriculture Leader"
//             />
//           </div>
//           <div style={colStyle}>
//             <ServiceCard
//               image="https://res.cloudinary.com/diimorwbz/image/upload/v1756359078/Sunflower_s1ndke.webp"
//               title="Quality Standards"
//             />
//           </div>
//           <div style={colStyle}>
//             <ServiceCard
//               image="https://res.cloudinary.com/diimorwbz/image/upload/v1756359092/Harvest_qtcza9.png"
//               title="Organic Services"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;












































