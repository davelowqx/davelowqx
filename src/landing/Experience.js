import React from 'react'
export default function Experience() {
  const experiences = [
    {
      company: 'AlphaGrep',
      href: 'https://www.linkedin.com/company/alpha-grep/',
      summary: 'Quantitative Developer',
      description: [
        "Worked on simulation backend and cloud infrastructure in an early-stage MFT pod.",
        "- Deployed and managed various services on GCP including compute engine, cloud storage, spanner, monitoring/logging, IAM",
        "- Worked extensively with polars for manipulating of dataframes to express desired business logic",
        "- Parallelised backtest workflows by routing jobs to individual, dynamically-sized instances instead of a managed instance group.",
        "- Reduced cloud computing costs ~60% with a microservice monitoring compute instances and automatically resizes/start/stop them as required.",
        "- Extended backtesting pipeline with features such as custom multi-instrument books, trading restrictions and hedging with index futures.",
        "- Designed Terraform configurations to orchestrate complex, dependency-heavy microservice deployments, ensuring repeatability.",
        "[Python]"
      ],
      duration: 'Jun 2025 - Jan 2026',
    },
    {
      company: 'TikTok',
      href: 'https://www.linkedin.com/company/tiktok/',
      summary: 'Software Engineer',
      description: [
        "Worked on backend systems facilitating First-Mile delivery between TikTok Shop sellers and delivery hubs.",
        "- Expanded platform into new geographical markets by migrating existing code and infrastructure.",
        "- Responded to and resolved production incidents occuring during EU hours",
        "- Improved inter-service reliability and decoupled architecture by deprecating RPC in favor of Kafka.",
        "- Enhanced user experience by migrating to async patterns with the Frontend team",
        "[Go]"
      ],
      duration: 'May 2024 - Jun 2025',
    },
    {
      company: 'Motional',
      href: 'https://www.linkedin.com/company/motionaldrive/',
      summary: 'Internship',
      description: [`Worked on latency-sensitive features for intefacing with Autonomous Vehicles. [C++]`],
      duration: 'Sep 2023 - Feb 2024',
    },
    {
      company: 'Aures Capital',
      href: 'https://www.linkedin.com/company/aures-capital',
      summary: 'Internship',
      description: [`Built from scratch trade execution and market data systems on Binance/OKX. [Python]`],
      duration: 'Jun 2023 - Sep 2024',
    },
    {
      company: 'AlphaGrep',
      href: 'https://www.linkedin.com/company/alpha-grep/',
      summary: 'Internship',
      description: [`Early efforts building a C++ matching engine/aggregator with a multi-threaded epoll server. [C++]`],
      duration: 'Sep 2022 - Dec 2022',
    },
    {
      company: 'Quantedge',
      href: 'https://www.linkedin.com/company/quantedge/',
      summary: 'Internship',
      description: [`Worked on a project to revamp legacy infrastructure with an Event-Driven architecture. [Python]`],
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
              <div className="italic">{experience.summary}</div>
              <div className="flex-grow" />
              <div className="font-light italic hidden xs:block">
                {experience.duration}
              </div>
            </div>
            <p>
              {experience.description.map((line, i) => (
                <>{line}<br/></>
              ))}
            </p>
          </div>
        ))}
      </ul>
    </>
  )
}
