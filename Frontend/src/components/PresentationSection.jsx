import presentationData from "../data/presentationData.json";
import { useLanguageContext } from "../context/langageContext";

/* eslint-disable react/no-unescaped-entities */
export default function PresentationSection() {
  const { language } = useLanguageContext();
  const data = presentationData[language];

  return (
    <>
      <section
        id="section-presentation"
        className="presentation-main-container"
      >
        <h1 className="presentation-title">{data["presentation-title"]}</h1>
        <div className="presentation-second-container">
          <p className="presentation-one">
            {data["presentation-texts"]["presentation-one"]}
          </p>
          <p className="presentation-two">
            {data["presentation-texts"]["presentation-two"]}
          </p>
          <p className="presentation-three">
            {data["presentation-texts"]["presentation-three"]}
          </p>
        </div>
      </section>
    </>
  );
}
