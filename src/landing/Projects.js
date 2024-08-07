import React from 'react'

export default function Projects() {
  const projects = [
    {
      title: 'Epoll server',
      url: 'https://github.com/davelowqx/epoll-server',
      summary: 'C++',
      description: 'Demo epoll server',
      github: 'https://github.com/davelowqx/epoll-server',
      duration: 'Dec 2022 - Dec 2022',
    },
    {
      title: 'Bloomburger',
      url: 'https://bloomburger.xyz',
      summary: 'Next.js, Bootstrap, Lightweight Charts, React Table',
      description: 'Web version of the Bloomberg Terminal.',
      github: 'https://github.com/davelowqx/bloomburger',
      duration: 'Jun 2021 - Dec 2022',
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
              {project.url && project.github && (
                <>
                  &nbsp;|&nbsp;
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="font-light underline"
                  >
                    {project.url}
                  </a>
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
