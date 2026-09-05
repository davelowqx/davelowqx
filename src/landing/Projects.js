import React from 'react'

export default function Projects() {
  const projects = [
    {
      title: 'RolyPoly',
      url: 'https://rolypoly.davelowqx.com',
      description: 'C++ aggregator streaming Polymarket BTC Up/Down market data and Binance aggTrade',
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
              <a href={project.url}
                target="_blank"
                rel="noreferrer"
                className="font-light underline">
                {project.url}
              </a>
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
