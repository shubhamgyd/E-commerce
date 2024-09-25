import { createContext, useContext, useState, useEffect } from "react";
import { getAllProducts } from "../api/getAllProducts";

const productContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const product = await getAllProducts("/products");
      setProducts(product);
    })();
  }, []);

  return (
    <productContext.Provider
      value={{
        products,
      }}
    >
      {children}
    </productContext.Provider>
  );
};

const useProducts = () => useContext(productContext);

export { ProductProvider, useProducts };
