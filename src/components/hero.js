import React from "react";
import { RichText } from "prismic-reactjs";
import styled from "styled-components"

const HeroWrapper = styled.section`
background: url('${props => props.backgroundImage}');
height: calc(80vh - 66px);
background-size: cover;
background-repeat: no-repeat;
`

const Hero = ({ title, content, backgroundImage }) => {
  return (
    <HeroWrapper backgroundImage={backgroundImage}>
      <RichText render={title}/>
      <p>{content}</p>
    </HeroWrapper>
  );
};

export default Hero;
