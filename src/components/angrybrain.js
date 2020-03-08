import React from "react";
import { RichText } from "prismic-reactjs";
import styled from "styled-components"

const BrainSection = styled.section`
text-align: center;
margin: 7vw 20vw;
`

const TextSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const Textbox = styled.div`
  width: 45%;
  text-align: left;
  margin: 1em;
`

const AngryBrain = ({brainContentb,brainContenta,brainTitle}) => {
  return (
    <BrainSection>
    <RichText render={brainTitle}/>
    <TextSection>
    <Textbox>{brainContenta}</Textbox>
    <Textbox>{brainContentb}</Textbox>
    </TextSection>
    </BrainSection>
  );
};

export default AngryBrain;
