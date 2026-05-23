import styles from "./ProductCard.module.css";
import { FaHeart, FaShoppingBasket, FaTrash, FaMinus, FaPlus, FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useBasket } from "../../../hooks/useBasket";
import { useWishlist } from "../../../hooks/useWishlist";

const ProductCard = ({ product, variant = "product" }) => {
  const { addBasket, removeBasket, increaseQuantity, decreaseQuantity, isInBasket } = useBasket();
  const { addWishlist, removeWishlist, isInWishlist } = useWishlist();

  const inBasket   = isInBasket(product.id);
  const inWishlist = isInWishlist(product.id);

  const renderActions = () => {
    switch (variant) {
      case "basket":
        return (
          <div className={styles.actions}>
            <button className={`${styles.iconBtn} ${styles.deleteBtn}`} onClick={() => removeBasket(product.id)}>
              <FaTrash />
            </button>
          </div>
        );

      case "wishlist":
        return (
          <div className={styles.actions}>
            <button className={`${styles.iconBtn} ${styles.deleteBtn}`} onClick={() => removeWishlist(product.id)}>
              <FaTrash />
            </button>
            <button className={`${styles.iconBtn} ${inBasket ? styles.activeBasket : ""}`} onClick={() => addBasket(product)}>
              {inBasket ? <FaCheck /> : <FaShoppingBasket />}
            </button>
          </div>
        );

      default:
        return (
          <div className={styles.actions}>
            <button className={`${styles.iconBtn} ${inWishlist ? styles.activeHeart : ""}`} onClick={() => addWishlist(product)}>
              <FaHeart />
            </button>
            <button className={`${styles.iconBtn} ${inBasket ? styles.activeBasket : ""}`} onClick={() => addBasket(product)}>
              {inBasket ? <FaCheck /> : <FaShoppingBasket />}
            </button>
          </div>
        );
    }
  };

  const renderBasketControls = () => {
    if (variant !== "basket") return null;
    return (
      <div className={styles.quantityBox}>
        <button className={styles.qtyBtn} onClick={() => decreaseQuantity(product.id)}><FaMinus /></button>
        <span className={styles.qty}>{product.quantity}</span>
        <button className={styles.qtyBtn} onClick={() => increaseQuantity(product.id)}><FaPlus /></button>
        <span className={styles.totalPrice}>${(product.price * product.quantity).toFixed(2)}</span>
      </div>
    );
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageBox}>
        <img src={product.thumbnail} alt={product.title} />
        {renderActions()}
      </div>
      <div className={styles.content}>
        <span className={styles.category}>{product.category}</span>
        <h3>{product.title}</h3>
        <p>{product.description.slice(0, 70)}...</p>
        <div className={styles.bottom}>
          <span className={styles.price}>${product.price}</span>
          <Link to={`/products/${product.id}`} className={styles.detailBtn}>Details</Link>
        </div>
        {renderBasketControls()}
      </div>
    </div>
  );
};

export default ProductCard;