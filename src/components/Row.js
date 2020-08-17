/** @jsx jsx */
import { jsx, Box } from "theme-ui";

const Row = ({ children, ...props }) => (
  <Box
    sx={{
      width: ["460px", null, "96%"],
      maxWidth: "1020px",
      margin: "0 auto",
      p: [0, null],
    }}
    {...props}
  >
    {children}
  </Box>
);

export default Row;
