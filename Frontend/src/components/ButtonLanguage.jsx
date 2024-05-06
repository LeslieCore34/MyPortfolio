import { useLanguageContext } from "../context/langageContext";

export default function ButtonLanguage() {
  const { language, setLanguage } = useLanguageContext();

  const toggleLanguage = () => {
    setLanguage((lang) => (lang === "en" ? "fr" : "en"));
  };
  const sliderClass = `slider ${language === "en" ? "english" : "french"}`;

  return (
    <div className="language-toggle" onClick={toggleLanguage}>
      <div className={sliderClass}>{language === "en" ? "EN" : "FR"}</div>
    </div>
  );
}
