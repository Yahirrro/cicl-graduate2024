"use client";

import { motion } from "framer-motion";

export const FadeInInView: React.FC<{
  className?: string;
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}> = ({ children, delay, className, duration = 1 }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: duration, delay: delay || 0 }}
      viewport={{
        once: true,
      }}
    >
      {children}
    </motion.div>
  );
};
