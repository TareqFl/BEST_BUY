import { ADDTOCART, BUY_NOW, CLEAR_CART } from "../actions/types";

const INITIAL_STATE = {
  items: [],
  discount: false,
  username: null,
  totalItems: 0,
  purchaseNow: {},
};

export default function addToCartReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADDTOCART:
      return (state = action.payload);

    case BUY_NOW:
      return (state = { ...state, purchaseNow: action.payload });

    case CLEAR_CART:
      return (state = INITIAL_STATE);

    default:
      return state;
  }
}
