"use client";

import { useIsLoaded } from "@/app/hooks/useIsLoaded";
import { motion } from "framer-motion";

export const FadeIn: React.FC<{
  className?: string;
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}> = ({ children, delay, className, duration = 1 }) => {
  const isLoaded = useIsLoaded();

  if (!isLoaded) {
    return <></>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: duration, delay: delay || 0 }}
    >
      {children}
    </motion.div>
  );
};
