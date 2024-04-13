import NavBar from "../components/NavBar";
import HomeSection from "../components/HomeSection";
import PresentationSection from "../components/PresentationSection";
import StackImages from "../components/StackImages";
import TechnicalSkills from "../components/TechnicalSkills";
import StreetArt from "../components/StreetArt";
import Contact from "../components/Contact";
import Eshop from "../components/Eshop";

export default function Home() {
  return (
    <>
      <NavBar />
      <HomeSection />
      <div className="grid-container">
        <PresentationSection />
        <TechnicalSkills />
        <StackImages />
      </div>
      <div className="grid-container-projects">
        <StreetArt />
        <Eshop />
      </div>
      <Contact />
    </>
  );
}
