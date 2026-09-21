import React from 'react'
export default function Experience() {
  const experiences = [
    {
      company: 'AlphaGrep',
      href: 'https://www.linkedin.com/company/alpha-grep/',
      summary: 'Quantitative Developer',
      description: [
        "Developed research infrastructure and internal tooling for an early-stage MFT pod",
        "- Owned in-house backtest platform that allowed researchers to iterate on alphas at scale",
        "- Parallelised backtests by provisioning dedicated VMs for each job, tightening feedback loop from hours to minutes",
        "- Extended platform to support custom trading universes, trading restrictions and index hedging.",
        "- Reduced cloud costs ~60% with service that restarts preempted VMs and monitors CPU/Memory utilization",
        "- Built frontend to simplify managing and monitoring of VMs for researchers",
        "- Created Terraform configurations for multi-dependency deployments on GCP",
        "[Python, Polars, Redis, GCP Compute Engine/Spanner/Cloud Scheduler]"
      ],
      duration: 'Jun 2025 - Mar 2026',
    },
    {
      company: 'TikTok',
      href: 'https://www.linkedin.com/company/tiktok/',
      summary: 'Backend Engineer',
      description: [
        "Worked on backend services supporting TikTok Shop's logistics between sellers and delivery hubs",
        "- Enabled new market launches by implementing region-specific features and multi-region deployments",
        "- Improved service decoupling by migrating inter-service communication from RPC to Kafka",
        "- Reduced API response latency by migrating from polling to server-side push",
        "- Responded to and resolved production incidents during EU hours",
        "[Go, Kafka]"
      ],
      duration: 'May 2024 - May 2025',
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
      description: [`Built from scratch execution and market data systems for Binance/OKX [Python, Kafka]`],
      duration: 'Jun 2023 - Aug 2023',
    },
    {
      company: 'AlphaGrep',
      href: 'https://www.linkedin.com/company/alpha-grep/',
      summary: 'Internship',
      description: [`Built a proof-of-concept C++ FIX matching engine for aggregating FX swap quotes across venues [C++]`],
      duration: 'Sep 2022 - Dec 2022',
    },
    {
      company: 'Quantedge',
      href: 'https://www.linkedin.com/company/quantedge/',
      summary: 'Internship',
      description: [`Prototyped an event-driven architecture using Apache Airflow/RabbitMQ for task scheduling. [Python]`],
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
