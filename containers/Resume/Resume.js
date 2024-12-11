/** @jsx jsx */
import { jsx, Grid, Card, Text, Image, Styled, Flex, Box } from "theme-ui";
import { Info, Date } from "./Resume.styles";
import Row from "../../components/Row";

const ResumeH1 = ({ children, sx, ...props }) => (
  <Styled.h1
    sx={{
      mt: 0,
      pr: [null, null, "20%"],
      lineHeight: "36px",
      font: '18px/24px "opensans-bold", sans-serif',
      textTransform: "uppercase",
      letterSpacing: ["3px", "1px"],
      textAlign: ["center", null, "inherit"],
      padding: "0 20px",
      ...sx,
    }}
    {...props}
  >
    {children}
  </Styled.h1>
);

const ResumeH3 = ({ children, sx, ...props }) => (
  <Styled.h3
    sx={{
      mt: 0,
      font: '25px/30px "opensans-bold", sans-serif',
      textAlign: ["center", null, "inherit"],
      ...sx,
    }}
    {...props}
  >
    {children}
  </Styled.h3>
);

const SubSection = ({ title, children }) => (
  <Row
    sx={{
      display: "flex",
      flexDirection: ["column", null, "row"],
      pb: "24px !important",
      p: ["0 30px", null, null, null],
      ":not(:last-of-type)": {
        mb: "48px !important",
        borderBottom: "1px solid #E8E8E8",
      },
    }}
  >
    <Box
      sx={{
        width: [null, null, "25%"],
        pt: [0, null],
        mb: [48, null],
        textAlign: ["center", null, "inherit"],
      }}
    >
      <ResumeH1>
        <span
          sx={{
            borderBottom: "3px solid #11abb0",
          }}
        >
          {title}
        </span>
      </ResumeH1>
    </Box>
    <Box sx={{ width: [null, null, "75%"] }}>{children}</Box>
  </Row>
);

const Resume = ({ data: { languages, education, work, favoriteTechs } }) => (
  <section
    id="resume"
    sx={{ background: "#fff", pt: 90, pb: 72, overflow: "hidden" }}
  >
    <SubSection title="Education">
      {education.map((education, index) => (
        <Flex key={`education-${index}`} sx={{ flexDirection: "column" }}>
          <ResumeH3>{education.school}</ResumeH3>
          <Info
            sx={{
              textAlign: ["center", null, "inherit"],
            }}
          >
            {education.degree} <span>&bull;</span>
            <Date>{education.graduated}</Date>
          </Info>
          {education.description && (
            <Styled.p>{education.description}</Styled.p>
          )}
        </Flex>
      ))}
    </SubSection>

    <SubSection title="Work">
      {work.map((work, index) => (
        <Flex key={`work-${index}`} sx={{ flexDirection: "column" }}>
          <ResumeH3>{work.company}</ResumeH3>
          <Info
            sx={{
              textAlign: ["center", null, "inherit"],
            }}
          >
            {work.title}
            <span>&bull;</span> <Date>{work.years}</Date>
          </Info>
          {Array.isArray(work.description) ? (
            <ul style={{ listStyle: "inside", padding: 0 }}>
              {work.description.map((item, idx) => (
                <li key={`description-${index}-${idx}`} style={{ padding: 4 }}>
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <Styled.p>{work.description}</Styled.p>
          )}
        </Flex>
      ))}
    </SubSection>

    <SubSection title="Favorites Tech">
      <Grid width={[128, null, 192]}>
        {favoriteTechs.map((tech) => (
          <Card>
            <Image src={`/images/techs/${tech.image}`} variant="resumeTech" />
            <Text sx={{ fontWeight: "bold" }}>{tech.name}</Text>
          </Card>
        ))}
      </Grid>
    </SubSection>

    <SubSection title="Favorites Languages">
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
    </SubSection>
  </section>
);

export default Resume;
