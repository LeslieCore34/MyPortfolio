import { useLanguageContext } from "../context/langageContext";

export default function ButtonLanguage() {
  const { language, setLanguage } = useLanguageContext();

  const toggleLanguage = () => {
    setLanguage((lang) => (lang === "en" ? "fr" : "en"));
  };

  return (
    <div className="language-toggle" onClick={toggleLanguage}>
      <div className={`slider ${language === "en" ? "right" : "left"}`}>
        {language === "en" ? "EN" : "FR"}
      </div>
    </div>
  );
}
