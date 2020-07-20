import React from "react";

const state = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  setAction: (value) => {},
};

export const BaseContext = React.createContext(state);
