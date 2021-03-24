import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { TextField } from "@material-ui/core";
import { Alert } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

import { textfaq } from "../../Lang/lang";
import FaqFig from "../../Assets/faq-fig.svg";
import { LangContext } from "../../Context/Context";

const StyledFaq = styled.div`
  text-align: center;
  padding-top: 5%;
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
        border-radius: 5px;
        border: none;
        padding: 10px;
        background: #29441e;
        color: white;
        width: 50%;
        align-self: center;
      }
      div {
        width: 95%;
        margin: 10px;
        height: 60px;
        p {
          color: red;
        }
      }
      label {
        margin-left: 10px;
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

  const [showA, setShowA] = useState(false);
  const [showB, setShowB] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      question: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Mininum 2 characters")
        .max(50, "Maximum 50 characters")
        .required("Required!"),
      email: Yup.string().email("Invalid email format").required("Required!"),
      question: Yup.string()
        .min(2, "Mininum 2 characters")
        .max(120, "Maximum 120 characters")
        .required("Required!"),
    }),
    onSubmit: (values, { resetForm }) => {
      axios
        .post("http://34.233.136.200:5000/question", {
          name: values.name,
          email: values.email,
          question: values.question,
          language: radio,
        })
        .then(() => {
          setShowA(true);
        })
        .catch((err) => console.log(err), setShowB(false));
      resetForm({});
      setShowA(true);
    },
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowA(false);
      setShowB(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [showA, showB]);

  return (
    <StyledFaq>
      <h1 id="faq">{radio === "en" ? textfaq.en.title : textfaq.br.title}</h1>
      <div className="faq-div">
        <div>
          <img src={FaqFig} alt="FAQ" />
        </div>
        <div className="faq-card">
          <form onSubmit={formik.handleSubmit} className="form">
            <div>
              <TextField
                label="Your Name"
                type="text"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              {formik.errors.name && formik.touched.name && (
                <p className="err">{formik.errors.name}</p>
              )}
            </div>
            <div>
              <TextField
                label="Your E-mail"
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.errors.email && formik.touched.email && (
                <p className="err">{formik.errors.email}</p>
              )}
            </div>
            <div>
              <TextField
                label="Your Question"
                type="text"
                name="question"
                value={formik.values.question}
                onChange={formik.handleChange}
              />
              {formik.errors.question && formik.touched.question && (
                <p className="err">{formik.errors.question}</p>
              )}
            </div>
            <button className="btnForm" type="submit" color="primary">
              Send
            </button>
            <div>
              <Alert show={showA} variant="success">
                Question sent
              </Alert>
              <Alert show={showB} variant="danger">
                Question not sent
              </Alert>
            </div>
          </form>
        </div>
      </div>
    </StyledFaq>
  );
}

export default Faq;
