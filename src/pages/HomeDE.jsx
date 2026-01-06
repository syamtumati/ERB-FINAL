import React, { useEffect } from "react";  // ← Added useEffect
import { Link } from "react-router-dom";
import "./HomeDE.css";

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
          </div>
        </div>
      </section>


      {/* ================= VISIT US ================= */}
      <section className="visit-section">
        <div className="container visit-content">
          <h2 className="visit-title">Besuchen Sie uns diesen Sonntag</h2>

          <div className="visit-divider">
            <span />
            <span className="visit-icon">✧</span>
            <span />
          </div>

          <p className="visit-time">Sonntag · 16:30 Uhr</p>
          <p className="visit-address">
            Hohemarkstraße 75<br />
            61440 Oberursel
          </p>
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
	        Wir sind eine Gemeinde mit Jesus Christus im Zentrum. Wir glauben und
                bekennen, dass Er der Sohn Gottes, unser Herr und Erlöser ist. Unser
                ganzes Leben wollen wir aus Gottes Gnade und zu Gottes Ehre führen.
              </p>
              <span className="read-more">
                Unsere Hirten &amp; Vision kennenlernen
              </span>
            </Link>
            <Link to="/glaube" className="matter-block doctrine">
              <h3>Was wir glauben</h3>
              <p>
	        Wir glauben, dass die Bibel Gottes unfehlbares Wort ist. Unser Glaube
                gründet sich allein auf die Heilige Schrift und wird im baptistischen
                Glaubensbekenntnis von 1689 zusammengefasst.
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
