import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../pages/App";
import { ProductDetail } from "../components/product/ProductDetail";
import { SignIn } from "../components/user/SignIn";
import { CheckInfoForm } from "../components/buy/CheckInfoForm";
import { PaymentSecureKeypad } from "../components/buy/PaymentSecureKeypad";
import { Profile } from "../components/user/Profile";
import { PaymentSuccess } from "../components/buy/PaymentSuccess";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/products" element={<App />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/checkInfo" element={<CheckInfoForm />} />
        <Route path="/payment" element={<PaymentSecureKeypad />} />
        <Route path="/paymentSuccess" element={<PaymentSuccess />} />
      </Routes>
    </BrowserRouter>
  );
};
