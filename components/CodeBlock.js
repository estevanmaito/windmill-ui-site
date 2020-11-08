import React, { useContext } from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { mdx } from '@mdx-js/react'
import * as Windmill from '@windmill/react-ui'
import HeartIcon from '../icons/heart.svg'
import EditIcon from '../icons/edit.svg'
import Logo from '../icons/chat.svg'
import codeTheme from '../prismTheme'
import { ThemeContext } from '../context/ThemeContext'
import classNames from 'classnames'

const CodeBlock = ({ children, className, previewClassName, live, render, title }) => {
  const { theme } = useContext(ThemeContext)

  const language = className.replace(/language-/, '')

  const livePreviewStyles = classNames(
    'pt-4 pl-4 pr-4 border-t border-l border-r font-inter',
    previewClassName,
    `theme-${theme}`,
    theme === 'dark' && 'bg-gray-900 border-gray-900'
  )

  if (live) {
    return (
      <div className="flex flex-col overflow-hidden">
        <LiveProvider
          code={children.trim()}
          transformCode={(code) => '/** @jsx mdx */' + `<>${code}</>`}
          scope={{ mdx, ...Windmill, HeartIcon, EditIcon, Logo }}
          theme={codeTheme}
        >
          <LivePreview className={livePreviewStyles} id="__live-preview" />
          <div
            className="relative flex-grow flex-shrink overflow-x-auto text-sm"
            style={{ backgroundColor: '#1E1E1E' }}
          >
            <span className="absolute right-0 px-2 py-1 font-mono text-xs text-black bg-primary">
              live editor
            </span>
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
    <div className="overflow-x-auto text-sm" style={{ backgroundColor: '#1E1E1E' }}>
      {title && (
        <div className="flex px-2 py-1 bg-gray-100 border-t border-l border-r">
          <span className="font-mono text-xs text-gray-600">{title}</span>
        </div>
      )}
      <Highlight {...defaultProps} theme={codeTheme} code={children.trim()} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={{ ...style, padding: '10px' }}>
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

export default CodeBlock
