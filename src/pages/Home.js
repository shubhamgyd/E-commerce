import { Navbar } from "../components/Navbar";
import { ProductsCard } from "../components/ProductsCard";
import { useProducts } from "../context/productContext";
import { useState, useEffect } from "react";

export const Home = () => {
  const { products, categories } = useProducts();
  const [categorizedProducts, setCategorizedProducts] = useState([]);
  const [priceFilteredProducts, setPriceFilteredProducts] = useState([
    ...categorizedProducts,
  ]);
  useEffect(() => {
    if (products?.length > 0) {
      setCategorizedProducts([...products]);
      setPriceFilteredProducts([...categorizedProducts]);
    }
  }, [products]);
  const handleCategoryClick = (name) => {
    let categoryProducts = products.filter(
      (product) => product.category.name.toLowerCase() === name.toLowerCase()
    );
    setCategorizedProducts(categoryProducts);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   console.log(e)
  // }
  const handleSubmit = (e) => {
    e.preventDefault();
    // Get the value of the selected radio button
    const formData = new FormData(e.target);
    const selectedPrice = formData.get("price");
    console.log("Selected Price: ", selectedPrice);

    // You can now filter products based on the selected price
    if (selectedPrice !== "all") {
      const filteredProducts = categorizedProducts?.filter(
        (product) => product.price <= Number(selectedPrice)
      );
      setPriceFilteredProducts(filteredProducts);
    } else {
      setPriceFilteredProducts([...categorizedProducts]);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex gap-6 pt-20 justify-center fixed bg-slate-100 z-10 w-full pb-5">
        {categories?.length > 0 &&
          categories.map((category) => (
            <div
              key={category.id}
              onClick={() => handleCategoryClick(category.name)}
              className=" rounded-s-full rounded-e-full bg-orange-500 p-2 text-slate-50 font-bold cursor-pointer"
            >
              {category.name}
            </div>
          ))}
      </div>

      <div className="flex gap-9 justify-between px-2 pt-40  relative">
        <div className="flex flex-col fixed">
          <div>Filters</div>
          <div>
            <div>Price</div>
            <form onSubmit={handleSubmit}>
              <div className="flex gap-2">
                <div className="flex gap-1">
                  <input type="radio" name="price" value="10" />
                  <p>10</p>
                </div>
                <div className="flex gap-1">
                  <input type="radio" name="price" value="20" />
                  <p>20</p>
                </div>
                <div className="flex gap-1">
                  <input type="radio" name="price" value="30" />
                  <p>30</p>
                </div>
                <div className="flex gap-1">
                  <input type="radio" name="price" value="40" />
                  <p>40</p>
                </div>
                <div className="flex gap-1">
                  <input type="radio" name="price" value="all" defaultChecked />
                  <p>All</p>
                </div>
                <button type="submit" className="cursor-pointer bg-red-400 rounded-s-full rounded-e-full px-2">
                  Apply
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex flex-wrap gap-8 justify-center absolute left-1/4">
          {priceFilteredProducts?.length > 0 &&
            priceFilteredProducts.map((product) => (
              <ProductsCard product={product} />
            ))}
        </div>
      </div>
    </>
  );
};
