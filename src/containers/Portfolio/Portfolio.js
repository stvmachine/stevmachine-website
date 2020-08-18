/** @jsx jsx */
import { jsx, Image } from "theme-ui";
import { PortfolioStyles } from "./Portfolio.styles";

const Projects = ({ projects }) =>
  projects &&
  projects.map((project) => {
    const projectImage = "/images/portfolio/" + project.image;

    return (
      <div key={project.title} className="columns portfolio-item">
        <div className="item-wrap">
          <a
            target="_blank"
            href={project.url}
            title={project.title}
            sx={{ textAlign: "center" }}
          >
            <Image src={projectImage} variant="portfolio" />
            <div className="overlay">
              <div className="portfolio-item-meta">
                <h5>{project.title}</h5>
                <p>{project.category}</p>
              </div>
            </div>
            <div className="link-icon">
              <i className="fa fa-link"></i>
            </div>
          </a>
        </div>
      </div>
    );
  });

const Portfolio = ({ data: { projects } }) => (
  <section id="portfolio" css={PortfolioStyles}>
    <div className="row">
      <div className="twelve columns collapsed">
        <h1>Check Out Some of My Works.</h1>

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
