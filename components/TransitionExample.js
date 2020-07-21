import React, { useState } from 'react'

import { Transition, Button } from '@windmill/react-ui'

function TransitionExample() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <Button onClick={() => setIsOpen(!isOpen)}>Open dropdown</Button>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="absolute left-0 w-56 mt-2 rounded-md shadow-lg">
          <div className="p-4 bg-white rounded-md shadow-xs">Hi</div>
        </div>
      </Transition>
    </div>
  )
}

export default TransitionExample
