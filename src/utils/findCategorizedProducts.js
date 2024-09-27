export const findCategorizedProducts = (products, selectedCategory) => {
  return selectedCategory.toLowerCase() === "all" ? products : products.filter(product => product.category.name.toLowerCase() === selectedCategory.toLowerCase());
}