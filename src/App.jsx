import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import CountryList from "./components/CountryList/CountryList";
import Notification from "./components/Notification/Notification";
import { fetchCountries } from "./services/countriesApi";
import "./App.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setCountries([]);
      return;
    }

    const searchCountries = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchCountries(searchTerm);
        setCountries(data);
      } catch (err) {
        setError(err.message);
        setCountries([]);
      } finally {
        setLoading(false);
      }
    };

    const timer = setTimeout(() => {
      searchCountries();
    }, 2000); // 5 seconds delay

    return () => clearTimeout(timer);
  }, [searchTerm]);

  return (
    <div className="app-container">
      <h1>Recherche un pays</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {loading && <p className="loading">Chargement...</p>}
      {error && <Notification message={error} type="error" />}

      {countries.length > 10 ? (
        <Notification
          message="Trop de résultats, veuillez affiner votre recherche."
          type="warning"
        />
      ) : (
        <CountryList countries={countries} />
      )}
    </div>
  );
};

export default App;
