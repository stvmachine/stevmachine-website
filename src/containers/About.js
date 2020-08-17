/** @jsx jsx */
import { jsx, Avatar, Box, Button, Flex, Styled } from "theme-ui";
import Row from "../components/Row";

const H2 = ({ children }) => (
  <Styled.h2
    sx={{
      font: '22px/30px "opensans-bold", sans-serif',
      color: "#fff",
      marginBottom: "12px",
    }}
  >
    {children}
  </Styled.h2>
);

const About = ({
  data: {
    name,
    bio,
    phone,
    email,
    resumeDownload,
    image,
    address: { street, city, state, zip },
  },
}) => {
  const profilepic = "/images/" + image;

  return (
    <Box
      id="about"
      sx={{
        background: "#2b2b2b",
        pt: "96px",
        pb: "66px",
        overflow: "hidden",
        color: "#7a7a7a",
      }}
    >
      <Row>
        <Flex sx={{ mx: "auto", justifyContent: "center" }}>
          <Box
            sx={{
              flexGrow: 1,
            }}
          >
            <Avatar src={profilepic} />
          </Box>
          <Box
            sx={{
              flexGrow: 3,
              pr: "5%",
            }}
          >
            <H2>About Me</H2>

            <p>{bio}</p>
            <Box sx={{ flex: "1 1 auto" }}>
              <Box>
                <H2>Contact Details</H2>
                <p>
                  <span>{name}</span>
                  <br />
                  <span>
                    {street}
                    <br />
                    {city} {state}, {zip}
                  </span>
                  <br />
                  <span>{phone}</span>
                  <br />
                  <span>{email}</span>
                </p>
              </Box>
              <Box sx={{ pt: "6" }}>
                <Button href={resumeDownload} variant="secondary">
                  {/*<i className="fa fa-download"></i> */}Download Resume
                </Button>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Row>
    </Box>
  );
};

export default About;
