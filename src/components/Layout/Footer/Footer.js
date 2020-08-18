/** @jsx jsx */
import { jsx } from "theme-ui";
import { FooterStyles } from "./Footer.styles";

const Networks = ({ networks }) =>
  networks.map(
    (network) =>
      network.url && (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      )
  );

const Footer = ({ data: { social } }) => {
  const goToHome = (e) => {
    e.preventDefault();
    document
      .getElementById("home")
      .scrollIntoView({ behaviour: "smooth", block: "start" });
  };
  return (
    <footer css={FooterStyles}>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            <Networks networks={social} />
          </ul>

          <ul className="copyright">
            <li>&copy; Copyright 2020 Esteban Campos</li>
            <li>
              Design by{" "}
              <a title="Styleshout" href="http://www.styleshout.com/">
                Styleshout
              </a>
            </li>
          </ul>
        </div>
        <div id="go-top">
          <a title="Back to Top" onClick={goToHome}>
            <i className="icon-up-open"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
