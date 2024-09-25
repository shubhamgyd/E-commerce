import { useCart } from "../context/cartContext"
import { calculateTotalPrice } from "../utils/calculateTotalPrice";

export const PriceComponent = () => {
  const { cart } = useCart();
  const totalPrice = calculateTotalPrice(cart)
  const deliveryCharge = 49
  return (
    <div className="">
      <div className="">
        <p>No. of Products: </p>
        <p>{cart.length}</p>
      </div>
      <div>
        <p>Total Price: </p>
        <p>{totalPrice}</p>
      </div>
      <div>
        <p>Delivery Charge: </p>
        <p>{deliveryCharge}</p>
      </div>
      <div>
        <p>Amount To Pay: </p>
        <p>{totalPrice + deliveryCharge}</p>
      </div>
    </div>
  )
}