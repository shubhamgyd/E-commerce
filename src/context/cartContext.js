import {
  createContext,
  useContext,
  useReducer,
} from "react";
import { ProductReducer } from "../reducer/ProductReducer";

const cartContext = createContext();

const CartProvider = ({ children }) => {

  const initialState = {
    cart: [],
  };
  const [{ cart }, dispatchProducts] = useReducer(ProductReducer, initialState);

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
