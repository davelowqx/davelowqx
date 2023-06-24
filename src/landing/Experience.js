import React from 'react'
export default function Experience() {
  const experiences = [
    {
      company: 'Aures Capital',
      href: 'https://www.linkedin.com/company/aures-capital/',
      summary: 'Software Engineer Intern',
      description: `Working on trading infrastructure to execute quantitative strategies on crypto markets.`,
      duration: 'May 2023 - Present',
    },
    {
      company: 'AlphaGrep',
      href: 'https://www.linkedin.com/company/alpha-grep/',
      summary: 'Software Engineer Intern',
      description: `Worked on a C/C++ low-latency matching engine/liquidity aggregator, with a multi-threaded server that communicated over FIX.`,
      duration: 'Sep 2022 - Dec 2022',
    },
    {
      company: 'Quantedge',
      href: 'https://www.linkedin.com/company/quantedge/',
      summary: 'Software Engineer Intern',
      description: `Worked on an Event-Driven microservices architecture with RabbitMQ. Services include task scheduling with Apache Airflow, logs aggregation with Grafana/Elasticsearch and caching with Redis.`,
      duration: 'May 2022 - Aug 2022',
    },
    {
      company: 'Datature',
      href: 'https://www.linkedin.com/company/datature/',
      summary: 'Software Engineer Intern',
      description:
        'Worked on the web app, handling billing, authentication, asset uploads and image annotations.',
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
