import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { ThemeProvider } from '../context/ThemeContext'
import '../css/tailwind.css'

import CodeBlock from '../components/CodeBlock'

const mdComponents = {
  pre: (props) => <div className="my-4" {...props} />,
  code: CodeBlock,
}

export default ({ Component, pageProps }) => (
  <MDXProvider components={mdComponents}>
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  </MDXProvider>
)
