import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <div>
      <HeaderStyle>
        <h1>header</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
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
  & ul {
    list-style: none;
    display: flex;
    & li {
      padding-left: 20px;
    }
  }
`;
