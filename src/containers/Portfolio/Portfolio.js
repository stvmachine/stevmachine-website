/** @jsx jsx */
import { jsx, Image, Styled, Grid, Flex } from "theme-ui";
import {
  PortfolioSection,
  PortfolioItem,
  PortfolioItemMeta,
  ItemWrap,
} from "./Portfolio.styles";
import Row from "../../components/Row";

const Projects = ({ projects }) =>
  projects &&
  projects.map((project) => {
    const projectImage = "/images/portfolio/" + project.image;

    return (
      <PortfolioItem key={project.title} sx={{ mb: [36, null, 40] }}>
        <ItemWrap>
          <Styled.a
            target="_blank"
            href={project.url}
            title={project.title}
            sx={{ textAlign: "center" }}
          >
            <Image src={projectImage} variant="portfolio" />
            <div className="overlay">
              <PortfolioItemMeta>
                <Styled.h5>{project.title}</Styled.h5>
                <Styled.p>{project.category}</Styled.p>
              </PortfolioItemMeta>
            </div>
            <div className="link-icon">
              <i className="fa fa-link"></i>
            </div>
          </Styled.a>
        </ItemWrap>
      </PortfolioItem>
    );
  });

const Portfolio = ({ data: { projects } }) => (
  <PortfolioSection id="portfolio">
    <Row>
      <Styled.h1
        sx={{
          font: '15px/24px "opensans-semibold", sans-serif',
          textTransform: "uppercase",
          letterSpacing: "1px",
          textAlign: "center",
          mb: 48,
          color: "#95a3a3",
        }}
      >
        Check Out Some of My Works.
      </Styled.h1>
      <Grid sx={{ display: "flex", flexWrap: "wrap" }}>
        <Projects projects={projects} />
      </Grid>
    </Row>
  </PortfolioSection>
);

export default Portfolio;
