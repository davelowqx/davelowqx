import React from 'react'
export default function Experience() {
  const experiences = [
    {
      company: 'TikTok',
      href: 'https://www.linkedin.com/company/tiktok/',
      summary: 'Software Engineer',
      description: `Backend for Global Ecommerce`,
      duration: 'Jan 2025 - Present',
    },
    {
      company: 'Bytedance',
      href: 'https://www.linkedin.com/company/bytedance/',
      summary: 'Software Engineer Intern',
      description: `Working on billing/quota microservice for internal cloud resources. Go/Kubernetes/SQL/Redis.`,
      duration: 'May 2024 - Dec 2024',
    },
    {
      company: 'Motional',
      href: 'https://www.linkedin.com/company/motionaldrive/',
      summary: 'Software Engineer Intern',
      description: `Worked in Remote Vehicle Assistance, adding latency-sensitive features for remote agents to monitor/intervene decisions of the Autonomous Vehicle. C++.`,
      duration: 'Sep 2023 - Feb 2024',
    },
    {
      company: 'Aures Capital',
      href: 'https://www.linkedin.com/company/aures-capital',
      summary: 'Software Engineer Intern',
      description: `Worked on trade execution/market data systems on Binance/OKX. Experience using SBE/FIX for latency-sensitive applications. C++/Python/Kafka `,
      duration: 'Jun 2023 - Sep 2024',
    },
    {
      company: 'AlphaGrep',
      href: 'https://www.linkedin.com/company/alpha-grep/',
      summary: 'Software Engineer Intern',
      description: `Worked on a C++ matching engine/FX aggregator with a multi-threaded epoll server. Server communicated to data providers via FIX`,
      duration: 'Sep 2022 - Dec 2022',
    },
    {
      company: 'Quantedge',
      href: 'https://www.linkedin.com/company/quantedge/',
      summary: 'Software Engineer Intern',
      description: `Designed/implemented Event-Driven architecture with RabbitMQ, revamping legacy solutions for task scheduling (Windows Task Manager -> Apache Airflow) and logging (local file -> ElasticSearch/Grafana).`,
      duration: 'May 2022 - Aug 2022',
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
