import { useEffect, useReducer } from "react";
import { portfolioData } from "../data/portfolioData";
import { postPortfolioData } from "../services/portfolioApi";
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

  const { theme, language, success, loading, error } = state;

  const content = portfolioData[language];

  useEffect(() => {
    const sendPortfolioData = async () => {
      dispatch({ type: ACTIONS.FETCH_PORTFOLIO_START });

      try {
        await postPortfolioData(portfolioData);

        dispatch({
          type: ACTIONS.FETCH_PORTFOLIO_SUCCESS,
        });
      } catch (requestError) {
        dispatch({
          type: ACTIONS.FETCH_PORTFOLIO_ERROR,
          payload:
            requestError.response?.data?.message ||
            requestError.message ||
            "Portfolio data could not be sent.",
        });
      }
    };

    void sendPortfolioData();
  }, []);

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
    loading,
    success,
    error,
    toggleTheme,
    toggleLanguage,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
