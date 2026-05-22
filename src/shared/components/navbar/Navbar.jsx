import styles from "./Navbar.module.css";

import { NavLink } from "react-router-dom";

import { FaHeart, FaShoppingBasket, FaSearch } from "react-icons/fa";

import { useGlobalContext } from "../../../context/globalProvider";

const Navbar = () => {
  const {
    basket,
    wishlist,

    setSearch,
    searchInput,
    setSearchInput,

    sort,
    setSort,

    resetFilters,
  } = useGlobalContext();

  // =====================
  // SEARCH SUBMIT
  // =====================

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(searchInput);
  };

  return (
    <nav className={styles.navbar}>
      {/* LEFT */}

      <div className={styles.left}>
        {/* SORT */}

        <div className={styles.selectWrapper}>
          <select
            className={styles.select}
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">Filter</option>

            <option value="a-z">A-Z</option>

            <option value="z-a">Z-A</option>

            <option value="low-high">Price Low-High</option>

            <option value="high-low">Price High-Low</option>
          </select>

          <span className={styles.arrow}>⌄</span>
        </div>

        {/* RESET */}

        <button className={styles.resetBtn} onClick={resetFilters}>
          Reset
        </button>
      </div>

      {/* CENTER */}

      <div className={styles.center}>
        {/* SEARCH */}

        <form className={styles.searchBox} onSubmit={handleSubmit}>
          <button type="submit" className={styles.searchBtn}>
            <FaSearch className={styles.searchIcon} />
          </button>

          <input
            type="text"
            placeholder="Search products..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </form>

        {/* LINKS */}

        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Home
        </NavLink>

        <NavLink
          to="/products"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Products
        </NavLink>
      </div>

      {/* RIGHT */}

      <div className={styles.right}>
        {/* WISHLIST */}

        <NavLink to="/wishlist" className={styles.iconBox}>
          <FaHeart />

          <span className={styles.count}>{wishlist.length}</span>
        </NavLink>

        {/* BASKET */}

        <NavLink to="/basket" className={styles.iconBox}>
          <FaShoppingBasket />

          <span className={styles.count}>{basket.length}</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
