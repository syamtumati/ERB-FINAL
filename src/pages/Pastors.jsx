import React from "react";
import { Link } from "react-router-dom";
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

      {/* BLOCK 1 – HEARTCRY FILM */}
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

      {/* BLOCK 2 – PASTORS DETAILS */}
      <div className="pastors-container">
        {/* 🔹 NEW COMMUNITY LEADERSHIP HEADING */}
        <h2 className="pastors-heading">Unsere Leitung</h2>

        {/* PASTOR PETER SCHILD */}
        <section className="pastor-card">
          <div className="pastor-photo">
            <img src={seniorPastor} alt="Pastor Peter Schild" />
            <div className="glow"></div>
          </div>
          <div className="pastor-content">
            <span className="label">Gemeindeleitung</span>
            <h1>Peter Schild</h1>
            <h2>Pastor der Evangelisch-Reformierte Baptistengemeinde</h2>
            <p className="bio">
              Peter Schild ist verheiratet und Vater von fünf Kindern. Er wuchs
              in Vernachlässigung auf und lebte in tiefer Gottlosigkeit, bis er
              als Teenager durch ein Traktat zum Glauben kam. Er studierte
              Evangelische Theologie, wurde 2014 als Missionar nach Frankfurt
              ausgesandt und dient seit 2016 als Pastor der Evangelisch-Reformierte Baptistengemeinde.
            </p>
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
            <h2>Diakon der Evangelisch-Reformierte Baptistengemeinde</h2>
            <p className="bio">
              Hans Ewert ist verheiratet und Vater von drei Kindern. Er wurde in
              eine russlanddeutsche Baptistengemeinde hineingeboren und
              bekehrte sich mit zehn Jahren. Er arbeitet im technischen
              Kundensupport und dient seit 2023 als Diakon in der Evangelisch-Reformierte Baptistengemeinde.
              Frankfurt.
            </p>
          </div>
        </section>
      </div>

      {/* ❌ FOOTER & PARTNER STRIP REMOVED – now handled globally in App.jsx */}
    </div>
  );
};

export default Pastors;

