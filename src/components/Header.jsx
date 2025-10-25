

//components/Header.js
import React, { useState, useEffect, useRef } from "react";
import { FaInstagram, FaYoutube, FaRegClock } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { PiPhoneCall } from "react-icons/pi";
import { MdEmail } from "react-icons/md"; 

import Logo from "./Images/Logo.png";

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const searchBoxRef = useRef(null);
  const inputRef = useRef(null);

  const menuItems = [
    { name: "Home", href: "#home", dropdown: [] },
    { name: "About", href: "#about", dropdown: [] },
    {
      name: "Services",
      href: "",
      dropdown: [
        { name: "Service Details", href: "#weOffers" },
        { name: "Comment", href: "#comment" },
      ],
    },
    {
      name: "Projects",
      href: "",
      dropdown: [{ name: "Project Details", href: "#project" }],
    },
    {
      name: "Blogs",
      href: "",
      dropdown: [
        { name: "News", href: "" },
        { name: "Blog Details", href: "#blogDetails" },
      ],
    },
    {
      name: "Gallery",
      href: "",
      dropdown: [
        { name: "Photos", href: "" },
        { name: "Videos", href: "" },
      ],
    },
    { name: "Contact", href: "#contact", dropdown: [] },
  ];

  // Flatten menuItems into searchable options (include parent + dropdowns)
  const flattenedOptions = menuItems.reduce((acc, item) => {
    // If parent href is '#' and dropdown exists, fallback to first dropdown href
    const parentHref =
      item.href && item.href !== "#" ? item.href : item.dropdown?.[0]?.href || item.href || "#";
    acc.push({ name: item.name, href: parentHref });

    if (Array.isArray(item.dropdown) && item.dropdown.length > 0) {
      item.dropdown.forEach((d) =>
        acc.push({ name: `${item.name} › ${d.name}`, href: d.href || parentHref })
      );
    }
    return acc;
  }, []);

  // Filtered list derived from query
  const filteredOptions = flattenedOptions.filter((opt) =>
    opt.name.toLowerCase().includes(query.trim().toLowerCase())
  );

  // open -> focus input
  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => inputRef.current?.focus?.(), 50);
    } else {
      setQuery("");
    }
  }, [searchOpen]);

  // close on outside click or Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setSearchOpen(false);
    };
    const onDocClick = (e) => {
      if (!searchOpen) return;
      if (searchBoxRef.current && !searchBoxRef.current.contains(e.target)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDocClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDocClick);
    };
  }, [searchOpen]);

  const handleNavigate = (href) => {
    setSearchOpen(false);

    if (!href) return;

    // Anchor target (internal)
    if (href.startsWith("#")) {
      try {
        const el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          try {
            el.focus?.();
          } catch (err) {}
        } else {
          // If anchor not present, set hash as fallback
          window.location.hash = href;
        }
      } catch (err) {
        window.location.hash = href;
      }
      return;
    }

    // If relative or html page, navigate
    // (keeps behavior similar to original links like 'commercial.html')
    window.location.href = href;
  };

  return (
    <header style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Topbar */}
      <div
        style={{
          backgroundColor: "#faf9f8",
          borderBottom: "1px solid #ddd",
          padding: "8px 0",
          fontSize: "14px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Left Social + Welcome */}
          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <div style={{ display: "flex", gap: "10px" }}>
              <a
                href="https://www.instagram.com/sarojgreens?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
                target="_blank"
                alt="Instagram"
                rel="noreferrer"
              >
                <FaInstagram size={20} style={{ color: "#e4405f", marginRight: "20px" }} />
              </a>
              <a
                href="https://www.youtube.com/@sarojgreens"
                target="_blank"
                alt="YouTube"
                rel="noreferrer"
              >
                <FaYoutube size={20} style={{ color: "#ff0000" }} />
              </a>
            </div>
            <p style={{ marginLeft: "50px", color: "#333", fontSize: "20px" }}>
              Welcome to Saroj Greens
            </p>
          </div>

          {/* Right Email + Time */}
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <a href="mailto:info@sarojgreens.com" className="top-info">
              <MdEmail size={20} className="top-icon" /> info@sarojgreens.com
            </a>
            <span className="top-info">
              <FaRegClock size={20} className="top-icon" /> Mon - Sun 9:00 A.M - 6:00 P.M
            </span>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav
        id="navbar"
        style={{
          backgroundColor: "#FFA500",
          borderBottom: "2px solid #eee",
          padding: "22px 0",
          position: "relative",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo */}
          <div>
            <a href="" aria-label="logo image">
              <img
                src={Logo}
                width="200"
                height="70"
                style={{ objectFit: "contain" }}
                alt="sarojgreenlogo"
              />
            </a>
          </div>

          {/* Menu */}
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              gap: "10px",
              margin: 0,
              padding: 0,
              alignItems: "center",
            }}
          >
            {menuItems.map((item, index) => (
              <li key={index} style={{ position: "relative" }}>
                <a href={item.href} className="menu-link">
                  {item.name}
                  <span className="underline"></span>
                </a>

                {/* Dropdown */}
                {item.dropdown.length > 0 && (
                  <ul className="dropdown">
                    {item.dropdown.map((drop, i) => (
                      <li key={i}>
                        <a href={drop.href}>{drop.name}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Search + Call */}
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            {/* Search button toggles the overlay */}
            <button
              onClick={() => setSearchOpen((s) => !s)}
              aria-label="Open site search"
              className="icon-btn"
              style={{
                background: "transparent",
                border: "none",
                padding: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <IoSearch size={28} />
            </button>

            <div className="call-btn">
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                <PiPhoneCall size={20} /> Call Us
              </span>
              <span>+91 8328469942</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Search Overlay (modal-like) */}
      {/*
        Rendered outside of nav visually, but inside header file — overlay is fixed and centered.
        Uses searchOpen state, supports filtering & navigation.
      */}
      {searchOpen && (
        <div className="search-overlay" role="dialog" aria-modal="true" aria-label="Site search">
          <div className="search-box" ref={searchBoxRef}>
            <button
              className="search-close-btn"
              aria-label="Close search"
              onClick={() => setSearchOpen(false)}
            >
              ×
            </button>

            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <IoSearch size={20} />
              <input
                ref={inputRef}
                className="search-input"
                placeholder="Search site (e.g., Home, About, Services...)"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && filteredOptions.length > 0) {
                    handleNavigate(filteredOptions[0].href);
                  }
                }}
                aria-label="Search site"
              />
            </div>

            <div className="search-list" role="listbox" aria-label="Search results">
              {filteredOptions.length === 0 ? (
                <div className="search-no-results">No results</div>
              ) : (
                filteredOptions.map((opt, idx) => (
                  <div
                    key={idx}
                    tabIndex={0}
                    role="option"
                    className="search-item"
                    onClick={() => handleNavigate(opt.href)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleNavigate(opt.href);
                    }}
                  >
                    <span style={{ fontWeight: 600 }}>{opt.name}</span>
                    <small style={{ marginLeft: "auto", color: "#666" }}>{opt.href}</small>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {/* Inline Styles */}
      <style>
        {`
          /* Dropdown */
          .dropdown {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            background-color: #fff;
            list-style: none;
            padding: 10px 0;
            margin: 0;
            min-width: 180px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.2);
            border-radius: 6px;
            z-index: 999;
            opacity: 0;
            transform: translateY(-15px);
            transition: all 0.3s ease;
          }
          li:hover > .dropdown {
            display: block;
            opacity: 1;
            transform: translateY(0);
          }
          .dropdown li a {
            display: block;
            padding: 8px 15px;
            text-decoration: none;
            color: #333;
            font-weight: 500;
            transition: all 0.2s ease;
          }
          .dropdown li a:hover {
            background: #FFA500;
            color: #fff;
            border-radius: 4px;
          }

          /* Menu link hover with gradient underline */
          .menu-link {
            text-decoration: none;
            color: #fff;
            font-weight: 700;
            font-size: 16px;
            padding: 10px 20px;
            border-radius: 8px;
            display: inline-block;
            letter-spacing: 0.5px;
            transition: all 0.3s ease;
            position: relative;
          }
          .menu-link::after {
            content: "";
            position: absolute;
            width: 0;
            height: 3px;
            left: 0;
            bottom: 0;
            background: linear-gradient(90deg, #fff, #ffdd00);
            transition: width 0.3s ease;
            border-radius: 3px;
          }
          .menu-link:hover::after {
            width: 100%;
          }
          .menu-link:hover {
            color: #fff;
            background: linear-gradient(90deg, #ffae42, #ff8c00);
            transform: translateY(-3px);
            box-shadow: 0 4px 10px rgba(0,0,0,0.25);
          }

          /* Icons hover */
          .icon-btn {
            color: #333;
            cursor: pointer;
            padding: 8px;
            border-radius: 50%;
            transition: all 0.3s ease;
            background: transparent;
            border: none;
          }
          .icon-btn:hover {
            background-color: #fff;
            color: #FFA500;
            transform: scale(1.05);
          }

          /* Email + Clock topbar icons */
          .top-info {
            color: #333;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 6px;
            font-weight: 500;
            transition: all 0.3s ease;
          }
          .top-icon {
            color: #FFA500;
            transition: all 0.3s ease;
          }
          .top-info:hover {
            color: #FFA500;
          }
          .top-info:hover .top-icon {
            transform: scale(1.2);
            color: #ff7a00;
          }

          /* Call button */
          .call-btn {
            background-color: #28a745;
            color: #fff;
            padding: 12px 15px;
            border-radius: 8px;
            font-weight: bold;
            font-size: 14px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 3px 6px rgba(0,0,0,0.2);
            text-align: center; 
            margin-right: 20px;
          }
          .call-btn span:first-child {
            font-size: 14px;
            font-weight: 600;
          }
          .call-btn span:last-child {
            font-size: 16px;
            font-weight: 700;
          }
          .call-btn:hover {
            background: linear-gradient(90deg, #ff8c00, #ff5722);
            transform: translateY(-2px);
            box-shadow: 0 5px 12px rgba(0,0,0,0.3);
          }

          /* Search overlay styles */
          .search-overlay {
            position: fixed;
            inset: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(0,0,0,0.35);
            z-index: 1500;
            padding: 24px;
          }
          .search-box {
            width: min(820px, 96%);
            background: #fff;
            border-radius: 10px;
            padding: 18px;
            box-shadow: 0 12px 40px rgba(0,0,0,0.25);
            position: relative;
            max-height: 85vh;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            gap: 12px;
          }
          .search-close-btn {
            position: absolute;
            right: 10px;
            top: 8px;
            border: none;
            background: transparent;
            font-size: 22px;
            cursor: pointer;
            color: #666;
          }
          .search-input {
            width: 100%;
            padding: 12px 14px;
            border: 1px solid #e6e6e6;
            border-radius: 8px;
            font-size: 16px;
            outline: none;
            box-sizing: border-box;
          }
          .search-input:focus {
            border-color: #5a9a4d;
            box-shadow: 0 4px 18px rgba(90,154,77,0.12);
          }
          .search-list {
            margin-top: 6px;
            overflow: auto;
            max-height: 360px;
            padding-right: 6px;
            display: flex;
            flex-direction: column;
            gap: 6px;
          }
          .search-item {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 10px 12px;
            border-radius: 8px;
            cursor: pointer;
            transition: background 0.15s ease, transform 0.12s ease;
            outline: none;
          }
          .search-item:hover,
          .search-item:focus {
            background: #f7f7f7;
            transform: translateY(-2px);
          }
          .search-no-results {
            color: #666;
            padding: 12px;
          }

          /* small screens */
          @media (max-width: 640px) {
            .search-box { width: 96%; padding: 12px; }
            .search-input { font-size: 15px; padding: 10px; }
          }
        `}
      </style>
    </header>
  );
};

export default Header;
