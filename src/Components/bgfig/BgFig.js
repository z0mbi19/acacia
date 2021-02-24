import React from "react";
import styled from "styled-components";
import bgFig from "../../Assets/bg-fig-left.svg";

const Bgfig = styled.div`
  background-image: url(${bgFig});
  width: 330px;
  height: 456px;
  float: left;
  position: absolute;
  margin-top: -200px;
  z-index: -1;
`;

function BgFig() {
  return <Bgfig />;
}

export default BgFig;
