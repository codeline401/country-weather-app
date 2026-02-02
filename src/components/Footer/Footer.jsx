import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="app-footer" role="contentinfo">
      <div className="footer-row">
        <span className="credit">
          by <strong>codeline401</strong> • {year}
        </span>
        <span className="made-with"> Made with ❤️, React & Vite</span>
      </div>
      <div className="badges">
        <span className="badge">REST Countries</span>
        <span className="badge">OpenWeather</span>
        <span className="badge">CSS ✨</span>
      </div>
    </footer>
  );
};

export default Footer;
