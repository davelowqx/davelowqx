import React from 'react'

export default function Projects() {
  const projects = [
    {
      title: 'Bloomburger',
      url: 'bloomburger.xyz',
      summary: 'Next.js, Bootstrap, Lightweight Charts, React Table',
      description:
        'Dashboard to monitor financial markets, inspired by the Bloomberg Terminal.',
      github: 'https://github.com/davelowqx/bloomburger',
      duration: 'Jun 2021 - Present',
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
