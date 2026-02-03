import React from "react";
import "./Messages.css";

export default function MessagesEN() {
  const uploadsPlaylistId = "UUOmNpldlhucUnDLvTRckbLQ";

  return (
    <div className="messages-page">
      <div className="messages-hero">
        <h1>Latest Sermons</h1>
      </div>

      <div className="video-grid">
        <div className="youtube-playlist-wrapper">
          <iframe
            title="Latest Sermons – Grace Church Frankfurt"
            src={`https://www.youtube.com/embed/videoseries?list=${uploadsPlaylistId}&maxResults=12`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      <div className="subscribe-button">
        <a
          href="https://www.youtube.com/@GnadenkircheFrankfurt?sub_confirmation=1"
          target="_blank"
          rel="noopener noreferrer"
          className="gold-btn"
        >
          Subscribe on YouTube
          <div className="shine"></div>
        </a>
      </div>
    </div>
  );
}

