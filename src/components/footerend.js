import React from "react";
import { RichText } from "prismic-reactjs";
import styled from "styled-components";

const FooterEnd = ({links}) => {
  return (
    <div>
    {links.map(val => {
    return (
      <div>
      <p>{val.footer_content}</p>
        <p>{val.footer_link.url}</p>
      </div>
    );
  })}
    </div>
  );
};

export default FooterEnd;
