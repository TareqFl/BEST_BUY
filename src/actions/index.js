import { DRAWER, ADDTOCART, BUY_NOW, BUY_BOOLEAN } from "./types";

export const handleDrawer = () => {
  return {
    type: DRAWER,
  };
};

export const add_To_Cart = (value) => {
  return {
    type: ADDTOCART,
    payload: value,
  };
};

export const clear_cart = () => {
  return {
    type: CLEAR_CART,
  };
};

export const buy_now = (value) => {
  return {
    type: BUY_NOW,
    payload: value,
  };
};

export const buy_boolean = (value) => {
  return {
    type: BUY_BOOLEAN,
    payload: value,
  };
};
