export const findProductInWishlist = (wishlist, id) => {
  return wishlist.length > 0 ? wishlist.some((product) => product.id === id) : false;
}