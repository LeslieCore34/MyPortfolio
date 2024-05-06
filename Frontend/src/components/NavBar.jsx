import PropTypes from "prop-types";
import { useEffect } from "react";
import ButtonLanguage from "./ButtonLanguage";

export default function NavBar({ menuOpen, setMenuOpen }) {
  const handleResize = () => {
    if (window.innerWidth >= 600 && menuOpen) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

  const handleClick = (e) => {
    if (window.innerWidth < 600) {
      e.stopPropagation();
      setMenuOpen((prevMenuOpen) => !prevMenuOpen);
    }
  };

  return (
    <nav className="NavBar">
      <div
        className={`burger-menu ${menuOpen ? "active" : ""}`}
        onClick={handleClick}
      >
        {" "}
        <p className="burger-image"></p>{" "}
      </div>

      <div className={`menu ${menuOpen ? "active" : "large"}`}>
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
      <ButtonLanguage />
    </nav>
  );
}

NavBar.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.bool.isRequired,
};
