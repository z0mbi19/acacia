import React, { useContext } from "react";
import styled from "styled-components";

import bg1 from "../../Assets/bg1.svg";
import aboutfig from "../../Assets/about.svg";
import { textAbout } from "../../Lang/lang";
import { LangContext } from "../../Context/Context";

const AboutUs = styled.div`
  justify-content: center;
  display: flex;
  height: 100%;
  flex-flow: row;
  .textWorld {
    max-height: 500px;
    max-width: 700px;
    padding: 50px;
  }
  @media (max-width: 763px) {
    flex-flow: column;
  }
  div {
    display: flex;
    flex-wrap: wrap;
    h3 {
      margin-bottom: 0 !important;
    }

    p {
      font-style: normal;
      font-size: 26px;
      line-height: 30px;
      color: #120f47;
    }
  }
`;

function About() {
  const [radio] = useContext(LangContext);
  return (
    <div
      style={{
        backgroundImage: `url(${bg1})`,
        backgroundPosition: "bottom",
        backgroundRepeat: "none",
        padding: "10px",
        zIndex: "0",
      }}
    >
      <AboutUs>
        <div className="textWorld">
          <h1 id="about">
            {radio === "en" ? textAbout.en.title : textAbout.br.title}
          </h1>
          <p>{radio === "en" ? textAbout.en.firstp : textAbout.br.firstp}</p>
          <p>{radio === "en" ? textAbout.en.secondp : textAbout.br.secondp}</p>
        </div>
        <div>
          <img src={aboutfig} alt="world" width="100%" />
        </div>
      </AboutUs>
    </div>
  );
}

export default About;
