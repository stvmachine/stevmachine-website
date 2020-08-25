/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from "next/link";
import { frontMatter as blogPosts } from "./blog/*.mdx";

function formatPath(p) {
  return p.replace(/\.mdx$/, "");
}

export default function Blog() {
  return (
    <>
      <h1>Docs Index</h1>
      <ul>
        {blogPosts.map((page) => (
          <li key={page.__resourcePath}>
            <Link href={formatPath(page.__resourcePath)}>
              <a>{page.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
