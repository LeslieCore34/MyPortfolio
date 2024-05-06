import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useLanguageContext } from "../context/langageContext";

function ProjectCard({ project }) {
  const { language } = useLanguageContext();

  return (
    <section className="global-projects-container" id={project.id}>
      <h1 className="project-title">{project.title[language]}</h1>
      <div className="image-container">
        <img
          src={project.image}
          alt={project.title[language]} // Utiliser la traduction pour l'alt
          className="project-image"
        />
      </div>
      <div className="project-short-description">
        {project.description[language]}
        <p className="how-to-use">{project.usage[language]}</p>
      </div>
      <div className="container-for-lists">
        <div className="technology-list-container">
          <h2 className="technology-title">Technologies</h2>
          <ul className="technologies">
            {project.technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
        <div className="functionnalities-list-container">
          <h3 className="functionnalites-title">Functionalities</h3>
          <ul className="functionalities">
            {project.functionalities[language].map((func) => (
              <li key={func}>{func}</li>
            ))}
          </ul>
        </div>
      </div>
      <Link to={project.link} target="_blank" className="link">
        {project.linkText[language]}
      </Link>
    </section>
  );
}

// Mise à jour des validations de PropTypes
ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.objectOf(PropTypes.string).isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.objectOf(PropTypes.string).isRequired,
    usage: PropTypes.objectOf(PropTypes.string).isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    functionalities: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string))
      .isRequired,
    link: PropTypes.string.isRequired,
    linkText: PropTypes.objectOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default ProjectCard;
