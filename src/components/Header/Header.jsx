import "./Header.fixed.css";

const Header = () => {
  return (
    <header className="app-header" role="banner">
      <div className="title-wrap">
        <h1 className="app-title" aria-label="CONTRY WEATHER APP">
          CONTRY WEATHER APP
        </h1>
        <div className="title-underline" aria-hidden="true" />
        <p className="subtitle">Météo et infos des pays, en un clin d'œil ✨</p>
      </div>
    </header>
  );
};

export default Header;
