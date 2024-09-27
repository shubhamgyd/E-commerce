import {
  createContext,
  useContext,
  useReducer,
} from "react";
import { cartReducer } from "../reducer/cartReducer";

const cartContext = createContext();

const CartProvider = ({ children }) => {

  const initialState = {
    cart: JSON.parse(localStorage.getItem("Cart")) || [],
  };
  const [{ cart }, dispatchProducts] = useReducer(cartReducer, initialState);

  return (
    <cartContext.Provider
      value={{
        cart,
        dispatchProducts,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

const useCart = () => useContext(cartContext);

export { CartProvider, useCart };
