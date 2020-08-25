import React from "react";

export default function Layout(frontMatter) {
  return ({ children }) => {
    const slug = frontMatter.__resourcePath
      .replace("blog/", "")
      .replace(".mdx", "");

    return (
      <>
        <h1>{frontMatter.title}</h1>
        {children}
      </>
    );
  };
}
