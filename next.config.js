const withMdxEnhanced = require('next-mdx-enhanced')
const withReactSvg = require('next-react-svg')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const path = require('path')

module.exports = withBundleAnalyzer(
  withMdxEnhanced({
    layoutPath: 'layouts',
    fileExtensions: ['mdx'],
    remarkPlugins: [],
    rehypePlugins: [require('rehype-slug'), require('rehype-autolink-headings')],
    extendFrontMatter: {
      process: async (mdxContent, frontMatter) => {
        const innerLinks = []

        const matches = mdxContent.matchAll(/##\s(.*)/g)

        for (const match of matches) {
          innerLinks.push({
            title: match[1],
            url: `#${match[1].split(' ').join('-').toLowerCase()}`,
          })
        }

        return { innerLinks }
      },
      phase: 'both',
    },
  })(
    withReactSvg({
      include: path.resolve(__dirname, 'icons'),
      webpack(config, options) {
        return config
      },
    })
  )
)
