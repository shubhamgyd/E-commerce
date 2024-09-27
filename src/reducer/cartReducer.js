export const cartReducer = (state, { type, payload }) => {
  let Cart;
  switch (type) {
    case "CART":
      Cart = [...state.cart, payload.product]
      localStorage.setItem("Cart", JSON.stringify(Cart));
      return {
        ...state, cart: Cart
      }
    case "REMOVE_FROM_CART":
      Cart = [...state.cart.filter(product => product.id !== payload.id)]
      localStorage.setItem("Cart", JSON.stringify("Cart"));
      return {
        ...state, cart: Cart
      }
    case "EMPTY":
      localStorage.setItem("Cart", JSON.stringify([]))
      return {
        ...state, cart: []
      }
    default:
      return state;
  }
};
