"use client";
import React, { useState } from "react";
import ShoppingAnimation from "../../components/ui/ShoppingAnimation";
import { Button } from "@/components/ui/button";
import { Mail, Lock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "@/store/authStore";
import toast from "react-hot-toast";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
     const response =  await login(email, password);
     console.log("user Response ", response);
     
      toast.success(`Welcome back, ${email}!`);
      navigate("/"); // redirect after successful login
    } catch (err: any) {
      toast.error(err.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex bg-linear-to-br from-orange-50 via-white to-orange-25 overflow-hidden">
      {/* Left Animation */}
      <div className="hidden lg:flex w-1/2 items-center justify-center bg-linear-to-br from-orange-500 via-orange-400 to-orange-300 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 animate-pulse bg-[radial-gradient(circle_at_20%_20%,white_10%,transparent_40%)]" />
        <ShoppingAnimation />
      </div>

      {/* Right Form */}
     <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 rounded-2xl mb-4">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-orange-600">Login</h1>
            <p className="text-gray-600">Access your account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-4 h-4 text-orange-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full pl-10 pr-4 py-2 border-2 border-orange-100 rounded-xl focus:ring-2 focus:ring-orange-200 focus:border-orange-400 outline-none"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 w-4 h-4 text-orange-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-2 border-2 border-orange-100 rounded-xl focus:ring-2 focus:ring-orange-200 focus:border-orange-400 outline-none"
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-xl py-3 font-semibold"
            >
              {loading ? "Signing in..." : "Sign In"}
            </Button>
          </form>

          <p className="text-center text-gray-600 mt-6">
            Don’t have an account?{" "}
            <Link to="/register" className="text-orange-600 font-semibold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
