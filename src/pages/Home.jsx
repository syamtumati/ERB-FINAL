import React, { useEffect } from "react";  // ← Added useEffect
import { Link } from "react-router-dom";
import "./Home.css";

// Static hero IMAGE
import heroImage from "../assets/images/hero-message.jpg";

// Church slideshow images – import them here
import church1 from "../assets/images/church1.jpg";
import church2 from "../assets/images/church2.jpg";
import church3 from "../assets/images/church3.jpg";
import church4 from "../assets/images/church4.jpg";
// Add more imports if you have more images (church4.jpg, etc.)

function Home() {
  // ================= SLIDESHOW LOGIC – MUST BE INSIDE THE COMPONENT =================
  useEffect(() => {
    const slides = document.querySelectorAll('.slide');
    if (slides.length === 0) return;

    let current = 0;

    const showSlide = (index) => {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });
    };

    // Show first slide immediately
    showSlide(current);

    // Auto-advance every 6 seconds
    const interval = setInterval(() => {
      current = (current + 1) % slides.length;
      showSlide(current);
    }, 6000);

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array = run once on mount

  return (
    <div className="home-page">
      {/* ================= HERO ================= */}
      <section className="hero-video-section">
        <img
          className="hero-video"
          src={heroImage}
          alt="Gnadenkirche Frankfurt – Stadtansicht"
        />
        <div className="hero-overlay">
          <div className="hero-content-centered">
            <h1 className="hero-church-name">
              Evangelisch-Reformierte
              <span className="hero-baptist">Baptistengemeinde</span>
            </h1>
            {/* Visit-us card */}
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

      {/* ================= WAS UNS WICHTIG IST ================= */}
      <section className="what-matters-section">
        <div className="container">
          <h2 className="main-title">Was uns wichtig ist</h2>
          <div className="what-matters-grid">
            <Link to="/uber-uns" className="matter-block hope">
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
            <Link to="/glaube" className="matter-block doctrine">
              <h3>Unsere Lehre</h3>
              <p>
                Wir bekennen uns freudig zum Londoner Baptistenbekenntnis von 1689
                – dem klassischen Ausdruck reformiert-baptistischer Überzeugungen
                zur Schrift, zur Gnade allein und zur Herrlichkeit Gottes in
                allem.
              </p>
              <span className="read-more">
                Unser vollständiges Bekenntnis lesen
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= CHURCH PHOTO SLIDESHOW WITH SCRIPTURE ================= */}
      <section className="church-slideshow-section">
        <div className="slideshow-container">
          {/* Slide 1 */}
          <div className="slide fade">
            <img src={church1} alt="Unsere Gemeinde – Gottesdienst" />
          </div>
          {/* Slide 2 */}
          <div className="slide fade">
            <img src={church2} alt="Unsere Gemeinde – Gemeinschaft" />
          </div>
          {/* Slide 3 */}
          <div className="slide fade">
            <img src={church3} alt="Unsere Gemeinde – Innenansicht" />
          </div>
	  {/* Slide 4 */}
          <div className="slide fade">
            <img src={church4} alt="Unsere Gemeinde – Außenansicht" />
          </div>
          {/* Add more slides here if you import more images */}

          {/* Scripture Overlay */}
	  {/*
          <div className="slideshow-overlay">
            <div className="scripture-box">
              <p className="scripture-text">
                „Denn aus Gnade seid ihr gerettet durch Glauben, und das nicht aus euch: Gottes Gabe ist es.“
              </p>
              <p className="scripture-reference">— Epheser 2,8</p>
            </div>
          </div>
	  */}
        </div>
      </section>
    </div>
  );
}

export default Home;
