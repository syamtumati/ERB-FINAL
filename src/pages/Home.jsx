import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const base = import.meta.env.BASE_URL;   // 👈 add this

function Home() {
  return (
    <div className="home-page">
      {/* HERO VIDEO MIT LOGO & DEUTSCHEM TEXT */}
      <section className="hero-video-section">
        <video className="hero-video" autoPlay loop muted playsInline>
          <source src="${base}videos/hero-message.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay">
          <div className="hero-content-centered">
            <h1 className="white-title hero-church-name">
              Gnadenkirche Frankfurt
            </h1>
            <p className="hero-subtitle">
              Evangelisch-Reformierte Baptistengemeinde
            </p>
            <p className="hero-motto">
              Christus erhöhen • Gläubige ausrüsten • Evangelium weitergeben
            </p>
          </div>
        </div>
      </section>

      {/* HEARTCRY FILM */}
      <section className="heartcry-section">
        <div className="container">
          <h2 className="section-title white-title">HeartCry Film</h2>
          <p className="section-subtitle">
            Nach der Finsternis das Licht – Gottes Werk in Deutschland
          </p>
          <div className="video-container">
            <iframe
              className="youtube-player"
              src="https://www.youtube.com/embed/zEU7AhZzdM8"
              title="Nach der Finsternis das Licht"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <p className="video-description">
            Ein eindrucksvoller Dokumentarfilm über das Erbe der Reformation
            und das souveräne Wirken Gottes in unserem Land.
          </p>
        </div>
      </section>

      {/* WAS UNS WICHTIG IST */}
      <section className="what-matters-section">
        <div className="container what-matters-grid">
          <h2 className="main-title black-title">Was uns wichtig ist</h2>
          <Link to="/glaube" className="matter-block doctrine">
            <h3>Unsere Lehre</h3>
            <p>
              Wir bekennen uns freudig zum Londoner Baptistenbekenntnis von 1689
              – dem klassischen Ausdruck reformiert-baptistischer Überzeugungen
              zur Schrift, zur Gnade allein und zur Herrlichkeit Gottes in allem.
            </p>
            <span className="read-more">Unser vollständiges Bekenntnis lesen</span>
          </Link>
          <Link to="/dienst" className="matter-block focus">
            <h3>Unser Dienst</h3>
            <p>
              Christus durch schriftgemäße Predigt groß machen, die Gläubigen
              zum Dienst ausrüsten und das Evangelium vor Ort und unter den
              Völkern verkündigen – durch von der Gemeinde getragene Mission.
            </p>
            <span className="read-more">Unsere Dienste & Missionen kennenlernen</span>
          </Link>
          <Link to="/über uns" className="matter-block hope">
            <h3>Wer wir sind</h3>
            <p>
	      Dass Christus in seinem Volk Gestalt gewinnt, dass Sünder durch
	      souveräne Gnade gerettet werden und dass Gott in der Gemeinde und 
	      unter den Völkern verherrlicht wird – bis er wiederkommt.
            </p>
            <span className="read-more">Unsere Hirten & Vision kennenlernen</span>
          </Link>
        </div>
      </section>

      {/* ABSCHLUSS-VIDEO */}
      <section className="bottom-video-section">
        <video className="bottom-video" autoPlay loop muted playsInline>
          <source src="${base}videos/closing-glory.mp4" type="video/mp4" />
        </video>
        <div className="bottom-video-overlay">
          <div className="bottom-video-text">
            <h2 className="white-title">Soli Deo Gloria</h2>
            <p>Gott allein die Ehre • jetzt und in Ewigkeit</p>
          </div>
        </div>
      </section>

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

export default Home;
