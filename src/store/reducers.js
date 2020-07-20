import {
  addToCart,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  removeFromCart,
  UPDATE_CART,
  updateCart,
} from "./actions";

export const intialBaseState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
};

export function baseReducer(state = intialBaseState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return addToCart(action.payload, state);
    case UPDATE_CART:
      return updateCart(action.payload, state);
    case REMOVE_FROM_CART:
      return removeFromCart(action.payload, state);
    default:
      return state;
  }
}
