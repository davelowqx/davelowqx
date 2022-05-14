import React from 'react'

export default function Projects() {
  const projects = [
    {
      title: 'Signaci',
      url: 'signaci.com',
      summary: 'Next.js, tailwindcss, PostgreSQL, Firebase Auth',
      description:
        'Progressive Web App for traders and investors to share ideas, with their performance tracked.',
      duration: 'Oct 2021 - Present',
    },
    {
      title: 'Bloomburger',
      url: 'bloomburger.co',
      summary: 'Next.js, Bootstrap, Lightweight Charts, React Table',
      description:
        'Dashboard to monitor financial markets, inspired by the Bloomberg Terminal.',
      github: 'https://github.com/davelowqx/bloomburger',
      duration: 'Jun 2021 - Present',
    },
    {
      title: 'Finatic',
      url: 'finatic.vercel.app',
      summary:
        'Next.js, Semantic UI, Firebase Firestore/Storage, web3.js/MetaMask, Solidity',
      description:
        'Decentralised Application for Crowdfunding on the Ethereum Testnet.',
      github: 'https://github.com/davelowqx/finatic',
      duration: 'Jun 2021 - Aug 2021',
    },
  ]
  return (
    <>
      <h2 className="font-bold text-lg">PROJECTS</h2>
      <hr className="mb-2.5" />
      <ul>
        {projects.map((project, i) => (
          <div key={i} className="mb-2.5">
            <div className="flex items-center">
              <div className="font-semibold">{project.title}</div>
              &nbsp;|&nbsp;
              <a
                href={`https://${project.url}`}
                target="_blank"
                rel="noreferrer"
                className="font-light underline"
              >
                {project.url}
              </a>
              {project.github && (
                <>
                  &nbsp;&nbsp;
                  <a href={project.github}>
                    <img src="/github.png" className="w-4" />
                  </a>
                </>
              )}
              <div className="flex-grow" />
              <div className="font-light hidden xs:block">
                {project.duration}
              </div>
            </div>
            <p>{project.summary}</p>
            <p className="font-light">{project.description}</p>
          </div>
        ))}
      </ul>
    </>
  )
}
