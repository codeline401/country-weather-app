import "./ContryCard.css";

import { useState, useEffect } from "react";
import { getWeatherForCapital } from "../../services/WeatherService";

const CountryCard = ({ country }) => {
  const [weather, setWeather] = useState(null);
  const [loadingWeather, setLoadingWeather] = useState(false);
  const [weatherError, setWeatherError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoadingWeather(true);
      setWeatherError(null);

      try {
        const data = await getWeatherForCapital(
          country.capital[0],
          country.cca2
        );
        setWeather(data);
      } catch (error) {
        setWeatherError(error.message);
      } finally {
        setLoadingWeather(false);
      }
    };

    if (country.capital && country.cca2) {
      fetchWeather();
    }
  }, [country]);

  return (
    <div className="country-card">
      <div className="country-flag">
        <img
          src={country.flags.png}
          alt={`Drapeau de ${country.name.common}`}
          className="flag-image"
        />
      </div>
      <div className="country-info">
        <h2 className="country-name">{country.name.common}</h2>
        <p>
          <strong>Capitale:</strong>{" "}
          {country.capital ? country.capital[0] : "N/A"}
        </p>
        <p>
          <strong>Population:</strong> {country.population.toLocaleString()}
        </p>
        <p>
          <strong>Région:</strong> {country.region}
        </p>
        {country.languages && (
          <p>
            <strong>Langues:</strong>{" "}
            {Object.values(country.languages).join(", ")}
          </p>
        )}
        <div className="weather-section">
          <h3>
            Météo à {country.capital ? country.capital[0] : "la capitale"}
          </h3>

          {loadingWeather && (
            <p className="weather-loading">Chargement météo...</p>
          )}

          {weatherError && (
            <p className="weather-error">Données météo non disponible</p>
          )}

          {weather && (
            <div className="weather-info">
              <div className="weather-main">
                <img
                  src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  alt={weather.weather[0].description}
                />
                <span>{Math.round(weather.main.temp)}°C</span>
              </div>
              <p>{weather.weather[0].description}</p>
              <p>Humidité : {weather.main.humidity}</p>
              <p>Vent : {weather.wind.speed}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
