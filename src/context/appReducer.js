import { ACTIONS } from "./actions";
import { STORAGE_KEYS } from "./appStorage";

const VALID_THEMES = ["light", "dark"];
const VALID_LANGUAGES = ["en", "tr"];

export const initialState = {
  theme: "light",
  language: "en",
};

const getValidStoredValue = (key, validValues, fallbackValue) => {
  const storedValue = localStorage.getItem(key);

  return validValues.includes(storedValue) ? storedValue : fallbackValue;
};

export function getInitialState(defaultState) {
  return {
    theme: getValidStoredValue(
      STORAGE_KEYS.THEME,
      VALID_THEMES,
      defaultState.theme,
    ),

    language: getValidStoredValue(
      STORAGE_KEYS.LANGUAGE,
      VALID_LANGUAGES,
      defaultState.language,
    ),
  };
}

export function appReducer(state, action) {
  switch (action.type) {
    case ACTIONS.TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };

    case ACTIONS.TOGGLE_LANGUAGE:
      return {
        ...state,
        language: state.language === "en" ? "tr" : "en",
      };

    default:
      return state;
  }
}
