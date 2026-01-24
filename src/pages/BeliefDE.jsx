import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { confessionChapters } from "../data/confessionChapters";
import "./BeliefDE.css";

export default function Belief() {
  const navigate = useNavigate();
  const [openChapter, setOpenChapter] = useState(null);

  const toggleChapter = (chapterId) => {
    setOpenChapter(openChapter === chapterId ? null : chapterId);
  };

  return (
    <section className="belief-grid-section">
      {/* ================= HEADING ================= */}
      <h1 className="belief-heading">Unser Bekenntnis</h1>

      {/* ================= INTRO TEXT ================= */}
      <div className="belief-intro">
        <p className="belief-intro-text">
          Unser Glaubensbekenntnis wurde im Jahre{" "}
          <strong>1689</strong> von mehr als{" "}
          <strong>100 Baptistengemeinden</strong> herausgegeben.
          Der weltbekannte Baptistenpastor{" "}
          <strong>Charles Haddon Spurgeon</strong>{" "}
          <span className="belief-dates">(1834–1892)</span>
          {" "}schreibt über dieses Dokument:
        </p>

        <blockquote className="belief-quote">
          „Dieses alte Schriftstück ist eine ausgezeichnete Zusammenfassung der
          Dinge, die von uns mit größter Gewissheit geglaubt werden.“
        </blockquote>
      </div>


      {/* ================= CHAPTER LIST ================= */}
      <div className="chapter-grid">
        {confessionChapters.map((chapter) => (
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

