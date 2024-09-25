import { createContext, useContext, useState, useEffect } from "react";
import { getAllProducts } from "../api/getAllProducts";

const productContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      const product = await getAllProducts("/products");
      let categories = await getAllProducts("/categories")
      categories = categories?.splice(0, 6)
      setProducts(product);
      setCategories(categories);
    })();
  }, []);

  return (
    <productContext.Provider
      value={{
        products,
        categories
      }}
    >
      {children}
    </productContext.Provider>
  );
};

const useProducts = () => useContext(productContext);

export { ProductProvider, useProducts };
