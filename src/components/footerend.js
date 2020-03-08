import React from "react";
import { RichText } from "prismic-reactjs";
import styled from "styled-components";

const FooterEndSection = styled.section`
  padding: 1vw 20vw 3vw 20vw;
  background-color: #1e2341;
  color: #d8e56b;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;

  a{
    text-decoration: none
    color: #d8e56b;
  }
`;

const FooterEnd = ({links}) => {
  return (
    <FooterEndSection>
{links.map(val => {
return (
  <a href ={val.footer_link.url}><p> {val.footer_content} - </p></a>
);
})}
    </FooterEndSection>


  );
};

export default FooterEnd;
