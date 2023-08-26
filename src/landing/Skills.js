import React from 'react'
import Bullet from '../components/Bullet'

export default function Skills() {
  const skills = [
    {
      title: 'Languages',
      description: 'C++, Python, TypeScript, SQL, Go',
    },
    {
      title: 'Technologies',
      description: 'Docker, Kafka, RabbitMQ, Kubernetes',
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
