import { useGlobalContext } from "../context/globalProvider";

export const useProducts = () => {
  const { products, loading, search, sort } = useGlobalContext();

  const filtered = [...products]
    .filter((p) => p.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort === "a-z")      return a.title.localeCompare(b.title);
      if (sort === "z-a")      return b.title.localeCompare(a.title);
      if (sort === "low-high") return a.price - b.price;
      if (sort === "high-low") return b.price - a.price;
      return 0;
    });

  return { products: filtered, loading, total: filtered.length };
};