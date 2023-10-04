import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../pages/App";
import { ProductDetail } from "../components/product/ProductDetail";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/products" element={<App />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
};
