import styles from "./Footer.module.css";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* LEFT */}
        <div className={styles.left}>
          <h2>ShopZone</h2>

          <p>
            Modern e-commerce experience with
            premium products and fast delivery.
          </p>

          <div className={styles.socials}>
            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaTwitter />
            </a>

            <a href="#">
              <FaGithub />
            </a>
          </div>
        </div>

        {/* CENTER */}
        <div className={styles.links}>
          <h3>Quick Links</h3>

          <a href="/">Home</a>

          <a href="/products">Products</a>

          <a href="/wishlist">Wishlist</a>

          <a href="/basket">Basket</a>
        </div>

        {/* RIGHT */}
        <div className={styles.newsletter}>
          <h3>Newsletter</h3>

          <p>
            Subscribe for latest products and
            discounts.
          </p>

          <div className={styles.inputBox}>
            <input
              type="email"
              placeholder="Enter your email"
            />

            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>
          © 2026 ShopZone. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;