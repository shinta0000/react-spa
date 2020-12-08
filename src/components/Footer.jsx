import React from "react";
import styled from "styled-components";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterStyle>
      <div className="footer-contents">
        <h2>
          <Link>React SPA</Link>
        </h2>
        <IconStyle>
          <TwitterIcon className="icon" />
          <GitHubIcon className="icon" />
          <InstagramIcon className="icon" />
        </IconStyle>
        <UlStyle>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
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

const IconStyle = styled.div`
  .icon {
    margin: 0 10px;
  }
`;
