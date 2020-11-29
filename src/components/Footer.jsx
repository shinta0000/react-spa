import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterStyle>
      <div className="footer-contents">
        <h2>
          <Link>React SPA</Link>
        </h2>
        <UlStyle>
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>About</Link>
          </li>
          <li>
            <Link>Contact</Link>
          </li>
        </UlStyle>
      </div>
      <p className="copy">&copy;2017 footer-sample</p>
    </FooterStyle>
  );
};

export default Footer;

const FooterStyle = styled.footer`
  background-color: #ccc;
  color: #333;
  text-align: center;
  & a {
    text-decoration: none;
    &:hover {
      color: #000;
      box-shadow: 10px 5px 5px #aaa;
    }
  }
  & p {
    margin: 0;
    font-size: 12px;
  }
  .footer-contents {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px 0;
  }
`;

const UlStyle = styled.ul`
  /* display: flex; */
  li {
    list-style: none;
    margin-top: 16px;
    & a {
      text-decoration: none;
      &:hover {
        color: #000;
        box-shadow: 10px 5px 5px #aaa;
      }
    }
  }
`;
