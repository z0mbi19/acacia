import React from "react";
import styled from "styled-components";
import bgFig from "../../Assets/bg-fig-rigth.svg";

const Bgfig = styled.div`
  background-image: url(${bgFig});
  width: 330px;
  height: 456px;
  margin-top: -300px;
  position: absolute;
  right: 0;
  float: right;
  z-index: -1;
`;

function BgFigRight() {
  return <Bgfig />;
}

export default BgFigRight;
