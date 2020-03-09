import React from "react";
import { RichText } from "prismic-reactjs";
import styled from "styled-components"

const HeroWrapper = styled.section`
background: url('${props => props.backgroundImage}');
height: calc(80vh - 66px);
background-size: cover;
background-repeat: no-repeat;
display: flex;
justify-content: center;
align-items: flex-end;
`

const Hero = ({logoImage, backgroundImage }) => {
  return (
    <HeroWrapper backgroundImage={backgroundImage}>
    <img src= {logoImage} alt=""/>
    </HeroWrapper>
  );
};

export default Hero;
