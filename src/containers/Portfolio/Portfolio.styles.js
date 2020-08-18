import { css } from "@emotion/core";

export const PortfolioStyles = css`
  background: #ebeeee;
  padding-top: 90px;
  padding-bottom: 60px;

  h1 {
    font: 15px/24px "opensans-semibold", sans-serif;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-align: center;
    margin-bottom: 48px;
    color: #95a3a3;
  }

  /* Portfolio Content */
  #portfolio-wrapper .columns {
    margin-bottom: 36px;
  }

  .portfolio-item .item-wrap {
    background: #fff;
    overflow: hidden;
    position: relative;

    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  .portfolio-item .item-wrap a {
    display: block;
    cursor: pointer;
  }

  /* overlay */
  .portfolio-item .item-wrap .overlay {
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

  .portfolio-item .item-wrap .link-icon {
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

  .portfolio-item .item-wrap img {
    vertical-align: bottom;
  }

  .portfolio-item .portfolio-item-meta {
    padding: 18px;
  }

  .portfolio-item .portfolio-item-meta h5 {
    font: 14px/21px "opensans-bold", sans-serif;
    color: #fff;
  }

  .portfolio-item .portfolio-item-meta p {
    font: 12px/18px "opensans-light", sans-serif;
    color: #c6c7c7;
    margin-bottom: 0;
  }

  /* on hover */
  .portfolio-item:hover .overlay {
    opacity: 1;
    -moz-opacity: 1;
    filter: alpha(opacity=100);
  }

  .portfolio-item:hover .link-icon {
    opacity: 1;
    -moz-opacity: 1;
    filter: alpha(opacity=100);
  }
`;
