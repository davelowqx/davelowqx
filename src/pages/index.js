import React from "react";
import Helmet from "react-helmet";
import "../styles/global.css";

// data
const projects = [
  {
    title: "signaci",
    url: "signaci.com",
    summary: "Next.js, tailwindcss, PostgreSQL, Firebase Auth",
    description:
      "Application for traders/investors to post and follow trade ideas, with their performance tracked.",
    badge: "production",
    badgeStyle: "bg-green-100",
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
    badgeStyle: "bg-green-100",
    duration: "Jun 2021 - Present",
  },
  {
    title: "finatic",
    url: "finatic.vercel.app",
    summary:
      "Next.js, semantic UI, Firebase Firestore/Storage, web3.js/MetaMask, Solidity, Ganache CLI, mocha",
    description:
      "Decentralised application on the Ethereum network, where companies can issue tokenized shares to investors.",
    badge: "unmaintained",
    badgeStyle: "bg-red-100",
    duration: "Jun 2021 - Aug 2021",
  },
  {
    title: "carousearch",
    url: "carousearch.vercel.app",
    summary: "Next.js, tailwind-css",
    description:
      "Client for searching carousell.com with additional functionality and metrics.",
    badge: "production",
    badgeStyle: "bg-green-100",
    duration: "Oct 2021 - Oct 2021",
  },
  {
    title: "fuzzyfilms",
    url: "fuzzyfilms.co",
    summary: "Gatsby.js, styled-components, Formik",
    description: "Static portfolio site.",
    badge: "production",
    badgeStyle: "bg-green-100",
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
      "Node.js, React.js, Express.js, Next.js, PostgreSQL, web3.js/MetaMask",
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

const APP_NAME = "Dave Low";
const APP_DESCRIPTION = "Portfolio Site";
const APP_URL = "https://davelowqx.com";

// markup
const IndexPage = () => {
  const [showEmail, setShowEmail] = React.useState(false);
  return (
    <>
      <Helmet>
        <title>{APP_NAME}</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=0,viewport-fit=cover"
        />
        <meta charSet="utf-8" />
        <meta name="description" content={APP_DESCRIPTION} />
        <meta name="theme-color" content="#FFFFFF" />

        <link rel="canonical" href={APP_URL} />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={APP_NAME} />
        <meta name="twitter:description" content={APP_DESCRIPTION} />
        <meta name="twitter:url" content={APP_URL} />
        <meta name="twitter:image" content={`${APP_URL}/og_logo.png`} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={APP_NAME} />
        <meta property="og:description" content={APP_DESCRIPTION} />
        <meta property="og:url" content={APP_URL} />
        <meta property="og:image" content={`${APP_URL}/og_logo.png`} />
      </Helmet>
      <div className="m-6">
        <div className="mx-auto max-w-3xl leading-snug text-gray-900">
          <h1 className="font-bold text-2xl">DAVE LOW</h1>
          <div className="font-light text-sm">
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
                      rel="noreferrer"
                      className="font-light ml-1 underline"
                    >
                      {project.url}
                    </a>
                    <div className={`${project.badgeStyle} ml-1 font-light`}>
                      [{project.badge}]
                    </div>
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
        </div>
      </div>
    </>
  );
};

export default IndexPage;
