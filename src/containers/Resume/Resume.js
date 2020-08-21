/** @jsx jsx */
import { jsx, Grid, Card, Text, Image, Styled } from "theme-ui";
import { ResumeStyles } from "./Resume.styles";

const Resume = ({ data: { languages, education, work, favoriteTechs } }) => {
  const Education = education.map((education, index) => (
    <div key={`education-${index}`}>
      <Styled.h3>{education.school}</Styled.h3>
      <Styled.p className="info">
        {education.degree} <span>&bull;</span>
        <Styled.em className="date">{education.graduated}</Styled.em>
      </Styled.p>
      {education.description && <Styled.p>{education.description}</Styled.p>}
    </div>
  ));
  const Work = work.map((work, index) => (
    <div key={`work-${index}`}>
      <Styled.h3>{work.company}</Styled.h3>
      <Styled.p className="info">
        {work.title}
        <span>&bull;</span> <Styled.em className="date">{work.years}</Styled.em>
      </Styled.p>
      <Styled.p>{work.description}</Styled.p>
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
          <Styled.h1>
            <span>Education</span>
          </Styled.h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{Education}</div>
          </div>
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <Styled.h1>
            <span>Work</span>
          </Styled.h1>
        </div>

        <div className="nine columns main-col">{Work}</div>
      </div>

      <div className="row" sx={{ mb: 100 }}>
        <div className="three columns header-col">
          <Styled.h1>
            <span>Favorites Tech</span>
          </Styled.h1>
        </div>

        <div className="nine columns main-col">{FavoriteTechs}</div>
      </div>

      <div className="row">
        <div className="three columns header-col">
          <Styled.h1>
            <span sx={{ lineHeight: "36px" }}>Favorites Languages</span>
          </Styled.h1>
        </div>

        <div className="nine columns main-col">{Languages}</div>
      </div>
    </section>
  );
};

export default Resume;
