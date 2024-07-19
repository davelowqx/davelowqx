import React from 'react'
export default function Experience() {
  const experiences = [
    {
      company: 'TikTok',
      href: 'https://www.linkedin.com/company/bytedance/',
      summary: 'Software Engineer Intern',
      description: `Working on servers in the cloud infrastructure team, primarily focussed on billing and quota of internal cloud resources. Go/Kubernetes.`,
      duration: 'May 2024 - Present',
    },
    {
      company: 'Motional',
      href: 'https://www.linkedin.com/company/motionaldrive/',
      summary: 'Software Engineer Intern',
      description: `Worked on Remote Vehicle Assistance, integrating latency-sensitive features for remote operators to monitor/intervene when the Autonomous Vehicle is unable to proceed. C++.`,
      duration: 'Sep 2023 - Feb 2024',
    },
    {
      company: 'AlphaGrep',
      href: 'https://www.linkedin.com/company/alpha-grep/',
      summary: 'Software Engineer Intern',
      description: `Worked on a C/C++ matching engine/quote aggregator, with a multi-threaded epoll server. Server communicated to data providers via FIX`,
      duration: 'Sep 2022 - Dec 2022',
    },
    {
      company: 'Quantedge',
      href: 'https://www.linkedin.com/company/quantedge/',
      summary: 'Software Engineer Intern',
      description: `Designed/implemented an Event-Driven architecture with RabbitMQ. The message queue facilitated communication between microservices, such as scheduling with Apache Airflow and logging with ElasticSearch/Grafana.`,
      duration: 'May 2022 - Aug 2022',
    },
    {
      company: 'National University of Singapore',
      href: 'https://www.linkedin.com/school/national-university-of-singapore/',
      summary: 'Teaching Assistant',
      description:
        'CS1101S - Programming Methodology I, a functional programming module taught in JavaScript.',
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
