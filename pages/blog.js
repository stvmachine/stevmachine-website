import React, { useState } from "react";
import { useFuzzy } from "react-use-fuzzy";
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Input,
  InputGroup,
  InputRightElement,
  Icon,
} from "@chakra-ui/core";

import BlogContainer from "../components/BlogContainer";
import BlogPost from "../components/BlogPost";

// eslint-disable-next-line import/no-unresolved, import/extensions
import { frontMatter as blogPosts } from "./blog/**/*.mdx";

const Blog = () => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: "gray.700",
    dark: "gray.400",
  };

  const { result, keyword, search } = useFuzzy(blogPosts, {
    keys: ["title", "tags"],
  });

  const filteredBlogPosts = result.map((post) => post.item || post);

  return (
    <>
      <BlogContainer>
        <Stack
          as="main"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="700px"
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
          >
            <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
              Blog
            </Heading>
            <Text color={secondaryTextColor[colorMode]}>
              {`I have started to write at mid of 2020 during the COVID-19 outbreak, mostly about web development and tech conferences.
                In total, I've written ${blogPosts.length} articles on this site.
                Use the search below to filter by title.`}
            </Text>
            <InputGroup my={4} mr={4} w="100%">
              <Input
                aria-label="Search articles"
                onChange={(e) => search(e.target.value)}
                placeholder="Search articles"
                value={keyword}
              />
              <InputRightElement>
                <Icon name="search" color="gray.300" />
              </InputRightElement>
            </InputGroup>
          </Flex>
          {/*{!filteredBlogPosts && (
            <Flex
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              maxWidth="700px"
              mt={8}
            >
             
              <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
                Most Popular
              </Heading>
               Add some highlighted posts 
            </Flex>
          )}*/}
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
            mt={8}
          >
            <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
              All Posts
            </Heading>
            {!filteredBlogPosts.length && "No posts found."}
            {filteredBlogPosts
              .sort(
                (a, b) =>
                  Number(new Date(b.publishedAt)) -
                  Number(new Date(a.publishedAt))
              )
              .map((frontMatter) => (
                <BlogPost key={frontMatter.title} {...frontMatter} />
              ))}
          </Flex>
        </Stack>
      </BlogContainer>
    </>
  );
};

export default Blog;
