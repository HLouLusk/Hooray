import { Link } from "react-router-dom";
import "./Header.scss";
import Logo from "../../assets/Logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <Link to="/" className="header__logo">
          <img src={Logo} alt="Balloon Logo" />
          <span className="header__company-name">Hooray!</span>
        </Link>
      </div>
      <div className="header__right">
        <nav className="header__nav">
          <ul>
            <li>
              <Link to="/services">SERVICES</Link>
            </li>
            <li>
              <Link to="/portfolio">PORTFOLIO</Link>
            </li>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/blog">BLOGS</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
