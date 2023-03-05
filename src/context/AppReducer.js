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
    case "EMPTY_CART":
      return {
      ...state,
        basket: [],
      };
    case "REMOVE_FROM_CART":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product {id ${action.id} as it's not in basket!`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
};

export default AppReducer;
