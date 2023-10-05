import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../pages/App";
import { ProductDetail } from "../components/product/ProductDetail";
import { SignIn } from "../components/user/SignIn";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/products" element={<App />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
};
