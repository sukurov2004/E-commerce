import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import styles from "./ProductDetail.module.css";
import Loader from "../../../shared/components/Loader/Loader";
const ProductDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return <Loader />;
  }

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
