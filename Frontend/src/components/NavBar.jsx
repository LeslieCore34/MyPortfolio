import { useEffect, useState } from "react";

export default function NavBar() {
  const [menuSize, setMenuSize] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const largeurEcran = window.innerWidth;
      setMenuSize(largeurEcran < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="NavBar">
      <div className="NavBar-Container">
        <a
          href="#section-home"
          className={`home-link link ${menuSize ? "active" : ""}`}
        >
          {menuSize ? null : "Home"}
        </a>
        <a
          href="#section-presentation"
          className={`presentation-link link ${menuSize ? "active" : ""}`}
        >
          {menuSize ? null : "Presentation"}
        </a>
        <a
          href="#section-projects"
          className={`projects-link link ${menuSize ? "active" : ""}`}
        >
          {menuSize ? null : "Projects"}
        </a>
        <a
          href="#section-contact"
          className={`contact-link link ${menuSize ? "active" : ""}`}
        >
          {menuSize ? null : "Contact"}
        </a>
      </div>
    </nav>
  );
}
