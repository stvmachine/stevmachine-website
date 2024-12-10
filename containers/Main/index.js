import React from "react";
import { ChakraProvider, CSSReset, Box } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import theme from "../../styles/theme";
import resetStyles from "../../styles/reset";
import defaultStyles from "../../styles/default";

const DefaultLayout = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Global
        styles={`${resetStyles} ${defaultStyles}`}
      />
      <Box as="main">{children}</Box>
    </ChakraProvider>
  );
};

export default DefaultLayout;
