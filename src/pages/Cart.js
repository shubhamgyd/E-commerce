import { HorizontalProductCard } from "../components/HorizontalProductCard";
import { Navbar } from "../components/Navbar"
import { useCart } from "../context/cartContext";
import { PriceComponent } from "../components/PriceComponent";
export const Cart = () => {
  const {cart} = useCart();
  return (<>
  <Navbar />
  <div className="flex gap-8 justify-center pt-20">
      <div className="flex flex-col">
        {cart?.length > 0 &&
          cart.map((product) => <HorizontalProductCard product={product} />)}
      </div>
      <div>
        <PriceComponent />
      </div>
      </div>
  </>)
}