import React from 'react'

export default function Projects() {
  const projects = [
    {
      title: '-',
      description: 'Building trading infra for prediction markets in C++',
    },
    {
      title: 'Simulated Exchange',
      url: 'https://sim.davelowqx.com',
      description: 'Matching engine processing orders from market maker / taker agents. Resultant market data is streamed to the frontend.',
      github: 'https://github.com/davelowqx/sim',
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
              {
                project.url &&
                (
                  <>
                  &nbsp;|&nbsp;
                  <a href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="font-light underline">
                    {project.url}
                  </a>
                  </>
                )
              }
              {
                project.github && 
                  (
                    <>
                    &nbsp;&nbsp;
                    <a href={project.github}>
                      <img src="/github.png" className="w-4" />
                    </a>
                    </>
                  )
              }
              <div className="flex-grow" />
            </div>
            <p className="font-light">{project.description}</p>
          </div>
        ))}
      </ul>
    </>
  )
}
