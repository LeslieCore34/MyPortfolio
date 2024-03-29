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
            className="Folder-image"
            src="./src/assets/folder.png"
            alt="Image d'accueil"
          />
        ) : (
          "Home"
        )}
      </div>
      <div className={`Presentation${menuSize ? " active" : ""}`}>
        {menuSize ? (
          <img
            className="Avatar"
            src="./scr/assets/girl-dynamic-gradient.png"
            alt="Avatar"
          />
        ) : (
          "Presentation"
        )}
      </div>
      <div>Projects</div>
      <div>Contact</div>
    </div>
  );
}
