'use client'

import React from 'react'

const CONTAINER = {
  border: '1px solid #ccc',
  borderRadius: '5px',
  overflow: 'hidden',
}

const BUTTONS = {
  display: 'flex',
}

const BUTTON = {
  backgroundColor: '#f0f0f0',
  border: 'none',
  padding: '10px 15px',
  cursor: 'pointer',
  outline: 'none',
  borderBottom: '2px solid transparent',
}

const BUTTON_ACTIVE = {
  backgroundColor: '#fff',
  borderBottom: '2px solid #333',
}

const CONTENT = {
  padding: '20px',
}

export const Tab = ({ children }: any) => {
  return <>{children}</>
}

export const Tabs = ({ children }: any) => {
  const [activeTab, setActiveTab] = React.useState(0)

  const handleClick = (index: number) => {
    setActiveTab(index)
  }

  let lastIndex = 0

  if (children.length > 0) {
    lastIndex = children.length - 1
  }

  return (
    <div className="overflow-hidden border-b border-gray-300">
      <div className="flex">
        {children.map((child: any, index: number) => (
          <button
            key={`${child.props.label} - ${index}`}
            className={`cursor-pointer px-4 py-2 outline-none ${
              index === activeTab
                ? 'bg-gray-200 text-gray-800'
                : 'bg-gray-100 text-gray-600'
            } ${index === 0 && 'rounded-tl-lg'} ${index === lastIndex && 'rounded-tr-lg'}  ` }
            onClick={() => handleClick(index)}
          >
            {child.props.label}
          </button>
        ))}
      </div>
      <div className="p-4">{children[activeTab]}</div>
    </div>
  )
}
