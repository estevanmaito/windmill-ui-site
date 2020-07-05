const withMdxEnhanced = require('next-mdx-enhanced')

module.exports = withMdxEnhanced({
  layoutPath: 'layouts',
  fileExtensions: ['mdx'],
  remarkPlugins: [],
  rehypePlugins: [require('rehype-slug'), require('rehype-autolink-headings')],
  extendFrontMatter: {
    process: (mdxContent, frontMatter) => {},
    phase: 'prebuild|loader|both',
  },
})()
