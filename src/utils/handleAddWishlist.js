import { findProductInWishlist } from "./findProductInWishlist";

export const handleAddWishlist = (product, dispatchWishlistProducts, navigate, wishlist) => {
  const isProductInWishlist = findProductInWishlist(wishlist, product.id);

  !isProductInWishlist
    ? dispatchWishlistProducts({
        type: "ADD_TO_WISHLIST",
        payload: { product },
      })
    : navigate("/wishlist");
};