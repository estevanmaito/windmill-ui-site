import React from 'react'
import Container from './layout/Container'

function Banner({ children, tag, href, ...other }) {
  const Component = tag || 'a'
  return (
    <Container className="fixed inset-x-0 bottom-0">
      <Component href={href}>
        <a
          className="block px-4 py-3 mx-auto mb-4 font-mono text-sm shadow-md bg-primary"
          {...other}
        >
          <div className="flex justify-between">
            {children}
            <span>Read more</span>
          </div>
        </a>
      </Component>
    </Container>
  )
}

export default Banner
