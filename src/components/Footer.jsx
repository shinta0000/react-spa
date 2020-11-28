import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterStyle>
      <p>&copy;2017 footer-sample</p>
    </FooterStyle>
  );
};

export default Footer;

const FooterStyle = styled.footer`
  background-color: #ccc;
  color: #333;
  text-align: center;
  padding: 30px 0;
  & p {
    margin: 0;
  }
`;
