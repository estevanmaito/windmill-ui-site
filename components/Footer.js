import React from 'react'
import Container from '../components/layout/Container'

function Footer() {
  return (
    <footer className="my-20 font-mono">
      <Container>
        <p className="text-sm text-center text-gray-700">
          Made by{' '}
          <a className="border-b border-primary" href="https://twitter.com/estevanmaito">
            Estevan Maito
          </a>
        </p>
      </Container>
    </footer>
  )
}

export default Footer
