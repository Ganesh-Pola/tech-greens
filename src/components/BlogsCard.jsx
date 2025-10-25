import React from "react";
import { FaUserCircle, FaCommentAlt } from "react-icons/fa"; 

import B1 from "./Images/Blog1.jpg";
import B2 from "./Images/Blog2.jpg";
import B3 from "./Images/Blog3.jpg";
import B4 from "./Images/Blog4.jpg";

import Saroj from "./Images/SarojGreens.jpg";

// Reusable Card Component
const BlogCard = ({ image, date, month, author, comments, title }) => {
  return (
    <div
      id="blogDetails"
      style={{
        backgroundColor: "#fff",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
        width: "300px",
        minWidth: "300px",
        marginRight: "20px",
        flexShrink: 0,
      }}
    >
      <div style={{ position: "relative" }}>
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            display: "block",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-25px",
            right: "20px",
            backgroundColor: "#4CAF50",
            color: "white",
            borderRadius: "50%",
            width: "60px",
            height: "60px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            border: "3px solid white",
          }}
        >
          <span style={{ fontSize: "18px" }}>{date}</span>
          <span style={{ fontSize: "14px" }}>{month}</span>
        </div>
      </div>
      <div style={{ padding: "40px 30px 30px 30px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            fontSize: "14px",
            color: "#777",
            marginBottom: "15px",
            flexWrap: "wrap",
          }}
        >
          <span style={{ display: "flex", alignItems: "center" }}>
            <FaUserCircle style={{ color: "#4CAF50", marginRight: "5px" }} />
            by {author}
          </span>
          <span style={{ display: "flex", alignItems: "center" }}>
            <FaCommentAlt style={{ color: "#4CAF50", marginRight: "5px" }} />
            {comments} Comments
          </span>
        </div>
        <h2
          style={{
            fontSize: "22px",
            color: "#1e4635",
            margin: "0 0 20px 0",
            lineHeight: 1.4,
          }}
        >
          {title}
        </h2>
        <button
          style={{
            backgroundColor: "#fbc02d",
            color: "#333",
            border: "none",
            padding: "12px 25px",
            borderRadius: "5px",
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: "14px",
            outline: "none",
          }}
        >
          Read More
        </button>
      </div>
    </div>
  );
};

// Main BlogsCard Section
const BlogsCard = ({ blogs, logos }) => {
  const scrollingBlogs = [...blogs, ...blogs];
  const scrollingLogos = [...logos, ...logos];

  return (
    <div
      style={{
        margin: 0,
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        backgroundColor: "#f8f6f2",
      }}
    >
      <div
        style={{ padding: "60px 80px", maxWidth: "1200px", margin: "auto" }}
        className="blogs-container"
      >
        {/* Header Section */}
        <div
          className="blogs-header"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "50px",
            gap: "40px",
          }}
        >
          <div style={{ flex: 1 }}>
            <p
              style={{
                fontSize: "14px",
                color: "#888",
                margin: "0 0 10px 0",
                fontWeight: 600,
                letterSpacing: "1px",
              }}
            >
              FROM THE BLOG POST
            </p>
            <h1
              style={{
                fontSize: "48px",
                color: "#1e4635",
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              Latest News & Articles Directly from Blog
            </h1>
          </div>

          <div style={{ flex: 1, paddingTop: "10px" }}>
            <p
              style={{
                fontSize: "16px",
                color: "#6a6a6a",
                lineHeight: 1.6,
                marginTop: "40px",
              }}
            >
              It is a section commonly found on websites to keep visitors updated
              with fresh content. It highlights recent announcements, company
              updates, and informative articles without needing to navigate
              away.
            </p>
          </div>
        </div>

        {/* Blog Cards Auto Scrolling Section */}
        <div style={{ overflow: "hidden", position: "relative", width: "100%" }}>
          <div
            className="scrolling-container"
            style={{
              display: "flex",
              animation: "scroll-left 20s linear infinite",
            }}
          >
            {scrollingBlogs.map((blog, index) => (
              <BlogCard key={index} {...blog} />
            ))}
          </div>
        </div>

        {/* Logos Auto Scrolling Section */}
        <div
          style={{
            overflow: "hidden",
            position: "relative",
            width: "100%",
            marginTop: "60px",
          }}
        >
          <div
            className="logos-container"
            style={{
              display: "flex",
              alignItems: "center",
              animation: "scroll-left 25s linear infinite",
            }}
          >
            {scrollingLogos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`logo-${index}`}
                style={{
                  height: "100px",
                  width: "auto",
                  marginRight: "50px",
                  objectFit: "contain",
                  filter: "grayscale(50%)",
                  transition: "transform 0.3s ease",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.1)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            ))}
          </div>
        </div>

        {/* Inline CSS keyframes + responsiveness */}
        <style>
          {`
            .scrolling-container {
              animation: scroll-left 20s linear infinite;
            }
            .scrolling-container:hover,
            .logos-container:hover {
              animation-play-state: paused;
            }
            @keyframes scroll-left {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }

            /* 📱 Mobile Responsiveness */
            @media (max-width: 768px) {
              .blogs-container {
                padding: 30px 20px !important;
              }
              .blogs-header {
                flex-direction: column !important;
                text-align: center !important;
              }
              .blogs-header h1 {
                font-size: 28px !important;
              }
              .blogs-header p {
                font-size: 14px !important;
              }
              #blogDetails {
                width: 250px !important;
                min-width: 250px !important;
                margin-right: 10px !important;
              }
              #blogDetails h2 {
                font-size: 18px !important;
              }
              #blogDetails button {
                padding: 10px 20px !important;
                font-size: 13px !important;
              }
              .logos-container img {
                height: 60px !important;
                margin-right: 20px !important;
              }
            }
          `}
        </style>
      </div>
    </div>
  );
};

// Example usage with data
const blogData = [
  {
    image:B1,
    date: "18",
    month: "Nov",
    author: "Admin",
    comments: 2,
    title: "Best Way to Do Eco and Agriculture",
  },
  {
    image:B2,
    date: "20",
    month: "Nov",
    author: "Admin",
    comments: 5,
    title: "Leverage agile frameworks to provide",
  },
  {
    image:B3,
    date: "22",
    month: "Nov",
    author: "Admin",
    comments: 3,
    title: "Organically grow the holistic world view",
  },
  {
    image:B4,
    date: "24",
    month: "Nov",
    author: "Pravin Chandan",
    comments: 4,
    title: "Farming methods for better future",
  },
];

// Example logos
const logoData = [
  Saroj,
  Saroj,
  Saroj,
  Saroj,
  Saroj,
];

export default function App() {
  return <BlogsCard blogs={blogData} logos={logoData} />;
}






















//Without responsiveness

// import React from "react";
// import { FaUserCircle, FaCommentAlt } from "react-icons/fa"; // Added icons

// // Reusable Card Component
// const BlogCard = ({ image, date, month, author, comments, title }) => {
//   return (
//     <div id="blogDetails"
//       style={{
//         backgroundColor: "#fff",
//         borderRadius: "10px",
//         overflow: "hidden",
//         boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
//         width: "300px",
//         minWidth: "300px",
//         marginRight: "20px",
//         flexShrink: 0,
//       }}
//     >
//       <div style={{ position: "relative" }}>
//         <img
//           src={image}
//           alt={title}
//           style={{
//             width: "100%",
//             height: "200px",
//             objectFit: "cover",
//             display: "block",
//           }}
//         />
//         <div
//           style={{
//             position: "absolute",
//             bottom: "-25px",
//             right: "20px",
//             backgroundColor: "#4CAF50",
//             color: "white",
//             borderRadius: "50%",
//             width: "60px",
//             height: "60px",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             justifyContent: "center",
//             fontWeight: "bold",
//             border: "3px solid white",
//           }}
//         >
//           <span style={{ fontSize: "18px" }}>{date}</span>
//           <span style={{ fontSize: "14px" }}>{month}</span>
//         </div>
//       </div>
//       <div style={{ padding: "40px 30px 30px 30px" }}>
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             gap: "20px",
//             fontSize: "14px",
//             color: "#777",
//             marginBottom: "15px",
//           }}
//         >
//           <span style={{ display: "flex", alignItems: "center" }}>
//             <FaUserCircle style={{ color: "#4CAF50", marginRight: "5px" }} />
//             by {author}
//           </span>
//           <span style={{ display: "flex", alignItems: "center" }}>
//             <FaCommentAlt style={{ color: "#4CAF50", marginRight: "5px" }} />
//             {comments} Comments
//           </span>
//         </div>
//         <h2
//           style={{
//             fontSize: "22px",
//             color: "#1e4635",
//             margin: "0 0 20px 0",
//             lineHeight: 1.4,
//           }}
//         >
//           {title}
//         </h2>
//         <button
//           style={{
//             backgroundColor: "#fbc02d",
//             color: "#333",
//             border: "none",
//             padding: "12px 25px",
//             borderRadius: "5px",
//             fontWeight: "bold",
//             cursor: "pointer",
//             fontSize: "14px",
//             outline: "none",
//           }}
//         >
//           Read More
//         </button>
//       </div>
//     </div>
//   );
// };

// // Main BlogsCard Section
// const BlogsCard = ({ blogs, logos }) => {
//   const scrollingBlogs = [...blogs, ...blogs];
//   const scrollingLogos = [...logos, ...logos];

//   return (
//     <div
//       style={{
//         margin: 0,
//         fontFamily:
//           "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
//         backgroundColor: "#f8f6f2",
//       }}
//     >
//       <div style={{ padding: "60px 80px", maxWidth: "1200px", margin: "auto" }}>
//         {/* Header Section */}
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "flex-start",
//             marginBottom: "50px",
//             gap: "40px",
//           }}
//         >
//           <div style={{ flex: 1 }}>
//             <p
//               style={{
//                 fontSize: "14px",
//                 color: "#888",
//                 margin: "0 0 10px 0",
//                 fontWeight: 600,
//                 letterSpacing: "1px",
//               }}
//             >
//               FROM THE BLOG POST
//             </p>
//             <h1
//               style={{
//                 fontSize: "48px",
//                 color: "#1e4635",
//                 margin: 0,
//                 lineHeight: 1.2,
//               }}
//             >
//               Latest News & Articles Directly from Blog
//             </h1>
//           </div>

//           <div style={{ flex: 1, paddingTop: "10px" }}>
//             <p
//               style={{
//                 fontSize: "16px",
//                 color: "#6a6a6a",
//                 lineHeight: 1.6,
//                 marginTop: "40px",
//               }}
//             >
//               It is a section commonly found on websites to keep visitors 
//               updated with fresh content. It highlights recent announcements, company updates, and informative 
//               articles without needing to navigate away.
//             </p>
//           </div>
//         </div>

//         {/* Blog Cards Auto Scrolling Section */}
//         <div style={{ overflow: "hidden", position: "relative", width: "100%" }}>
//           <div
//             className="scrolling-container"
//             style={{
//               display: "flex",
//               animation: "scroll-left 20s linear infinite",
//             }}
//           >
//             {scrollingBlogs.map((blog, index) => (
//               <BlogCard key={index} {...blog} />
//             ))}
//           </div>
//         </div>

//         {/* Logos Auto Scrolling Section */}
//         <div
//           style={{
//             overflow: "hidden",
//             position: "relative",
//             width: "100%",
//             marginTop: "60px",
//           }}
//         >
//           <div
//             className="logos-container"
//             style={{
//               display: "flex",
//               alignItems: "center",
//               animation: "scroll-left 25s linear infinite",
//             }}
//           >
//             {scrollingLogos.map((logo, index) => (
//               <img
//                 key={index}
//                 src={logo}
//                 alt={`logo-${index}`}
//                 style={{
//                   height: "100px",
//                   width: "auto",
//                   marginRight: "50px",
//                   objectFit: "contain",
//                   filter: "grayscale(50%)",
//                   transition: "transform 0.3s ease",
//                 }}
//                 onMouseOver={(e) =>
//                   (e.currentTarget.style.transform = "scale(1.1)")
//                 }
//                 onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Inline CSS keyframes */}
//         <style>
//           {`
//             .scrolling-container {
//               animation: scroll-left 20s linear infinite;
//             }
//             .scrolling-container:hover,
//             .logos-container:hover {
//               animation-play-state: paused;
//             }
//             @keyframes scroll-left {
//               0% {
//                 transform: translateX(0);
//               }
//               100% {
//                 transform: translateX(-50%);
//               }
//             }
//           `}
//         </style>
//       </div>
//     </div>
//   );
// };

// // Example usage with data
// const blogData = [
//   {
//     image:
//       "https://res.cloudinary.com/diimorwbz/image/upload/v1756712803/One_sq6q4p.jpg",
//     date: "18",
//     month: "Nov",
//     author: "Admin",
//     comments: 2,
//     title: "Best Way to Do Eco and Agriculture",
//   },
//   {
//     image:
//       "https://res.cloudinary.com/diimorwbz/image/upload/v1756713464/Two_qepwx9.jpg",
//     date: "20",
//     month: "Nov",
//     author: "Admin",
//     comments: 5,
//     title: "Leverage agile frameworks to provide",
//   },
//   {
//     image:
//       "https://res.cloudinary.com/diimorwbz/image/upload/v1756713475/Three_navqg1.jpg",
//     date: "22",
//     month: "Nov",
//     author: "Admin",
//     comments: 3,
//     title: "Organically grow the holistic world view",
//   },
//   {
//     image:
//       "https://res.cloudinary.com/diimorwbz/image/upload/v1756713485/Four_yfloqu.jpg",
//     date: "24",
//     month: "Nov",
//     author: "Pravin Chandan",
//     comments: 4,
//     title: "Farming methods for better future",
//   },
// ];

// // Example logos
// const logoData = [
//   "https://res.cloudinary.com/diimorwbz/image/upload/v1756477683/ReSG-removebg-preview_ujuz2p.png",
//   "https://res.cloudinary.com/diimorwbz/image/upload/v1756477683/ReSG-removebg-preview_ujuz2p.png",
//   "https://res.cloudinary.com/diimorwbz/image/upload/v1756477683/ReSG-removebg-preview_ujuz2p.png",
//   "https://res.cloudinary.com/diimorwbz/image/upload/v1756477683/ReSG-removebg-preview_ujuz2p.png",
//   "https://res.cloudinary.com/diimorwbz/image/upload/v1756477683/ReSG-removebg-preview_ujuz2p.png",
// ];

// export default function App() {
//   return <BlogsCard blogs={blogData} logos={logoData} />;
// }
