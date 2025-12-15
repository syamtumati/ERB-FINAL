import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { confessionChapters } from "../data/confessionChapters";
import "./Belief.css";

export default function Belief() {
  const navigate = useNavigate();
  const [openChapter, setOpenChapter] = useState(null);

  const toggleChapter = (chapter) => {
    setOpenChapter(openChapter === chapter ? null : chapter);
  };

  return (
    <section className="belief-grid-section">
      <h1 className="belief-heading">Bekenntnis</h1>

      <div className="chapter-grid">
        {confessionChapters.map(chapter => (
          <div key={chapter.chapter} className="chapter-wrapper">

            {/* CHAPTER BOX */}
            <div
              className="chapter-rect"
              onClick={() => toggleChapter(chapter.chapter)}
            >
              {chapter.chapter}. {chapter.title}
            </div>

            {/* EXPANDED POINTS */}
            {openChapter === chapter.chapter && (
              <ul className="chapter-points">
                {chapter.points.map(point => (
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
            )}

          </div>
        ))}
      </div>
    </section>
  );
}

