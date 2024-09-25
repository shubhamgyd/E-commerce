import { useCart } from "../context/cartContext";
export const HorizontalProductCard = ({ product }) => {
  const { dispatchProducts } = useCart();

  const handleRemoveClick = (id) => {
    dispatchProducts({
      type: "REMOVE_FROM_CART",
      payload: { id },
    });
  };

  return (
    <div class="card-horizontal d-flex shadow">
      <div class="card-hori-image-container relative">
        <img class="card-image" src={product.images[0]} alt="shoes" />
      </div>
      <div class="card-details d-flex direction-column">
        <div class="card-des">{product.title}</div>
        <div class="card-description">
          <p class="card-price">$ {product.price}</p>
        </div>
        <div class="quantity-container d-flex gap">
          <p class="q-title">Quantity: </p>
          <div class="count-container d-flex align-center gap">
            <button class="count">-</button>
            <span class="count-value">1</span>
            <button class="count">+</button>
          </div>
        </div>
        <div class="cta-btn d-flex gap">
          <div class="cta-btn">
            <button
              onClick={() => handleRemoveClick(product.id)}
              class="button hori-btn btn-primary btn-icon d-flex align-center justify-center gap cursor btn-margin"
            >
              Remove From Cart
            </button>
          </div>
          <div class="cta-btn">
            <button class="button hori-btn btn-outline-primary btn-icon d-flex align-center justify-center gap cursor btn-margin">
              Move to Favorite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};