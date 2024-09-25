export const findPriceCategorizedProducts = (categorizedProducts, priceCategory) => {
  console.log(priceCategory);
  if (priceCategory.toLowerCase() === "all") {
    return categorizedProducts;
  } else{
    return categorizedProducts.filter(product => product.price <= Number(priceCategory));
  }
}