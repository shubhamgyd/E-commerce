import { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { getAllProducts } from "../api/getAllProducts";
import { useState } from "react";
import { ProductsCard } from "../components/ProductsCard";

export const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const product = await getAllProducts("/products");
      setProducts(product);
    })()
  }, []);

  return <>
  <Navbar />
  <div className="flex flex-wrap gap-8 justify-center">
  {products?.length > 0 && products.map((product) => <ProductsCard product={product}/>)}
  </div>
  </>;
};
