import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./HomeEN.css"; // You can use the same CSS as HomeDE or create a separate one if needed
import heroImage from "../assets/images/hero-message.jpg";
import heroMobileVideo from "../assets/videos/hero-mobile.mp4";
// Church slideshow images
import church1 from "../assets/images/church1.jpg";
import church2 from "../assets/images/church2.jpg";
import church3 from "../assets/images/church3.jpg";
import church4 from "../assets/images/church4.jpg";

function HomeEN() {


   /* ================= SCROLL TO BOTTOM ================= */
  const scrollToNextSection = () => {
  document
    .getElementById("home-next-section")
    ?.scrollIntoView({
      behavior: "smooth"
    });
  };

  // ================= SLIDESHOW LOGIC – SAME AS GERMAN VERSION =================
  useEffect(() => {
    const slides = document.querySelectorAll('.slide');
    if (slides.length === 0) return;
    let current = 0;
    const showSlide = (index) => {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });
    };
    showSlide(current);
    const interval = setInterval(() => {
      current = (current + 1) % slides.length;
      showSlide(current);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page">
      {/* ================= HERO ================= */}
      <section className="hero-video-section">
        <img
          className="hero-video"
          src={heroImage}
          alt="Grace Church Frankfurt – City View"
        />
	{/* Mobile video */}
        <video
          className="hero-media hero-video-mobile"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={heroMobileVideo} type="video/mp4" />
        </video>

        {/* ===== SCROLL ARROWS (CLICKABLE) ===== */}
        <button
          className="scroll-arrows"
          onClick={scrollToNextSection}
          aria-label="Zum Seitenende scrollen"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className="hero-overlay">
          <div className="hero-content-centered">
            <h1 className="hero-church-name">
              Evangelical-Reformed
              <span className="hero-baptist">Baptist Church</span>
            </h1>

	    {/* SLOGAN – NEW */}
            <div className="hero-slogan">
              <p className="hero-slogan-main">Christ in the Center</p>
              <p className="hero-slogan-sub">ERB Frankfurt</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* ================= VISIT US ================= */}
      <section id="home-next-section" className="visit-section">
        <div className="container visit-content">
          <h2 className="visit-title">Visit us this Sunday</h2>

          <div className="visit-divider">
            <span />
            <span className="visit-icon">✧</span>
            <span />
          </div>

          <p className="visit-time">Sunday · 4:30 PM</p>
          <p className="visit-address">
            Hohemarkstraße 75<br />
            61440 Oberursel
          </p>
        </div>
      </section>

      {/* ================= WHAT MATTERS TO US ================= */}
      <section className="what-matters-section">
        <div className="container">
          <h2 className="main-title">What Matters to Us</h2>
          <div className="what-matters-grid">
            <Link to="/uber-uns" className="matter-block hope">
              <h3>Who We Are</h3>
              <p>
	        We are a church with Jesus Christ at the center. We believe and confess
                that He is the Son of God, our Lord and Savior. We desire to live our
                entire lives by God’s grace and for God’s glory.
              </p>
              <span className="read-more">
                Meet Our Pastors & Vision
              </span>
            </Link>
            <Link to="/glaube" className="matter-block doctrine">
              <h3>What We Believe</h3>
              <p>
	        We believe that the Bible is God’s infallible Word. Our faith is grounded
                solely in Holy Scripture and is summarized in the Baptist Confession of
                Faith of 1689.
              </p>
              <span className="read-more">
                Read Our Full Confession
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
            <img src={church1} alt="Our Church – Worship Service" />
          </div>
          {/* Slide 2 */}
          <div className="slide fade">
            <img src={church2} alt="Our Church – Fellowship" />
          </div>
          {/* Slide 3 */}
          <div className="slide fade">
            <img src={church3} alt="Our Church – Interior View" />
          </div>
          {/* Slide 4 */}
          <div className="slide fade">
            <img src={church4} alt="Our Church – Exterior View" />
          </div>
          {/* Scripture Overlay – Uncomment when ready */}
          {/*
          <div className="slideshow-overlay">
            <div className="scripture-box">
              <p className="scripture-text">
                “For by grace you have been saved through faith. And this is not your own doing; it is the gift of God.”
              </p>
              <p className="scripture-reference">— Ephesians 2:8</p>
            </div>
          </div>
          */}
        </div>
      </section>
    </div>
  );
}

export default HomeEN;
