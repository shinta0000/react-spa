import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <div>
      <FooterStyle>footer</FooterStyle>
    </div>
  );
};

export default Footer;

const FooterStyle = styled.footer`
  background-color: #ddd;
  height: 70px;
  line-height: 70px;
`;
