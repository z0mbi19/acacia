import React, { useContext } from "react";
import styled from "styled-components";

import { textSing } from "../../Lang/lang";
import { LangContext } from "../../Context/Context";

import bg from "../../Assets/bg2.svg";
import SingFig from "../../Assets/sing-fig.svg";
import Check from "../../Assets/check-sing.svg";
import BgFig from "../bgfig/BgFig";

const SteledSing = styled.div`
  text-align: center;
  background-image: url(${bg});
  background-position: top;
  padding-top: 8%;
  padding-bottom: 50px;
  .textSing {
    padding-left: 2%;
    flex-flow: column;
    text-align: start;
    button {
      background-color: #29441e;
      border-radius: 5px;
      border: none;
      color: white;
      padding: 20px 40px;
      margin-top: 5%;
    }
  }
  .nature {
    display: flex;
    flex-flow: row;
    align-items: center;
    text-align: start;
    justify-content: start;
    text-align: justify;

    img {
      padding-right: 10px;
      margin-top: -10px;
    }
  }
  div {
    display: flex;
    justify-content: center;
    text-align: justify;

    flex-wrap: wrap;
    @media (max-width: 400px) {
      img {
        width: 100%;
      }
    }
  }
`;

function Sing() {
  const [radio] = useContext(LangContext);

  return (
    <div>
      <BgFig />
      <SteledSing>
        <h1>{radio === "en" ? textSing.en.title : textSing.br.title}</h1>
        <div>
          <div>
            <img src={SingFig} alt="Sing Fig" />
          </div>
          <div className="textSing">
            <h2>
              {radio === "en" ? textSing.en.subTitle : textSing.br.subTitle}
            </h2>
            <div className="nature">
              <div>
                <img src={Check} alt="Sing Fig" />
              </div>
              <div>
                <p>{radio === "en" ? textSing.en.text1 : textSing.br.text1}</p>
              </div>
            </div>
            <div className="nature">
              <div>
                <img src={Check} alt="Sing Fig" />
              </div>
              <div>
                <p>{radio === "en" ? textSing.en.text2 : textSing.br.text2}</p>
              </div>
            </div>
            <div className="nature">
              <div>
                <img src={Check} alt="Sing Fig" />
              </div>
              <div>
                <p>{radio === "en" ? textSing.en.text3 : textSing.br.text3}</p>
              </div>
            </div>
            <div>
              <a href="https://naturepledge.org/">
                <button>
                  {radio === "en" ? textSing.en.btn : textSing.br.btn}
                </button>
              </a>
            </div>
          </div>
        </div>
      </SteledSing>
    </div>
  );
}

export default Sing;
