import { Image, Grid, Box, Text, Heading } from "@chakra-ui/react";
import { PortfolioSection, PortfolioItem, PortfolioItemMeta, ItemWrap } from "./Portfolio.styles";
import Row from "../../components/Row";

const Projects = ({ projects }) =>
  projects &&
  projects.map((project) => {
    const projectImage = "/images/portfolio/" + project.image;

    return (
      <PortfolioItem key={project.title} mb={[36, null, 40]}>
        <ItemWrap>
          <Box
            as="a"
            target="_blank"
            href={project.url}
            title={project.title}
            display="block"
            textAlign="center"
            position="relative"
          >
            <Image
              src={projectImage}
              alt={project.title}
              borderRadius="lg"
              objectFit="cover"
              w="100%"
              h="auto"
            />
            <Box
              className="overlay"
              position="absolute"
              top="0"
              left="0"
              w="100%"
              h="100%"
              bg="rgba(0, 0, 0, 0.5)"
              display="flex"
              alignItems="center"
              justifyContent="center"
              opacity="0"
              _hover={{ opacity: 1 }}
              transition="opacity 0.3s"
            >
              <PortfolioItemMeta>
                <Heading as="h5" size="md" color="white">
                  {project.title}
                </Heading>
                <Text color="white" fontSize="sm">
                  {project.category}
                </Text>
              </PortfolioItemMeta>
            </Box>
            <Box
              className="link-icon"
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              color="white"
              fontSize="24px"
            >
              <i className="fa fa-link"></i>
            </Box>
          </Box>
        </ItemWrap>
      </PortfolioItem>
    );
  });

const Portfolio = ({ data: { projects } }) => (
  <PortfolioSection id="portfolio">
    <Row>
      <Heading
        as="h1"
        fontSize="15px"
        lineHeight="24px"
        fontWeight="semibold"
        textTransform="uppercase"
        letterSpacing="1px"
        textAlign="center"
        mb={48}
        color="#95a3a3"
      >
        Check Out Some of My Works.
      </Heading>
      <Grid
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
        gap={6}
        mb={12}
      >
        <Projects projects={projects} />
      </Grid>
    </Row>
  </PortfolioSection>
);

export default Portfolio;
