/** @jsx jsx */
import { jsx, Box, Heading } from "theme-ui";
import Footer from "../../components/Layout/Footer";
import resumeData from "../../constants/resumeData";

const Blog = () => (
  <>
    <Box sx={{ height: "100vh" }}>
      <Heading sx={{ color: "white" }}>Under Construction</Heading>
    </Box>
    <Footer data={resumeData.main} />
  </>
);

export default Blog;
