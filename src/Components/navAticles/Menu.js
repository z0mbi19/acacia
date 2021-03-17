import React, { useContext } from "react";
import styled from "styled-components";
import { ToggleButton, ButtonGroup } from "react-bootstrap";

import { LangContext, BurgerContext } from "../../Context/Context";
import { textMenu } from "../../Lang/lang";

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
      padding: 0 40px;
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

  const radios = [
    { name: "EN", value: "en" },
    { name: "PT", value: "br" },
  ];

  return (
    <UL className="menu" open={open}>
      <li>
        <a href={`/`}>Home</a>
      </li>
      <li>
        <MenuBtn>
          {radioValue === "en" ? textMenu.en.sing : textMenu.br.sing}
        </MenuBtn>
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
