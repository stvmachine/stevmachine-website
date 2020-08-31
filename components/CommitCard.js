import React, { useMemo } from "react";
import { Avatar, Text, Box, useColorMode, Flex } from "@chakra-ui/core";

const CommitCard = ({
  username,
  avatar,
  label,
  decoration,
  subject,
  discussion,
}) => {
  const { colorMode } = useColorMode();

  const labelDecorationText = useMemo(() => {
    let output = "";
    if (label) {
      output += label;
    }
    if (decoration) {
      output += ` (${decoration})`;
    }
    if (output.length > 0) {
      output += ":";
    }
    return output;
  }, [label, decoration]);

  const bgColor = {
    light: "white",
    dark: "gray.300",
  };
  const borderColor = {
    light: "gray.200",
    dark: "gray.900",
  };

  const usernameColor = {
    light: "gray.500",
    dark: "white",
  };
  const textColor = {
    light: "black",
    dark: "gray.600",
  };

  return (
    <Box
      border="1px solid"
      borderColor={borderColor[colorMode]}
      bg={bgColor[colorMode]}
      borderRadius={1}
      padding={3}
      my={2}
      w="100%"
    >
      <Flex>
        <Avatar src={avatar} />

        <Flex flexDirection="column" ml={4}>
          <Text color={usernameColor[colorMode]}>{`@${username}`}</Text>
          <Flex flexWrap="wrap" color={textColor[colorMode]}>
            {labelDecorationText && (
              <Text fontWeight="bold" as="span">
                {labelDecorationText} &nbsp;
              </Text>
            )}
            <Text>{subject}</Text>
          </Flex>
          {discussion && (
            <Text color={textColor[colorMode]} mt={4}>
              {discussion}
            </Text>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default CommitCard;
