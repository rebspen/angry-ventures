import React from "react";
import { RichText } from "prismic-reactjs";
import styled from "styled-components";

const CaseSection = styled.section`
  margin: 3vw 15vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const CaseDivide = styled.div`
  width: 45%;
  text-align: left;
  margin: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  a{
    text-decoration: none;
    color: #1e2341;
    weight: 400;
  }
  .icon{
    width:1em;
    margin: 0 0 0 0.3em;
  }
`;

const ImageWrapper = styled.section`
background: url('${props => props.caseImage}');
height: 23em;
width: 21em;
background-size: cover;
background-repeat: no-repeat;
`;

const Case = ({ cases }) => {
  console.log("cases", cases);
  return cases.map((val, i) => {
    if (i % 2 === 0) {
      return (
        <>
          <CaseSection>
            <CaseDivide >
              <ImageWrapper caseImage={val.case_image.url}></ImageWrapper>
              {/* <img src={val.case_image.url} /> */}
            </CaseDivide>
            <CaseDivide style={{marginLeft:"1em", padding:"1em"}}>
            <div>
              <RichText render={val.case_title} />
              <p>{val.case_content}</p>
            </div>
              <a href={val.case_link}><strong>{val.case_link_label}</strong> <img className="icon" src="/Images/right.png" alt=""/></a>
            </CaseDivide>
          </CaseSection>
        </>
      );
    } else {
      return (
        <>
          <CaseSection>
            <CaseDivide>
            <div>
              <RichText render={val.case_title} />
              <p>{val.case_content}</p>
            </div>
              <a href={val.case_link}><strong>{val.case_link_label}</strong><img className="icon" src="/Images/right.png" alt=""/></a>
            </CaseDivide>
            <CaseDivide style={{marginLeft:"1em",  padding:"1em"}}>
              <ImageWrapper caseImage={val.case_image.url}></ImageWrapper>
              {/* <img src={val.case_image.url} /> */}
            </CaseDivide>
          </CaseSection>
        </>
      );
    }
  });
};

export default Case;
