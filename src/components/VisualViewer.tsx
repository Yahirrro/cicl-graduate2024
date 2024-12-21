"use client";

import { motion } from "framer-motion";
import { cva } from "../../styled-system/css";
import { useIsLoaded } from "@/hooks/useIsLoaded";

const visualViewerStyle = cva({
  base: {
    position: "relative",
    width: "100%",
    height: "100%",
    background: "rgba(5, 7, 64, 1)",
    userSelect: "none",

    "& iframe": {
      position: "relative",
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
    "&:after": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      display: "block",
      width: "100%",
      height: "100%",
      bg: "radial-gradient(71.02% 71.02% at 50% 50%, rgba(5, 7, 64, 0) 60%, rgba(5, 7, 64, 1) 100%)",
    },
  },
});

export const VisualViewer: React.FC<{
  isInView: boolean;
}> = ({ isInView }) => {
  const isLoaded = useIsLoaded();
  const style = visualViewerStyle();

  if (!isLoaded) {
    return <></>;
  }

  return (
    <motion.div
      className={style}
      initial={{ scale: 1.2, filter: "blur(30px)" }}
      animate={{
        scale: 1,
        filter: "blur(0px)",
      }}
      transition={{
        delay: 2.5,
        duration: 5,
        filter: {
          duration: 1,
          delay: 2.5,
        },
      }}
    >
      {isInView && (
        <iframe
          src="/assets/p5.html"
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
        />
      )}
    </motion.div>
  );
};
