import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";
import HandleDrawer from "./DrawerReducer";
import Cart from "./addToCartReducer";
import BuyBool from "./buyBoooleanReducer";
const rootReducer = combineReducers({
  HandleDrawer,
  Cart,
  BuyBool,
});

const initial_state = {};

export const store = createStore(
  rootReducer,
  initial_state,
  composeWithDevTools(applyMiddleware(thunk))
);

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
