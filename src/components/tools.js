import React from "react";
import { RichText } from "prismic-reactjs";
import styled from "styled-components";

const Tools = ({ tools, ourTools, toolsTitle, toolsContent}) => {
    return (
      <div>
      <RichText render = {toolsTitle}/>
      <p>{toolsContent}</p>
      <p>{ourTools}</p>
      {tools.map((val)=>{
        return <div><p>{val.tool_name}</p><p>{val.tool_link.url}</p></div>
      })}
      </div>
    );
};

export default Tools;
