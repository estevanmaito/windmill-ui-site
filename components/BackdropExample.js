import React, { useState } from 'react'

import { Backdrop, Button } from '@windmill/react-ui'

function DropdownExample() {
  const [isOpen, setIsOpen] = useState(false)

  function toggleBackdrop() {
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative">
      <Button onClick={toggleBackdrop}>Open backdrop</Button>

      {isOpen && <Backdrop onClick={toggleBackdrop} />}
    </div>
  )
}

export default DropdownExample
