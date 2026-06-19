import { motion } from "framer-motion";

export default function Card({
  children,
  delay = 0,
  className = "shadow-[0_0_12px_rgba(16,185,137,0.7)] ",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
      }}
      viewport={{ once: false, amount: 0.3 }}
      className={`bg-[#0a0a10] rounded-3xl px-7 py-6 ${className}`}
    >
      {children}
    </motion.div>
  );
}