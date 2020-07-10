import React from 'react'
import WarningIcon from '../icons/warning.svg'
import DangerIcon from '../icons/danger.svg'
import InfoIcon from '../icons/info.svg'
import classNames from 'classnames'

function Alert({ children, type = 'info' }) {
  const styles = {
    warning: {
      icon: WarningIcon,
      border: 'border-yellow-300',
      background: 'bg-yellow-50',
      color: 'text-yellow-900',
    },
    danger: {
      icon: DangerIcon,
      border: 'border-red-600',
      background: 'bg-red-50',
      color: 'text-red-900',
    },
    info: {
      icon: InfoIcon,
      border: 'border-blue-600',
      background: 'bg-blue-50',
      color: 'text-blue-900',
    },
  }

  const Icon = styles[type].icon

  const cls = classNames(
    styles[type].border,
    styles[type].background,
    styles[type].color,
    'border-l-4 p-4 my-4 flex items-center'
  )

  return (
    <div className={cls}>
      <Icon className="flex-shrink-0 w-5 h-5 mr-4" />
      {children}
    </div>
  )
}

export default Alert
