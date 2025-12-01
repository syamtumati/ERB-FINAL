import React from "react";
import { Link } from "react-router-dom";
import "./Outreach.css";

function Outreach() {
  return (
    <div className="outreach-page">

      {/* FULLSCREEN HERO VIDEO – NO TEXT OVERLAY */}
      <section className="outreach-hero">
        <img 
          src="${base}images/outreach-hero.jpg" 
          alt="Outreach" 
          className="outreach-hero-image"
        />
      </section>

      {/* OUTREACH SECTION WITHOUT HEADING */}
      <section className="outreach-saturday">
        <div className="container">

          {/* REMOVED: <h2>Jeden letzten Samstag</h2> */}

          <div className="saturday-details">

            {/* EVANGELIUMSVERKÜNDIGUNG */}
            <div className="detail-card">
              <h3>Evangeliumsverkündigung</h3>
              <p>
                Wir gehen auf die Straßen und in die Nachbarschaften, um das Evangelium
                von Jesus Christus zu verkünden — durch Traktate, persönliche Gespräche
                und offene Predigt.
              </p>
            </div>

            {/* GEBET & ANBETUNG */}
            <div className="detail-card">
              <h3>Gebet & Anbetung</h3>
              <p>
                Wir kommen zusammen zum gemeinsamen Gebet, Singen und zur Gemeinschaft —
                und suchen Gottes Segen für unsere evangelistischen Dienste.
              </p>
            </div>

          </div>

          <div className="join-us">
            <h3>Mach mit bei unserer Evangelisation</h3>

            {/* REMOVED TIME & LOCATION */}
            {/* <p>
              <strong>Zeit:</strong> … <br/>
              <strong>Ort:</strong> …
            </p> */}

            <Link to="/kontakt" className="gold-btn">Mitmachen</Link>
          </div>

        </div>
      </section>

      {/* CLEAN FOOTER */}
      <footer className="clean-footer">
        <div className="footer-inner">

          <div className="church-name">
            Gnadenkirche Frankfurt
          </div>

          <nav className="footer-nav">
            <Link to="/glaube">Glaube</Link>
            <Link to="/über-uns">Über uns</Link>
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

export default Outreach;

