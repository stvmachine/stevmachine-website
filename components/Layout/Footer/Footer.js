import { Themed } from "@theme-ui/mdx";
import { FooterStyles } from "./Footer.styles";
import Row from "../../Row";

const Networks = ({ networks }) =>
  networks.map(
    (network) =>
      network.url && (
        <li key={network.name}>
          <Themed.a href={network.url}>
            <i className={network.className}></i>
          </Themed.a>
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
      <Row>
        <div>
          <ul className="social-links">
            <Networks networks={social} />
          </ul>

          <ul className="copyright">
            <li>&copy; Copyright 2020 Esteban Campos</li>
            <li>
              Design by{" "}
              <Themed.a title="Styleshout" href="http://www.styleshout.com/">
                Styleshout
              </Themed.a>
            </li>
          </ul>
        </div>
        <div id="go-top">
          <Themed.a title="Back to Top" onClick={goToHome}>
            <i className="icon-up-open"></i>
          </Themed.a>
        </div>
      </Row>
    </footer>
  );
};

export default Footer;
