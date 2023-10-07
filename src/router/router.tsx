import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../pages/App";
import { ProductDetail } from "../components/product/ProductDetail";
import { SignIn } from "../components/user/SignIn";
import { UserInfoForm } from "../components/buy/UserInfoForm";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/products" element={<App />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/buy/checkInfo" element={<UserInfoForm />} />
      </Routes>
    </BrowserRouter>
  );
};
