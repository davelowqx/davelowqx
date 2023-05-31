import React from 'react'
export default function Experience() {
  const experiences = [
    {
      company: 'Aures Capital',
      href: 'https://www.linkedin.com/company/aures-capital/',
      summary: 'Software Engineer Intern',
      description: `Working on an execution management system.`,
      duration: 'May 2023 - Present',
    },
    {
      company: 'AlphaGrep',
      href: 'https://www.linkedin.com/company/alpha-grep/',
      summary: 'Software Engineer Intern',
      description: `Worked on a C/C++ low-latency trading application for FX. Concurrent matching engine/aggregator, with a multi-threaded, edge-triggered epoll server that communicated to clients over the FIX protocol.`,
      duration: 'Sep 2022 - Dec 2022',
    },
    {
      company: 'Quantedge',
      href: 'https://www.linkedin.com/company/quantedge/',
      summary: 'Software Engineer Intern',
      description: `Worked on an Event-Driven microservices architecture centered around a RabbitMQ message queue. Microservices include central task scheduler with Apache Airflow, logs aggregator with Grafana/Elasticsearch and caching with Redis.`,
      duration: 'May 2022 - Aug 2022',
    },
    {
      company: 'Datature',
      href: 'https://www.linkedin.com/company/datature/',
      summary: 'Software Engineer Intern',
      description:
        'Worked on the web app, handling billing, authentication, bulk uploads and image annotations. Frontend was built on Typescript/Next.js with Leaflet for image annotations, and APIs used include Stripe, Auth0, Slack and Twilio.',
      duration: 'Feb 2022 - May 2022',
    },
    {
      company: 'National University of Singapore',
      href: 'https://www.linkedin.com/school/national-university-of-singapore/',
      summary: 'Teaching Assistant',
      description:
        'CS1101S - Programming Methodology I, a functional programming module using a stricter form of JavaScript.',
      duration: 'Aug 2021 - Dec 2021',
    },
  ]
  return (
    <>
      <h2 className="font-bold text-lg">EXPERIENCE</h2>
      <hr className="mb-2.5" />
      <ul>
        {experiences.map((experience, i) => (
          <div key={i} className="mb-2.5">
            <div className="flex items-center">
              <div className="font-semibold hover:underline">
                <a href={experience.href} target="_blank" rel="noreferrer">
                  {experience.company}
                </a>
              </div>
              &nbsp;•&nbsp;
              <div>{experience.summary}</div>
              <div className="flex-grow" />
              <div className="font-light hidden xs:block">
                {experience.duration}
              </div>
            </div>
            <p>{experience.description}</p>
          </div>
        ))}
      </ul>
    </>
  )
}
