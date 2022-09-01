import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import styled from "styled-components";

const HeroContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: auto;
  text-align: center;
  margin: 90px 0px 40px 0px;
`;
const HeroText = styled.div`
  text-align: center;
  width: 268px;
  margin-bottom: 25px;
  @media screen and (min-wdith: 768px) {
    width: 550px;
  }
`;

const HeroIconsContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

const Icon = styled.a`
  margin-left: 20px;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroText>
        Welcome! I am a passionate web developer looking for new opportunities.
        Feel free to reach out and maybe we can work together!
      </HeroText>
      <HeroIconsContainer>
        <Icon href="https://github.com/nablanco">
          <FaGithub size={30} color="#ee9d28" />
        </Icon>
        <Icon href="https://www.linkedin.com/in/nicholas-adam-blanco/">
          <FaLinkedin size={30} color="#ee9d28" />
        </Icon>
        <Icon href="https://www.instagram.com/nickbe92/">
          <FaInstagram size={30} color="#ee9d28" />
        </Icon>
      </HeroIconsContainer>
    </HeroContainer>
  );
};

export default Hero;
