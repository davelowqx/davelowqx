import React from "react";
import { Link } from "gatsby";

// markup
const NotFoundPage = () => {
  return (
    <div className="m-6">
      <div className="h-screen flex flex-col text-center">
        <div className="flex-grow" />
        <div className="font-bold">404 Not Found</div>
        <div className="text-blue-400 underline">
          <Link to="/">Home</Link>
        </div>
        <div className="flex-grow" />
      </div>
    </div>
  );
};

export default NotFoundPage;
