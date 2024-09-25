import { findProductInCart } from "./findProductInCart";

export const handleCartButtonClick = (product, dispatchProducts, navigate, cart) => {
  const isProductInCart = findProductInCart(cart, product.id);

  !isProductInCart
    ? dispatchProducts({
        type: "CART",
        payload: { product },
      })
    : navigate("/cart");
};