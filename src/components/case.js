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
  img {
    min-height: 21em;
    min-width: 28 em;
  }
  a{
    text-decoration: none;
    color: #1e2341;
    weight: 400;
    img{
      width: 1em;
    }
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
            <CaseDivide style={{marginLeft:"1em"}}>
              <RichText render={val.case_title} />
              <p>{val.case_content}</p>
              <a href={val.case_link}><strong>{val.case_link_label}</strong></a>
            </CaseDivide>
          </CaseSection>
        </>
      );
    } else {
      return (
        <>
          <CaseSection>
            <CaseDivide>
              <RichText render={val.case_title} />
              <p>{val.case_content}</p>
              <a href={val.case_link}><strong>{val.case_link_label}</strong></a>
            </CaseDivide>
            <CaseDivide style={{marginLeft:"1em"}}>
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
