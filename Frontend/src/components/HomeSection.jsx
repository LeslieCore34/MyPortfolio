import { useEffect, useState } from "react";

export default function HomeSection() {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsShown(true), 1000); // Délai de 1 seconde avant l'apparition
  }, []);
  return (
    <>
      <div id="section-home" className="home">
        <p className="fullstack"> FULLSTACK DEVELOPER</p>
        <p
          className="welcome"
          style={{
            opacity: isShown ? 1 : 0,
            transition: "opacity 1s ease-in-out",
          }}
        >
          Welcome
        </p>
      </div>
    </>
  );
}
