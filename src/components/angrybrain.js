import React from "react";
import { RichText } from "prismic-reactjs";
import styled from "styled-components"

// const HeroWrapper = styled.section`
// background: url('${props => props.backgroundImage}');
// height: calc(80vh - 66px);
// background-size: cover;
// background-repeat: no-repeat;
// `

const AngryBrain = ({brainContentb,brainContenta,brainTitle}) => {
  return (
    <div>
    <RichText render={brainTitle}/>
      <p>{brainContenta}</p>
      <p>{brainContentb}</p>
    </div>
  );
};

export default AngryBrain;
