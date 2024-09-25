import { handleCartButtonClick } from "../utils/handleCartButtonClick";
import { useWishlist } from "../context/wishlistContext";
import { findProductInCart } from "../utils/findProductInCart";
import { useCart } from "../context/cartContext";
import { useNavigate } from "react-router-dom";
export const WishlistProductCard = ({ product }) => {
  const navigate = useNavigate();
  const {dispatchWishlistProducts} = useWishlist();
  const {cart, dispatchProducts} = useCart();
  const isProductInCart = findProductInCart(cart, product.id);

  const handleRemoveWishlist = (id) => {
    dispatchWishlistProducts({
      type: "REMOVE_FROM_WISHLIST",
      payload: {id}
    })
  }
  return (
    <div className="card card-vertical d-flex direction-column relative shadow">
      <div className="card-image-container">
        <img className="card-image" src={product.images[0]} alt="shoes" />
      </div>
      <div className="card-details">
        <div className="card-title">{product.title}</div>
        <div className="card-description">
          <p className="card-des">{product.description.substring(0, 30)}</p>
          <p className="card-price">Rs. {product.price}</p>
        </div>
        <div className="cta-btn">
          <button
            onClick={() => handleCartButtonClick(product, dispatchProducts, navigate, cart)}
            className=" button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin"
          >
            {isProductInCart ? (
              <div>
                Move To Cart
                <span className="material-icons-outlined hover:cursor">
                  shopping_cart
                </span>
              </div>
            ) : (
              <div>
                <span className="material-icons-outlined hover:cursor">
                  shopping_cart
                </span>
                Add To Cart
              </div>
            )}
          </button>
          <button
            onClick={() => handleRemoveWishlist(product.id)}
            className=" button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin"
          >
            Remove From Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};
