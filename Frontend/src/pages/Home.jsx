import NavBar from "../components/NavBar";
import HomeSection from "../components/HomeSection";
import PresentationSection from "../components/PresentationSection";
import TechnicalStack from "../components/TechnicalStack";

export default function Home() {
  return (
    <>
      <NavBar />
      <HomeSection />
      <PresentationSection />
      <TechnicalStack />
      <div id="#section-projects">Contenu de la page Projects</div>
      <div id="#section-contact">Contenu de la page Contact</div>
    </>
  );
}
