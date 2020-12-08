import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggleIcon, setToggleIcon] = useState(true);

  const handleMenu = () => {
    if (toggleIcon) {
      setToggleIcon(false);
    } else {
      setToggleIcon(true);
    }
  };

  console.log(toggleIcon);
  return (
    <>
      <div>
        <HeaderStyle>
          <h1>
            <Link to="/">Header</Link>
          </h1>
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
          <ToggleIcon>
            <Link onClick={handleMenu}>
              {toggleIcon ? <MenuIcon /> : <CloseIcon />}
            </Link>
          </ToggleIcon>
          <AsideMenu>
            {/* <i>icon</i> */}
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </AsideMenu>
        </HeaderStyle>
      </div>
    </>
  );
};

export default Header;

const HeaderStyle = styled.header`
  background-color: #333;
  display: flex;
  color: white;
  align-items: center;
  justify-content: space-around;

  & a {
    color: white;
    list-style: none;
    text-decoration: none;
  }
`;

const UlStyle = styled.ul`
  @media screen and (max-width: 520px) {
    display: none;
  }
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
  /* @media screen and (min-width: 959px) {
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
  } */
`;

const ToggleIcon = styled.div`
  @media screen and (min-width: 520px) {
    display: none;
  }
`;

const LMenu = styled.div`
  @media screen and (min-width: 959px) {
    display: none;
  }
`;

const AsideMenu = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: #555;
  list-style: none;
  z-index: 999;
  & ul {
    height: 100%;
    font-size: 28px;
    padding: 0;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  & li {
    display: flex;
  }
  @media screen and (min-width: 520px) {
    display: none;
  }
`;
