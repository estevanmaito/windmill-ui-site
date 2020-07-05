import React, { useState } from 'react'
import Container from '../components/layout/Container'
import Nav from '../components/Nav'

export default (frontMatter) => {
  return ({ children }) => {
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
            <header className="max-w-2xl py-20">
              <h1 className="text-5xl font-extrabold leading-none tracking-tight text-gray-900 md:text-6xl">
                {frontMatter.title}
              </h1>
              <p className="mt-4 font-mono">
                Four 100 scores and PWA ready. Just connect your data.
              </p>
            </header>
          </Container>
        </div>
        <Container className="my-16">
          <div className="grid grid-cols-12 gap-8 font-mono">
            <aside className="col-span-2">
              <span className="">Components</span>
              <ul>
                <li></li>
              </ul>
            </aside>
            <main className="col-span-8 markdown">{children}</main>
            <aside className="col-span-2"></aside>
          </div>
        </Container>
        <footer className="py-20 font-mono">
          <Container>
            <p className="text-center text-gray-800">
              Made by{' '}
              <a className="border-b border-primary" href="https://twitter.com/estevanmaito">
                Estevan Maito
              </a>
            </p>
          </Container>
        </footer>
      </>
    )
  }
}
