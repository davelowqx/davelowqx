import React from 'react'
import Bullet from '../components/Bullet'

export default function Skills() {
  const skills = [
    {
      title: 'Languages',
      description:
        'TypeScript, SQL, Java, Python, C++',
    },
    {
      title: 'Technologies',
      description:
        'Docker, RabbitMQ, MongoDB, AWS, GCP, Cloudfare',
    },
  ]

  return (
    <>
      <h2 className="font-bold text-lg">SKILLS</h2>
      <hr className="mb-2.5" />
      {skills.map((skill, i) => (
        <Bullet key={i} title={skill.title} description={skill.description} />
      ))}
    </>
  )
}
