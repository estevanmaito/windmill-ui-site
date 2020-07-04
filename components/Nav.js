import React from 'react'
import Link from 'next/link'
import Container from './layout/Container'

function Nav() {
  return (
    <Container className="py-4">
      <Link href="/">
        <a className="block font-mono font-semibold text-right text-gray-800">windmill ui</a>
      </Link>
    </Container>
  )
}

export default Nav
