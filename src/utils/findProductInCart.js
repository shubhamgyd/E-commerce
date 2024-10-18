export const findProductInCart = (cart, id) => {
  return cart.length > 0 ?  cart.some((product) => product.id === id) : false
}

// export const findProductInCart = (cart, id) => {
//   if (!Array.isArray(cart)) {
//     console.error("Expected an array for cart, but got:", typeof cart);
//     return false;
//   }
//   return cart.some((product) => product.id === id);
// };
