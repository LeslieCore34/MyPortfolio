import PropTypes from "prop-types";
import Typewriter from "./Typewritter";

export default function HomeSection({ menuOpen }) {
  return (
    <>
      <section
        id="section-home"
        className={`home ${menuOpen ? "menu-active" : ""}`}
      >
        <h1 className="fullstack">FULLSTACK DEVELOPER</h1>
        <p className="name"> Leslie</p>
        <p className="surname">ABAJOLI</p>
        <div className="container-for-animation">
          <p className="arrow"></p>
          <Typewriter />
        </div>
        <div className="contact-container-home">
          <a
            className="github "
            target="blank"
            href="https://github.com/LeslieCore34"
          ></a>

          <a
            className="email social-link"
            href="mailto:leslie.abajoli1989@gmail.com"
          ></a>
          <a
            className="linkedin social-link"
            target="blank"
            href="https://www.linkedin.com/in/leslie-abajoli/"
          ></a>
        </div>
      </section>
    </>
  );
}

HomeSection.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
};
