/** @jsx jsx */
import { jsx } from "theme-ui";
import { HeaderStyles } from "./Header.styles";

const navItems = [
  { id: "home", name: "Home" },
  { id: "about", name: "About" },
  { id: "resume", name: "Resume" },
  { id: "portfolio", name: "Works" },
];

const Header = ({
  data: {
    name,
    occupation,
    description,
    address: { city },
    social,
  },
}) => {
  const networks = social.map(
    (network) =>
      network.url && (
        <li key={network.name}>
          <a href={network.url} target="_blank">
            <i className={network.className}></i>
          </a>
        </li>
      )
  );

  return (
    <header id="home" css={HeaderStyles}>
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          {navItems.map((navItem) => (
            <li className="current" key={navItem.id}>
              <a className="smoothscroll" href={`#${navItem.id}`}>
                {navItem.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">I'm {name}.</h1>
          <h3>
            I'm a {city} based <span>{occupation}</span> {description}.
          </h3>
          <hr />
          <ul className="social">{networks}</ul>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
