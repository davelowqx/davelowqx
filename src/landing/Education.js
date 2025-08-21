import React from 'react'
import Bullet from '../components/Bullet'
export default function Education() {
  const education = {
    title: 'Computer Science',
    duration: 'Graduated Dec 2024',
    details1: 'National University of Singapore',
    details2: 'Algorithms/Parallel Computing focus, NUS Merit Scholar',
  }
  return (
    <>
      <h2 className="font-bold text-lg">EDUCATION</h2>
      <hr className="mb-2.5" />
      <div className="flex">
        <h3 className="font-semi-bold">{education.title}</h3>
        <div className="flex-grow" />
        <div className="font-light hidden xs:block">{education.duration}</div>
      </div>
      <div className="italic">{education.details1}</div>
      <p>{education.details2}</p>
    </>
  )
}
