/** @jsx jsx */
import { jsx, Image, Styled } from "theme-ui";
import { PortfolioStyles } from "./Portfolio.styles";

const Projects = ({ projects }) =>
  projects &&
  projects.map((project) => {
    const projectImage = "/images/portfolio/" + project.image;

    return (
      <div key={project.title} className="columns portfolio-item">
        <div className="item-wrap">
          <Styled.a
            target="_blank"
            href={project.url}
            title={project.title}
            sx={{ textAlign: "center" }}
          >
            <Image src={projectImage} variant="portfolio" />
            <div className="overlay">
              <div className="portfolio-item-meta">
                <Styled.h5>{project.title}</Styled.h5>
                <Styled.p>{project.category}</Styled.p>
              </div>
            </div>
            <div className="link-icon">
              <i className="fa fa-link"></i>
            </div>
          </Styled.a>
        </div>
      </div>
    );
  });

const Portfolio = ({ data: { projects } }) => (
  <section id="portfolio" css={PortfolioStyles}>
    <div className="row">
      <div className="twelve columns collapsed">
        <Styled.h1>Check Out Some of My Works.</Styled.h1>
        <div
          id="portfolio-wrapper"
          className="bgrid-quarters s-bgrid-thirds cf"
        >
          <Projects projects={projects} />
        </div>
      </div>
    </div>
  </section>
);

export default Portfolio;
