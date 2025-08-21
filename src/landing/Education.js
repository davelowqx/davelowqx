import React from 'react'
import Bullet from '../components/Bullet'
export default function Education() {
  const education = {
    title1: 'Computer Science',
    title2: 'National University of Singapore',
    duration: 'Graduated Dec 2024',
  }
  return (
    <>
      <h2 className="font-bold text-lg">EDUCATION</h2>
      <hr className="mb-2.5" />
      <div className="flex">
        <h3 className="font-semibold">{education.title1}</h3>
        &nbsp;•&nbsp;
        <div className="italic">{education.title2}</div>
        <div className="flex-grow" />
        <div className="font-light italic hidden xs:block">{education.duration}</div>
      </div>
    </>
  )
}
