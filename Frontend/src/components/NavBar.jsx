import { useState } from "react";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
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

      <div className={`menu ${menuOpen ? "active" : "hidden"}`}>
        <div className="menu-container">
          <a href="#section-home" className="section-menu">
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
