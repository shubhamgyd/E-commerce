import { createContext, useContext, useReducer } from "react";
import { wishlistReducer } from "../reducer/wishlistReducer";

const wishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const initialState = {
    wishlist: JSON.parse(localStorage.getItem("Wishlist")) || [],
  };
  const [{ wishlist }, dispatchWishlistProducts] = useReducer( 
    wishlistReducer,
    initialState
  );

  return (
    <wishlistContext.Provider
      value={{
        wishlist,
        dispatchWishlistProducts,
      }}
    >
      {children}
    </wishlistContext.Provider>
  );
};

const useWishlist = () => useContext(wishlistContext);

export { WishlistProvider, useWishlist };
