import { DRAWER } from "../actions/types.js";

const INITIAL_STATE = false;

export default function drawerReducer(state = INITIAL_STATE, action) {
  if (action.type === DRAWER) {
    return (state = !state);
  }
  return state;
}
