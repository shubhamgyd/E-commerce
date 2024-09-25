import { Navbar } from "../components/Navbar";
import { WishlistProductCard } from "../components/WishlistProductCard";
import { useWishlist } from "../context/wishlistContext";
export const Wishlist = () => {
  const { wishlist } = useWishlist();
  return (
    <>
      <Navbar />
      {wishlist?.length > 0 ? (
        <div className="flex flex-wrap gap-8 justify-center pt-20">
          {wishlist?.length > 0 &&
            wishlist.map((product) => (
              <WishlistProductCard key={product.id} product={product} />
            ))}
        </div>
      ) : (
        <div className="flex gap-8 justify-center pt-20">
          <div className="text-3xl">Wishlist Is Empty</div>
        </div>
      )}
    </>
  );
};
