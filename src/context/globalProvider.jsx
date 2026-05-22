import { createContext, useContext, useEffect, useState } from "react";

import { getProducts } from "../services/productService";

const GlobalContext = createContext(null);

export const GlobalProvider = ({ children }) => {
  // =====================
  // Search & Sort
  // =====================
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");

  const [sort, setSort] = useState("");
  // =====================
  // PRODUCTS
  // =====================

  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  // =====================
  // BASKET
  // =====================

  const [basket, setBasket] = useState(
    JSON.parse(localStorage.getItem("basket")) || [],
  );

  // =====================
  // WISHLIST
  // =====================

  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || [],
  );

  // =====================
  // FETCH PRODUCTS
  // =====================

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);

      const data = await getProducts();

      setProducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // =====================
  // LOCAL STORAGE
  // =====================

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // =====================
  // ADD BASKET
  // =====================

  const addBasket = (product) => {
    const findProduct = basket.find((item) => item.id === product.id);

    if (findProduct) {
      setBasket(
        basket.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item,
        ),
      );
    } else {
      setBasket([
        ...basket,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  };

  // =====================
  // REMOVE BASKET
  // =====================

  const removeBasket = (id) => {
    setBasket(basket.filter((item) => item.id !== id));
  };

  // =====================
  // INCREASE QUANTITY
  // =====================

  const increaseQuantity = (id) => {
    setBasket(
      basket.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    );
  };

  // =====================
  // DECREASE QUANTITY
  // =====================

  const decreaseQuantity = (id) => {
    setBasket(
      basket
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  // =====================
  // ADD WISHLIST
  // =====================

  const addWishlist = (product) => {
    const findProduct = wishlist.find((item) => item.id === product.id);

    if (findProduct) {
      setWishlist(wishlist.filter((item) => item.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  // =====================
  // REMOVE WISHLIST
  // =====================

  const removeWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  // =====================
  // RESET FILTERS
  // =====================
  const resetFilters = () => {
    setSearch("");
    setSort("");
    setSearchInput("");
  };

  return (
    <GlobalContext.Provider
      value={{
        // PRODUCTS
        products,
        loading,

        // BASKET
        basket,
        addBasket,
        removeBasket,
        increaseQuantity,
        decreaseQuantity,

        // WISHLIST
        wishlist,
        addWishlist,
        removeWishlist,

        // SEARCH & SORT
        searchInput,
        setSearchInput,
        search,
        setSearch,
        sort,
        setSort,
        resetFilters,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// =====================
// HOOK
// =====================

export const useGlobalContext = () => useContext(GlobalContext);
