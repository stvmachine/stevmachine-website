/** @jsx jsx */
import { Styled, Text, Box } from "theme-ui";
import { jsx } from "@emotion/core";
import Prism from "@theme-ui/prism";

const MDXComponents = {
  h1: (props) => <Styled.h1 {...props} />,
  h2: (props) => <Styled.h2 {...props} />,
  h3: (props) => <Styled.h3 {...props} />,
  inlineCode: (props) => <Prism {...props} />,
  br: (props) => <Box sx={{ height: 24 }} {...props} />,
  //   hr: Hr,
  //   table: Table,
  //   th: THead,
  //   td: TData,
  //   a: CustomLink,
  p: (props) => <Text as="p" sx={{ mt: 4 }} {...props} />,
  ul: (props) => (
    <Box
      as="ul"
      sx={{
        pt: 2,
        pl: 4,
        ml: 2,
      }}
      {...props}
    />
  ),
  ol: (props) => <Box as="ol" sx={{ pt: 2, pl: 4, ml: 2 }} {...props} />,
  li: (props) => <Box as="li" sx={{ pb: 1 }} {...props} />,
  //   blockquote: Quote,
};

// export { CustomLink };
export default MDXComponents;
