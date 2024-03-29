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
    <div className="NavBar-Container">
      <div className={`Home${menuSize ? " active" : ""}`}>
        {menuSize ? (
          <img
            className="House"
            src="./src/assets/home.png"
            alt="Image d'accueil"
          />
        ) : (
          "Home"
        )}
      </div>
      <div className={`Presentation${menuSize ? " active" : ""}`}>
        {menuSize ? (
          <img className="Avatar" src="./scr/assets/women.png" alt="Avatar" />
        ) : (
          "Presentation"
        )}
      </div>
      <div className={`Project${menuSize ? " active" : ""}`}>
        {menuSize ? (
          <img
            className="Project"
            src="./scr/assets/folder.png"
            alt="Folder image"
          />
        ) : (
          "Project"
        )}
      </div>
      <div className={`Contact${menuSize ? " active" : ""}`}>
        {menuSize ? (
          <img className="Contact" src="./scr/assets/contact.png" alt="Phone" />
        ) : (
          "Contact"
        )}
      </div>
    </div>
  );
}
