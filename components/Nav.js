import React, { useState } from 'react'
import Link from 'next/link'
import { Backdrop } from 'windmill-react-ui'
import Container from './layout/Container'
import MenuIcon from '../icons/menu.svg'

function Nav({ menu }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Container className="py-4">
      {menu && (
        <>
          <div className="flex items-center justify-between -mt-1 md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-1 -ml-1">
              <MenuIcon className="w-6 h-6" />
            </button>
            {isOpen && <Backdrop onClick={() => setIsOpen(false)}>{menu}</Backdrop>}
            <Link href="/">
              <a className="block font-mono font-semibold text-right text-gray-700">windmill ui</a>
            </Link>
          </div>
          <Link href="/">
            <a className="hidden font-mono font-semibold text-right text-gray-700 md:block">
              windmill ui
            </a>
          </Link>
        </>
      )}
    </Container>
  )
}

export default Nav
