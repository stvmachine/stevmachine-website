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
    document
      .getElementById("about")
      .scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Box id="home" ref={targetRef} style={height} bg="gray.800" color="white">
      <Nav />

      <Box textAlign="center" py={10}>
        <Heading as="h1" size="2xl" mb={4}>
          I'm {name}.
        </Heading>
        <Text fontSize="lg" mb={4}>
          I'm a {city}-based <Text as="span" fontWeight="bold">{occupation}</Text> {description}.
        </Text>
        <Divider borderColor="gray.600" my={4} />
        <List display="flex" justifyContent="center" gap={4}>
          {networks}
        </List>
      </Box>

      <Box textAlign="center" mt={8}>
        <Button
          variant="ghost"
          onClick={goToAbout}
          colorScheme="teal"
          rightIcon={<Icon as="icon-down-circle" />}
        >
          Scroll Down
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
