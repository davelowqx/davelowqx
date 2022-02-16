import React from "react";
import Seo from "../components/Seo";
import "../styles/global.css";

// data
const projects = [
  {
    title: "Signaci",
    url: "signaci.com",
    summary: "Next.js, tailwindcss, PostgreSQL, Firebase Auth",
    description:
      "Full Stack PWA for traders and investors to share ideas, with their performance tracked.",
    duration: "Oct 2021 - Present",
  },
  {
    title: "Bloomburger",
    url: "bloomburger.co",
    summary: "Next.js, Bootstrap, Lightweight Charts, React Table",
    description:
      "Dashboard to monitor financial markets with an edge, inspired by the Bloomberg Terminal.",
    github: "https://github.com/davelowqx/bloomburger",
    duration: "Jun 2021 - Present",
  },
  {
    title: "Finatic",
    url: "finatic.vercel.app",
    summary:
      "Next.js, Semantic UI, Firebase Firestore/Storage, web3.js/MetaMask, Solidity",
    description:
      "Decentralised Application for Crowdfunding on the Ethereum Testnet.",
    github: "https://github.com/davelowqx/finatic",
    duration: "Jun 2021 - Aug 2021",
  },
];

const skills = [
  {
    title: "Languages",
    description:
      "JavaScript, TypeScript, SQL, Java, Python, C++, C, Solidity, HTML, CSS",
  },
  {
    title: "Technologies",
    description:
      "Node.js, React.js, Next.js, PostgreSQL, Express.js, tailwindcss, web3.js/MetaMask",
  },
  {
    title: "Platforms/Tools",
    description:
      "AWS, GCP, Firebase, Vercel, Cloudfare, Heroku, MongoDB, Postman, Figma",
  },
];

const experiences = [
  {
    title: "Datature",
    href: "https://www.linkedin.com/company/datature/",
    summary: "Full Stack Developer",
    description:
      "Responsible for the API middlewares and Front End of Nexus, a platform for no-code MLOps.",
    duration: "Feb 2022 - Present",
  },
  {
    title: "Signaci",
    href: "https://www.linkedin.com/company/signaci/",
    summary: "Full Stack Developer",
    description:
      "Led the development of the Minimum Viable Product, a Progressive Web Application for sharing trade ideas.",
    duration: "Oct 2021 - Present",
  },
  {
    title: "Raffles Hall Developers",
    href: "https://www.linkedin.com/company/rhdevs/",
    summary: "Student Backend Engineer",
    description:
      "Worked on maintaining and optimizing the MongoDB database for the Hall's applications.",
    duration: "Aug 2021 - Present",
  },
  {
    title: "National University of Singapore",
    href: "https://www.linkedin.com/school/national-university-of-singapore/",
    summary: "Teaching Assistant",
    description:
      "Conducted weekly tutorials for CS1101S - Programming Methodology I.",
    duration: "Aug 2021 - Dec 2021",
  },
  {
    title: "HatchDev",
    href: "https://www.linkedin.com/company/hatchdev-asia/",
    summary: "Co-founder, Creative Lead",
    description:
      "Responsible for creative media and websites to increase lead generation.",
    duration: "Feb 2020 - Aug 2020",
  },
];

const education = {
  school: "National University of Singapore",
  duration: "Aug 2020 - May 2024",
  degree:
    "Computer Science with Specialisation in Networking, Minor in Management.",
  details: [
    {
      title: "Achievements",
      description: "NUS Merit Scholarship",
    },
    {
      title: "Activities",
      description:
        "Developers Club, Fintech Society (Blockchain), Media Team, Basketball",
    },
  ],
};

const links = [
  { title: "github.com/davelowqx", href: "https://github.com/davelowqx" },
  {
    title: "linkedin.com/in/davelowqx",
    href: "https://linkedin.com/in/davelowqx",
  },
];

const Detail = ({ title, description }) => (
  <div>
    <span className="font-semibold">{` • ${title}: `}</span>
    {description}
  </div>
);

// markup
const IndexPage = () => {
  const [showEmail, setShowEmail] = React.useState(false);
  return (
    <>
      <Seo />
      <div className="m-6">
        <div className="mx-auto max-w-3xl leading-snug text-gray-900">
          <h1 className="font-bold text-2xl">DAVE LOW</h1>
          <div className="flex font-light">
            <div
              className={`${!showEmail && "cursor-pointer bg-gray-100"}`}
              onClick={() => !showEmail && setShowEmail(true)}
            >
              {showEmail ? "hello[at]davelowqx.com" : "email"}
            </div>
            {links.map(({ title, href }, i) => (
              <span key={i}>
                &nbsp;&nbsp;•&nbsp;&nbsp;
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  {title}
                </a>
              </span>
            ))}
          </div>

          <br />

          <h2 className="font-bold text-lg">EDUCATION</h2>
          <hr className="mb-2.5" />
          <div className="flex">
            <h3 className="font-bold">{education.school}</h3>
            <div className="flex-grow" />
            <div className="font-light hidden xs:block">
              {education.duration}
            </div>
          </div>
          <div className="italic">{education.degree}</div>
          <div>
            {education.details.map((detail, i) => (
              <Detail
                key={i}
                title={detail.title}
                description={detail.description}
              />
            ))}
          </div>

          <br />

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

          <br />

          <h2 className="font-bold text-lg">PROJECTS</h2>
          <hr className="mb-2.5" />
          <ul>
            {projects.map((project, i) => (
              <div key={i} className="mb-2.5">
                <div className="flex items-center">
                  <div className="font-semibold">{project.title}</div>
                  &nbsp;|&nbsp;
                  <a
                    href={`https://${project.url}`}
                    target="_blank"
                    rel="noreferrer"
                    className="font-light underline"
                  >
                    {project.url}
                  </a>
                  {project.github && (
                    <>
                      &nbsp;&nbsp;
                      <a href={project.github}>
                        <img src="/github.png" className="w-4" />
                      </a>
                    </>
                  )}
                  <div className="flex-grow" />
                  <div className="font-light hidden xs:block">
                    {project.duration}
                  </div>
                </div>
                <p>{project.summary}</p>
                <p className="font-light">{project.description}</p>
              </div>
            ))}
          </ul>

          <br />

          <h2 className="font-bold text-lg">SKILLS</h2>
          <hr className="mb-2.5" />
          {skills.map((skill, i) => (
            <Detail
              key={i}
              title={skill.title}
              description={skill.description}
            />
          ))}

          <br />
        </div>
      </div>
    </>
  );
};

export default IndexPage;
