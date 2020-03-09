import React from "react";
import { RichText } from "prismic-reactjs";
import styled from "styled-components";

const ToolSection = styled.section`
  padding: 4vw 15vw;
  background-color: #1e2341;
  text-align: left;
  color: white;
  div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  h1 {
    color: #d8e56b;
  }
`;

const ToolIndividual = styled.div`
  background-color: #d8e56b;
  margin: 1em 1em 1em 0;
  button{
    background: Transparent;
    border: none;
    color:  #1e2341;
    padding: 0.4em 0.4em 0.4em 0.9em;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
  }
  a{
    color: #1e2341;
    font-size: 1.3em;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  img{
    width: 1.7em;
    margin: 0 0 0 1em;
  }
`;

const Tools = ({ tools, ourTools, toolsTitle, toolsContent }) => {
  return (
    <ToolSection>
      <RichText render={toolsTitle} />
      <p>{toolsContent}</p>
      <br></br>
      <p>{ourTools}</p>
      <div>
        {tools.map(val => {
          return (
            <ToolIndividual>
            <button>
              <a href={val.tool_link.url}>
                {val.tool_name}
                <img src="/Images/right-arrow.png" alt=""/>
              </a>
            </button>
            </ToolIndividual>
          );
        })}
      </div>
    </ToolSection>
  );
};

export default Tools;
