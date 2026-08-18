import React from 'react'
export default function Experience() {
  const experiences = [
    {
      company: 'AlphaGrep',
      href: 'https://www.linkedin.com/company/alpha-grep/',
      summary: 'Quantitative Developer',
      description: [
        "Developed backtest software and managed cloud infrastructure in an early-stage MFT pod",
        "- Parallelised backtests by provisioning dedicated VMs for each job, tightening researcher feedback loop from hours to minutes",
        "- Extended backtesting to support custom instrument universes, trading restrictions and hedging with index futures",
        "- Reduced cloud costs ~60% with a microservice that resizes/starts/stops VMs based on utilization",
        "- Built an internal frontend to simplify managing and monitoring of VMs for the researchers.",
        "- Created Terraform configurations for multi-dependency deployments",
        "[Python, Cython]"
      ],
      duration: 'Jun 2025 - Mar 2026',
    },
    {
      company: 'TikTok',
      href: 'https://www.linkedin.com/company/tiktok/',
      summary: 'Backend Engineer',
      description: [
        "Built and maintained backend systems for TikTok Shop's logistics pipeline between sellers and delivery hubs",
        "- Supported new market launches by implementing region-specific features and multi-region deployments",
        "- Responded to and resolved production incidents during EU hours",
        "- Improved service decoupling by deprecating RPC in favor of Kafka",
        "- Reduced API response times by introducing async patterns in collaboration with the frontend team",
        "[Go]"
      ],
      duration: 'May 2024 - Jun 2025',
    },
    {
      company: 'Motional',
      href: 'https://www.linkedin.com/company/motionaldrive/',
      summary: 'Internship',
      description: [`Worked on latency-sensitive features for interfacing with Autonomous Vehicles [C++]`],
      duration: 'Sep 2023 - Feb 2024',
    },
    {
      company: 'Aures Capital',
      href: 'https://www.linkedin.com/company/aures-capital',
      summary: 'Internship',
      description: [`Built from scratch trade execution and market data systems on Binance/OKX [Python]`],
      duration: 'Jun 2023 - Sep 2024',
    },
    {
      company: 'AlphaGrep',
      href: 'https://www.linkedin.com/company/alpha-grep/',
      summary: 'Internship',
      description: [`Early efforts building a C++ matching engine/aggregator with a multi-threaded epoll server [C++]`],
      duration: 'Sep 2022 - Dec 2022',
    },
    {
      company: 'Quantedge',
      href: 'https://www.linkedin.com/company/quantedge/',
      summary: 'Internship',
      description: [`Proposed and created proof-of-concept Event-Driven architecture with RabbitMQ and Apache Airflow [Python]`],
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
