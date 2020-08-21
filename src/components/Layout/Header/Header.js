/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { HeaderStyles } from "./Header.styles";
import Nav from "./Nav";

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
          <Styled.a href={network.url} target="_blank">
            <i className={network.className}></i>
          </Styled.a>
        </li>
      )
  );

  const goToAbout = (e) => {
    e.preventDefault();
    document
      .getElementById("about")
      .scrollIntoView({ behaviour: "smooth", block: "start" });
  };

  return (
    <header id="home" css={HeaderStyles}>
      <Nav />

      <div className="row banner">
        <div className="banner-text">
          <Styled.h1 className="responsive-headline">I'm {name}.</Styled.h1>
          <Styled.h3>
            I'm a {city} based <span>{occupation}</span> {description}.
          </Styled.h3>
          <Styled.hr />
          <ul className="social">{networks}</ul>
        </div>
      </div>

      <Styled.p className="scrolldown">
        <Styled.a onClick={goToAbout}>
          <i className="icon-down-circle"></i>
        </Styled.a>
      </Styled.p>
    </header>
  );
};

export default Header;
