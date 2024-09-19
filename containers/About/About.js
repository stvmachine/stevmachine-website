import { Avatar, Box, Button, Flex, Link } from "theme-ui";
import { Themed } from "@theme-ui/mdx";
import Row from "../../components/Row";

const H2 = ({ children }) => (
  <Themed.h2
    sx={{
      font: '22px/30px "opensans-bold", sans-serif',
      color: "#fff",
      marginBottom: "12px",
    }}
  >
    {children}
  </Themed.h2>
);

const About = ({
  data: {
    name,
    bio,
    phone,
    email,
    resumeDownload,
    image,
    address,
  },
}) => (
  <Box
    id="about"
    sx={{
      background: "#2b2b2b",
      pt: "96px",
      pb: "66px",
      overflow: "hidden",
      color: "#7a7a7a",
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

          <Themed.p>{bio}</Themed.p>

          <Themed.p>
            You can follow my{" "}
            <Link href="/blog" target="_blank">
              blog
            </Link>
            .
          </Themed.p>
          <Flex sx={{ alignItems: "flex-start" }}>
            <Box>
              <H2>Contact Details</H2>
              <Themed.p>
                <span>{name}</span>
                <br />
                <span>
                  {address}
                </span>
                <br />
                <span>{phone}</span>
                <br />
                <Link
                  variant="underline"
                  target="_blank"
                  href={`mailto:${email}`}
                >
                  {email}
                </Link>
              </Themed.p>
            </Box>
            <Box sx={{ pl: 6 }}>
              <Button href={resumeDownload}>
                <i className="fa fa-download"></i> Download Resume
              </Button>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Row>
  </Box>
);

export default About;
