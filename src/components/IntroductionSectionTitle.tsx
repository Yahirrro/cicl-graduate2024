"use client";

import { motion } from "framer-motion";
import { token } from "../../styled-system/tokens";

export const IntroductionSectionTitle: React.FC = () => {
  const props = {
    initial: { opacity: 0, y: 20, color: "rgba(0, 4, 128, 1)" },
    whileInView: { opacity: 1, color: token("colors.text") },
    transition: {
      duration: 1.5,
      delay: 0,
      color: {
        duration: 0.8,
      },
    },
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
