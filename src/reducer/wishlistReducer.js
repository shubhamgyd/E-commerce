export const wishlistReducer = (state, { type, payload }) => {
  let Wishlist;
  switch (type) {
    case "ADD_TO_WISHLIST":
      Wishlist = [...state.wishlist, payload.product];
      localStorage.setItem("Wishlist", JSON.stringify(Wishlist))
      return {
        ...state,
        wishlist: Wishlist,
      };
    case "REMOVE_FROM_WISHLIST":
      Wishlist = [...state.wishlist.filter(product => product.id !== payload.id)]
      localStorage.setItem("Wishlist", JSON.stringify(Wishlist));
      return {
        ...state,
        wishlist: Wishlist
      }
    default:
      return state;
  }
};
