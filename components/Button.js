import React from 'react'

function Button({ children, className, tag, ...other }) {
  const Component = tag || 'button'
  return (
    <Component
      className={`flex items-center justify-center px-6 py-2 font-mono text-black border border-transparent bg-primary focus:outline-none ${
        className || ''
      }`}
      {...other}
    >
      {children}
    </Component>
  )
}

export default Button
