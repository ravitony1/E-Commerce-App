import Carttypes from "./Carttypes";

export const toggleCartHidden = () => ({
  type: Carttypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: Carttypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: Carttypes.REMOVE_ITEM,
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: Carttypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});
