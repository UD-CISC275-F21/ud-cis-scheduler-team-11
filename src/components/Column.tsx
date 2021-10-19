// src/components/Column.tsx
import React from 'react'
import Item from './Item'

// TypeScript only
interface ColumnProps {
  list: string[]
}

// ": React.FC<ItemProps>" is TypeScript only
const Column: React.FC<ColumnProps> = ({ list }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {list.map((text, index) => (
        <Item key={text} text={text} index={index} />
      ))}
    </div>
  )
}

export default Column