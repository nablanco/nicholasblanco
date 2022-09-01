import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import styled from "styled-components";

const HeroContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 90px 0px 40px 0px;
`;
const HeroText = styled.div`
  /* text-align: center; */
  width: 268px;
  margin-bottom: 30px;
  @media screen and (min-width: 768px) {
    width: 620px;
    font-size: 24px;
  }
`;
const HeroEmail = styled.div`
  /* text-align: center; */
  margin-bottom: 15px;
  color: #ffb852;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

const HeroIconsContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  width: 50px;
`;

const Icon = styled.a`
  margin: 0px 21px;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroText>
        Welcome! I am a passionate web developer looking for new opportunities.
        Feel free to reach out and maybe we can work together!
      </HeroText>
      <HeroEmail>nablanco92@gmail.com</HeroEmail>
      <HeroIconsContainer>
        <Icon href="https://github.com/nablanco">
          <FaGithub size={37} color="#ee9d28" />
        </Icon>
        <Icon href="https://www.linkedin.com/in/nicholas-adam-blanco/">
          <FaLinkedin size={37} color="#ee9d28" />
        </Icon>
        <Icon href="https://www.instagram.com/nickbe92/">
          <FaInstagram size={37} color="#ee9d28" />
        </Icon>
      </HeroIconsContainer>
    </HeroContainer>
  );
};

export default Hero;
