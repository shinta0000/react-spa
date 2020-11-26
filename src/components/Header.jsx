import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <HeaderStyle>
        <h1>header</h1>
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
      </HeaderStyle>
    </div>
  );
};

export default Header;

const HeaderStyle = styled.header`
  background-color: #333;
  display: flex;
  color: white;
  align-items: center;
  justify-content: space-around;
`;

const UlStyle = styled.ul`
  list-style: none;
  display: flex;
  & li {
    padding-left: 20px;
    & a {
      color: white;
      list-style: none;
      text-decoration: none;
    }
  }
`;
