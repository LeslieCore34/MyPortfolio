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
        <h1 className="tech-stack-title">Tech Stack</h1>
        <div className="bullet-point-image">
          <span className="bullet">&#10004;</span>
          <h1 className="expertise-category-title">Web Developpement :</h1>
        </div>
        <p className="technical-text">{skills["text-web"]}</p>

        <div className="bullet-point-image">
          <span className="bullet">&#10004;</span>
          <h2 className="expertise-category-title">Server-side :</h2>
        </div>
        <p className="technical-text">{skills["text-server"]}</p>

        <div className="bullet-point-image">
          <span className="bullet">&#10004;</span>
          <h3 className="expertise-category-title">Database :</h3>
        </div>
        <p className="technical-text">{skills["text-database"]}</p>

        <div className="bullet-point-image">
          <span className="bullet">&#10004;</span>
          <h4 className="expertise-category-title">
            Version Controlling & Management :
          </h4>
        </div>
        <p className="technical-text management">{skills["text-version"]}</p>
        <div className="bullet-point-image">
          <span className="bullet">&#10004;</span>
          <h4 className="expertise-category-title">Deployement :</h4>
        </div>
        <p className="technical-text management">
          {skills["text-deployement"]}
        </p>
      </section>
    </>
  );
}
