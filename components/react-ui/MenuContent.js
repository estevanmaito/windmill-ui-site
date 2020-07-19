import React from 'react'
import Link from 'next/link'

function MenuContent({ router, page }) {
  return (
    <>
      <ul className="mb-8 space-y-2 text-gray-500">
        <li className={`${router.pathname === '/react-ui' && 'text-gray-700 font-semibold'}`}>
          <Link href="/react-ui">
            <a>Getting started</a>
          </Link>
        </li>
        <li
          className={`${
            router.pathname.split('/')[2] === 'installation' && 'text-gray-700 font-semibold'
          }`}
        >
          <Link href="/react-ui/installation">
            <a>Installation</a>
          </Link>
        </li>
        <li
          className={`${
            router.pathname.split('/')[2] === 'customization' && 'text-gray-700 font-semibold'
          }`}
        >
          <Link href="/react-ui/customization">
            <a>Customization</a>
          </Link>
        </li>
        <li
          className={`${
            router.pathname.split('/')[2] === 'dark-theme' && 'text-gray-700 font-semibold'
          }`}
        >
          <Link href="/react-ui/dark-theme">
            <a>Dark theme</a>
          </Link>
        </li>
        <li>
          <a href="http://github.com/estevanmaito/windmill-react-ui">GitHub</a>
        </li>
      </ul>
      <span className="block mb-2 font-mono text-sm font-semibold tracking-wide text-gray-500 uppercase">
        Components
      </span>
      <ul className="space-y-2 text-gray-500">
        {page.map((page) => (
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
    </>
  )
}

export default MenuContent
