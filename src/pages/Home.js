import { Navbar } from "../components/Navbar";
import { ProductsCard } from "../components/ProductsCard";
import { useProducts } from "../context/productContext";

export const Home = () => {
  const { products } = useProducts();
  return (
    <>
      <Navbar />
      <div className="flex flex-wrap gap-8 justify-center pt-20">
        {products?.length > 0 &&
          products.map((product) => <ProductsCard product={product} />)}
      </div>
    </>
  );
};
