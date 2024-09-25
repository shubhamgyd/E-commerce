export const findProductInWishlist = (wishlist, id) => {
  return wishlist.some((product) => product.id === id);
}