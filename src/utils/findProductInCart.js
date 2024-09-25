export const findProductInCart = (cart, id) => {
  return cart.some((product) => product.id === id)
}