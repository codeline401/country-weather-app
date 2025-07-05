import axios from "axios";

const API_KEY = "648fd83e9b12c7f26c3bc5c94080bf53";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const getWeatherForCapital = async (capital, countryCode) => {
  try {
    const repsonse = await axios.get(BASE_URL, {
      params: {
        q: `${capital}, ${countryCode}`,
        appid: API_KEY,
        units: "metric",
        lang: "fr",
      },
    });
    return repsonse.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des données météo :", error);
    throw new Error("Impossible de récupérer les données météo"); // Propagate the error to be handled by the caller
  }
};
