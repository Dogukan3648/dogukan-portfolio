import { useEffect, useReducer } from "react";
import { portfolioData } from "../data/portfolioData";
import AppContext from "./AppContext";
import { ACTIONS } from "./actions";
import { appReducer, getInitialState, initialState } from "./appReducer";
import { STORAGE_KEYS } from "./appStorage";

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    appReducer,
    initialState,
    getInitialState,
  );

  const { theme, language } = state;
  const content = portfolioData[language];

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
    localStorage.setItem(STORAGE_KEYS.LANGUAGE, language);
  }, [theme, language]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    dispatch({ type: ACTIONS.TOGGLE_THEME });
  };

  const toggleLanguage = () => {
    dispatch({ type: ACTIONS.TOGGLE_LANGUAGE });
  };

  const value = {
    theme,
    language,
    content,
    toggleTheme,
    toggleLanguage,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
