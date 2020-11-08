import React, { useContext } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Container from '../components/layout/Container'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import pages from '../pages.json'
import { ThemeContext } from '../context/ThemeContext'
import { MDXProvider } from '@mdx-js/react'
import CodeBlock from '../components/CodeBlock'

const mdComponents = {
  pre: (props) => <div className="my-4" {...props} />,
  code: CodeBlock,
}

import MoonIcon from '../icons/moon.svg'
import SunIcon from '../icons/sun.svg'
import SEO from '../components/SEO'
import MenuContent from '../components/react-ui/MenuContent'

const DocsLayout = ({ children, frontMatter }) => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const router = useRouter()

  const mobileMenu = (
    <aside className="absolute inset-y-0 left-0 w-48 px-4 pt-6 pb-10 overflow-x-auto bg-white shadow-md md:hidden">
      <MenuContent router={router} page={pages} />
    </aside>
  )

  return (
    <MDXProvider components={mdComponents}>
      <SEO
        title={`${frontMatter.title} | Windmill React UI`}
        description={frontMatter.description}
        image="https://windmillui.com/img/windmill-react-ui.png"
      />
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .live-editor > pre,
          .live-editor > textarea {
            white-space: pre !important;
          }
          `,
        }}
      />
      <div className="bg-pattern">
        <Nav menu={mobileMenu} />
        <Container>
          <header className="max-w-2xl py-20 text-gray-700">
            <h1 className="text-5xl font-extrabold leading-none tracking-tight font-montserrat md:text-6xl">
              {frontMatter.title}
            </h1>
            <p className="mt-4 font-mono">{frontMatter.description}</p>
          </header>
        </Container>
      </div>
      <Container className="relative my-16">
        <div className="grid grid-cols-12 -mt-8 md:gap-8">
          <aside className="hidden col-span-2 md:block">
            <div className="sticky top-0 pt-8">
              <MenuContent router={router} page={pages} />
            </div>
          </aside>
          <main className="col-span-12 pt-8 md:col-span-10 lg:col-span-8 markdown">{children}</main>
          <aside className="hidden col-span-2 lg:block">
            <div className="sticky top-0 pt-8">
              <span className="block mb-2 font-mono text-sm font-semibold tracking-wide text-gray-500 uppercase">
                On this page
              </span>
              <ul className="space-y-2 text-sm text-gray-600">
                {frontMatter.innerLinks.map((link) => (
                  <li className="leading-5" key={link.url}>
                    <a href={link.url}>{link.title}</a>
                  </li>
                ))}
              </ul>
              <Link href="/sponsor">
                <a className="inline-block px-2 py-1 mt-4 text-sm bg-primary">
                  Sponsor this project
                </a>
              </Link>
            </div>
          </aside>
        </div>
        <button
          className="fixed bottom-0 right-0 flex items-center p-2 mb-5 mr-5 bg-white border border-gray-700 shadow-md focus:outline-none group"
          onClick={toggleTheme}
          aria-hidden="true"
        >
          {theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
          <span className="hidden ml-2 text-sm leading-none group-hover:block">Preview theme</span>
        </button>
      </Container>
      <Footer />
    </MDXProvider>
  )
}

export default DocsLayout
