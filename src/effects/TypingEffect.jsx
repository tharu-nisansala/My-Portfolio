import * as React from "react";
import { motion, useInView } from "framer-motion";

export function TypingEffect({ text , className = "" }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <h1
      ref={ref}
      className={className}
    >

      {/* Split text into individual characters */}
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{
            duration: 0.15,
            delay: index * 0.08,
          }}
        >

          {/* Preserve spaces while animating */}
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </h1>
  );
}