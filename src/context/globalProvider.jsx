
import { createContext, useContext, useEffect, useState } from "react";
import { getProducts } from "../services/productService";

const GlobalContext = createContext(null);

export const GlobalProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [basket, setBasket] = useState(
    JSON.parse(localStorage.getItem("basket")) || []
  );
  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || []
  );

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setProducts(await getProducts());
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  return (
    <GlobalContext.Provider
      value={{
        products, loading,
        basket, setBasket,
        wishlist, setWishlist,
        searchInput, setSearchInput,
        search, setSearch,
        sort, setSort,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);