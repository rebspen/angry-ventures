import React from "react";
import { RichText } from "prismic-reactjs";
import styled from "styled-components";


const ToolSection = styled.section`
  padding: 7vw 20vw;
  background-color: #1e2341;
  text-align: left; 
  color: white;
  div{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap
  }
`;

const ToolIndividual = styled.div`
background-color:#d8e56b ;
width: 45%;
margin: 1em;
`

const Tools = ({ tools, ourTools, toolsTitle, toolsContent}) => {
    return (
 
      <ToolSection>
      <RichText render = {toolsTitle}/>
      <p>{toolsContent}</p>
      <br></br>
      <p>{ourTools}</p>
      <div>
      {tools.map((val)=>{
        return <ToolIndividual>
        <a href = {val.tool_link.url}><p>{val.tool_name}</p></a>
        </ToolIndividual>
        
      })}
      </div>
      </ToolSection>
      
    );
};

export default Tools;
