import styled from "@emotion/styled";
import { Text } from "@chakra-ui/react";

export const Info = styled(Text)`
  font-size: 16px;
  line-height: 24px;
  font-family: "Libre Baskerville", serif;
  color: #6e7881;
  margin-bottom: 18px;
  margin-top: 9px;

  span {
    margin-right: 5px;
    margin-left: 5px;
  }
`;

export const Date = styled(Text)`
  font-size: 15px;
  line-height: 24px;
  font-family: "Open Sans", sans-serif;
  margin-top: 6px;
`;