export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket.reduce((amount, product) => {
    return amount + product.price;
  }, 0);

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_CART":
      return {
        ...state,
        basket: [...state.basket, action.product],
      };
    case "REMOVE_FROM_CART":
      return
    default:
      return state;
  }
};

export default AppReducer;
