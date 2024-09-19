import { Themed } from "@theme-ui/mdx";
import styled from "@emotion/styled";

export const Info = styled(Themed.p)`
  font: 16px/24px "librebaskerville-italic", serif;
  color: #6e7881;
  margin-bottom: 18px;
  margin-top: 9px;

  span {
    margin-right: 5px;
    margin-left: 5px;
  }
`;

export const Date = styled(Themed.em)`
  font: 15px/24px "opensans-regular", sans-serif;
  margin-top: 6px;
`;
