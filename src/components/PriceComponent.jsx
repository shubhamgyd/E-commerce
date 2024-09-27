import { useCart } from "../context/cartContext";
import { calculateTotalPrice } from "../utils/calculateTotalPrice";
import { useNavigate } from "react-router-dom";

export const PriceComponent = () => {
  const { cart, dispatchProducts } = useCart();
  const totalPrice = calculateTotalPrice(cart);
  const deliveryCharge = 49;

  const navigate = useNavigate();

  const loadScript = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.onload = () => resolve(true);
      script.onerror = (error) => reject(new Error("Script loading error"));
      document.body.appendChild(script);
      console.log(script);
    });
  };

  const displayRazorpay = async () => {
    try {
      const scriptLoaded = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );
      if (!scriptLoaded) {
        console.error("Razorpay SDK failed to load.");
      }

      const options = {
        key: "rzp_test_ICVtkgynG8tfHm",
        amount: Number((totalPrice + deliveryCharge) * 100),
        currency: "INR",
        name: "Shop It",
        description: "Thankyou for shopping with us",
        handler: function (response) {
          // Razorpay will return payment_id here
          console.log(
            "Razorpay payment success:",
            response.razorpay_payment_id
          );
          setTimeout(() => {
            navigate("/");  // Navigate after a small delay
            dispatchProducts({
              type:"EMPTY",
              payload: null
            })
          }, 1000);
        },
      };
      console.log(options);
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error("Error in Razorpay setup:", error);
    }
  };

  return (
    <div className="flex flex-col p-4 border border-red-500 text-2xl gap-4">
      <div className="flex justify-between gap-12">
        <p>No. of Products: </p>
        <p className="font-sans">{cart.length}</p>
      </div>
      <div className="flex justify-between">
        <p>Total Price: </p>
        <p className="font-sans">{totalPrice}</p>
      </div>
      <div className="flex justify-between">
        <p>Delivery Charge: </p>
        <p className="font-sans">{deliveryCharge}</p>
      </div>
      <div className="flex justify-between">
        <p>Amount To Pay: </p>
        <p className="font-sans">{totalPrice + deliveryCharge}</p>
      </div>
      <div
        onClick={displayRazorpay}
        className=" button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin"
      >
        Place Order
      </div>
    </div>
  );
};
