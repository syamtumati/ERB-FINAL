import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { confessionChaptersEN } from "../data/confessionChaptersEN";
import "./BeliefEN.css"; // reuse same styles (recommended)

export default function BeliefEN() {
  const navigate = useNavigate();
  const [openChapter, setOpenChapter] = useState(null);

  const toggleChapter = (chapterId) => {
    setOpenChapter(openChapter === chapterId ? null : chapterId);
  };

  return (
    <section className="belief-grid-section">
      <h1 className="belief-heading">Our Confession</h1>

      <div className="chapter-grid">
        {confessionChaptersEN.map((chapter) => (
          <div key={chapter.chapter} className="chapter-wrapper">

            {/* TEXT ROW */}
            <div
              className="chapter-text-row"
              onClick={() => toggleChapter(chapter.chapter)}
            >
              <span className="chapter-arrow">
                {openChapter === chapter.chapter ? "▾" : "›"}
              </span>
              <span className="chapter-text">
                {chapter.chapter}. {chapter.title}
              </span>
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
                  {point.id}. {point.title}
                </li>
              ))}
            </ul>

          </div>
        ))}
      </div>
    </section>
  );
}

