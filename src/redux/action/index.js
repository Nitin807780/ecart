// Action Types
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";
export const ADD_ORDER = "ADD_ORDER";

// Action Creators
export const addCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const delCart = (product) => ({
  type: REMOVE_FROM_CART,
  payload: product,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});

export const addOrder = (order) => ({
  type: ADD_ORDER,
  payload: order,
});
