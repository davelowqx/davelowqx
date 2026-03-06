import React from 'react'
export default function Experience() {
  const experiences = [
    {
      company: 'AlphaGrep',
      href: 'https://www.linkedin.com/company/alpha-grep/',
      summary: 'Quantitative Developer',
      description: [
        "Worked on simulation backend and cloud infrastructure in a early-stage MFT pod.",
        "- Parallelised backtesting flow by routing jobs to standalone dynamically-sized instances instead of a generic instance group.",
        "- Reduced cloud computing costs by creating a microservice to monitor CPU utilisation and automatically resize or stop idle instances.",
        "- Extended backtesting pipeline to support custom multi-instrument books and hedging with index futures.",
        "[Python]"
      ],
      duration: 'Jun 2025 - Present',
    },
    {
      company: 'TikTok',
      href: 'https://www.linkedin.com/company/tiktok/',
      summary: 'Software Engineer',
      description: [
        "Backend engineer in TikTok Shop Logistics team.",
        "- Improved inter-service reliability and decoupled architecture by deprecating RPC in favor of Kafka.",
        "- Architected multi-region support, aiding in smoother expansion across new markets.",
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
