import React from "react";
import { Link } from "react-router-dom";
import "./Belief.css";

const confessionArticles = [
  {
    chapter: "1",
    title: "Von der Heiligen Schrift",
    summary:
      "Die Heilige Schrift ist die einzige ausreichende, sichere und unfehlbare Richtschnur für alle zur Errettung notwendige Erkenntnis, für Glauben und Gehorsam.",
  },
  {
    chapter: "2",
    title: "Von Gott und der heiligen Dreieinigkeit",
    summary:
      "Es gibt nur einen lebendigen und wahren Gott, ewig, von unendlicher Macht, Weisheit und Güte.",
  },
  {
    chapter: "3",
    title: "Von Gottes Ratschluss",
    summary:
      "Gott hat von Ewigkeit her frei und unveränderlich alles bestimmt, was geschieht.",
  },
  {
    chapter: "5",
    title: "Von der göttlichen Vorsehung",
    summary:
      "Gott, der große Schöpfer, erhält, lenkt und regiert alle Dinge nach seiner höchst weisen und heiligen Vorsehung.",
  },
  {
    chapter: "8",
    title: "Von Christus, dem Mittler",
    summary:
      "Es hat Gott gefallen, den Herrn Jesus als den einzigen Mittler zwischen Gott und Menschen zu erwählen und einzusetzen.",
  },
  {
    chapter: "11",
    title: "Von der Rechtfertigung",
    summary:
      "Wir werden allein aus Gnade, allein durch den Glauben, allein um Christi willen gerechtfertigt.",
  },
  {
    chapter: "26",
    title: "Von der Gemeinde",
    summary:
      "Die sichtbare Gemeinde besteht aus allen, die überall in der Welt den Glauben des Evangeliums bekennen und Gott durch Christus gehorsam sind.",
  },
  {
    chapter: "28",
    title: "Von der Taufe und dem Abendmahl des Herrn",
    summary:
      "Christus hat zwei Ordnungen eingesetzt: die Glaubenstaufe durch Untertauchen und das Abendmahl des Herrn.",
  },
  {
    chapter: "29",
    title: "Von der Taufe",
    summary:
      "Die Taufe ist nur für bekennende Gläubige bestimmt, durch Untertauchen, als Zeichen der Gemeinschaft mit Christus in seinem Tod und seiner Auferstehung.",
  },
];

const Belief = () => {
  return (
    <section className="belief-page">
      <div className="belief-content">
        {/* HERO */}
        <div className="belief-hero">
          <h1>Was wir glauben</h1>
          <p className="confession-title">
            Das 1689 Zweite Londoner Baptistische Glaubensbekenntnis
          </p>
          <p className="tagline">
            Lehren der Gnade • Glaubenstaufe • Sola Scriptura
          </p>
        </div>

        {/* CONFESSION ARTICLES GRID */}
        <div className="confession-grid">
          {confessionArticles.map((item, index) => (
            <article key={index} className="confession-card">
              <div className="card-header">
                <span className="chapter-num">{item.chapter}</span>
                <h3>{item.title}</h3>
              </div>
              <p>{item.summary}</p>
            </article>
          ))}
        </div>

        {/* COFFEE BROWN BUTTON */}
        <div className="belief-cta">
          <a
            href="https://www.the1689confession.com"
            target="_blank"
            rel="noopener noreferrer"
            className="coffee-btn"
          >
            Die vollständige 1689er Bekenntnisschrift lesen
          </a>
        </div>
      </div>

      {/* EXACT SAME CLEAN FOOTER AS PASTORS & MESSAGES */}
      <footer className="clean-footer">
        <div className="footer-inner">
          <div className="church-name">
            Gnadenkirche Frankfurt
          </div>

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
            © {new Date().getFullYear()} Gnadenkirche Frankfurt. Alle Rechte vorbehalten.
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Belief;
