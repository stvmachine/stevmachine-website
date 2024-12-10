import { Box, Card, Image, Text, Heading } from "@chakra-ui/react";

export const PortfolioSection = (props) => (
  <Box
    as="section"
    bg="#ebeeee"
    pt="90px"
    pb="60px"
    {...props}
  />
);

export const PortfolioItem = ({ children, ...props }) => (
  <Box
    as={Card}
    flex="1 1 200px"
    _hover={{
      '.overlay': { opacity: 1 },
      '.link-icon': { opacity: 1 },
    }}
    {...props}
  >
    {children}
  </Box>
);

export const PortfolioItemMeta = (props) => (
  <Box p="18px" {...props}>
    <Heading as="h5" fontSize="14px" fontWeight="bold" color="white">
      {props.children}
    </Heading>
    <Text fontSize="12px" color="#c6c7c7" mb="0">
      {props.children}
    </Text>
  </Box>
);

export const ItemWrap = ({ children, ...props }) => (
  <Box
    bg="white"
    overflow="hidden"
    position="relative"
    display="flex"
    justifyContent="center"
    transition="all 0.3s ease-in-out"
    _hover={{
      '.overlay': { opacity: 1 },
      '.link-icon': { opacity: 1 },
    }}
    {...props}
  >
    {children}
    <Box
      className="overlay"
      position="absolute"
      top="0"
      left="0"
      w="100%"
      h="100%"
      bg="url('../images/overlay-bg.png') repeat"
      opacity="0"
      transition="opacity 0.3s ease-in-out"
    />
    <Box
      className="link-icon"
      position="absolute"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      bg="transparent"
      color="white"
      fontSize="18px"
      lineHeight="30px"
      height="30px"
      width="30px"
      textAlign="center"
      opacity="0"
      transition="opacity 0.3s ease-in-out"
    >
      <i className="fa fa-link"></i>
    </Box>
  </Box>
);
