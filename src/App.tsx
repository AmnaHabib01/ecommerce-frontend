// src/App.tsx
import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/Home";
import LoginPage from "./pages/auth/login";
import RegisterPage from "./pages/auth/register";
import Product from "./pages/store/product";
import { Toaster } from "react-hot-toast";
import Landing from "./pages/store/Landingpage";

export default function App() {
  return (
    <>
     <Toaster position="top-right" />
    <Routes>
      
      
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/main" element={<Landing/>} />

       <Route path="/storeproducts" element={<Product />} />
       <Route path ="/home" element={<LandingPage />} />
    </Routes>
    </>
  );
}
