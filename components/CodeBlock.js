import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { mdx } from '@mdx-js/react'
import * as Windmill from 'windmill-react-ui'
import theme from 'prism-react-renderer/themes/nightOwl'

export default ({ children, className, live, render }) => {
  const language = className.replace(/language-/, '')
  if (live) {
    return (
      <div className="flex flex-col overflow-hidden">
        <LiveProvider
          code={children.trim()}
          transformCode={(code) => '/** @jsx mdx */' + `<>${code}</>`}
          scope={{ mdx, ...Windmill }}
          theme={theme}
        >
          <LivePreview className="p-4 font-sans border-t border-l border-r" />
          <div
            className="flex-grow flex-shrink overflow-x-auto"
            style={{ backgroundColor: '#011627' }}
          >
            <LiveEditor
              className="float-left min-w-full overflow-hidden live-editor"
              style={{
                fontFamily:
                  '"Fira Code", Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
              }}
              language={language}
            />
            <LiveError />
          </div>
        </LiveProvider>
      </div>
    )
  }

  if (render) {
    return (
      <div style={{ marginTop: '40px' }}>
        <LiveProvider code={children}>
          <LivePreview />
        </LiveProvider>
      </div>
    )
  }

  return (
    <div className="overflow-hidden rounded-lg">
      <Highlight {...defaultProps} theme={theme} code={children.trim()} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={{ ...style, padding: '20px' }}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  )
}
