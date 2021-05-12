import React, { useContext } from "react";
import styled from "styled-components";
import { ToggleButton, ButtonGroup } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { useFormik } from "formik";
import { TextField } from "@material-ui/core";
import axios from "axios";
import * as Yup from "yup";

import { LangContext, BurgerContext } from "../../Context/Context";
import { textMenu } from "../../Lang/lang";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    borderRadius: `5px`,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  },
}));

const UL = styled.ul`
  display: flex;
  list-style: none;
  flex-flow: row wrap;
  align-content: center;
  text-align: center;
  li:last-child {
    margin-top: 2px !important;
  }

  li {
    margin-top: 30px;
    a {
      padding: 0 10px;
      text-decoration: none;
      font-family: sans-serif;
      font-size: 20px;
      color: #353845;
      border-radius: 5px;
    }
  }
  @media (max-width: 1200px) {
    display: flex;
    flex-flow: column nowrap;
    background-color: #abd840;
    position: fixed;
    float: left;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    transition: transform 0.3s ease-in-out;
    z-index: 1;

    #burger {
      display: flex;
    }

    li {
      padding-top: 25px;
    }
  }
`;

const MenuBtn = styled.button`
  border-radius: 5px;
  background-color: #29441e;
  color: white;
  padding: 10px 20px;
  margin: -20px 50px 0px 0px;
`;

function Menu() {
  const [radioValue, setRadioValue] = useContext(LangContext);
  const [open] = useContext(BurgerContext);

  const classes = useStyles();

  const [openModal, setOpenModal] = React.useState(false);

  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email format").required("Required!"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log({
        email: values.email,
      });
      axios
        .post("http://34.233.136.200:5000/lead", {
          email: values.email,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => console.log(err));
      resetForm({});
      handleClose();
    },
  });

  const body = (
    <div className={classes.paper}>
      <h2 id="simple-modal-title">Sign</h2>

      <form onSubmit={formik.handleSubmit}>
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
        <MenuBtn className="btnForm" type="submit" color="primary">
          Send
        </MenuBtn>
      </form>
    </div>
  );

  const radios = [
    { name: "EN", value: "en" },
    { name: "PT", value: "br" },
  ];

  return (
    <UL className="menu" open={open}>
      <li>
        <a href={`#about`}>
          {radioValue === "en" ? textMenu.en.about : textMenu.br.about}
        </a>
      </li>
      <li>
        <a href={`#how`}>
          {radioValue === "en" ? textMenu.en.how : textMenu.br.how}
        </a>
      </li>
      <li>
        <a href={`#why`}>
          {radioValue === "en" ? textMenu.en.why : textMenu.br.why}
        </a>
      </li>
      <li>
        <Link to="/blogs">
          {radioValue === "en" ? textMenu.en.blogs : textMenu.br.blogs}
        </Link>
      </li>
      <li>
        <a href={`#faq`}>
          {radioValue === "en" ? textMenu.en.FAQ : textMenu.br.FAQ}
        </a>
      </li>
      <li>
        <MenuBtn onClick={handleOpen}>
          {radioValue === "en" ? textMenu.en.sing : textMenu.br.sing}
        </MenuBtn>
        <Modal
          open={openModal}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
      </li>
      <li>
        <br />
        <ButtonGroup toggle>
          {radios.map((radio, idx) => (
            <ToggleButton
              className={radio.name}
              key={idx}
              type="radio"
              variant="secondary"
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </li>
    </UL>
  );
}

export default Menu;
