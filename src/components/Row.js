/** @jsx jsx */
import { jsx, Box } from "theme-ui";

const Row = ({ children, sx, ...props }) => (
  <Box
    sx={{
      width: ["auto", "460px", "96%"],
      maxWidth: "1020px",
      margin: [null, "0 auto"],
      p: [null, 0],
      ...sx,
    }}
    {...props}
  >
    {children}
  </Box>
);

export default Row;
