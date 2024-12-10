import { Box, Flex, Avatar, Button, Link, Text, Heading } from "@chakra-ui/react";
import Row from "../../components/Row";

const About = ({
  data: { name, bio, phone, email, resumeDownload, image, address },
}) => (
  <Box
    as="section"
    id="about"
    bg="#2b2b2b"
    pt="96px"
    pb="66px"
    overflow="hidden"
    color="#7a7a7a"
  >
    <Row>
      <Flex justify="center" mx="auto">
        <Box width={["100%", "25%"]}>
          <Avatar src={`/images/${image}`} size="2xl" />
        </Box>
        <Box width="75%" pr="5%">
          <Heading
            as="h2"
            fontSize="22px"
            lineHeight="30px"
            fontWeight="bold"
            color="#fff"
            mb="12px"
          >
            About Me
          </Heading>

          <Text mb="16px">{bio}</Text>

          <Text mb="16px">
            You can follow my{" "}
            <Link href="/blog" color="#11abb0" isExternal>
              blog
            </Link>
            .
          </Text>

          <Flex align="flex-start" gap="2rem">
            <Box>
              <Heading
                as="h2"
                fontSize="22px"
                lineHeight="30px"
                fontWeight="bold"
                color="#fff"
                mb="12px"
              >
                Contact Details
              </Heading>
              <Text>
                <span>{name}</span>
                <br />
                <span>{address}</span>
                <br />
                <span>{phone}</span>
                <br />
                <Link
                  href={`mailto:${email}`}
                  color="#11abb0"
                  textDecoration="underline"
                  isExternal
                >
                  {email}
                </Link>
              </Text>
            </Box>
            <Box>
              <Button
                as="a"
                href={resumeDownload}
                leftIcon={<i className="fa fa-download"></i>}
                bg="#11abb0"
                color="white"
                _hover={{ bg: "#0e939c" }}
              >
                Download Resume
              </Button>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Row>
  </Box>
);

export default About;
