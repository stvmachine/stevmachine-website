import styled from "@emotion/styled";
import { Card } from "theme-ui";

export const PortfolioSection = styled.section`
  background: #ebeeee;
  padding-top: 90px;
  padding-bottom: 60px;
`;

export const PortfolioItem = styled(Card)`
  flex: 1 1 200px;

  &:hover .overlay {
    opacity: 1;
    -moz-opacity: 1;
    filter: alpha(opacity=100);
  }

  &:hover .link-icon {
    opacity: 1;
    -moz-opacity: 1;
    filter: alpha(opacity=100);
  }

  @media only screen and (min-width: 1024px) {
    flex: 1 1 250px;
  }
`;

export const PortfolioItemMeta = styled.div`
  padding: 18px;

  h5 {
    font: 14px/21px "opensans-bold", sans-serif;
    color: #fff;
  }

  p {
    font: 12px/18px "opensans-light", sans-serif;
    color: #c6c7c7;
    margin-bottom: 0;
  }
`;

export const ItemWrap = styled.div`
  background: #fff;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;

  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;

  /* overlay */
  .overlay {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    opacity: 0;
    -moz-opacity: 0;
    filter: alpha(opacity=0);

    -webkit-transition: opacity 0.3s ease-in-out;
    -moz-transition: opacity 0.3s ease-in-out;
    -o-transition: opacity 0.3s ease-in-out;
    transition: opacity 0.3s ease-in-out;

    background: url(../images/overlay-bg.png) repeat;
  }

  .link-icon {
    display: block;
    color: #fff;
    height: 30px;
    width: 30px;
    font-size: 18px;
    line-height: 30px;
    text-align: center;

    opacity: 0;
    -moz-opacity: 0;
    filter: alpha(opacity=0);

    -webkit-transition: opacity 0.3s ease-in-out;
    -moz-transition: opacity 0.3s ease-in-out;
    -o-transition: opacity 0.3s ease-in-out;
    transition: opacity 0.3s ease-in-out;

    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -15px;
    margin-top: -15px;
  }

  img {
    vertical-align: bottom;
  }
`;
