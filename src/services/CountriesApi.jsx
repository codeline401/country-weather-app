import axios from "axios";

const API_BASE_URL = "https://restcountries.com/v3.1";

export const fetchCountries = async (name) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/name/${name}`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error("Aucun pays trouvé avec ce nom.");
    }
    throw new Error("Erreur lors de la récupération des pays.");
  }
};
