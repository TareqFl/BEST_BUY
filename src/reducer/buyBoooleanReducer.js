import { BUY_BOOLEAN } from "../actions/types";

export default function buyBoolean(state = null, action) {
  if (action.type === BUY_BOOLEAN) {
    return (state = action.payload);
  }

  return state;
}
