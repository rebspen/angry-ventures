import React from "react";
import { RichText } from "prismic-reactjs";
import styled from "styled-components";

const ContactSection = styled.section`
  margin: 7vw 7vw;
  text-align: center;
  div{
    background-color:#d8e56b ;
    padding: 4vw 16vw;
  }

  input{
    margin: 1em;
    border: none;
    width: 25vw;
    padding: 1em 1em;
  }
`;

const ContactInputs = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around
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
      <p>{footer}</p>
    </div>
    </ContactSection>
 
  );
};

export default Contact;
