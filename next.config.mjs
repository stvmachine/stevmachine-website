// import withMdxEnhanced from "next-mdx-enhanced";
// import readingTime from "reading-time";
// import rehypePrism from 'rehype-prism-plus';
// import remarkAutolinkHeadings from "remark-autolink-headings";
// import remarkSlug from "remark-slug";
// import remarkCodeTitles from "remark-code-titles";

// export default withMdxEnhanced({
//   layoutPath: 'layouts',
//   defaultLayout: true,
  // remarkPlugins: [
  //   remarkAutolinkHeadings,
  //   remarkSlug,
  //   remarkCodeTitles,
  // ],
  // rehypePlugins: [rehypePrism],
  // extendFrontMatter: {
  //   process: (mdxContent) => ({
  //     wordCount: mdxContent.split(/\s+/gu).length,
  //     readingTime: readingTime(mdxContent),
  //   }),
  // },
// })({
//   webpack: (config) => config,
// });


const nextConfig = {
  layoutPath: 'layouts',
  defaultLayout: true,
}
 
export default nextConfig;