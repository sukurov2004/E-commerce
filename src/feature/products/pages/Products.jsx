import styles from "./Products.module.css";
import { useProducts } from "../../../hooks/useProducts";
import ProductCard from "../../../shared/components/card/ProductCard";
import Loader from "../../../shared/components/loader/Loader";

const Products = () => {
  const { products, loading } = useProducts();

  if (loading) return <Loader />;

  return (
    <section className={styles.products}>
      <div className={styles.productsContainer}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;