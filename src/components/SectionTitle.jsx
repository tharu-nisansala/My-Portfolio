import { motion } from "framer-motion";

export default function SectionTitle({
  title,
  variant = "dark",
}) {

  const styles = {
    dark: {
      bg: "bg-black",
      text: "text-black",
    },
    light: {
      bg: "bg-[#2C2C2C]",
      text: "text-[#2C2C2C]",
    },
  };

  return (
    <div className="flex flex-col items-center mb-12">

      {/* LINE */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0, y: -40 }}
        whileInView={{ scaleX: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="w-24 h-[3px] bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,137,0.7)] origin-left"
      />

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className={`
          text-2xl md:text-5xl font-semibold font-display mt-4 px-6 py-2
          ${styles[variant].bg}
          ${styles[variant].text}
        `}
        style={{
          WebkitTextStroke: "1px #10B989",
          color: "transparent",
        }}
      >
        {title}
      </motion.h2>

    </div>
  );
}