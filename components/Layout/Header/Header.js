import { useRef, useState } from "react";
import {
  Box,
  Text,
  Heading,
  Link,
  Icon,
  List,
  ListItem,
  Divider,
  Button,
} from "@chakra-ui/react";
import Nav from "./Nav";
import { Wrapper, Banner, BannerText, ScrollDown } from "./Header.styles";
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
        height: `${window.innerHeight}px`,
      });
    }
  }, []);

  const networks = social.map(
    (network) =>
      network.url && (
        <ListItem key={network.name}>
          <Link href={network.url} isExternal>
            <Icon as={network.className} boxSize="1.5rem" />
          </Link>
        </ListItem>
      )
  );

  const goToAbout = (e) => {
    e.preventDefault();
    XMLDocument;
    document
      .getElementById("about")
      .scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Wrapper
      id="home"
      ref={targetRef}
      style={height}
      bg="gray.800"
      color="white"
    >
      <Nav />

      <Banner textAlign="center" py={10}>
        <BannerText>
          <Heading as="h1" size="2xl" mb={4}>
            I'm {name}.
          </Heading>
          <Text fontSize="lg" mb={4}>
            I'm a {city}-based{" "}
            <Text as="span" fontWeight="bold">
              {occupation}
            </Text>{" "}
            {description}.
          </Text>
          <Divider borderColor="gray.600" my={4} />
          <List display="flex" justifyContent="center" gap={4}>
            {networks}
          </List>
        </BannerText>
      </Banner>

      <ScrollDown onClick={goToAbout}>
        <Icon as="icon-down-circle" />
      </ScrollDown>
    </Wrapper>
  );
};

export default Header;
