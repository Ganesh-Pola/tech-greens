import React from "react";
import { GiMilkCarton } from "react-icons/gi"; // Milk + Mixed Fruits icon
import { FaSeedling, FaBoxOpen, FaFish } from "react-icons/fa"; // Other products 

import P1 from "./Images/MilkBottel.jpg";
import P2 from "./Images/LiveStock.png";
import P3 from "./Images/Korameenu.png";
import P4 from "./Images/MixedFruits.jpg";

// --- DUMMY DATA WITH URLS ---
const cardData = [
  {
    image: P1,
    icon: GiMilkCarton,
    title: "Dairy Products",
    text: "Sip the Goodness of Nature with Saroj Greens A2 Milk.",
    url: "https://www.instagram.com/sarojgreens?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D",
  },
  {
    image: P2,
    icon: FaBoxOpen,
    title: "Live Stock",
    text: "Meat & Chicken Straight from Our Farms.",
    url: "/livestock",
  },
  {
    image: P3,
    icon: FaFish,
    title: "Organic Fishes",
    text: "Healthy Living Begins with Saroj Greens Organic Fishes.",
    url: "/organic-fishes",
  },
  {
    image: P4,
    icon: FaSeedling,
    title: "Agricultural Products",
    text: "Nourish Naturally with Saroj Greens Organic Pulses.",
    url: "https://www.instagram.com/sarojgreens?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D",
  },
];

// --- CARD COMPONENT ---
const ProductCard = ({ image, icon: Icon, title, text, url }) => (
  <a
    href={url}
    style={{ textDecoration: "none", color: "inherit" }}
  >
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "15px",
        boxShadow: "0 8px 16px rgba(0,0,0,0.05)",
        width: "100%",
        maxWidth: "250px",
        margin: "10px",
        textAlign: "center",
        position: "relative",
        overflow: "visible",
        transition: "transform 0.3s, box-shadow 0.3s, border-bottom 0.3s",
        cursor: "pointer",
        borderBottom: "5px solid transparent", // initial bottom border
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "translateY(-10px)";
        e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.15)";
        e.currentTarget.style.borderBottom = "5px solid #FFA500"; // change bottom border on hover
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.05)";
        e.currentTarget.style.borderBottom = "5px solid transparent"; // reset bottom border
      }}
    >
      <div style={{ height: "180px" }}>
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderTopLeftRadius: "15px",
            borderTopRightRadius: "15px",
          }}
        />
      </div>

      {/* Icon container with hover effect */}
      <div
        style={{
          width: "90px",
          height: "90px",
          backgroundColor: "#34A853",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: "135px",
          left: "50%",
          transform: "translateX(-50%)",
          border: "5px solid #ffffff",
          transition: "background-color 0.3s, transform 0.3s",
        }}
        onMouseEnter={e => {
          e.currentTarget.style.backgroundColor = "#FFA500"; // icon bg color change
          const icon = e.currentTarget.querySelector("svg");
          if (icon) icon.style.transform = "scale(1.2)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.backgroundColor = "#34A853"; // reset icon bg
          const icon = e.currentTarget.querySelector("svg");
          if (icon) icon.style.transform = "scale(1)";
        }}
      >
        <Icon style={{ color: "white", fontSize: "40px", transition: "transform 0.3s" }} />
      </div>

      <div style={{ padding: "70px 25px 30px 25px" }}>
        <h2
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "#071C1F",
            margin: "0 0 15px 0",
            lineHeight: "1.2",
          }}
        >
          {title.split(" ")[0]} <br /> {title.split(" ").slice(1).join(" ")}
        </h2>
        <p style={{ fontSize: "15px", color: "#6c757d", lineHeight: "1.6", margin: 0 }}>{text}</p>
      </div>
    </div>
  </a>
);

// --- MAIN COMPONENT ---
const WeOffers = () => {
  return (
    <div id="weOffers" style={{ backgroundColor: "#f0f2f5", padding: "50px 20px" }}>
      {/* Section Header */}
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <p
          style={{
            color: "#34A853",
            fontSize: "16px",
            textTransform: "uppercase",
            letterSpacing: "2px",
            margin: "0 0 10px 0",
          }}
        >
          Our Services
        </p>
        <h1
          style={{
            fontSize: "36px",
            color: "#071C1F",
            fontWeight: "bold",
            margin: 0,
            lineHeight: 1.2,
          }}
        >
          What We Are Offering
        </h1>
      </div>

      {/* Cards */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {cardData.map((card, index) => (
          <ProductCard
            key={index}
            image={card.image}
            icon={card.icon}
            title={card.title}
            text={card.text}
            url={card.url}
          />
        ))}
      </div>
    </div>
  );
};

export default WeOffers;













































//2

// import React from "react";
// import { GiMilkCarton} from "react-icons/gi"; // Milk + Mixed Fruits icon
// import { FaSeedling, FaBoxOpen, FaFish} from "react-icons/fa"; // Other products

// // --- DUMMY DATA ---
// const cardData = [
//   {
//     image: "https://res.cloudinary.com/diimorwbz/image/upload/v1756450611/MilkBottel_nakksz.jpg",
//     icon: GiMilkCarton,
//     title: "Dairy Products",
//     text: "Sip the Goodness of Nature with Saroj Greens A2 Milk.", 
//   },
//   {
//     image: "https://res.cloudinary.com/diimorwbz/image/upload/v1756477105/Screenshot_2025-08-29_194752_ctvniv.png",
//     icon: FaBoxOpen,
//     title: "Live Stock",
//     text: "Organic Meat & Chicken You Can Trust, Straight from Our Farms.",
//   },
//   {
//     image: "https://res.cloudinary.com/diimorwbz/image/upload/v1756711185/generated-image_fhlqix.png",
//     icon: FaFish,
//     title: "Organic Fishes",
//     text: "Healthy Living Begins with Saroj Greens Organic Fishes.",
//   },
//   {
//     image: "https://res.cloudinary.com/diimorwbz/image/upload/v1756814756/Mixed_mdt593.jpg",
//     icon: FaSeedling,
//     title: "Agricultural Products",
//     text: "Nourish Naturally with Saroj Greens Organic Pulses.",
//   },
// ];

// // --- CARD COMPONENT ---
// const ProductCard = ({ image, icon: Icon, title, text }) => (
//   <div
//     style={{
//       backgroundColor: "#ffffff",
//       borderRadius: "15px",
//       boxShadow: "0 8px 16px rgba(0,0,0,0.05)",
//       width: "100%",
//       maxWidth: "250px",
//       margin: "10px",
//       textAlign: "center",
//       position: "relative",
//       overflow: "visible",
//       transition: "transform 0.3s, box-shadow 0.3s, border-bottom 0.3s",
//       cursor: "pointer",
//       borderBottom: "5px solid transparent", // initial bottom border
//     }}
//     onMouseEnter={e => {
//       e.currentTarget.style.transform = "translateY(-10px)";
//       e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.15)";
//       e.currentTarget.style.borderBottom = "5px solid #FFA500"; // change bottom border on hover
//     }}
//     onMouseLeave={e => {
//       e.currentTarget.style.transform = "translateY(0)";
//       e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.05)";
//       e.currentTarget.style.borderBottom = "5px solid transparent"; // reset bottom border
//     }}
//   >
//     <div style={{ height: "180px" }}>
//       <img
//         src={image}
//         alt={title}
//         style={{
//           width: "100%",
//           height: "100%",
//           objectFit: "cover",
//           borderTopLeftRadius: "15px",
//           borderTopRightRadius: "15px",
//         }}
//       />
//     </div>

//     {/* Icon container with hover effect */}
//     <div
//       style={{
//         width: "90px",
//         height: "90px",
//         backgroundColor: "#34A853",
//         borderRadius: "50%",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         position: "absolute",
//         top: "135px",
//         left: "50%",
//         transform: "translateX(-50%)",
//         border: "5px solid #ffffff",
//         transition: "background-color 0.3s, transform 0.3s",
//       }}
//       onMouseEnter={e => {
//         e.currentTarget.style.backgroundColor = "#FFA500"; // icon bg color change
//         const icon = e.currentTarget.querySelector("svg");
//         if (icon) icon.style.transform = "scale(1.2)";
//       }}
//       onMouseLeave={e => {
//         e.currentTarget.style.backgroundColor = "#34A853"; // reset icon bg
//         const icon = e.currentTarget.querySelector("svg");
//         if (icon) icon.style.transform = "scale(1)";
//       }}
//     >
//       <Icon style={{ color: "white", fontSize: "40px", transition: "transform 0.3s" }} />
//     </div>

//     <div style={{ padding: "70px 25px 30px 25px" }}>
//       <h2
//         style={{
//           fontSize: "20px",
//           fontWeight: "bold",
//           color: "#071C1F",
//           margin: "0 0 15px 0",
//           lineHeight: "1.2",
//         }}
//       >
//         {title.split(" ")[0]} <br /> {title.split(" ").slice(1).join(" ")}
//       </h2>
//       <p style={{ fontSize: "15px", color: "#6c757d", lineHeight: "1.6", margin: 0 }}>{text}</p>
//     </div>
//   </div>
// );

// // --- MAIN COMPONENT ---
// const WeOffers = () => {
//   return (
//     <div id="weOffers" style={{ backgroundColor: "#f0f2f5", padding: "50px 20px" }}>
//       {/* Section Header */}
//       <div style={{ textAlign: "center", marginBottom: "50px" }}>
//         <p
//           style={{
//             color: "#34A853",
//             fontSize: "16px",
//             textTransform: "uppercase",
//             letterSpacing: "2px",
//             margin: "0 0 10px 0",
//           }}
//         >
//           Our Services
//         </p>
//         <h1
//           style={{
//             fontSize: "36px",
//             color: "#071C1F",
//             fontWeight: "bold",
//             margin: 0,
//             lineHeight: 1.2,
//           }}
//         >
//           What We Are Offering
//         </h1>
//       </div>

//       {/* Cards */}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "flex-start",
//           gap: "20px",
//           flexWrap: "wrap",
//         }}
//       >
//         {cardData.map((card, index) => (
//           <ProductCard
//             key={index}
//             image={card.image}
//             icon={card.icon}
//             title={card.title}
//             text={card.text}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WeOffers;










































//1

// import React from "react";
// import { GiMilkCarton, GiFruitBowl } from "react-icons/gi"; // Milk icon
// import { FaSeedling, FaBoxOpen } from "react-icons/fa"; // Other products

// // --- DUMMY DATA ---
// const cardData = [
//   {
//     image: "https://res.cloudinary.com/diimorwbz/image/upload/v1756450611/MilkBottel_nakksz.jpg",
//     icon: GiMilkCarton,
//     title: "Dairy Products",
//     text: "Sip the Goodness of Nature with Saroj Greens A2 Milk.",
//   },
//   {
//     image: "https://res.cloudinary.com/diimorwbz/image/upload/v1756452333/Pulses_v5au42.jpg",
//     icon: FaSeedling,
//     title: "Organic Products",
//     text: "Nourish Naturally with Saroj Greens Organic Pulses.",
//   },
//   {
//     image: "https://res.cloudinary.com/diimorwbz/image/upload/v1756451246/Fruits_dxccij.jpg",
//     icon: GiFruitBowl,
//     title: "Fresh Fruits",
//     text: "Healthy Living Begins with Saroj Greens Organic Fruits.",
//   },
//   {
//     image: "https://res.cloudinary.com/diimorwbz/image/upload/v1756451092/MaleGoats_zuv85b.jpg",
//     icon: FaBoxOpen,
//     title: "Agricultural Products",
//     text: "Organic Meat You Can Trust, Straight from Our Farms.",
//   },
// ];

// // --- CARD COMPONENT ---
// const ProductCard = ({ image, icon: Icon, title, text }) => (
//   <div
//     style={{
//       backgroundColor: "#ffffff",
//       borderRadius: "15px",
//       boxShadow: "0 8px 16px rgba(0,0,0,0.05)",
//       width: "100%",
//       maxWidth: "250px",
//       margin: "10px",
//       textAlign: "center",
//       position: "relative",
//       overflow: "visible",
//       transition: "transform 0.3s, box-shadow 0.3s",
//       cursor: "pointer",
//     }}
//     onMouseEnter={e => {
//       e.currentTarget.style.transform = "translateY(-10px)";
//       e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.15)";
//     }}
//     onMouseLeave={e => {
//       e.currentTarget.style.transform = "translateY(0)";
//       e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.05)";
//     }}
//   >
//     <div style={{ height: "180px" }}>
//       <img
//         src={image}
//         alt={title}
//         style={{
//           width: "100%",
//           height: "100%",
//           objectFit: "cover",
//           borderTopLeftRadius: "15px",
//           borderTopRightRadius: "15px",
//         }}
//       />
//     </div>

//     {/* Icon container with hover effect */}
//     <div
//       style={{
//         width: "90px",
//         height: "90px",
//         backgroundColor: "#34A853",
//         borderRadius: "50%",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         position: "absolute",
//         top: "135px",
//         left: "50%",
//         transform: "translateX(-50%)",
//         border: "5px solid #ffffff",
//         transition: "background-color 0.3s, transform 0.3s",
//       }}
//       onMouseEnter={e => {
//         e.currentTarget.style.backgroundColor = "#FFA500"; // darker green
//         const icon = e.currentTarget.querySelector("svg");
//         if (icon) icon.style.transform = "scale(1.2)";
//       }}
//       onMouseLeave={e => {
//         e.currentTarget.style.backgroundColor = "#34A853"; // original green
//         const icon = e.currentTarget.querySelector("svg");
//         if (icon) icon.style.transform = "scale(1)";
//       }}
//     >
//       <Icon style={{ color: "white", fontSize: "40px", transition: "transform 0.3s" }} />
//     </div>

//     <div style={{ padding: "70px 25px 30px 25px" }}>
//       <h2
//         style={{
//           fontSize: "20px",
//           fontWeight: "bold",
//           color: "#071C1F",
//           margin: "0 0 15px 0",
//           lineHeight: "1.2",
//         }}
//       >
//         {title.split(" ")[0]} <br /> {title.split(" ").slice(1).join(" ")}
//       </h2>
//       <p style={{ fontSize: "15px", color: "#6c757d", lineHeight: "1.6", margin: 0 }}>{text}</p>
//     </div>
//   </div>
// );

// // --- MAIN COMPONENT ---
// const WeOffers = () => {
//   return (
//     <div style={{ backgroundColor: "#f0f2f5", padding: "50px 20px" }}>
//       {/* Section Header */}
//       <div style={{ textAlign: "center", marginBottom: "50px" }}>
//         <p
//           style={{
//             color: "#34A853",
//             fontSize: "16px",
//             textTransform: "uppercase",
//             letterSpacing: "2px",
//             margin: "0 0 10px 0",
//           }}
//         >
//           Our Services List
//         </p>
//         <h1
//           style={{
//             fontSize: "36px",
//             color: "#071C1F",
//             fontWeight: "bold",
//             margin: 0,
//             lineHeight: 1.2,
//           }}
//         >
//           What We Are Offering
//         </h1>
//       </div>

//       {/* Cards */}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "flex-start",
//           gap: "20px",
//           flexWrap: "wrap",
//         }}
//       >
//         {cardData.map((card, index) => (
//           <ProductCard
//             key={index}
//             image={card.image}
//             icon={card.icon}
//             title={card.title}
//             text={card.text}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WeOffers;

































