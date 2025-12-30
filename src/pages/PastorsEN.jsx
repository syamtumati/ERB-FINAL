import React from "react";
import "./Pastors.css";
import seniorPastor from "../assets/pastors/senior-pastor.jpg";
import deaconHans from "../assets/pastors/deacon-hans.jpg";

export default function PastorsEN() {
  return (
    <div className="pastors-page">

      {/* BACKGROUND ORBS */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>

      {/* SCRIPTURE */}
      <section className="leadership-scripture-section">
        <div className="container">
          <p className="scripture-text">
            Whoever wants to become great among you must be your servant,
            and whoever wants to be first must be your slave.
          </p>
          <p className="scripture-reference">— Matthew 20:26–27</p>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="leadership-section">
        <div className="container">
          <h2 className="pastors-heading">Our Leadership</h2>

          {/* PASTOR */}
          <div className="pastor-card">
            <div className="pastor-photo">
              <img src={seniorPastor} alt="Pastor Peter Schild" />
              <div className="glow"></div>
            </div>
            <div className="pastor-content">
              <span className="label">Senior Pastor</span>
              <h1>Peter Schild</h1>
              <h2>Pastor of the Evangelical Reformed Baptist Church</h2>
              <p className="bio">
                Peter Schild is married and the father of five children.
                He grew up in neglect and lived in deep godlessness
                until, as a teenager, he came to faith through a gospel tract.
                He studied Protestant theology,
                was sent to Frankfurt as a missionary in 2014,
                and has served as pastor of the
                Evangelical Reformed Baptist Church since 2016.
              </p>
            </div>
          </div>

          {/* DEACON */}
          <div className="pastor-card deacon">
            <div className="pastor-photo">
              <img src={deaconHans} alt="Deacon Hans Ewert" />
              <div className="glow"></div>
            </div>
            <div className="pastor-content">
              <span className="label">Deacon</span>
              <h1>Hans Ewert</h1>
              <h2>Deacon of the Evangelical Reformed Baptist Church</h2>
              <p className="bio">
                Hans Ewert is married and the father of three children.
                He was born into a Russian-German Baptist church
                and was converted at the age of ten.
                He works in technical customer support
                and has served as a deacon of the
                Evangelical Reformed Baptist Church in Frankfurt since 2023.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

