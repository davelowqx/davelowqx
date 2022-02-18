import React from 'react'

export default function Bullet({ title, description }) {
  return (
    <div>
      <span className="font-semibold">{` • ${title}: `}</span>
      {description}
    </div>
  )
}
