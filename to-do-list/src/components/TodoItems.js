import React from 'react'

export default function TodoItems({value}) {
  return (
    <div>
      <input type='checkbox'/><span>{value}</span><button>delete</button>
    </div>
  )
}
