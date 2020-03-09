import React from "react";
import { RichText } from "prismic-reactjs";
import styled from "styled-components";

const ContactSection = styled.section`
  margin: 5vw 17vw;
  text-align: center;
  h1{
    font-size: 2.5em;
    weight:300;
    margin-bottom: 0.2em;
  }
  div{
    background-color:#d8e56b ;
    padding: 3vw 2vw 2vw 2vw;
  }
  p{
    margin: 0;
  }
  input{
    margin: 0.4em 0;
    border: none;
    width: 75%;
    padding: 0.5em 0.5em;
    font-size: 0.8em
  }
  small{
    font-size:12px;
  }
`;

const ContactInputs = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items:center;
`

const Contact = ({ footer, title, subtitle, email, last, name }) => {
  return (
    <ContactSection>
    <div>
      <RichText render={title} />
      <p>{subtitle}</p>
      <ContactInputs>
      <input placeholder={name} />
      <input placeholder={last} />
      <input placeholder={email} />
      </ContactInputs>
      <p><small>{footer}</small></p>
    </div>
    </ContactSection>
 
  );
};

export default Contact;
