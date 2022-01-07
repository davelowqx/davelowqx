import React from "react";
import { Link } from "gatsby";

// markup
const Media = () => {
  const videos = [395751458, 393493064];
  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="mx-6 lg:mx-2 my-6">
        <div className="text-center">fuzzyfilms</div>
        {videos.map((id, i) => (
          <div className="my-2" key={i}>
            <div className="relative" style={{ paddingBottom: "41.875%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                title={id}
                src={`https://player.vimeo.com/video/${id}?color=E1C48F`}
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Media;
