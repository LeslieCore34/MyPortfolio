import PropTypes from "prop-types";

export default function HomeSection({ menuOpen }) {
  console.log(menuOpen);
  return (
    <>
      <section
        id="section-home"
        className={`home ${menuOpen ? "menu-active" : ""}`}
      >
        <h1 className="fullstack">FULLSTACK DEVELOPER</h1>
        <p className="name"> Leslie</p>
        <p className="surname">ABAJOLI</p>

        <p className="container-social">
          <p className="github "></p>
          <p className="linkedin social-link"></p>
          <p className="email social-link"></p>
        </p>
      </section>
    </>
  );
}

HomeSection.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
};
