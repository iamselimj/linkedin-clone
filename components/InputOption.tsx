import React, { ElementType } from 'react'

interface InputOption {
  Icon: ElementType
  heading: string
  color: string
}

export const InputOption = ({ Icon, heading, color }: InputOption) => {
  return (
    <button className="group flex gap-2 rounded-lg hover:bg-gray-200/80 p-2">
      <Icon htmlColor={`${color}`} />
      <span className="text-gray-500 group-hover:text-gray-600">{heading}</span>
    </button>
  )
}
