import { FaTruck, FaShieldAlt } from "react-icons/fa";
import { MdSupportAgent, MdDiscount } from "react-icons/md";
import styles from "./Home.module.css";
const Home = () => {
  return (
    <main className={styles.home}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span>NEW COLLECTION 2026</span>

          <h1>Discover Premium Tech Products</h1>

          <p>
            Modern electronics, exclusive discounts and fast delivery all in one
            place.
          </p>

          <div className={styles.heroButtons}>
            <button>Shop Now</button>

            <button className={styles.secondaryBtn}>Explore</button>
          </div>
        </div>

        <div className={styles.heroImage}>
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
            alt="hero"
          />
        </div>
      </section>

      {/* FEATURES */}
      <section className={styles.features}>
        <div className={styles.featureCard}>
          <FaTruck />

          <h3>Fast Delivery</h3>

          <p>Free shipping on all orders over $100.</p>
        </div>

        <div className={styles.featureCard}>
          <FaShieldAlt />

          <h3>Secure Payment</h3>

          <p>100% secure payment protection.</p>
        </div>

        <div className={styles.featureCard}>
          <MdSupportAgent />

          <h3>24/7 Support</h3>

          <p>Always available customer support.</p>
        </div>

        <div className={styles.featureCard}>
          <MdDiscount />

          <h3>Best Discounts</h3>

          <p>Daily offers and exclusive sales.</p>
        </div>
      </section>

      {/* BANNER */}
      <section className={styles.banner}>
        <div className={styles.bannerContent}>
          <span>LIMITED OFFER</span>

          <h2>Up To 50% Discount On Premium Products</h2>

          <p>
            Upgrade your lifestyle with modern technology and unbeatable prices.
          </p>

          <button>Buy Now</button>
        </div>
      </section>

      {/* CATEGORY */}
      <section className={styles.categories}>
        <div className={styles.categoryCard}>
          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
            alt=""
          />

          <h3>Smartphones</h3>
        </div>

        <div className={styles.categoryCard}>
          <img
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
            alt=""
          />

          <h3>Headphones</h3>
        </div>

        <div className={styles.categoryCard}>
          <img
            src="https://images.unsplash.com/photo-1517336714739-489689fd1ca8"
            alt=""
          />

          <h3>Laptops</h3>
        </div>
      </section>
    </main>
  );
};

export default Home;
