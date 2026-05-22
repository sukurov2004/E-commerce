import ProductCard from "../../../shared/components/card/ProductCard";
import { useGlobalContext } from "../../../context/globalProvider";

import styles from "./Wishlist.module.css";

const Wishlist = () => {
  const { wishlist } = useGlobalContext();

  // EMPTY STATE
  if (wishlist.length === 0) {
    return (
      <section className={styles.emptyWrapper}>
        <h1 className={styles.emptyTitle}>Wishlist boşdur ❤️</h1>
      </section>
    );
  }

  return (
    <section className={styles.wishlist}>
      <div className={styles.container}>
        <h1 className={styles.title}>Your Wishlist</h1>

        <div className={styles.grid}>
          {wishlist.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              variant="wishlist"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Wishlist;
