import { Themed } from "@theme-ui/mdx";
import { useRef, useState } from "react";
import {
  Wrapper,
  Banner,
  BannerText,
  SocialList,
  ScrollDown,
} from "./Header.styles";
import Nav from "./Nav";
import { useIsomorphicLayoutEffect } from "../../../lib/hooks";

const Header = ({
  data: {
    name,
    occupation,
    description,
    address: { city },
    social,
  },
}) => {
  const targetRef = useRef();
  const [height, setHeight] = useState({});

  useIsomorphicLayoutEffect(() => {
    if (targetRef.current) {
      setHeight({
        height: window.innerHeight + "px",
      });
    }
  }, []);

  const networks = social.map(
    (network) =>
      network.url && (
        <li key={network.name}>
          <Themed.a href={network.url} target="_blank">
            <i className={network.className}></i>
          </Themed.a>
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
    <Wrapper id="home" ref={targetRef} style={height}>
      <Nav />

      <Banner>
        <BannerText>
          <Themed.h1 className="responsive-headline">I'm {name}.</Themed.h1>
          <Themed.h3>
            I'm a {city} based <span>{occupation}</span> {description}.
          </Themed.h3>
          <Themed.hr />
          <SocialList>{networks}</SocialList>
        </BannerText>
      </Banner>

      <Themed.p>
        <ScrollDown onClick={goToAbout}>
          <i className="icon-down-circle"></i>
        </ScrollDown>
      </Themed.p>
    </Wrapper>
  );
};

export default Header;
