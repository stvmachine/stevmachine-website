import { Box } from "@chakra-ui/react";

const Row = ({ children, sx, ...props }) => (
  <Box
    sx={sx}
    w={["auto", "460px", "96%"]}
    maxW="1020px"
    m={[null, "0 auto"]}
    p={[null, 0]}
    {...props}
  >
    {children}
  </Box>
);

export default Row;