import { useCart } from "../context/cartContext";
import { useNavigate } from "react-router-dom";
import { findProductInCart } from "../utils/findProductInCart";
import { useWishlist } from "../context/wishlistContext";
import { findProductInWishlist } from "../utils/findProductInWishlist";
import { handleCartButtonClick } from "../utils/handleCartButtonClick";
import { handleAddWishlist } from "../utils/handleAddWishlist";
export const ProductsCard = ({ product }) => {
  const { dispatchProducts, cart } = useCart();
  const { dispatchWishlistProducts, wishlist } = useWishlist();
  const navigate = useNavigate();

  const isProductInCart = findProductInCart(cart, product.id);
  const isProductInWishlist = findProductInWishlist(wishlist, product.id);

  return (
    <div className="card card-vertical d-flex direction-column relative shadow">
      <div className="card-image-container">
        <img className="card-image" src={product.images[0]} alt="shoes" />
      </div>
      <div className="card-details">
        <div className="card-title">{product.title}</div>
        <div className="card-description">
          <p className="card-des">{product.description.substring(0, 30)}</p>
          <p className="card-price">$ {product.price}</p>
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
            onClick={() => handleAddWishlist(product, dispatchWishlistProducts, navigate, wishlist)}
            className=" button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin"
          >
            {isProductInWishlist ? (
              <div>Move To Wishlist</div>
            ) : (
              <div>Add To Wishlist</div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
