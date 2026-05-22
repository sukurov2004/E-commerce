import styles from "./ProductCard.module.css";

import {
  FaHeart,
  FaShoppingBasket,
  FaTrash,
  FaMinus,
  FaPlus,
  FaCheck,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import { useGlobalContext } from "../../../context/globalProvider";

const ProductCard = ({
  product,
  variant = "product",
}) => {
  const {
    basket,
    wishlist,

    addBasket,
    addWishlist,

    removeBasket,
    removeWishlist,

    increaseQuantity,
    decreaseQuantity,
  } = useGlobalContext();

  // =====================
  // ACTIVE STATES
  // =====================

  const isWishlist = wishlist.some(
    (item) => item.id === product.id
  );

  const isBasket = basket.some(
    (item) => item.id === product.id
  );

  // =====================
  // ACTIONS
  // =====================

  const renderActions = () => {
    switch (variant) {
      // =====================
      // BASKET VARIANT
      // =====================

      case "basket":
        return (
          <div className={styles.actions}>
            <button
              className={`${styles.iconBtn} ${styles.deleteBtn}`}
              onClick={() =>
                removeBasket(product.id)
              }
            >
              <FaTrash />
            </button>
          </div>
        );

      // =====================
      // WISHLIST VARIANT
      // =====================

      case "wishlist":
        return (
          <div className={styles.actions}>
            <button
              className={`${styles.iconBtn} ${styles.deleteBtn}`}
              onClick={() =>
                removeWishlist(product.id)
              }
            >
              <FaTrash />
            </button>

            <button
              className={`${styles.iconBtn} ${
                isBasket
                  ? styles.activeBasket
                  : ""
              }`}
              onClick={() =>
                addBasket(product)
              }
            >
              {isBasket ? (
                <FaCheck />
              ) : (
                <FaShoppingBasket />
              )}
            </button>
          </div>
        );

      // =====================
      // DEFAULT PRODUCT
      // =====================

      default:
        return (
          <div className={styles.actions}>
            {/* WISHLIST */}

            <button
              className={`${styles.iconBtn} ${
                isWishlist
                  ? styles.activeHeart
                  : ""
              }`}
              onClick={() =>
                addWishlist(product)
              }
            >
              <FaHeart />
            </button>

            {/* BASKET */}

            <button
              className={`${styles.iconBtn} ${
                isBasket
                  ? styles.activeBasket
                  : ""
              }`}
              onClick={() =>
                addBasket(product)
              }
            >
              {isBasket ? (
                <FaCheck />
              ) : (
                <FaShoppingBasket />
              )}
            </button>
          </div>
        );
    }
  };

  // =====================
  // BASKET CONTROLS
  // =====================

  const renderBasketControls = () => {
    if (variant !== "basket")
      return null;

    return (
      <div className={styles.quantityBox}>
        {/* DECREASE */}

        <button
          className={styles.qtyBtn}
          onClick={() =>
            decreaseQuantity(product.id)
          }
        >
          <FaMinus />
        </button>

        {/* QUANTITY */}

        <span className={styles.qty}>
          {product.quantity}
        </span>

        {/* INCREASE */}

        <button
          className={styles.qtyBtn}
          onClick={() =>
            increaseQuantity(product.id)
          }
        >
          <FaPlus />
        </button>

        {/* TOTAL */}

        <span className={styles.totalPrice}>
          $
          {(
            product.price *
            product.quantity
          ).toFixed(2)}
        </span>

      </div>
    );
  };

  return (
    <div className={styles.card}>
      {/* IMAGE */}

      <div className={styles.imageBox}>
        <img
          src={product.thumbnail}
          alt={product.title}
        />

        {renderActions()}
      </div>

      {/* CONTENT */}

      <div className={styles.content}>
        <span className={styles.category}>
          {product.category}
        </span>

        <h3>{product.title}</h3>

        <p>
          {product.description.slice(
            0,
            70
          )}
          ...
        </p>

        <div className={styles.bottom}>
          <span className={styles.price}>
            ${product.price}
          </span>

          <Link
            to={`/products/${product.id}`}
            className={styles.detailBtn}
          >
            Details
          </Link>
        </div>

        {renderBasketControls()}
      </div>
    </div>
  );
};

export default ProductCard;