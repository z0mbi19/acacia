import React from "react";
import styled from "styled-components";
import logo from "../../Assets/logo-acacia-horiz.svg";
import Bg from "../bgfig/BgFigRight";

import Ul from "./Menu";

const Nav = styled.nav`
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

function NavBar() {
  return (
    <Nav>
      <a href="/">
        <img className="logo" src={logo} alt="acacia logo" width="50%" />
      </a>
      <Ul />
      <Bg />
    </Nav>
  );
}

export default NavBar;
