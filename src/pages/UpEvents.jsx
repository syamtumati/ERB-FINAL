import React from "react";
import { Link } from "react-router-dom";
import "./UpEvents.css";

function UpEvents() {
  return (
    <div className="upevents-page">
      {/* MAIN CONTENT – CENTERED */}
      <div className="upevents-simple">
        <div className="container">
          <h1>Bevorstehende Veranstaltungen</h1>
          <p className="message">
            Wir werden diese Seite aktualisieren, sobald neue Konferenzen,
            Freizeiten oder besondere Treffen geplant sind.
          </p>
          <p className="sub-message">
            Bitte schauen Sie später wieder vorbei. Vielen Dank!
          </p>
          <Link to="/" className="home-btn">
            Zur Startseite
          </Link>
        </div>
      </div>

      {/* SAME CLEAN FOOTER AS ALL OTHER PAGES */}
      <footer className="clean-footer">
        <div className="footer-inner">
          <div className="church-name">
            Gnadenkirche Frankfurt
          </div>

          <nav className="footer-nav">
            <Link to="/glaube">Glaube</Link>
            <Link to="/über uns">Über uns</Link>
            <Link to="/dienst">Dienst & Mission</Link>
            <Link to="/veranstaltungen">Veranstaltungen</Link>
            <Link to="/spenden">Spenden</Link>
            <Link to="/kontakt">Kontakt</Link>
          </nav>

          <div className="copyright">
            © {new Date().getFullYear()} Gnadenkirche Frankfurt. Alle Rechte vorbehalten.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default UpEvents;
