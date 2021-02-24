import React, { useState, createContext } from "react";

export const LangContext = createContext();

export const LangProvider = (props) => {
  const [radioValue, setRadioValue] = useState("en");
  return (
    <LangContext.Provider value={[radioValue, setRadioValue]}>
      {props.children}
    </LangContext.Provider>
  );
};

export const BurgerContext = createContext();

export const BurgerProvider = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <BurgerContext.Provider value={[open, setOpen]}>
      {props.children}
    </BurgerContext.Provider>
  );
};
