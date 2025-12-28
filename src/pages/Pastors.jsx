import React from "react";
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

      {/* ================= SCRIPTURE AT THE TOP ================= */}
      <section className="leadership-scripture-section">
        <div className="container">
          <p className="scripture-text">
            Wer unter euch groß sein will, der sei euer Diener; und wer unter euch der Erste sein will, der sei euer Knecht.
          </p>
          <p className="scripture-reference">— Matthäus 20,26–27</p>
        </div>
      </section>

      {/* ================= UNSERE LEITUNG ================= */}
      <section className="leadership-section">
        <div className="container">
          <h2 className="pastors-heading">Unsere Leitung</h2>

          {/* PASTOR PETER SCHILD */}
          <div className="pastor-card">
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
          </div>

          {/* DIAKON HANS EWERT */}
          <div className="pastor-card deacon">
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
                Kundensupport und dient seit 2023 als Diakon in der Evangelisch-Reformierte Baptistengemeinde
                Frankfurt.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pastors;
