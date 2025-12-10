import React from "react";
import { Link } from "react-router-dom";
import "./UpEvents.css";

function UpEvents() {
  return (
    <div className="upevents-page">
      {/* MAIN CONTENT – CENTERED */}
      <div className="upevents-simple">
        <div className="container">
          <h1>Bevorstehende Veranstaltungen</h1>
          <p className="message">
            Wir werden diese Seite aktualisieren, sobald neue Konferenzen,
            Freizeiten oder besondere Treffen geplant sind.
          </p>
          <p className="sub-message">
            Bitte schauen Sie später wieder vorbei. Vielen Dank!
          </p>
          <Link to="/" className="home-btn">
            Zur Startseite
          </Link>
        </div>
      </div>

      {/* Footer & HeartCry partner strip now come globally from App.jsx/App.css */}
    </div>
  );
}

export default UpEvents;

