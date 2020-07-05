import React from 'react'

function ButtonOutline({ children, className, ...other }) {
  return (
    <button
      className={`px-6 py-2 font-mono text-gray-700 border border-primary focus:outline-none ${
        className || ''
      }`}
      {...other}
    >
      {children}
    </button>
  )
}

export default ButtonOutline
