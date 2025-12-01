import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Messages.css";

const Messages = () => {
  const channelId = "UCOmNpldlhucUnDLvTRckbLQ"; // ERB Frankfurt
  const [videos, setVideos] = useState([]);

  // ⚠️ Use env var, don't hardcode the key
  const API_KEY = import.meta.env.VITE_YT_API_KEY; // or import.meta.env.VITE_YT_API_KEY for Vite

  useEffect(() => {
    const fetchPeterSchildVideos = async () => {
      try {
        const params = new URLSearchParams({
          key: API_KEY,
          part: "snippet",
          channelId,
          maxResults: "13",
          order: "date",
          type: "video",
          q: "Peter Schild", // only videos matching this text
        });

        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?${params.toString()}`
        );
        const data = await response.json();

        if (!data.items) {
          console.error("YouTube API error:", data);
          return;
        }

        // Optional extra safety: filter again by title/description containing "Peter Schild"
        const filteredItems = data.items.filter((item) => {
          const title = item.snippet?.title?.toLowerCase() || "";
          const description = item.snippet?.description?.toLowerCase() || "";
          return (
            title.includes("peter schild") || description.includes("peter schild")
          );
        });

        const parsedVideos = filteredItems.map((item) => ({
          id: item.id.videoId,
          title: item.snippet.title,
          published: item.snippet.publishedAt,
          thumbnail:
            item.snippet.thumbnails?.high?.url ||
            item.snippet.thumbnails?.medium?.url ||
            item.snippet.thumbnails?.default?.url,
        }));

        setVideos(parsedVideos);
      } catch (err) {
        console.error("YouTube API fetch error:", err);
      }
    };

    if (API_KEY) {
      fetchPeterSchildVideos();
    } else {
      console.error("Missing REACT_APP_YT_API_KEY / VITE_YT_API_KEY env var");
    }
  }, [API_KEY, channelId]);

  return (
    <div className="messages-page">
      <div className="messages-hero">
        <h1>Neueste Predigten – Peter Schild</h1>
      </div>

      {/* GRID OF VIDEOS */}
      <div className="video-grid">
        {videos.map((video) => (
          <div className="video-card" key={video.id}>
            <a
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={video.thumbnail} alt={video.title} className="thumb" />
            </a>
            <h3 className="video-title">{video.title}</h3>
            <p className="video-date">
              {new Date(video.published).toLocaleDateString()}
            </p>
          </div>
        ))}

        {videos.length === 0 && (
          <p style={{ textAlign: "center", width: "100%" }}>
            Keine Videos für &quot;Peter Schild&quot; gefunden.
          </p>
        )}
      </div>

      <div className="subscribe-button">
        <a
          href={`https://www.youtube.com/channel/${channelId}?sub_confirmation=1`}
          target="_blank"
          rel="noopener noreferrer"
          className="gold-btn"
        >
          Subscribe on YouTube
          <div className="shine"></div>
        </a>
      </div>

      <footer className="clean-footer">
        <div className="footer-inner">
          <div className="church-name">Gnadenkirche Frankfurt</div>

          <nav className="footer-nav">
            <Link to="/glaube">Glaube</Link>
            <Link to="/Über uns">Über uns</Link>
            <Link to="/dienst">Dienst &amp; Mission</Link>
            <Link to="/veranstaltungen">Veranstaltungen</Link>
            <Link to="/spenden">Spenden</Link>
            <Link to="/kontakt">Kontakt</Link>
          </nav>

          <div className="copyright">
            © {new Date().getFullYear()} Gnadenkirche Frankfurt. Alle Rechte
            vorbehalten.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Messages;

