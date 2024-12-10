import { Box, Link, List, ListItem, Icon } from "@chakra-ui/react";
import Row from "../../Row";

const Networks = ({ networks }) =>
  networks.map(
    (network) =>
      network.url && (
        <ListItem key={network.name}>
          <Link href={network.url} isExternal>
            <Icon as={network.className} boxSize="1.5rem" />
          </Link>
        </ListItem>
      )
  );

const Footer = ({ data: { social } }) => {
  const goToHome = (e) => {
    e.preventDefault();
    document
      .getElementById("home")
      .scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Box as="footer" bg="gray.800" color="white" py={4} px={8}>
      <Row>
        <Box>
          <List display="flex" className="social-links" gap={4}>
            <Networks networks={social} />
          </List>

          <List className="copyright" mt={4}>
            <ListItem>&copy; Copyright 2020 Esteban Campos</ListItem>
            <ListItem>
              Design by{" "}
              <Link title="Styleshout" href="http://www.styleshout.com/" isExternal>
                Styleshout
              </Link>
            </ListItem>
          </List>
        </Box>
        <Box id="go-top" mt={4}>
          <Link title="Back to Top" onClick={goToHome}>
            <Icon className="icon-up-open" boxSize="1.5rem" />
          </Link>
        </Box>
      </Row>
    </Box>
  );
};

export default Footer;
