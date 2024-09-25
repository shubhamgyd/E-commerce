export const findCategorizedProducts = (products, selectedCategory) => {
  console.log(selectedCategory);
  return selectedCategory.toLowerCase() === "all" ? products : products.filter(product => product.category.name.toLowerCase() === selectedCategory.toLowerCase());
}