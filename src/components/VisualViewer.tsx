"use client";

import { motion } from "framer-motion";
import { cva } from "../../styled-system/css";
import { useIsLoaded } from "@/app/hooks/useIsLoaded";

const visualViewerStyle = cva({
  base: {
    position: "relative",
    width: "100%",
    height: "100%",
    background: "rgba(5, 7, 64, 1)",

    "& iframe": {
      position: "relative",
      aspectRatio: "16 / 9",
      width: "100%",
      height: "100%",
    },
    "&:before": {
      content: '""',
      display: "block",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(5, 7, 64, 1)",
      zIndex: 1,
      mixBlendMode: "screen",
    },
  },
});

export const VisualViewer: React.FC = () => {
  const isLoaded = useIsLoaded();
  const style = visualViewerStyle();

  if (!isLoaded) {
    return <></>;
  }

  return (
    <motion.div
      className={style}
      initial={{ scale: 1.2 }}
      animate={{
        scale: 1,
      }}
      transition={{ delay: 2.5, duration: 5 }}
    >
      <iframe
        src="/assets/p5.html"
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
      />
    </motion.div>
  );
};
