import React from "react";
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Avatar,
} from "@chakra-ui/core";
import { parseISO, format } from "date-fns";

import BlogContainer from "../components/BlogContainer";
import resumeData from "../constants/resumeData";

export default (frontMatter) => {
  const slug = frontMatter.__resourcePath
    .replace("blog/", "")
    .replace(".mdx", "");

  return ({ children }) => {
    const { colorMode } = useColorMode();
    const textColor = {
      light: "gray.700",
      dark: "gray.400",
    };

    return (
      <BlogContainer>
        <Stack
          as="article"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="700px"
          w="100%"
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
            w="100%"
          >
            <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
              {frontMatter.title}
            </Heading>
            <Flex
              justify="space-between"
              align={["initial", "center"]}
              direction={["column", "row"]}
              mt={2}
              w="100%"
              mb={4}
            >
              <Flex align="center">
                <Avatar
                  size="xs"
                  name="Esteban Campos"
                  src="/images/profilepic.jpg"
                  mr={2}
                />
                <Text fontSize="sm" color={textColor[colorMode]}>
                  {frontMatter.by}
                  {`${resumeData.main.name} / `}
                  {format(parseISO(frontMatter.publishedAt), "MMMM dd, yyyy")}
                </Text>
              </Flex>
              <Text fontSize="sm" color="gray.500" minWidth="100px" mt={[2, 0]}>
                {frontMatter.readingTime.text}
              </Text>
            </Flex>
          </Flex>
          {children}
        </Stack>
      </BlogContainer>
    );
  };
};
