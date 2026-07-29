import { createContext, useState } from "react";
import { portfolioData } from "../data/portfolioData";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("en");

  const content = portfolioData[language];

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "tr" : "en"));
  };

  const value = { theme, language, content, toggleTheme, toggleLanguage };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
