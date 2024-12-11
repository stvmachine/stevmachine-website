/** @jsx jsx */
import { jsx, Avatar, Box, Button, Flex, Link, Styled } from "theme-ui";
import NextLink from "next/link";
import Row from "../../components/Row";

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
  data: { name, bio, email, resumeDownload, image, address },
}) => (
  <Box
    id="about"
    sx={{
      background: "#2b2b2b",
      pt: "96px",
      pb: "66px",
      overflow: "hidden",
      color: "#cccccc",
    }}
    as="section"
  >
    <Row>
      <Flex sx={{ mx: "auto", justifyContent: "center" }}>
        <Box
          sx={{
            width: [0, "25%"],
          }}
        >
          <Avatar src={`/images/${image}`} />
        </Box>
        <Box
          sx={{
            width: "75%",
            pr: "5%",
          }}
        >
          <H2>About Me</H2>

          <Styled.p>{bio}</Styled.p>

          <Styled.p>
            You can follow my{" "}
            <Link href="/blog" target="_blank">
              blog
            </Link>
            .
          </Styled.p>
          <Flex sx={{ alignItems: "flex-start" }}>
            <Box>
              <H2>Contact Details</H2>
              <Styled.p>
                <span>{name}</span>
                <br />
                <span>{address}</span>
                <br />
                <Link
                  variant="underline"
                  target="_blank"
                  href={`mailto:${email}`}
                >
                  {email}
                </Link>
              </Styled.p>
            </Box>
            <Box sx={{ pl: 6 }}>
              <NextLink href="/api/download-resume" passHref>
                <Button as="a">
                  <i className="fa fa-download"></i> Download Resume
                </Button>
              </NextLink>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Row>
  </Box>
);

export default About;
