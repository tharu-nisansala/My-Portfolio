import { motion } from "framer-motion";

const Button = ({ children, className = "", ...props }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`bg-black rounded-3xl md:px-8 md:py-3 px-4 py-3 mt-4 border border-emerald-600 text-sm md:text-xl shadow-[0_0_20px_rgba(16,185,137,0.6)] hover:shadow-emerald-500/50 font-Navbar text-emerald-500 transition duration-300 ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;