import { useLanguageContext } from "../context/langageContext";
import skillsData from "../data/skillsData.json";

export default function TechnicalSkills() {
  const { language } = useLanguageContext();
  const skills = skillsData[language];

  return (
    <>
      <section
        id="section-presentation"
        className="expertise-category-container"
      >
        <div className="bullet-point-image">
          <span className="bullet">&#10004;</span>
          <h1 className="expertise-category-title">Database :</h1>
        </div>
        <p className="technical-text">{skills["text-database"]}</p>

        <div className="bullet-point-image">
          <span className="bullet">&#10004;</span>
          <h2 className="expertise-category-title">Back-end :</h2>
        </div>
        <p className="technical-text">{skills["text-backend"]}</p>

        <div className="bullet-point-image">
          <span className="bullet">&#10004;</span>
          <h3 className="expertise-category-title">Front-end :</h3>
        </div>
        <p className="technical-text">{skills["text-frontend"]}</p>

        <div className="bullet-point-image">
          <span className="bullet">&#10004;</span>
          <h4 className="expertise-category-title">Project Management :</h4>
        </div>
        <p className="technical-text management">{skills["text-management"]}</p>
      </section>
    </>
  );
}
