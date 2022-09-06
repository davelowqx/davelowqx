import React from 'react'
export default function Experience() {
  const experiences = [
    {
      title: 'AlphaGrep',
      href: 'https://www.linkedin.com/company/alpha-grep/',
      summary: 'Software Engineer Intern',
      description: `Building on latency sensitive applications for the FX Trading Desk.`,
      duration: 'Sep 2022 - Present',
      technologies: 'C/C++, Java',
    },
    {
      title: 'Quantedge',
      href: 'https://www.linkedin.com/company/quantedge/',
      summary: 'Software Engineer Intern',
      description: `Worked on Event-Driven Architecture utilising message queue along with auxiliary microservices: central task scheduler, logs aggregation and caching service.`,
      duration: 'May 2022 - Aug 2022',
      technologies:
        'Python, SQL, RabbitMQ, Docker, Apache Airflow, Elasticsearch, Grafana, Redis',
    },
    {
      title: 'Datature',
      href: 'https://www.linkedin.com/company/datature/',
      summary: 'Software Engineer Intern',
      description:
        'Responsible for the APIs and Front End of Nexus, a web platform for no-code MLOps. Handled billing, authentication, bulk asset uploads and image annotations.',
      duration: 'Feb 2022 - May 2022',
      technologies:
        'Typescript/Next.js, Stripe, Auth0, Segment, MailChimp, Slack, Blueprint.js, Leaflet',
    },
    {
      title: 'National University of Singapore',
      href: 'https://www.linkedin.com/school/national-university-of-singapore/',
      summary: 'Teaching Assistant',
      description: 'CS1101S - Programming Methodology I.',
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
                  {experience.title}
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
            {experience.technologies && (
              <p className="font-light">{experience.technologies}</p>
            )}
          </div>
        ))}
      </ul>
    </>
  )
}
