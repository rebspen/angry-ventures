import React from "react";
import { RichText } from "prismic-reactjs";
import styled from "styled-components"

const HeroWrapper = styled.section`
background: url('${props => props.backgroundImage}');
height: calc(80vh - 66px);
background-size: cover;
background-repeat: no-repeat;
background-position: center;
display: flex;
justify-content: center;
align-items: flex-end;
position: relative;
img{
  width:3.5em;
}
${'' /* .stripe{
  position: absolute;
  top: -10%;
  left: 64%;
  width: 260px
} */}
`

const Hero = ({logoImage, backgroundImage, slider }) => {
  return (
    <>
    <HeroWrapper backgroundImage={backgroundImage}>
    <img src= {logoImage} alt=""/>
    {/* <img className="stripe" src={slider} alt=""/> */}
    </HeroWrapper>
    </>
  );
};

export default Hero;
