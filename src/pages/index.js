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
  background-color: #131518;
  color: hsl(217, 12%, 63%);
  font-family: 'Overpass', sans-serif;
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
      <div id="home" className="content">
        <title>Nicholas Blanco</title>
        <Navbar />
        <GlobalStyle />
        <Hero />
        <Resume />
      </div>
    </main>
  );
};
//
export default IndexPage;
