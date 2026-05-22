import { Routes, Route } from "react-router-dom";

import { Suspense, lazy } from "react";

import Loader from "../shared/components/loader/Loader";

// LAZY PAGES

const Home = lazy(() => import("../feature/home/Home"));

const Products = lazy(() => import("../feature/products/pages/Products"));

const ProductDetail = lazy(
  () => import("../feature/products/pages/ProductDetail"),
);

const Basket = lazy(() => import("../feature/basket/pages/Basket"));

const Wishlist = lazy(() => import("../feature/wishlist/pages/Wishlist"));

const AppRouter = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />

        <Route path="/products/:id" element={<ProductDetail />} />

        <Route path="/basket" element={<Basket />} />

        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
