import React from "react";
import { RichText } from "prismic-reactjs";
import styled from "styled-components";

const CaseSection = styled.section`
  margin: 7vw 20vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const CaseDivide = styled.div`
  width: 45%;
  text-align: left;
  margin: 1em;
`;

const Case = ({ cases }) => {
  console.log("cases", cases);
  return cases.map(val => {
    return (
      <CaseSection>
        <CaseDivide>
          <img src={val.case_image.url} />
        </CaseDivide>
        <CaseDivide>
          <RichText render={val.case_title} />
          <p>{val.case_content}</p>
        </CaseDivide>
      </CaseSection>
    );
  });
};

export default Case;
