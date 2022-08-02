import React from "react";

import Hero from "../components/Hero/Hero";
import Resume from "../components/Resume/Resume";

const IndexPage = () => {
  return (
    <main>
      <meta
        name="viewport"
        content="user-scalable=no, width=device-width, initial-scale=1.0"
      />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <div id="home" className="content">
        <title>Nicholas Blanco</title>
        <Hero />
        <Resume />
      </div>
    </main>
  );
};
//
export default IndexPage;
