"use client";

import { cubicBezier, motion } from "framer-motion";

export const FadeInInView: React.FC<{
  className?: string;
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  viewport?: {
    once: boolean;
    amount: number;
  };
}> = ({
  children,
  delay,
  className,
  duration = 1,
  viewport = {
    once: true,
    amount: 0.5,
  },
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: duration,
        delay: delay || 0,
        ease: cubicBezier(0, 0.3, 0.16, 1),
        y: {
          delay: delay || 0,
          duration: 0.6,
          ease: cubicBezier(0, 0.3, 0.16, 1),
        },
      }}
      viewport={viewport}
    >
      {children}
    </motion.div>
  );
};
