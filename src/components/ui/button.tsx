// import React from "react";

// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   variant?: "primary" | "outline";
// }

// export const Button: React.FC<ButtonProps> = ({
//   children,
//   variant = "primary",
//   className = "",
//   ...props
// }) => {
//   const baseStyles =
//     "px-4 py-2 rounded-lg font-medium transition-all duration-300";
//   const styles =
//     variant === "primary"
//       ? "bg-orange-500 text-white hover:bg-orange-600"
//       : "border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white";

//   return (
//     <button className={`${baseStyles} ${styles} ${className}`} {...props}>
//       {children}
//     </button>
//   );
// };


import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "default";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseStyles =
    "px-4 py-2 rounded-lg font-medium transition-all duration-300";
  const styles =
    variant === "primary"
      ? "bg-orange-500 text-white hover:bg-orange-600"
      : variant === "outline"
      ? "border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
      : "bg-gray-200 text-gray-800";

  return (
    <button type="button" className={`${baseStyles} ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
};
