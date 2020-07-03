import React from 'react'
import Container from './layout/Container'

function Banner({ children, tag, href, ...other }) {
  const Component = tag || 'a'
  return (
    <Component href={href}>
      <a className="block py-2 font-mono bg-primary" {...other}>
        <Container>
          <div className="flex justify-between">
            {children}
            <span>Read more</span>
          </div>
        </Container>
      </a>
    </Component>
  )
}

export default Banner
