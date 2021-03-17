import React, { useContext } from "react";
import styled from "styled-components";
import FaqFig from "../../Assets/faq-fig.svg";
import { TextField, Button } from "@material-ui/core";
import * as yup from "yup";

import { textfaq } from "../../Lang/lang";
import { LangContext } from "../../Context/Context";

const StyledFaq = styled.div`
  text-align: center;
  padding-top: 5%;
  display: none;
  .faq-card {
    display: flex;
    flex-flow: column;
    text-decoration: none;
    border-radius: 5px;
    padding: 80px 2% 10px;
    width: 100%;
    .form {
      display: flex;
      border-radius: 5px;
      flex-flow: column;
      padding: 25px 10px;
      .btnForm {
        margin: 40px;
      }
      div {
        width: 100%;
        margin: 10 50px;
        height: 60px;
      }
    }
  }
  .faq-div {
    display: flex;
    justify-content: center;
    margin: 5%;
    @media (max-width: 900px) {
      flex-wrap: wrap;
    }
  }
`;

function Faq() {
  const [radio] = useContext(LangContext);

  return (
    <StyledFaq>
      <h1 id="faq">{radio === "en" ? textfaq.en.title : textfaq.br.title}</h1>
      <div className="faq-div">
        <div>
          <img src={FaqFig} alt="FAQ" />
        </div>
        <div className="faq-card">
          <form className="form" noValidate autoComplete="off">
            <div>
              <TextField id="standard-basic" label="Your Name" />
            </div>
            <div>
              <TextField id="standard-basic" label="Your E-mail" />
            </div>
            <div>
              <TextField id="standard-basic" label="Your Question" />
            </div>
            <Button className="btnForm" color="primary">
              Send
            </Button>
          </form>
        </div>
      </div>
    </StyledFaq>
  );
}

export default Faq;
