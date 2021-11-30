import React from "react";
import "../styles/global.css";

// data
const projects = [
  {
    title: "finatic",
    url: "finatic.vercel.app",
    summary:
      "Next.js, semantic UI, Firebase Firestore/Storage, web3.js/MetaMask, Solidity, Ganache CLI, mocha",
    description:
      "Decentralised application on the Ethereum network, where companies can issue tokenized shares for investors.",
    badge: "unmaintained",
    badgeColor: "red",
    duration: "Jun 2021 - Aug 2021",
  },
  {
    title: "signaci",
    url: "signaci.com",
    summary: "Next.js, tailwindcss, PostgreSQL, Firebase Auth",
    description:
      "Application for traders to post and follow trade ideas, with their performance tracked.",
    badge: "development",
    badgeColor: "gray",
    duration: "Aug 2021 - Present",
  },
  {
    title: "bloomburger",
    url: "bloomburger.co",
    summary:
      "Next.js, Bootstrap, Lightweight Charts, React Table, Yahoo Finance/FTX API",
    description:
      "Dashboard for traders to monitor financial markets, inspired by the Bloomberg Terminal.",
    badge: "production",
    badgeColor: "green",
    duration: "Jun 2021 - Present",
  },
  {
    title: "DriveSafeSG",
    url: "drivesafesg.vercel.app",
    summary: "webpack, Google Maps Platform",
    description:
      "Web application to map the location of speed cameras and signs in Singapore.",
    badge: "production",
    badgeColor: "green",
    duration: "Oct 2021 - Present",
  },
  {
    title: "carousearch",
    url: "carousearch.vercel.app",
    summary: "Next.js, tailwind-css",
    description:
      "Frontend to search carousell.com with additional functionality and metrics.",
    badge: "production",
    badgeColor: "green",
    duration: "Oct 2021 - Oct 2021",
  },
  {
    title: "fuzzyfilms",
    url: "fuzzyfilms.co",
    summary: "Gatsby.js, styled-components, Formik",
    description: "Static portfolio site.",
    badge: "production",
    badgeColor: "green",
    duration: "Jun 2021 - Jul 2021",
  },
];

const skills = [
  {
    title: "Languages",
    description:
      "HTML, CSS, JavaScript, TypeScript, SQL, Java, Solidity, C, Python, Markdown",
  },
  {
    title: "Stacks",
    description:
      "Node.js, React.js, Express.js, Next.js, PostgreSQL, web3.js/MetaMask",
  },
  {
    title: "Tools",
    description:
      "Git, Vim, VSCode, IntelliJ IDEA, Postman, Chrome DevTools, Figma",
  },
  {
    title: "Services",
    description: "AWS (RDS), GCP, Firebase, Vercel, Cloudfare, Heroku, Netlify",
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
        "Data Structures & Algorithms, Software Engineering, Operating Systems, Database, Finance",
    },
    {
      title: "Achievements",
      description: "NUS Merit Scholarship, Teaching Assistant",
    },
    {
      title: "Activities",
      description: "Basketball, Developers Club, Media Team, Fintech Society",
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
    <div className="m-6">
      <div className="mx-auto max-w-3xl leading-snug text-gray-900">
        <h1 className="font-bold text-2xl">DAVE LOW</h1>
        <p className="font-light">
          <a
            href={showEmail && "mailto:hello@davelowqx.com"}
            className={`cursor-pointer && ${!showEmail && "bg-gray-100"}`}
            onClick={() => !showEmail && setShowEmail(true)}
          >
            {showEmail ? "hello@davelowqx.com" : "email"}
          </a>
          {links.map(({ title, href }, i) => (
            <span key={i}>
              &nbsp;&nbsp;|&nbsp;&nbsp;
              <a href={href} target="_blank">
                {title}
              </a>
            </span>
          ))}
        </p>
        <br />
        <h2 className="font-bold text-lg">EDUCATION</h2>
        <hr className="mb-2" />
        <div className="flex">
          <h3 className="font-bold">{education.school}</h3>
          <div className="flex-grow" />
          <div className="font-light">{education.duration}</div>
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
          <Detail key={i} title={skill.title} description={skill.description} />
        ))}

        <br />
        <h2 className="font-bold text-lg">PROJECTS</h2>
        <hr className="mb-2" />
        <ul>
          {projects.map((project, i) => (
            <div key={i} className="mb-2">
              <span>
                <div className="flex">
                  <div className="font-semibold">{project.title}</div>
                  <a
                    href={`https://${project.url}`}
                    target="_blank"
                    className="font-light ml-1 underline"
                  >
                    {project.url}
                  </a>
                  <div
                    className={`bg-${project.badgeColor}-100 ml-1 font-light`}
                  >
                    [{project.badge}]
                  </div>
                  <div className="flex-grow" />
                  <div className="font-light">{project.duration}</div>
                </div>
                <p>{project.summary}</p>
                <p className="font-light">{project.description}</p>
              </span>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default IndexPage;
