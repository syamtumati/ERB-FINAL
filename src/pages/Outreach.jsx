import React from "react";
import { Link } from "react-router-dom";
import "./Outreach.css";

function Outreach() {
  return (
    <div className="outreach-page">
      {/* FULLSCREEN HERO (currently empty, just for spacing if needed) */}
      <section className="outreach-hero"></section>

      {/* OUTREACH SECTION WITHOUT HEADING */}
      <section className="outreach-saturday">
        <div className="container">
          <div className="saturday-details">
            {/* EVANGELIUMSVERKÜNDIGUNG */}
            <div className="detail-card">
              <h3>Evangeliumsverkündigung</h3>
              <p>
                Wir gehen auf die Straßen und in die Nachbarschaften, um das
                Evangelium von Jesus Christus zu verkünden — durch Traktate,
                persönliche Gespräche und offene Predigt.
              </p>
            </div>

            {/* GEBET & ANBETUNG */}
            <div className="detail-card">
              <h3>Gebet & Anbetung</h3>
              <p>
                Wir kommen zusammen zum gemeinsamen Gebet, Singen und zur
                Gemeinschaft — und suchen Gottes Segen für unsere
                evangelistischen Dienste.
              </p>
            </div>
          </div>

          <div className="join-us">
            <h3>Mach mit bei unserer Evangelisation</h3>
            <Link to="/kontakt" className="gold-btn">
              Mitmachen
            </Link>
          </div>
        </div>
      </section>

      {/* Footer + partner strip now come globally from App.jsx/App.css */}
    </div>
  );
}

export default Outreach;

