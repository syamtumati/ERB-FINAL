import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

// Static hero IMAGE
import heroImage from "../assets/images/hero-message.jpg";

function Home() {
  return (
    <div className="home-page">
      {/* HERO BILD MIT DEUTSCHEM TEXT */}
      <section className="hero-video-section">
        <img
          className="hero-video"
          src={heroImage}
          alt="Gnadenkirche Frankfurt – Stadtansicht"
        />
        <div className="hero-overlay">
          <div className="hero-content-centered">
            <h1 className="white-title hero-church-name">
	      Evangelisch-Reformierte Baptistengemeinde
            </h1>
            {/* Visit-us card directly under title + subtitle */}
            <div className="hero-visit-box">
              <h2 className="hero-visit-title">
                Besuchen Sie uns diesen Sonntag!
              </h2>

              <div className="hero-visit-divider">
                <span />
                <span className="hero-visit-icon">✧</span>
                <span />
              </div>

              <p className="hero-visit-time">um 16:30 Uhr</p>
              <p className="hero-visit-address">
                Hohemarkstraße 75
                <br />
                61440 Oberursel
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WAS UNS WICHTIG IST */}
      <section className="what-matters-section">
        <div className="container what-matters-grid">
          <h2 className="main-title">Was uns wichtig ist</h2>

          <Link to="/glaube" className="matter-block doctrine">
            <h3>Unsere Lehre</h3>
            <p>
              Wir bekennen uns freudig zum Londoner Baptistenbekenntnis von 1689
              – dem klassischen Ausdruck reformiert-baptistischer Überzeugungen
              zur Schrift, zur Gnade allein und zur Herrlichkeit Gottes in allem.
            </p>
            <span className="read-more">
              Unser vollständiges Bekenntnis lesen
            </span>
          </Link>

          <Link to="/dienst" className="matter-block focus">
            <h3>Unser Dienst</h3>
            <p>
              Christus durch schriftgemäße Predigt groß machen, die Gläubigen
              zum Dienst ausrüsten und das Evangelium vor Ort und unter den
              Völkern verkündigen – durch von der Gemeinde getragene Mission.
            </p>
            <span className="read-more">
              Unsere Dienste &amp; Missionen kennenlernen
            </span>
          </Link>

          <Link to="/über uns" className="matter-block hope">
            <h3>Wer wir sind</h3>
            <p>
              Dass Christus in seinem Volk Gestalt gewinnt, dass Sünder durch
              souveräne Gnade gerettet werden und dass Gott in der Gemeinde und
              unter den Völkern verherrlicht wird – bis er wiederkommt.
            </p>
            <span className="read-more">
              Unsere Hirten &amp; Vision kennenlernen
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;

