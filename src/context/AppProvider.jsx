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

  const {
    theme,
    language,
    portfolioData: apiPortfolioData,
    loading,
    error,
  } = state;

  const content = apiPortfolioData?.[language] ?? portfolioData[language];

  useEffect(() => {
    const fetchPortfolioData = async () => {
      dispatch({ type: ACTIONS.FETCH_PORTFOLIO_START });

      try {
        const responseData = await postPortfolioData(portfolioData);

        dispatch({
          type: ACTIONS.FETCH_PORTFOLIO_SUCCESS,
          payload: responseData,
        });
      } catch (requestError) {
        dispatch({
          type: ACTIONS.FETCH_PORTFOLIO_ERROR,
          payload:
            requestError.response?.data?.message ||
            requestError.message ||
            "Portfolio data could not be loaded.",
        });
      }
    };

    fetchPortfolioData();
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
    error,
    toggleTheme,
    toggleLanguage,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
