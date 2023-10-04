import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import { ProductDetail } from "../components/ProductDetail";

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
