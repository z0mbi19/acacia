import React, { useContext } from "react";
import styled from "styled-components";

import { textWhy } from "../../Lang/lang";
import { LangContext } from "../../Context/Context";
import Bgfig from "../bgfig/BgFigRight";

import bg from "../../Assets/bg2.svg";
import CardSvg1 from "../../Assets/card-climate.svg";
import CardSvg2 from "../../Assets/card-water.svg";
import CardSvg3 from "../../Assets/card-deforestation.svg";
import CardSvg4 from "../../Assets/card-floods.svg";
import CardSvg5 from "../../Assets/card-pollution.svg";
import CardSvg6 from "../../Assets/card-wildlife.svg";

const WhyStyled = styled.div`
  text-align: center;
  background-image: url(${bg});
  background-position: top;
  padding-bottom: 50px;
  h1 {
    padding-top: 100px;
  }
  p {
    width: 75%;
    padding-left: 25%;
  }
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    text-align: center;
    height: 100%;
    margin: 0% 5%;
    .why-card {
      display: block;
      border: solid 1px grey;
      border-radius: 5px;
      padding: 10px 60px;
      margin: 40px 30px 20px;
      color: #38356d;
      background-color: white;

      img {
        margin-top: 50px;
        margin-bottom: 17px;
        margin-left: 10px;
        margin-right: 40;
      }
      h3 {
        margin-bottom: 30px;
      }
    }
    .why-card-wildlife {
      display: block;
      border: solid 1px grey;
      border-radius: 5px;
      padding: 10px 35px 5px;
      margin: 40px 30px 20px;
      color: #38356d;
      background-color: white;

      img {
        margin-top: 50px;
        margin-bottom: 17px;
        margin-left: 10px;
        margin-right: 40;
      }
      h3 {
        margin-bottom: 30px;
      }
    }
  }
`;

function Why() {
  const [radio] = useContext(LangContext);

  return (
    <div>
      <WhyStyled>
        <h1 id="why" >{radio === "en" ? textWhy.en.title : textWhy.br.title}</h1>
        <p>{radio === "en" ? textWhy.en.p : textWhy.br.p}</p>
        <div className="why-cards">
          <div className="why-card">
            <img src={CardSvg1} alt="Climatechange" />
            <h3>{radio === "en" ? textWhy.en.card1 : textWhy.br.card1}</h3>
          </div>
          <div className="why-card">
            <img src={CardSvg2} alt="Climatechange" />
            <h3>{radio === "en" ? textWhy.en.card2 : textWhy.br.card2}</h3>
          </div>
          <div className="why-card">
            <img src={CardSvg3} alt="Climatechange" />

            <h3>{radio === "en" ? textWhy.en.card3 : textWhy.br.card3}</h3>
          </div>
          <div className="why-card">
            <img src={CardSvg4} alt="Climatechange" />

            <h3>{radio === "en" ? textWhy.en.card4 : textWhy.br.card4}</h3>
          </div>
          <div className="why-card">
            <img src={CardSvg5} alt="Climatechange" />

            <h3>{radio === "en" ? textWhy.en.card5 : textWhy.br.card5}</h3>
          </div>
          <div className="why-card-wildlife">
            <img src={CardSvg6} alt="Climatechange" />

            <h3>{radio === "en" ? textWhy.en.card6 : textWhy.br.card6}</h3>
          </div>
        </div>
      </WhyStyled>
      <Bgfig />
    </div>
  );
}

export default Why;
