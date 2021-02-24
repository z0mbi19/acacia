import React from "react";
import styled from "styled-components";

import BgFigRight from "../bgfig/BgFigRight";
import Bg from "../../Assets/FooterBG.svg";
import logo from "../../Assets/logo.svg";
import link from "./link.svg";
import insta from "./insta.svg";

const Footer = styled.div`
  text-align: center;
  background-image: url(${Bg});
  background-position: top;
  padding-top: 8%;
  .rede {
    flex-flow: row;
    padding: 3%;
    img {
      padding-left: 10px;
    }
  }
`;

function footer() {
  return (
    <Footer>
      <BgFigRight />
      <img src={logo} alt="logo" />
      <div className="rede">
        <a href="https://www.linkedin.com/company/acacia-nature/">
          <img src={link} alt="link" />
        </a>
        <a href="https://instagram.com/acaciatech?igshid=1ttqepenf6hqb">
          <img src={insta} alt="insta" />
        </a>
      </div>
      <hr />
      <p>Copyrights 2021 acacia.eco All right Reserved </p>
    </Footer>
  );
}

export default footer;
