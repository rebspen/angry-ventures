import React from "react";
import { RichText } from "prismic-reactjs";
import styled from "styled-components";

const CaseSection = styled.section`
  margin: 3vw 15vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media screen and (max-width: 992px) {
  flex-direction: row;
}
`;

const CaseDivide = styled.div`
  width: 45%;
  text-align: left;
  margin: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 992px) {
  width: 100%;
}
  a{
    text-decoration: none;
    color: #1e2341;
    weight: 400;
  }
  .icon{
    width:1.8em;
    margin: 0 0 -0.5em 0.3em;
  }
`;

const ImageWrapper = styled.section`
background: url('${props => props.caseImage}');
height: 23em;
width: 21em;
background-size: cover;
background-repeat: no-repeat;
background-position: center;
@media screen and (max-width: 1050px) {
  min-width: 90%;
  max-width:90%;
  height: 30vw;
}
`;

const Case = ({ cases, icon }) => {
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
            <CaseDivide>
            <div>
              <RichText render={val.case_title} />
              <p>{val.case_content}</p>
            </div>
              <a href={val.case_link}><strong>{val.case_link_label}</strong> <img className="icon" src={icon.url} alt=""/></a>
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
              <a href={val.case_link}><strong>{val.case_link_label}</strong><img className="icon" src={icon.url} alt=""/></a>
            </CaseDivide>
            <CaseDivide>
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
