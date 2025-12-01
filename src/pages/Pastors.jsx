import React from "react";
import { Link } from "react-router-dom";   // ← Make sure this is imported
import "./Pastors.css";

import seniorPastor from "../assets/pastors/senior-pastor.jpg";
import deaconHans from "../assets/pastors/deacon-hans.jpg";

const Pastors = () => {
  return (
    <div className="pastors-page">
      {/* SUBTLE BACKGROUND ORBS */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>

      <div className="pastors-container">
        {/* PASTOR PETER SCHILD */}
        <section className="pastor-card">
          <div className="pastor-photo">
            <img src={seniorPastor} alt="Pastor Peter Schild" />
            <div className="glow"></div>
          </div>
          <div className="pastor-content">
            <span className="label">Gemeindeleitung</span>
            <h1>Peter Schild</h1>
            <h2>Pastor der Gnadenkirche Frankfurt</h2>
            <p className="bio">
              Peter Schild ist verheiratet und Vater von fünf Kindern. Er wuchs in Vernachlässigung auf
              und lebte in tiefer Gottlosigkeit, bis er als Teenager durch ein Traktat zum Glauben kam.
              Er studierte Evangelische Theologie, wurde 2014 als Missionar nach Frankfurt ausgesandt
              und dient seit 2016 als Pastor der Gnadenkirche.
            </p>
            <div className="contact">
              <strong>E-Mail:</strong>{" "}
              <a href="mailto:info@gnadenkirche-frankfurt.de">
                info@gnadenkirche-frankfurt.de
              </a>
            </div>
          </div>
        </section>

        {/* DIAKON HANS EWERT */}
        <section className="pastor-card deacon">
          <div className="pastor-photo">
            <img src={deaconHans} alt="Diakon Hans Ewert" />
            <div className="glow"></div>
          </div>
          <div className="pastor-content">
            <span className="label">Diakon</span>
            <h1>Hans Ewert</h1>
            <h2>Diakon der Gnadenkirche Frankfurt</h2>
            <p className="bio">
              Hans Ewert ist verheiratet und Vater von zwei Kindern. Er wurde in eine russlanddeutsche
              Baptistengemeinde hineingeboren und bekehrte sich mit zehn Jahren. Er arbeitet im
              technischen Kundensupport und dient seit 2023 als Diakon in der Gnadenkirche Frankfurt.
            </p>
          </div>
        </section>
      </div>

      {/* SAME CLEAN FOOTER AS MESSAGES PAGE */}
      <footer className="clean-footer">
        <div className="footer-inner">
          <div className="church-name">
            Gnadenkirche Frankfurt
          </div>

          <nav className="footer-nav">
            <Link to="/glaube">Glaube</Link>
            <Link to="/Über uns">Über uns</Link>
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
};

export default Pastors;
