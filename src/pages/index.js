import React from "react";
import "../styles/global.css";

// data
const projects = [
  {
    title: "signaci",
    url: "signaci.com",
    summary: "Next.js, tailwindcss, PostgreSQL, Firebase Auth, FTX API",
    description:
      "Application for traders and investors to share ideas, with their performance tracked.",
    duration: "Aug 2021 - Present",
  },
  {
    title: "bloomburger",
    url: "bloomburger.co",
    summary:
      "Next.js, Bootstrap, Lightweight Charts, React Table, Yahoo Finance API",
    description:
      "Dashboard for traders to monitor financial markets, inspired by the Bloomberg Terminal.",
    github: "https://github.com/davelowqx/bloomburger",
    duration: "Jun 2021 - Present",
  },
  {
    title: "finatic",
    url: "finatic.vercel.app",
    summary:
      "Next.js, semantic UI, Firebase Firestore/Storage, web3.js/MetaMask, Solidity, Ganache CLI, mocha",
    description:
      "Crowdfunding decentralised application on the Ethereum Testnet.",
    github: "https://github.com/davelowqx/finatic",
    duration: "Jun 2021 - Aug 2021",
  },
  {
    title: "carousearch",
    url: "carousearch.vercel.app",
    summary: "Next.js, tailwind-css",
    description:
      "Alternative client for searching carousell.com with additional functionality and metrics.",
    github: "https://github.com/davelowqx/carousearch",
    duration: "Oct 2021 - Oct 2021",
  },
  {
    title: "fuzzyfilms",
    url: "fuzzyfilms.co",
    summary: "Gatsby.js, styled-components, Formik",
    description: "Static portfolio site.",
    github: "https://github.com/davelowqx/fuzzyfilms",
    duration: "Jun 2021 - Jul 2021",
  },
];

const skills = [
  {
    title: "Languages",
    description:
      "JavaScript, TypeScript, SQL, Java, C, Python, Rust, Solidity, HTML, CSS",
  },
  {
    title: "Stacks",
    description:
      "Node.js, React.js, Next.js, PostgreSQL, Express.js, tailwindcss, web3.js/MetaMask",
  },
  {
    title: "Tools",
    description:
      "Git, Vim, VSCode, IntelliJ IDEA, Postman, Chrome DevTools, Figma",
  },
  {
    title: "Services",
    description: "AWS, GCP, Firebase, Vercel, Cloudfare, Heroku, Netlify",
  },
];

const experiences = [
  {
    title: "HatchDev",
    summary: "Creative Lead",
    description:
      "Responsible for creative media and websites to increase lead generation",
    duration: "Feb 2020 - Aug 2020",
  },
];

const education = {
  school: "National University of Singapore",
  duration: "Aug 2020 - May 2024",
  degree: "Computer Science (Hons.), Minor in Management, CAP 4.2",
  details: [
    {
      title: "Coursework",
      description:
        "Data Structures & Algorithms, Software Engineering, Operating Systems, Database, Networking, Finance",
    },
    {
      title: "Achievements",
      description: "NUS Merit Scholarship, Teaching Assistant",
    },
    {
      title: "Activities",
      description:
        "Developers Club, Fintech Society (Blockchain Dept), Media Team, Basketball",
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
          <div className="flex font-light text-sm">
            <div
              className={`${!showEmail && "cursor-pointer bg-gray-100"}`}
              onClick={() => !showEmail && setShowEmail(true)}
            >
              {showEmail ? "hello[at]davelowqx.com" : "email"}
            </div>
            {links.map(({ title, href }, i) => (
              <span key={i}>
                &nbsp;&nbsp;|&nbsp;&nbsp;
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
          <hr className="mb-2" />
          <div className="flex">
            <h3 className="font-bold">{education.school}</h3>
            <div className="flex-grow" />
            <div className="font-light hidden sm:block">
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
          <h2 className="font-bold text-lg">SKILLS</h2>
          <hr className="mb-2" />
          {skills.map((skill, i) => (
            <Detail
              key={i}
              title={skill.title}
              description={skill.description}
            />
          ))}

          <br />

          <h2 className="font-bold text-lg">INDIVIDUAL PROJECTS</h2>
          <hr className="mb-2" />
          <ul>
            {projects.map((project, i) => (
              <div key={i} className="mb-2">
                <span>
                  <div className="flex items-center">
                    <div className="font-semibold">{project.title}</div>
                    &nbsp;
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
                    <div className="font-light hidden sm:block">
                      {project.duration}
                    </div>
                  </div>
                  <p>{project.summary}</p>
                  <p className="font-light">{project.description}</p>
                </span>
              </div>
            ))}
          </ul>

          <br />

          <h2 className="font-bold text-lg">EXPERIENCE</h2>
          <hr className="mb-2" />
          <ul>
            {experiences.map((experience, i) => (
              <div key={i} className="mb-2">
                <span>
                  <div className="flex items-center">
                    <div className="font-semibold">{experience.title}</div>
                    &nbsp;-&nbsp;
                    <div className="font-light">{experience.summary}</div>
                    <div className="flex-grow" />
                    <div className="font-light hidden sm:block">
                      {experience.duration}
                    </div>
                  </div>
                  <p>{experience.description}</p>
                </span>
              </div>
            ))}
          </ul>

          <br />
        </div>
      </div>
    </>
  );
};

export default IndexPage;
