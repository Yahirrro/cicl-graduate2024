"use client";

import { motion } from "framer-motion";

export const IntroductionSectionTitle: React.FC = () => {
  const props = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1 },
    transition: { duration: 1.5, delay: 0 },
    viewport: { once: true },
  };

  const leadText = ["連なる、", "広がる、", "巡る。"];

  return (
    <>
      {leadText.map((text, i) => (
        <motion.span
          {...props}
          transition={{
            ...props.transition,
            delay: props.transition.delay + i * 0.6,
          }}
          key={text}
        >
          {text}
        </motion.span>
      ))}
    </>
  );
};
