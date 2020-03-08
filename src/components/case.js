import React from "react";
import { RichText } from "prismic-reactjs";
import styled from "styled-components";

const Case = ({ cases }) => {
  console.log("cases", cases);
  return cases.map(val => {
    return (
      <div>
        <RichText render={val.case_title} />
        <img src= {val.case_image.url}/>
        <p>{val.case_content}</p>
      </div>
    );
  });
};

export default Case;
