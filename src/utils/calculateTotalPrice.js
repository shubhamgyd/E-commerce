export const calculateTotalPrice = (cart) => {
  return cart.reduce((acc, cur) => acc + cur.price, 0)
}