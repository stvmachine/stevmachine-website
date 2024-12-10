import { Grid, Box, Flex, Text, Image, Heading } from "@chakra-ui/react";
import { Info, Date } from "./Resume.styles";
import Row from "../../components/Row";

const ResumeH1 = ({ children, sx, ...props }) => (
  <Heading
    as="h1"
    sx={{
      mt: 0,
      pr: [null, null, "20%"],
      lineHeight: "36px",
      fontSize: "18px",
      fontWeight: "bold",
      textTransform: "uppercase",
      letterSpacing: ["3px", "1px"],
      textAlign: ["center", null, "inherit"],
      padding: "0 20px",
      ...sx,
    }}
    {...props}
  >
    {children}
  </Heading>
);

const ResumeH3 = ({ children, sx, ...props }) => (
  <Heading
    as="h3"
    sx={{
      mt: 0,
      fontSize: "25px",
      fontWeight: "bold",
      textAlign: ["center", null, "inherit"],
      ...sx,
    }}
    {...props}
  >
    {children}
  </Heading>
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
            <Text>{education.description}</Text>
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
          <Text>{work.description}</Text>
        </Flex>
      ))}
    </SubSection>

    <SubSection title="Favorites Tech">
      <Grid templateColumns="repeat(auto-fill, minmax(128px, 1fr))" gap={4}>
        {favoriteTechs.map((tech) => (
          <Box key={`tech-${tech.name}`} border="1px" borderColor="gray.200" p={4} textAlign="center">
            <Image src={`/images/techs/${tech.image}`} alt={tech.name} />
            <Text fontWeight="bold">{tech.name}</Text>
          </Box>
        ))}
      </Grid>
    </SubSection>

    <SubSection title="Favorites Languages">
      <Grid templateColumns="repeat(auto-fill, minmax(128px, 1fr))" gap={4}>
        {languages.map((language) => (
          <Box key={`lang-${language.name}`} border="1px" borderColor="gray.200" p={4} textAlign="center">
            <Image
              src={`/images/languages/${language.image}`}
              alt={language.name}
            />
            <Text fontWeight="bold">{language.name}</Text>
          </Box>
        ))}
      </Grid>
    </SubSection>
  </section>
);

export default Resume;
