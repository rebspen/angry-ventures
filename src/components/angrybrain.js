import React from "react";
import { RichText } from "prismic-reactjs";
import styled from "styled-components"

const BrainSection = styled.section`
text-align: center;
margin: 6vw 15vw 3vw 15vw;
`

const TextSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 22px;
  font-weight: 300;
  @media screen and (max-width: 1050px) {
    flex-direction: column;
}
`

const Textbox = styled.div`
  width: 45%;
  text-align: left;
  margin: 1em;
  @media screen and (max-width: 1050px) {
    width: 100%
}
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
