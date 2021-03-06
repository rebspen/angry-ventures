import React from "react";
import { RichText } from "prismic-reactjs";
import styled from "styled-components";

const ContactSection = styled.section`
  margin: 5vw 17vw;
  text-align: center;
  @media screen and (max-width: 1050px) {
    margin: 3vw 10vw;
}
  h1 {
    font-size: 2.5em;
    weight: 300;
    margin-bottom: 0.2em;
    @media screen and (max-width: 1050px) {
      font-size: 1.5em; 
}
  }
  div {
    background-color: #d8e56b;
    padding: 3vw 2vw 2vw 2vw;
  }
  p {
    margin: 0;
    @media screen and (max-width: 1050px) {
      font-size: 0.8em; 
}
  }
  input {
    margin: 0.4em 0;
    border: none;
    width: 75%;
    padding: 0.5em 0.5em;
    font-size: 0.8em;
    z-index:100
  }
  small {
    font-size: 12px;
    @media screen and (max-width: 1050px) {
      font-size: 0.3em; 
}
  }

  img {
    width: 2.3em;
    margin:0;
    margin-bottom: -0.9em;
  }  
  .submit{
    padding:0;
    width: 100%;
    margin-left: 2.5em;
    background: none
  }
  
`;

const ContactInputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Contact = ({ footer, title, subtitle, email, last, name, icon }) => {
  return (
    <ContactSection>
      <div>
        <RichText render={title} />
        <p>{subtitle}</p>
        <ContactInputs>
          <input placeholder={name} />
          <input placeholder={last} />
          <div className="submit">
          <input placeholder={email} />
          <img src={icon.url} alt="" />
          </div>
        </ContactInputs>
        <p>
          <small>{footer}</small>
        </p>
      </div>
    </ContactSection>
  );
};

export default Contact;
