import React from 'react'

function ButtonOutline({ children, tag, className, ...other }) {
  const Component = tag || 'button'
  return (
    <Component
      className={`inline-block text-center px-6 py-2 font-mono text-gray-700 border border-primary focus:outline-none ${
        className || ''
      }`}
      {...other}
    >
      {children}
    </Component>
  )
}

export default ButtonOutline
