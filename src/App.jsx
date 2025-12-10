// src/App.jsx
import React, { useEffect, useState } from "react";
import { Routes, Route, NavLink, Link, useLocation } from "react-router-dom";

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

import heartcryLogo from "./assets/partners/heartcry-logo.png";

import "./App.css";

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <ScrollToTop />

      {/* HEADER */}
      <header className="heartcry-header">
        <div className="header-container">

          <nav className="menu-left desktop-nav">
            <NavLink to="/" className="menu-item" end>Startseite</NavLink>
            <NavLink to="/glaube" className="menu-item">Glaube</NavLink>
            <NavLink to="/Über uns" className="menu-item">Über uns</NavLink>
            <NavLink to="/predigten" className="menu-item">Predigten</NavLink>
          </nav>

          <NavLink to="/" className="logo-center" onClick={closeMobile}>
            <img
              src="logo/gnadenkirche-logo-white.png"
              alt="Gnadenkirche Frankfurt"
              className="logo-image"
            />
          </NavLink>

          <nav className="menu-right desktop-nav">
            <NavLink to="/dienst" className="menu-item">Dienst & Mission</NavLink>
            <NavLink to="/veranstaltungen" className="menu-item">Veranstaltungen</NavLink>
            <NavLink to="/spenden" className="menu-item">Spenden</NavLink>
            <NavLink to="/kontakt" className="menu-item">Kontakt</NavLink>
          </nav>

          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileOpen(o => !o)}
          >
            <span /><span /><span />
          </button>

        </div>
      </header>

      {mobileOpen && <div className="mobile-backdrop" onClick={closeMobile} />}

      <nav className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        <button className="mobile-close" onClick={closeMobile}>×</button>

        <NavLink to="/" onClick={closeMobile}>Startseite</NavLink>
        <NavLink to="/glaube" onClick={closeMobile}>Glaube</NavLink>
        <NavLink to="/Über uns" onClick={closeMobile}>Über uns</NavLink>
        <NavLink to="/predigten" onClick={closeMobile}>Predigten</NavLink>
        <NavLink to="/dienst" onClick={closeMobile}>Dienst & Mission</NavLink>
        <NavLink to="/veranstaltungen" onClick={closeMobile}>Veranstaltungen</NavLink>
        <NavLink to="/spenden" onClick={closeMobile}>Spenden</NavLink>
        <NavLink to="/kontakt" onClick={closeMobile}>Kontakt</NavLink>
      </nav>

      <main key={location.pathname} className="page-wrapper">
        <Routes location={location}>
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

      {/* PARTNER SECTION */}
      <section className="partner-heartcry">
        <div className="partner-inner">

          {/* RESTORED TITLE */}
          <div className="partner-heading">
            <span className="partner-line" />
            <span className="partner-heartcry-title">UNSERE PARTNER</span>
            <span className="partner-line" />
          </div>

          <a
            href="https://heartcrymissionary.com"
            target="_blank"
            rel="noreferrer"
            className="heartcry-logo-link"
          >
            <img
              src={heartcryLogo}
              alt="HeartCry Missionary Society"
              className="heartcry-logo"
            />
          </a>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="clean-footer">
        <div className="footer-inner">
          <div className="church-name">Gnadenkirche Frankfurt</div>

          <nav className="footer-nav">
            <Link to="/glaube">Glaube</Link>
            <Link to="/Über uns">Über uns</Link>
            <Link to="/predigten">Predigten</Link>
            <Link to="/dienst">Dienst & Mission</Link>
            <Link to="/veranstaltungen">Veranstaltungen</Link>
            <Link to="/spenden">Spenden</Link>
            <Link to="/kontakt">Kontakt</Link>
          </nav>

          <div className="copyright">
            © {new Date().getFullYear()} Gnadenkirche Frankfurt
          </div>
        </div>
      </footer>

    </>
  );
}

export default App;

