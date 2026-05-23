import { useParams } from "react-router-dom";
import styles from "./ProductDetail.module.css";
import Loader from "../../../shared/components/loader/Loader";
import { useProductDetail } from "../../../hooks/useProductDetail";

const ProductDetail = () => {
  const { id } = useParams();
  const { product, loading } = useProductDetail(id);

  if (loading) return <Loader />;

  return (
    <section className={styles.detail}>
      <div className={styles.imageBox}>
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <div className={styles.content}>
        <span className={styles.category}>{product.category}</span>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <h2>${product.price}</h2>
      </div>
    </section>
  );
};

export default ProductDetail;