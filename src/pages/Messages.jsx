import React, { useEffect, useState } from "react";
import "./Messages.css";

const Messages = () => {
  const channelId = "UCOmNpldlhucUnDLvTRckbLQ"; // ERB Frankfurt
  const [videos, setVideos] = useState([]);

  // ⚠️ Use env var, don't hardcode the key
  const API_KEY = import.meta.env.VITE_YT_API_KEY;

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
          q: "Peter Schild",
        });

        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?${params.toString()}`
        );
        const data = await response.json();

        if (!data.items) {
          console.error("YouTube API error:", data);
          return;
        }

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
      console.error("Missing VITE_YT_API_KEY env var");
    }
  }, [API_KEY, channelId]);

  return (
    <div className="messages-page">
      <div className="messages-hero">
        <h1>Neueste Predigten</h1>
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
          <p className="no-videos">
            Keine Videos für &quot;&quot; gefunden.
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
      {/* Footer & partner strip now come from App.jsx / App.css */}
    </div>
  );
};

export default Messages;

