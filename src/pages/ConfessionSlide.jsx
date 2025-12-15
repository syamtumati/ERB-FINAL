import { useParams, useNavigate } from "react-router-dom";
import { confessionChapters } from "../data/confessionChapters";
import "./ConfessionSlide.css";

export default function ConfessionSlide() {
  const { chapterId, pointId } = useParams();
  const navigate = useNavigate();

  const chapter = confessionChapters.find(c => c.chapter === chapterId);
  const index = chapter.points.findIndex(p => p.id === pointId);
  const point = chapter.points[index];

  if (!point) return null;

  return (
    <section className="slide-page">
      <div className="slide-container">
        <h1 className="slide-title">
          {point.id}. {point.title}
        </h1>

        <p className="slide-text">{point.text}</p>

        <ul className="slide-references">
          {point.references.map(ref => (
            <li key={ref}>{ref}</li>
          ))}
        </ul>

        <div className="slide-navigation">
          {index > 0 && (
            <button
              onClick={() =>
                navigate(`/bekenntnis/${chapterId}/${chapter.points[index - 1].id}`)
              }
            >
              ← Zurück
            </button>
          )}

          <button
            onClick={() => navigate("/glaube")}
            className="slide-back"
          >
            Kapitelübersicht
          </button>

          {index < chapter.points.length - 1 && (
            <button
              onClick={() =>
                navigate(`/bekenntnis/${chapterId}/${chapter.points[index + 1].id}`)
              }
            >
              Weiter →
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

