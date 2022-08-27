import React from "react";
import { createGlobalStyle } from "styled-components";

import Hero from "../components/Hero/Hero";
import Resume from "../components/Resume/Resume";
import Navbar from "../components/Navbar/Navbar";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}
body {
  width: 100%;
  position: relative;
  background-color: #1e1e1e;
  color: #54d9be;
  font-family: 'Source Code Pro', monospace;
}
`;

const IndexPage = () => {
  return (
    <main>
      <meta
        name="viewport"
        content="user-scalable=no, width=device-width, initial-scale=1.0"
      />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;700&display=swap"
        rel="stylesheet"
      ></link>
      <div id="home" className="content">
        <title>Nicholas Blanco</title>
        <GlobalStyle />
        <Navbar />
        <Hero />
        <Resume />
      </div>
    </main>
  );
};
//
export default IndexPage;
