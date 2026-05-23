import { useGlobalContext } from "../context/globalProvider";

export const useBasket = () => {
  const { basket, setBasket } = useGlobalContext();

  const addBasket = (product) => {
    setBasket((prev) => {
      const found = prev.find((i) => i.id === product.id);
      return found
        ? prev.map((i) => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i)
        : [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeBasket = (id) =>
    setBasket((prev) => prev.filter((i) => i.id !== id));

  const increaseQuantity = (id) =>
    setBasket((prev) =>
      prev.map((i) => i.id === id ? { ...i, quantity: i.quantity + 1 } : i)
    );

  const decreaseQuantity = (id) =>
    setBasket((prev) =>
      prev
        .map((i) => i.id === id ? { ...i, quantity: i.quantity - 1 } : i)
        .filter((i) => i.quantity > 0)
    );

  const totalPrice = basket.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const totalItems = basket.reduce((sum, i) => sum + i.quantity, 0);
  const isInBasket = (id) => basket.some((i) => i.id === id);

  return {
    basket,
    addBasket,
    removeBasket,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
    totalItems,
    isInBasket,
  };
};