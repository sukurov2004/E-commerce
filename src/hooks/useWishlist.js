import { useGlobalContext } from "../context/globalProvider";

export const useWishlist = () => {
  const { wishlist, setWishlist } = useGlobalContext();

  const addWishlist = (product) => {
    setWishlist((prev) =>
      prev.find((i) => i.id === product.id)
        ? prev.filter((i) => i.id !== product.id)
        : [...prev, product]
    );
  };

  const removeWishlist = (id) =>
    setWishlist((prev) => prev.filter((i) => i.id !== id));

  const isInWishlist = (id) => wishlist.some((i) => i.id === id);

  return {
    wishlist,
    addWishlist,
    removeWishlist,
    isInWishlist,
    wishlistCount: wishlist.length,
  };
};