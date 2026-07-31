import axios from "axios";

const API_URL = "https://reqres.in/api/workintech";

export const postPortfolioData = async (portfolioData) => {
  const response = await axios.post(API_URL, portfolioData, {
    headers: {
      "x-api-key": import.meta.env.VITE_REQRES_API_KEY,
      "Content-Type": "application/json",
    },
  });
  return response.data;
};
