import React from 'react'
import Bullet from '../components/Bullet'
export default function Education() {
  const education = {
    school: 'National University of Singapore',
    duration: 'Aug 2020 - Dec 2024',
    degree:
      'Computer Science (Focus on Algorithms / Parallel Computing)',
    details: [
      {
        title: 'Achievements',
        description: 'NUS Merit Scholarship',
      },
      {
        title: 'Extracurriculars',
        description:
          'Media, Basketball, Dance',
      },
    ],
  }
  return (
    <>
      <h2 className="font-bold text-lg">EDUCATION</h2>
      <hr className="mb-2.5" />
      <div className="flex">
        <h3 className="font-bold">{education.school}</h3>

        <div className="flex-grow" />
        <div className="font-light hidden xs:block">{education.duration}</div>
      </div>
      <div className="italic">{education.degree}</div>
      <div>
        {education.details.map((detail, i) => (
          <Bullet
            key={i}
            title={detail.title}
            description={detail.description}
          />
        ))}
      </div>
    </>
  )
}
