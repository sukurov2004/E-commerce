import ProductCard from "../../../shared/components/card/ProductCard";
import { useGlobalContext } from "../../../context/globalProvider";

import styles from "./Basket.module.css";

const Basket = () => {
  const { basket } = useGlobalContext();

  // EMPTY STATE
  if (basket.length === 0) {
    return (
      <section className={styles.emptyWrapper}>
        <h1 className={styles.emptyTitle}>
          Basket boşdur 🛒
        </h1>
      </section>
    );
  }

  return (
    <section className={styles.basket}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Your Basket
        </h1>

        <div className={styles.grid}>
          {basket.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              variant="basket"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Basket;