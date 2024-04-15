import PropTypes from "prop-types";

export default function NavBar({ menuOpen, setMenuOpen }) {
  // const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  console.log(menuOpen);

  return (
    <nav className="NavBar">
      <div
        className={`burger-menu ${menuOpen ? "active" : ""}`}
        onClick={handleClick}
      >
        {" "}
        <p className="burger-image"></p>{" "}
      </div>

      <div className={`menu ${menuOpen ? "active" : "hidden"}`}>
        <div className="menu-container">
          <a href="#section-home" className="section">
            Home
          </a>
          <a href="#section-presentation" className="section-menu">
            Presentation
          </a>
          <a href="#section-projects" className="section-menu">
            Projects
          </a>
          <a href="#section-contact" className="section-menu">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.bool.isRequired,
};
