import React from "react";
import "./Pastors.css";
import seniorPastor from "../assets/pastors/senior-pastor.jpg";
import deaconHans from "../assets/pastors/deacon-hans.jpg";

export default function PastorsDE() {
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
            Wer unter euch groß sein will, der sei euer Diener;
            und wer unter euch der Erste sein will, der sei euer Knecht.
          </p>
          <p className="scripture-reference">— Matthäus 20,26–27</p>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="leadership-section">
        <div className="container">
          <h2 className="pastors-heading">Gemeinde Leitung</h2>

          {/* PASTOR */}
          <div className="pastor-card">
            <div className="pastor-photo">
              <img src={seniorPastor} alt="Pastor Peter Schild" />
              <div className="glow"></div>
            </div>
            <div className="pastor-content">
	      <span className="label">Senior Pastor</span>
              <h1>Peter Schild</h1>
              <p className="bio">
	        Peter Schild ist verheiratet und Vater von fünf Kindern. Aus schwierigen
                Lebensumständen kommend und fern von Gott, wurde er als Teenager durch
                ein Traktat zum Glauben an Jesus Christus geführt. Er studierte
                Evangelische Theologie, wurde 2014 als Missionar nach Frankfurt
                ausgesandt und dient seit 2016 als Pastor der ERB Frankfurt. Neben
                seinem pastoralen Dienst ist er Autor mehrerer Bücher.
              </p>
            </div>
          </div>

          {/* DEACON */}
          <div className="pastor-card deacon">
            <div className="pastor-photo">
              <img src={deaconHans} alt="Diakon Hans Ewert" />
              <div className="glow"></div>
            </div>
            <div className="pastor-content">
              <span className="label">Diakon</span>
              <h1>Hans Ewert</h1>
              <p className="bio">
	        Hans Ewert ist verheiratet und Vater von drei Kindern. In einer
                russlanddeutschen Baptistengemeinde aufgewachsen, fand er als Teenager
                zum Glauben an Jesus Christus. Er ist ausgebildeter Kfz-Meister und
                arbeitet im technischen Kundensupport. Seit 2023 dient er der ERB
                Frankfurt als Diakon.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

