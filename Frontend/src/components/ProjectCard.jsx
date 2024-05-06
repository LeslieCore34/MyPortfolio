import PropTypes from "prop-types"; // Import de PropTypes depuis la bibliothèque prop-types
import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <section className="global-projects-container" id={project.id}>
      <h1 className="project-title">{project.title}</h1>
      <div className="image-container">
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
        />
      </div>
      <div className="project-short-description">
        {project.description}
        <p className="how-to-use">{project.usage}</p>
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
          <h3 className="functionnalites-title">Description :</h3>
          <ul className="functionalities">
            {project.functionalities.map((func) => (
              <li key={func}>{func}</li>
            ))}
          </ul>
        </div>
      </div>
      <Link to={project.link} target="_blank" className="link">
        {project.linkText}
      </Link>
    </section>
  );
}

// Définition des validations de props avec PropTypes
ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    usage: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    functionalities: PropTypes.arrayOf(PropTypes.string).isRequired,
    link: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
