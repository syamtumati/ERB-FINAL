// src/App.jsx
import React, { useEffect, useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Messages from "./pages/Messages";
import Pastors from "./pages/Pastors";
import Donations from "./pages/Donations";
import Contact from "./pages/Contact";
import Outreach from "./pages/Outreach";
import UpEvents from "./pages/UpEvents";
import AdminEvents from "./pages/AdminEvents";
import Belief from "./pages/Belief";
import "./App.css";

function App() {
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;

      // scrolling down (and not at very top) → hide header
      if (currentY > lastScrollY + 10 && currentY > 80) {
        setShowHeader(false);
      }
      // scrolling up → show header
      else if (currentY < lastScrollY - 10) {
        setShowHeader(true);
      }

      lastScrollY = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <ScrollToTop />

      {/* HEADER – will hide/show based on scroll */}
      <header
        className={`heartcry-header ${!showHeader ? "header-hidden" : ""}`}
      >
        <div className="header-container">

          {/* LEFT MENU */}
          <nav className="menu-left">
            <NavLink to="/" className="menu-item" end>
              Startseite
            </NavLink>
            <NavLink to="/glaube" className="menu-item">
              Glaube
            </NavLink>
            <NavLink to="/Über uns" className="menu-item">
              Über uns
            </NavLink>
            <NavLink to="/predigten" className="menu-item">
              Predigten
            </NavLink>
          </nav>

          {/* CENTER LOGO */}
          <NavLink to="/" className="logo-center">
            <img
              src="/logo/gnadenkirche-logo-white.png"
              alt="Gnadenkirche Frankfurt"
              className="logo-image"
            />
          </NavLink>

          {/* RIGHT MENU */}
          <nav className="menu-right">
            <NavLink to="/dienst" className="menu-item">
              Dienst & Mission
            </NavLink>
            <NavLink to="/veranstaltungen" className="menu-item">
              Veranstaltungen
            </NavLink>
            <NavLink to="/spenden" className="menu-item">
              Spenden
            </NavLink>
            <NavLink to="/kontakt" className="menu-item">
              Kontakt
            </NavLink>
          </nav>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/glaube" element={<Belief />} />
          <Route path="/Über uns" element={<Pastors />} />
          <Route path="/predigten" element={<Messages />} />
          <Route path="/dienst" element={<Outreach />} />
          <Route path="/veranstaltungen" element={<UpEvents />} />
          <Route path="/spenden" element={<Donations />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/admin/events" element={<AdminEvents />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

