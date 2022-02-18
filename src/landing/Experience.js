import React from 'react'
export default function Experience() {
  const experiences = [
    {
      title: 'Datature',
      href: 'https://www.linkedin.com/company/datature/',
      summary: 'Full Stack Developer',
      description:
        'Responsible for the API middlewares and Front End of Nexus, a web platform for no-code MLOps.',
      duration: 'Feb 2022 - Present',
    },
    {
      title: 'Signaci',
      href: 'https://www.linkedin.com/company/signaci/',
      summary: 'Full Stack Developer',
      description:
        'Led the development of the Minimum Viable Product, a Progressive Web Application for sharing trade ideas.',
      duration: 'Oct 2021 - Feb 2022',
    },
    {
      title: 'Raffles Hall Developers',
      href: 'https://www.linkedin.com/company/rhdevs/',
      summary: 'Student Backend Engineer',
      description:
        "Worked on maintaining and optimizing the MongoDB database for the Hall's applications.",
      duration: 'Aug 2021 - Present',
    },
    {
      title: 'National University of Singapore',
      href: 'https://www.linkedin.com/school/national-university-of-singapore/',
      summary: 'Teaching Assistant',
      description:
        'Conducted weekly tutorials for CS1101S - Programming Methodology I.',
      duration: 'Aug 2021 - Dec 2021',
    },
    {
      title: 'HatchDev',
      href: 'https://www.linkedin.com/company/hatchdev-asia/',
      summary: 'Co-founder, Creative Lead',
      description:
        'Responsible for creative media and websites to increase lead generation.',
      duration: 'Feb 2020 - Aug 2020',
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
            <p className="font-light">{experience.description}</p>
          </div>
        ))}
      </ul>
    </>
  )
}
