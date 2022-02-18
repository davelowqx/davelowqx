import React from 'react'
import Bullet from '../components/Bullet'

export default function Skills() {
  const skills = [
    {
      title: 'Languages',
      description:
        'JavaScript, TypeScript, SQL, Java, Python, C++, C, Solidity, HTML, CSS',
    },
    {
      title: 'Technologies',
      description:
        'Node.js, React.js, Next.js, PostgreSQL, Express.js, tailwindcss, web3.js/MetaMask',
    },
    {
      title: 'Platforms/Tools',
      description:
        'AWS, GCP, Firebase, Vercel, Cloudfare, Heroku, MongoDB, Postman, Figma',
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
