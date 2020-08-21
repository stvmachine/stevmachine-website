/** @jsx jsx */
import { jsx, Grid, Card, Text, Image } from "theme-ui";
import { ResumeStyles } from "./Resume.styles";

const Resume = ({ data: { languages, education, work, favoriteTechs } }) => {
  const Education = education.map((education, index) => (
    <div key={`education-${index}`}>
      <h3>{education.school}</h3>
      <p className="info">
        {education.degree} <span>&bull;</span>
        <em className="date">{education.graduated}</em>
      </p>
      {education.description && <p>{education.description}</p>}
    </div>
  ));
  const Work = work.map((work, index) => (
    <div key={`work-${index}`}>
      <h3>{work.company}</h3>
      <p className="info">
        {work.title}
        <span>&bull;</span> <em className="date">{work.years}</em>
      </p>
      <p>{work.description}</p>
    </div>
  ));

  const FavoriteTechs = (
    <Grid width={[128, null, 192]}>
      {favoriteTechs.map((tech) => (
        <Card>
          <Image src={`/images/techs/${tech.image}`} variant="resumeTech" />
          <Text sx={{ fontWeight: "bold" }}>{tech.name}</Text>
        </Card>
      ))}
    </Grid>
  );

  const Languages = (
    <Grid width={[128, null, 192]}>
      {languages.map((language) => (
        <Card>
          <Image
            src={`/images/languages/${language.image}`}
            variant="resumeTech"
          />
          <Text sx={{ fontWeight: "bold" }}>{language.name}</Text>
        </Card>
      ))}
    </Grid>
  );

  return (
    <section id="resume" css={ResumeStyles}>
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{Education}</div>
          </div>
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">{Work}</div>
      </div>

      <div className="row" sx={{ mb: 100 }}>
        <div className="three columns header-col">
          <h1>
            <span>Favorites Tech</span>
          </h1>
        </div>

        <div className="nine columns main-col">{FavoriteTechs}</div>
      </div>

      <div className="row">
        <div className="three columns header-col">
          <h1>
            <span sx={{ lineHeight: "36px" }}>Favorites Languages</span>
          </h1>
        </div>

        <div className="nine columns main-col">{Languages}</div>
      </div>
    </section>
  );
};

export default Resume;
