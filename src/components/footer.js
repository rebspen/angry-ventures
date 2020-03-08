import React from "react";
import { RichText } from "prismic-reactjs";
import styled from "styled-components";

const Footer = ({title ,social}) => {
  return (
    <div>
      <RichText render={title} />
    {social.map(val => {
    return (
      <div>
        <img src= {val.social_image.url}/>
        <p>{val.social_link.url}</p>
      </div>
    );
  })}
    </div>
  );
};

export default Footer;
