import React from 'react'

// TypeScript only
interface ItemProps {
  text: string
  index: number
}

// ": React.FC<ItemProps>" is TypeScript only
const Item: React.FC<ItemProps> = ({ text, index }) => {
  return <div>{text}</div>
}

export default Item