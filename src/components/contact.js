import React from "react";
import { RichText } from "prismic-reactjs";
import styled from "styled-components";

const Contact = ({ footer, title, subtitle, email, last, name }) => {
  return (
    <div>
      <RichText render={title} />
      <p>{subtitle}</p>
      <input placeholder={name} />
      <input placeholder={last} />
      <input placeholder={email} />
      <p>{footer}</p>
    </div>
  );
};

export default Contact;
