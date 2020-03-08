import React from "react";
import { RichText } from "prismic-reactjs";
import styled from "styled-components";

const FooterSection = styled.section`
  padding: 3vw 20vw 1vw 20vw;
  background-color: #1e2341;
  color: #d8e56b;
  text-align: center;
  img{
    width:4.5em;
    margin:1em;
  }
`;

const SocialSection = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`


const Footer = ({title ,social}) => {
  return (
    <FooterSection>
      <RichText render={title} />
    <SocialSection>
    {social.map(val => {
    return (
      <a href="{val.social_link.url}"> <img src= {val.social_image.url}/></a>
    );
  })}
    </SocialSection>
    </FooterSection>

  );
};

export default Footer;
