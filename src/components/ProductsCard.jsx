export const ProductsCard = ({product}) => {
  return (
    <div class="card card-vertical d-flex direction-column relative shadow">
      <div class="card-image-container">
        <img class="card-image" src={product.images[0]}alt="shoes" />
      </div>
      <div class="card-details">
        <div class="card-title">{product.title}</div>
        <div class="card-description">
          <p class="card-des">{product.description.substring(0, 30)}</p>
          <p class="card-price">
            Rs. {product.price}
          </p>
        </div>
        <div class="cta-btn">
          <button class="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin">
          <span className="material-icons-outlined hover:cursor">shopping_cart</span>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};
