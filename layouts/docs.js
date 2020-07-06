import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Container from '../components/layout/Container'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import components from '../pages.json'

export default (frontMatter) => {
  return ({ children }) => {
    const router = useRouter()
    return (
      <>
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
          <Nav />
          <Container>
            <header className="max-w-2xl py-20 text-gray-700">
              <h1 className="text-5xl font-extrabold leading-none tracking-tight font-montserrat md:text-6xl">
                {frontMatter.title}
              </h1>
              <p className="mt-4 font-mono">{frontMatter.description}</p>
            </header>
          </Container>
        </div>
        <Container className="my-16">
          <div className="grid grid-cols-12 gap-8 -mt-8">
            <aside className="col-span-2">
              <div className="sticky top-0 pt-8">
                <ul className="mb-8 space-y-2 text-gray-500">
                  {/* refactor this ASAP! */}
                  <li
                    className={`${
                      router.pathname.split('/')[2] === 'installation' &&
                      'text-gray-700 font-semibold'
                    }`}
                  >
                    <Link href="/react-ui/installation">
                      <a>Installation</a>
                    </Link>
                  </li>
                  <li
                    className={`${
                      router.pathname.split('/')[2] === 'customization' &&
                      'text-gray-700 font-semibold'
                    }`}
                  >
                    <Link href="/react-ui/customization">
                      <a>Customization</a>
                    </Link>
                  </li>
                </ul>
                <span className="block mb-2 font-mono text-sm font-semibold tracking-wide text-gray-500 uppercase">
                  Components
                </span>
                <ul className="space-y-2 text-gray-500">
                  {components.map((page) => (
                    <li
                      key={page.url}
                      className={`${
                        router.pathname.split('/')[3] === page.url && 'text-gray-700 font-semibold'
                      }`}
                    >
                      <Link href={`/react-ui/components/${page.url}`}>
                        <a>{page.title}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
            <main className="col-span-8 pt-8 markdown">{children}</main>
            <aside className="col-span-2">
              <div className="sticky top-0 pt-8">
                <span className="block mb-4 font-mono text-sm font-semibold tracking-wide text-gray-500 uppercase">
                  On this page
                </span>
                <ul className="space-y-2 text-sm text-gray-600">
                  {frontMatter.innerLinks.map((link) => (
                    <li key={link.url}>
                      <a href={link.url}>{link.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </Container>
        <Footer />
      </>
    )
  }
}
