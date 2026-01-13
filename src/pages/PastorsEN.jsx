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
            „Whoever wants to become great among you must be your servant,
            and whoever wants to be first must be your slave.“
          </p>
          <p className="scripture-reference">Matthew 20:26–27</p>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="leadership-section">
        <div className="container">
          <h2 className="pastors-heading">Church Leadership</h2>

          {/* PASTOR */}
          <div className="pastor-card">
            <div className="pastor-photo">
              <img src={seniorPastor} alt="Pastor Peter Schild" />
              <div className="glow"></div>
            </div>
            <div className="pastor-content">
              <span className="label">Pastor</span>
              <h1>Peter Schild</h1>
              <p className="bio">
	        Peter Schild is married and the father of five children. Coming from
                difficult circumstances and living far from God, he was brought to
                faith in Jesus Christ as a teenager through reading a gospel tract. He
                studied Protestant Theology, was sent to Frankfurt as a missionary in
                2014, and has served as pastor of ERB Frankfurt since 2016. In addition
                to his pastoral ministry, he is the author of several books.
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
              <p className="bio">
	        Hans Ewert is married and the father of three children. He grew up in a
                Russian-German Baptist church and came to faith in Jesus Christ as a
                teenager. He is a trained automotive master technician and works in
                technical customer support. Since 2023, he has served ERB Frankfurt as a
                deacon.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

