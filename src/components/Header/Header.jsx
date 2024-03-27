import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <Link to="/" className="header__logo">
          <img src="/logo.png" alt="Logo" />
          <span className="header__company-name">Hooray!</span>
        </Link>
      </div>
      <div className="header__right">
        <nav className="header__nav">
          <ul>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/solutions">Solutions</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
