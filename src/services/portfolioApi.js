import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_REQRES_API_KEY;

export const postPortfolioData = async (portfolioData) => {
  const response = await axios.post(API_URL, portfolioData, {
    headers: {
      "x-api-key": API_KEY,
    },
  });

  return response.data;
};
