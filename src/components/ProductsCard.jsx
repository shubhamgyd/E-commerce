import { useCart } from "../context/cartContext";
// import { useNavigate } from "react-router-dom";
export const ProductsCard = ({ product }) => {
  const { dispatchProducts, cart } = useCart();

  const handleCartButtonClick = (product) => {
    dispatchProducts({
      type: "CART",
      payload: {product},
    });
  };

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
            onClick={() => handleCartButtonClick(product)}
            className=" button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin"
          >
            <span className="material-icons-outlined hover:cursor">
              shopping_cart
            </span>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};
