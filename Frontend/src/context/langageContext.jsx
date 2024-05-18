import { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

const LanguageContext = createContext();

function LanguageContextProvider({ children }) {
  const [language, setLanguage] = useState("en");

  const context = useMemo(
    () => ({
      language,
      setLanguage,
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={context}>
      {children}
    </LanguageContext.Provider>
  );
}

LanguageContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { LanguageContext, LanguageContextProvider };
// eslint-disable-next-line react-refresh/only-export-components
export const useLanguageContext = () => useContext(LanguageContext);
