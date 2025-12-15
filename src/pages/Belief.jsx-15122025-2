import { useNavigate } from "react-router-dom";
import { confessionChapters } from "../data/confessionChapters";
import "./Belief.css";

export default function Belief() {
  const navigate = useNavigate();

  return (
    <section className="belief-grid-section">
      {/* HERO TITLE */}
      <h1 className="belief-heading">
        The Baptist Confession of Faith of 1689
      </h1>

      {/* GRID */}
      <div className="chapter-grid">
        {confessionChapters.map((chapter) => (
          <div key={chapter.chapter} className="chapter-wrapper">

            {/* CHAPTER BOX */}
            <div className="chapter-rect">
              <span className="chapter-number">{chapter.chapter}.</span>
              <span className="chapter-title">{chapter.title}</span>
            </div>

            {/* POINTS (HOVER ONLY) */}
            <ul className="chapter-points">
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

