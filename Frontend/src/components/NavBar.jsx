import PropTypes from "prop-types";
import { useEffect } from "react";
import ButtonLanguage from "./ButtonLanguage";
import { useLanguageContext } from "../context/langageContext";
import navbarData from "../data/navbarData.json";

export default function NavBar({ menuOpen, setMenuOpen }) {
  const { language } = useLanguageContext();
  const data = navbarData[language];

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
    <div className="navbar-container">
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
              {data["home"]}
            </a>
            <a href="#section-presentation" className="section-menu">
              {data["presentation"]}
            </a>
            <a href="#section-projects" className="section-menu">
              {data["projects"]}
            </a>
            <a href="#section-contact" className="section-menu">
              Contact
            </a>
          </div>
        </div>
        <ButtonLanguage />
      </nav>
    </div>
  );
}

NavBar.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.bool.isRequired,
};
