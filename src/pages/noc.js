import React from "react";
import Seo from "../components/Seo";

const Media = () => {
  const projects_mentioned = [
    {
      url: "fuzzyfilms.co",
      title: "fuzzyfilms",
      description: "Truly cinematic highlight reels",
    },
    {
      url: "hatchdev.asia",
      title: "HatchDev",
      description: "Digital Marketing Agency for Real Estate Agents",
    },
    {
      url: "signaci.com",
      title: "signaci",
      description:
        "Application for traders and investors to share ideas, with their performance tracked.",
    },
  ];

  const projects_notable = [
    {
      url: "finatic.vercel.app",
      title: "finatic",
      description:
        "Crowdfunding decentralised application on the Ethereum Testnet.",
    },
    {
      url: "bloomburger.co",
      title: "Bloomburger",
      description:
        "Dashboard for traders to monitor financial markets, inspired by the Bloomberg Terminal",
    },
  ];
  return (
    <>
      <Seo title="Entrepreneurship | Dave Low" path="/noc" />
      <div className="max-w-screen-lg mx-auto">
        <div className="mx-6 lg:mx-2 my-6">
          <div className="my-2">
            <div className="relative" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/X8Lst-fJazI?autoplay=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div className="mt-8" />
          <div className="my-2">
            <h2 className="font-bold text-lg">MENTIONED VENTURES</h2>
            <hr className="mb-2" />
            {projects_mentioned.map(({ url, title, description }, i) =>
              ListItem({ url, title, description })
            )}
            <br />
            <h2 className="font-bold text-lg">OTHER NOTABLE PROJECTS</h2>
            <hr className="mb-2" />
            {projects_notable.map(({ url, title, description }, i) =>
              ListItem({ url, title, description })
            )}
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

const ListItem = ({ title, description, url }) => (
  <div className="my-1">
    <div className="flex">
      <div className="font-semibold">{title}</div>
      &nbsp;
      <a
        className="font-light underline hover:text-blue-600"
        href={`https://${url}`}
        target="_blank"
        rel="noreferrer"
      >
        {url}
      </a>
    </div>
    <div className="font-light">{description}</div>
  </div>
);

export default Media;
