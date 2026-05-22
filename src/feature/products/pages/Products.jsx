import styles from "./Products.module.css";
import { useGlobalContext } from "../../../context/globalProvider";
import ProductCard from "../../../shared/components/card/ProductCard";
import Loader from "../../../shared/components/loader/Loader";
const Products = () => {
  const { products, loading, search, sort } = useGlobalContext();

  if (loading) {
    return <Loader />;
  }
let filteredProducts = [...products];

// SEARCH

filteredProducts =
  filteredProducts.filter((product) =>
    product.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

// SORT

if (sort === "a-z") {
  filteredProducts.sort((a, b) =>
    a.title.localeCompare(b.title)
  );
}

if (sort === "z-a") {
  filteredProducts.sort((a, b) =>
    b.title.localeCompare(a.title)
  );
}

if (sort === "low-high") {
  filteredProducts.sort(
    (a, b) => a.price - b.price
  );
}

if (sort === "high-low") {
  filteredProducts.sort(
    (a, b) => b.price - a.price
  );
}
  return (
    <section className={styles.products}>
      <div className={styles.productsContainer}>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
