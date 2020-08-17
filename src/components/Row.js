/** @jsx jsx */
import { jsx, Box } from "theme-ui";

export default ({ children, ...props }) => (
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
