import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { confessionChapters } from "../data/confessionChapters";
import "./Belief.css";

export default function Belief() {
  const navigate = useNavigate();

  // ✅ Track open chapter (for mobile)
  const [openChapter, setOpenChapter] = useState(null);

  const toggleChapter = (chapterId) => {
    setOpenChapter(openChapter === chapterId ? null : chapterId);
  };

  return (
    <section className="belief-grid-section">
      <h1 className="belief-heading">
	Unser Bekenntnis
      </h1>

      <div className="chapter-grid">
        {confessionChapters.map((chapter) => (
          <div key={chapter.chapter} className="chapter-wrapper">

            {/* CHAPTER BOX */}
            <div
              className="chapter-rect"
              onClick={() => toggleChapter(chapter.chapter)}
            >
              <span className="chapter-number">{chapter.chapter}.</span>
              <span className="chapter-title">{chapter.title}</span>
            </div>

            {/* POINTS */}
            <ul
              className={`chapter-points-below ${
                openChapter === chapter.chapter ? "open" : ""
              }`}
            >
              {chapter.points.map((point) => (
                <li
                  key={point.id}
                  onClick={() =>
                    navigate(`/bekenntnis/${chapter.chapter}/${point.id}`)
                  }
                >
                  <strong>{point.id}.</strong> {point.title}
                </li>
              ))}
            </ul>

          </div>
        ))}
      </div>
    </section>
  );
}

