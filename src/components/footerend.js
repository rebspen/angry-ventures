import React from "react";
import { RichText } from "prismic-reactjs";
import styled from "styled-components";

const FooterEndSection = styled.section`
  padding: 0vw 20vw 3vw 20vw;
  background-color: #1e2341;

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    @media screen and (max-width: 1050px) {
      justify-content: none;
      flex-wrap: wrap;
}
  }

  span{
    color:#1e2341;
  }

  a {
    text-decoration: none;
    color: #d8e56b;
  }

  p {
    font-size: 15px;
  }
`;

const FooterEnd = ({ links }) => {
  return (
    <FooterEndSection>
      <div>
        {links.map((val, i) => {
          if (i !== links.length - 1) {
            return (
              <a href={val.footer_link.url}>
                <p>
                  {val.footer_content} &#9679; <span> i </span>
                </p>
              </a>
            );
          } else {
            return (
              <a href={val.footer_link.url}>
                <p> {val.footer_content} </p>
              </a>
            );
          }
        })}
      </div>
    </FooterEndSection>
  );
};

export default FooterEnd;
