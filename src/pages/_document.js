import Document, { Html, Head, Main, NextScript } from "next/document";
import { InitializeColorMode } from "theme-ui";

export default class extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="/css/default.css" />
          <link rel="stylesheet" href="/css/layout.css" />
          <link rel="stylesheet" href="/css/media-queries.css" />
          <link rel="stylesheet" href="/css/magnific-popup.css" />
        </Head>
        <body>
          <InitializeColorMode />
          <Main />
          <NextScript />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js" />
          <script type="text/javascript" src="js/jquery-migrate-1.2.1.min.js" />
          <script src="js/jquery.flexslider.js" />
          <script src="js/waypoints.js" />
          <script src="js/jquery.fittext.js" />
          <script src="js/magnific-popup.js" />
          <script src="js/init.js" />
        </body>
      </Html>
    );
  }
}
