import React, { useContext } from "react";
import styled from "styled-components";

import { BurgerContext } from "../../Context/Context";

const StyledByrger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  display: none;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 20;

  @media (max-width: 1267px) {
    display: flex;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#333" : "#333")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? "0" : "1")};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

function Burger() {
  const [open, setOpen] = useContext(BurgerContext);

  return (
    <StyledByrger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledByrger>
  );
}

export default Burger;
