import React from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
// import BlogLayout from "../containers/Blog";
import DefaultLayout from "../containers/Main";

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <>
      {/* {router.asPath.includes("blog") ? (
        <BlogLayout>
          <Component {...pageProps} />
        </BlogLayout>
      ) :  */}
      (
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      )
      {/* } */}
    </>
  );
};

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});
