import ContryCard from "../ContryCard/ContryCard";
import "./CountryList.css";

const CountryList = ({ countries }) => {
  if (countries.length === 0) {
    return null;
  }

  return (
    <div className="country-list-container">
      {countries.map((country) => (
        <ContryCard key={country.cca3} country={country} />
      ))}
    </div>
  );
};

export default CountryList;
