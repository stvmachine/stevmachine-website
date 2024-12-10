// const withMDX = require('@next/mdx')({
//   extension: /\.mdx$/,
//   options: {
//     remarkPlugins: [
//       require('remark-autolink-headings'),
//       require('remark-slug'),
//       require('remark-code-titles'),
//     ],
//     rehypePlugins: [
//       require('rehype-prism-plus'),
//     ],
//   },
// });

const withMDX = require('@next/mdx')()
module.exports = withMDX({ pageExtensions: ['js', 'md', 'mdx'] })

