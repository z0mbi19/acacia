import React from "react";
import styled from "styled-components";
import logo from "../../Assets/logo.svg";
import bg1 from "../../Assets/fig-top.svg";

import Ul from "./Menu";

const Nav = styled.nav`
  background-image: url(${bg1});
  background-position: top right;
  background-repeat: no-repeat;
  width: 100%;
  height: 20%;
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    padding-top: 30px;
  }
`;

function NavBar() {
  return (
    <Nav>
      <img className="logo" src={logo} alt="acacia logo" />
      <Ul />
    </Nav>
  );
}

export default NavBar;
