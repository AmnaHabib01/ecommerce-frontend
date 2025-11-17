// // "use client";

// // import React, { useState } from "react";
// // import ShoppingAnimation from "../../components/ui/ShoppingAnimation";
// // import { Button } from "@/components/ui/button";
// // import { Mail, Lock, User, Phone, MapPin, Upload, CheckCircle2, Briefcase } from "lucide-react";
// // import { Link } from "react-router-dom";

// // const RegisterPage: React.FC = () => {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     password: "",
// //     confirm: "",
// //     role: "",
// //     phone: "",
// //     address: "",
// //     profileImage: "",
// //   });
// //   const [isLoading, setIsLoading] = useState(false);

// //   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
// //     const { name, value, files } = e.target as HTMLInputElement;
// //     if (name === "profileImage" && files && files[0]) {
// //       setFormData((prev) => ({ ...prev, profileImage: URL.createObjectURL(files[0]) }));
// //     } else {
// //       setFormData((prev) => ({ ...prev, [name]: value }));
// //     }
// //   };

// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     if (formData.password !== formData.confirm) {
// //       alert("Passwords do not match!");
// //       return;
// //     }
// //     setIsLoading(true);
// //     setTimeout(() => {
// //       setIsLoading(false);
// //       alert(`Welcome, ${formData.name}! Account created successfully.`);
// //     }, 1500);
// //   };

// //   return (
// //     <div className="min-h-screen flex bg-linear-to-br from-orange-50 via-white to-orange-25 overflow-hidden">
// //       {/* Left Side Animation */}
// //       <div className="hidden lg:flex w-1/2 items-center justify-center bg-linear-to-br from-orange-500 via-orange-400 to-orange-300 relative overflow-hidden">
// //         <div className="absolute inset-0 opacity-20 animate-pulse bg-[radial-gradient(circle_at_20%_20%,white_10%,transparent_40%)]" />
// //         <ShoppingAnimation />
// //       </div>

// //       {/* Right Side Form */}
// //       <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
// //         <div className="w-full max-w-md">
// //           <div className="text-center mb-10">
// //             <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 rounded-2xl mb-4">
// //               <User className="w-8 h-8 text-white" />
// //             </div>
// //             <h1 className="text-3xl font-bold text-orange-600">Create an Account</h1>
// //             <p className="text-gray-600">Join us today and start shopping smarter!</p>
// //           </div>

// //           <form onSubmit={handleSubmit} className="space-y-5">
// //             {/* Full Name */}
// //             <div>
// //               <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
// //               <div className="relative">
// //                 <User className="absolute left-3 top-3 w-4 h-4 text-orange-400" />
// //                 <input
// //                   name="name"
// //                   type="text"
// //                   placeholder="John Doe"
// //                   value={formData.name}
// //                   onChange={handleChange}
// //                   className="w-full pl-10 pr-4 py-2 border-2 border-orange-100 rounded-xl focus:ring-2 focus:ring-orange-200 focus:border-orange-400 outline-none"
// //                   required
// //                 />
// //               </div>
// //             </div>

// //             {/* Email */}
// //             <div>
// //               <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
// //               <div className="relative">
// //                 <Mail className="absolute left-3 top-3 w-4 h-4 text-orange-400" />
// //                 <input
// //                   name="email"
// //                   type="email"
// //                   placeholder="your@email.com"
// //                   value={formData.email}
// //                   onChange={handleChange}
// //                   className="w-full pl-10 pr-4 py-2 border-2 border-orange-100 rounded-xl focus:ring-2 focus:ring-orange-200 focus:border-orange-400 outline-none"
// //                   required
// //                 />
// //               </div>
// //             </div>

// //             {/* Password */}
// //             <div>
// //               <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
// //               <div className="relative">
// //                 <Lock className="absolute left-3 top-3 w-4 h-4 text-orange-400" />
// //                 <input
// //                   name="password"
// //                   type="password"
// //                   placeholder="••••••••"
// //                   value={formData.password}
// //                   onChange={handleChange}
// //                   className="w-full pl-10 pr-4 py-2 border-2 border-orange-100 rounded-xl focus:ring-2 focus:ring-orange-200 focus:border-orange-400 outline-none"
// //                   required
// //                 />
// //               </div>
// //             </div>

// //             {/* Confirm Password */}
// //             <div>
// //               <label className="block text-sm font-semibold text-gray-700 mb-2">Confirm Password</label>
// //               <div className="relative">
// //                 <Lock className="absolute left-3 top-3 w-4 h-4 text-orange-400" />
// //                 <input
// //                   name="confirm"
// //                   type="password"
// //                   placeholder="••••••••"
// //                   value={formData.confirm}
// //                   onChange={handleChange}
// //                   className="w-full pl-10 pr-4 py-2 border-2 border-orange-100 rounded-xl focus:ring-2 focus:ring-orange-200 focus:border-orange-400 outline-none"
// //                   required
// //                 />
// //               </div>
// //             </div>

// //             {/* Role */}
// //             <div>
// //               <label className="block text-sm font-semibold text-gray-700 mb-2">Role</label>
// //               <div className="relative">
// //                 <Briefcase className="absolute left-3 top-3 w-4 h-4 text-orange-400" />
// //                 <select
// //                   name="role"
// //                   value={formData.role}
// //                   onChange={handleChange}
// //                   className="w-full pl-10 pr-4 py-2 border-2 border-orange-100 rounded-xl appearance-none focus:ring-2 focus:ring-orange-200 focus:border-orange-400 outline-none"
// //                   required
// //                 >
// //                   <option value="">Select Role</option>
// //                   <option value="buyer">Buyer</option>
// //                   <option value="store-admin">Store-Admin</option>
// //                   <option value="factory-admin">Factory-Admin</option>
// //                 </select>
// //               </div>
// //             </div>

// //             {/* Phone Number */}
// //             <div>
// //               <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
// //               <div className="relative">
// //                 <Phone className="absolute left-3 top-3 w-4 h-4 text-orange-400" />
// //                 <input
// //                   name="phone"
// //                   type="tel"
// //                   placeholder="+92 300 1234567"
// //                   value={formData.phone}
// //                   onChange={handleChange}
// //                   className="w-full pl-10 pr-4 py-2 border-2 border-orange-100 rounded-xl focus:ring-2 focus:ring-orange-200 focus:border-orange-400 outline-none"
// //                 />
// //               </div>
// //             </div>

// //             {/* Address */}
// //             <div>
// //               <label className="block text-sm font-semibold text-gray-700 mb-2">Address</label>
// //               <div className="relative">
// //                 <MapPin className="absolute left-3 top-3 w-4 h-4 text-orange-400" />
// //                 <input
// //                   name="address"
// //                   type="text"
// //                   placeholder="123 Street, City"
// //                   value={formData.address}
// //                   onChange={handleChange}
// //                   className="w-full pl-10 pr-4 py-2 border-2 border-orange-100 rounded-xl focus:ring-2 focus:ring-orange-200 focus:border-orange-400 outline-none"
// //                 />
// //               </div>
// //             </div>

// //             {/* Profile Image */}
// //             <div>
// //               <label className="block text-sm font-semibold text-gray-700 mb-2">Profile Image</label>
// //               <div className="relative flex items-center gap-3">
// //                 <Upload className="w-4 h-4 text-orange-400" />
// //                 <input
// //                   name="profileImage"
// //                   type="file"
// //                   accept="image/*"
// //                   onChange={handleChange}
// //                   className="text-sm text-gray-600"
// //                 />
// //                 {formData.profileImage && (
// //                   <img
// //                     src={formData.profileImage}
// //                     alt="Preview"
// //                     className="w-10 h-10 rounded-full border border-orange-300"
// //                   />
// //                 )}
// //               </div>
// //             </div>

// //             {/* Submit Button */}
// //             <Button
// //               type="submit"
// //               disabled={isLoading}
// //               className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-xl py-3 font-semibold flex justify-center items-center"
// //             >
// //               {isLoading ? "Creating Account..." : "Register"}
// //               {!isLoading && <CheckCircle2 className="w-4 h-4 ml-2" />}
// //             </Button>
// //           </form>

// //           <p className="text-center text-gray-600 mt-6">
// //             Already have an account?{" "}
// //             <Link to="/login" className="text-orange-600 font-semibold">
// //               Login
// //             </Link>
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default RegisterPage;



// "use client";

// import React, { useState } from "react";
// import ShoppingAnimation from "../../components/ui/ShoppingAnimation";
// import { Button } from "@/components/ui/button";
// import {
//   Mail,
//   Lock,
//   User,
//   Phone,
//   MapPin,
//   Upload,
//   CheckCircle2,
//   Briefcase,
// } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";
// import useAuthStore from "../../store/authStore";
// import toast from "react-hot-toast";

// const RegisterPage: React.FC = () => {
//   const navigate = useNavigate();
//   const { register, loading } = useAuthStore();

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirm: "",
//     role: "",
//     phone: "",
//     address: "",
//     profileImage: null as File | null,
//     previewImage: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value, files } = e.target as HTMLInputElement;

//     if (name === "profileImage" && files && files[0]) {
//       setFormData((prev) => ({
//         ...prev,
//         profileImage: files[0],
//         previewImage: URL.createObjectURL(files[0]),
//       }));
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (formData.password !== formData.confirm) {
//       toast.error("Passwords do not match!");
//       return;
//     }

//     const fd = new FormData();
//     fd.append("userName", formData.name);
//     fd.append("userEmail", formData.email);
//     fd.append("userPassword", formData.password);
//     fd.append("userRole", formData.role);
//     fd.append("phoneNumber", formData.phone);
//     fd.append("address", formData.address);

//     if (formData.profileImage) {
//       fd.append("profileImage", formData.profileImage);
//     }

//     try {
//       await register?.(fd);
//       toast.success("Account created successfully!");
//       navigate("/login");
//     } catch (err: any) {
//       toast.error(err.response?.data?.message || "Registration failed");
//     }
//   };

//   return (
//     <div className="min-h-screen flex bg-linear-to-br from-orange-50 via-white to-orange-25 overflow-hidden">
//       {/* Left Side Animation */}
//       <div className="hidden lg:flex w-1/2 items-center justify-center bg-linear-to-br from-orange-500 via-orange-400 to-orange-300 relative overflow-hidden">
//         <div className="absolute inset-0 opacity-20 animate-pulse bg-[radial-gradient(circle_at_20%_20%,white_10%,transparent_40%)]" />
//         <ShoppingAnimation />
//       </div>

//       {/* Right Side Form */}
//       <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
//         <div className="w-full max-w-md">
//           <div className="text-center mb-10">
//             <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 rounded-2xl mb-4">
//               <User className="w-8 h-8 text-white" />
//             </div>
//             <h1 className="text-3xl font-bold text-orange-600">Create an Account</h1>
//             <p className="text-gray-600">Join us today and start shopping smarter!</p>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-5">
//             {/* Full Name */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 Full Name
//               </label>
//               <div className="relative">
//                 <User className="absolute left-3 top-3 w-4 h-4 text-orange-400" />
//                 <input
//                   name="name"
//                   type="text"
//                   placeholder="John Doe"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full pl-10 pr-4 py-2 border-2 border-orange-100 rounded-xl focus:ring-2 focus:ring-orange-200 focus:border-orange-400 outline-none"
//                   required
//                 />
//               </div>
//             </div>

//             {/* Email */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 Email
//               </label>
//               <div className="relative">
//                 <Mail className="absolute left-3 top-3 w-4 h-4 text-orange-400" />
//                 <input
//                   name="email"
//                   type="email"
//                   placeholder="your@email.com"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full pl-10 pr-4 py-2 border-2 border-orange-100 rounded-xl focus:ring-2 focus:ring-orange-200 focus:border-orange-400 outline-none"
//                   required
//                 />
//               </div>
//             </div>

//             {/* Password */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 Password
//               </label>
//               <div className="relative">
//                 <Lock className="absolute left-3 top-3 w-4 h-4 text-orange-400" />
//                 <input
//                   name="password"
//                   type="password"
//                   placeholder="••••••••"
//                   value={formData.password}
//                   onChange={handleChange}
//                   className="w-full pl-10 pr-4 py-2 border-2 border-orange-100 rounded-xl focus:ring-2 focus:ring-orange-200 focus:border-orange-400 outline-none"
//                   required
//                 />
//               </div>
//             </div>

//             {/* Confirm Password */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 Confirm Password
//               </label>
//               <div className="relative">
//                 <Lock className="absolute left-3 top-3 w-4 h-4 text-orange-400" />
//                 <input
//                   name="confirm"
//                   type="password"
//                   placeholder="••••••••"
//                   value={formData.confirm}
//                   onChange={handleChange}
//                   className="w-full pl-10 pr-4 py-2 border-2 border-orange-100 rounded-xl focus:ring-2 focus:ring-orange-200 focus:border-orange-400 outline-none"
//                   required
//                 />
//               </div>
//             </div>

//             {/* Role */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 Role
//               </label>
//               <div className="relative">
//                 <Briefcase className="absolute left-3 top-3 w-4 h-4 text-orange-400" />
//                 <select
//                   name="role"
//                   value={formData.role}
//                   onChange={handleChange}
//                   className="w-full pl-10 pr-4 py-2 border-2 border-orange-100 rounded-xl appearance-none focus:ring-2 focus:ring-orange-200 focus:border-orange-400 outline-none"
//                   required
//                 >
//                   <option value="">Select Role</option>
//                   <option value="buyer">Buyer</option>
//                   <option value="store-admin">Store-Admin</option>
//                   <option value="factory-admin">Factory-Admin</option>
//                 </select>
//               </div>
//             </div>

//             {/* Phone */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 Phone Number
//               </label>
//               <div className="relative">
//                 <Phone className="absolute left-3 top-3 w-4 h-4 text-orange-400" />
//                 <input
//                   name="phone"
//                   type="tel"
//                   placeholder="+92 300 1234567"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   className="w-full pl-10 pr-4 py-2 border-2 border-orange-100 rounded-xl focus:ring-2 focus:ring-orange-200 focus:border-orange-400 outline-none"
//                 />
//               </div>
//             </div>

//             {/* Address */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 Address
//               </label>
//               <div className="relative">
//                 <MapPin className="absolute left-3 top-3 w-4 h-4 text-orange-400" />
//                 <input
//                   name="address"
//                   type="text"
//                   placeholder="123 Street, City"
//                   value={formData.address}
//                   onChange={handleChange}
//                   className="w-full pl-10 pr-4 py-2 border-2 border-orange-100 rounded-xl focus:ring-2 focus:ring-orange-200 focus:border-orange-400 outline-none"
//                 />
//               </div>
//             </div>

//             {/* Profile Image */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 Profile Image
//               </label>
//               <div className="relative flex items-center gap-3">
//                 <Upload className="w-4 h-4 text-orange-400" />
//                 <input
//                   name="profileImage"
//                   type="file"
//                   accept="image/*"
//                   onChange={handleChange}
//                   className="text-sm text-gray-600"
//                 />
//                 {formData.previewImage && (
//                   <img
//                     src={formData.previewImage}
//                     alt="Preview"
//                     className="w-10 h-10 rounded-full border border-orange-300"
//                   />
//                 )}
//               </div>
//             </div>

//             {/* Submit Button */}
//             <Button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-xl py-3 font-semibold flex justify-center items-center"
//             >
//               {loading ? "Creating Account..." : "Register"}
//               {!loading && <CheckCircle2 className="w-4 h-4 ml-2" />}
//             </Button>
//           </form>

//           <p className="text-center text-gray-600 mt-6">
//             Already have an account?{" "}
//             <Link to="/login" className="text-orange-600 font-semibold">
//               Login
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;


"use client";

import React, { useState } from "react";
import ShoppingAnimation from "../../components/ui/ShoppingAnimation";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Lock,
  User,
  Phone,
  MapPin,
  Upload,
  CheckCircle2,
  Briefcase,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../../store/authStore";
import toast from "react-hot-toast";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Password rules example
const passwordRules = z
  .string()
  .min(6, "Password must be at least 6 characters long");

const registerSchema = z.object({
  userName: z.string().min(3, "Name must be at least 3 characters long"),
  userEmail: z.string().email("Invalid email"),
  userPassword: passwordRules,
  userRole: z.enum(["buyer", "store-admin", "factory-admin"]).optional(),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits long"),
  userAddress: z.string().min(10, "Address must be at least 10 characters long").optional(),
  profileImage: z.instanceof(File).optional(),
});

type RegisterFormData = z.infer<typeof registerSchema>;

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const { register: registerUser, loading } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const [previewImage, setPreviewImage] = useState("");

  const onSubmit = async (data: RegisterFormData) => {
    const fd = new FormData();
    fd.append("userName", data.userName);
    fd.append("userEmail", data.userEmail);
    fd.append("userPassword", data.userPassword);
    fd.append("userRole", data.userRole || "buyer");
    fd.append("phoneNumber", data.phoneNumber);
    fd.append("address", data.userAddress || "");

    if (data.profileImage) {
      fd.append("profileImage", data.profileImage);
    }

    try {
      await registerUser?.(fd);
      toast.success("Account created successfully!");
      navigate("/login");
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Registration failed");
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setValue("profileImage", e.target.files[0]);
      setPreviewImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="min-h-screen flex bg-linear-to-br from-orange-50 via-white to-orange-25 overflow-hidden">
      <div className="hidden lg:flex w-1/2 items-center justify-center bg-linear-to-br from-orange-500 via-orange-400 to-orange-300 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 animate-pulse bg-[radial-gradient(circle_at_20%_20%,white_10%,transparent_40%)]" />
        <ShoppingAnimation />
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 rounded-2xl mb-4">
              <User className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-orange-600">Create an Account</h1>
            <p className="text-gray-600">Join us today and start shopping smarter!</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3 w-4 h-4 text-orange-400" />
                <input
                  type="text"
                  placeholder="John Doe"
                  {...register("userName")}
                  className="w-full pl-10 pr-4 py-2 border-2 border-orange-100 rounded-xl focus:ring-2 focus:ring-orange-200 focus:border-orange-400 outline-none"
                />
              </div>
              {errors.userName && (
                <p className="text-red-500 text-sm mt-1">{errors.userName.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-4 h-4 text-orange-400" />
                <input
                  type="email"
                  placeholder="your@email.com"
                  {...register("userEmail")}
                  className="w-full pl-10 pr-4 py-2 border-2 border-orange-100 rounded-xl focus:ring-2 focus:ring-orange-200 focus:border-orange-400 outline-none"
                />
              </div>
              {errors.userEmail && (
                <p className="text-red-500 text-sm mt-1">{errors.userEmail.message}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 w-4 h-4 text-orange-400" />
                <input
                  type="password"
                  placeholder="••••••••"
                  {...register("userPassword")}
                  className="w-full pl-10 pr-4 py-2 border-2 border-orange-100 rounded-xl focus:ring-2 focus:ring-orange-200 focus:border-orange-400 outline-none"
                />
              </div>
              {errors.userPassword && (
                <p className="text-red-500 text-sm mt-1">{errors.userPassword.message}</p>
              )}
            </div>

            {/* Role */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Role</label>
              <div className="relative">
                <Briefcase className="absolute left-3 top-3 w-4 h-4 text-orange-400" />
                <select
                  {...register("userRole")}
                  className="w-full pl-10 pr-4 py-2 border-2 border-orange-100 rounded-xl appearance-none focus:ring-2 focus:ring-orange-200 focus:border-orange-400 outline-none"
                >
                  <option value="">Select Role</option>
                  <option value="buyer">Buyer</option>
                  <option value="store-admin">Store-Admin</option>
                  <option value="factory-admin">Factory-Admin</option>
                </select>
              </div>
              {errors.userRole && (
                <p className="text-red-500 text-sm mt-1">{errors.userRole.message}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 w-4 h-4 text-orange-400" />
                <input
                  type="tel"
                  placeholder="+92 300 1234567"
                  {...register("phoneNumber")}
                  className="w-full pl-10 pr-4 py-2 border-2 border-orange-100 rounded-xl focus:ring-2 focus:ring-orange-200 focus:border-orange-400 outline-none"
                />
              </div>
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>
              )}
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Address
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-4 h-4 text-orange-400" />
                <input
                  type="text"
                  placeholder="123 Street, City"
                  {...register("userAddress")}
                  className="w-full pl-10 pr-4 py-2 border-2 border-orange-100 rounded-xl focus:ring-2 focus:ring-orange-200 focus:border-orange-400 outline-none"
                />
              </div>
              {errors.userAddress && (
                <p className="text-red-500 text-sm mt-1">{errors.userAddress.message}</p>
              )}
            </div>

            {/* Profile Image */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Profile Image
              </label>
              <div className="relative flex items-center gap-3">
                <Upload className="w-4 h-4 text-orange-400" />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="text-sm text-gray-600"
                />
                {previewImage && (
                  <img
                    src={previewImage}
                    alt="Preview"
                    className="w-10 h-10 rounded-full border border-orange-300"
                  />
                )}
              </div>
              {errors.profileImage && (
                <p className="text-red-500 text-sm mt-1">{errors.profileImage.message}</p>
              )}
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-xl py-3 font-semibold flex justify-center items-center"
            >
              {loading ? "Creating Account..." : "Register"}
              {!loading && <CheckCircle2 className="w-4 h-4 ml-2" />}
            </Button>
          </form>

          <p className="text-center text-gray-600 mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-orange-600 font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;


