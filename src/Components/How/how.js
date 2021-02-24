import React, { useContext } from "react";
import styled from "styled-components";

import figHow1 from "../../Assets/fig-how1.svg";
import figHow2 from "../../Assets/fig-how2.svg";
import figHow3 from "../../Assets/fig-how3.svg";
import figHowCard1 from "../../Assets/fig-how-card1.svg";
import figHowCard2 from "../../Assets/fig-how-card2.svg";

import { textHow } from "../../Lang/lang";
import { LangContext } from "../../Context/Context";
import BgFig from "../bgfig/BgFig";

const StyledHow = styled.div`
  display: grid;
  margin: 48px 0px;
  justify-content: center;
  text-align: center;

  h1 {
    margin-bottom: 40px;
  }
  div {
    @media (max-width: 996px) {
      img {
        display: none;
      }
    }
    img {
      padding: 10px;
    }
  }
`;

const CardsHow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 48px 0px;
  .how-card1 {
    border: 1px solid grey;
    margin: 20px;
    text-align: center;
    border-radius: 5px;
    height: 100%;
    width: 450px;
    h3 {
      padding: 30px;
    }
    img {
      padding: 40px;
    }
  }
  .how-card2 {
    border: 1px solid grey;
    margin: 20px;
    text-align: center;
    border-radius: 5px;
    height: 100%;
    width: 450px;
    h3 {
      padding: 30px;
    }
    img {
      padding: 40px;
    }
  }
  button {
    border-radius: 5px;
    width: 100%;
    border: none;
    padding: 23px 45px;
    background: #29441e;
    color: white;
    margin-top: 2%;
    margin-left: 40%;
    margin-right: 40%;
    margin-bottom: 2%;
  }
`;

function How() {
  const [radio] = useContext(LangContext);

  return (
    <div>
      <StyledHow>
        <h1 id="how">{radio === "en" ? textHow.en.title : textHow.br.title}</h1>
        <div>
          <img src={figHow1} alt="one" />
          <img src={figHow3} alt="sing" />
          <img src={figHow2} alt="two" />
        </div>
      </StyledHow>

      <CardsHow>
        <div className="how-card1">
          <img src={figHowCard1} alt="figCard" />
          <h3>{radio === "en" ? textHow.en.card1 : textHow.br.card1}</h3>
        </div>
        <div className="how-card2">
          <img src={figHowCard2} alt="fidCard" />
          <h3>{radio === "en" ? textHow.en.card2 : textHow.br.card2}</h3>
        </div>
        <button>
          {radio === "en" ? textHow.en.button : textHow.br.button}
        </button>
      </CardsHow>
      <BgFig />
    </div>
  );
}

export default How;
