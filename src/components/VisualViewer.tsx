/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { cva } from "../../styled-system/css";
import { useIsLoaded } from "@/app/hooks/useIsLoaded";
import { useWindowHeight } from "@/app/hooks/useWindowHeight";
import { useRef, useState } from "react";

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
  const ref = useRef<any>();
  const { scrollY } = useScroll();
  const windowHeight = useWindowHeight();
  const [isExceededHeight, setIsExceededHeight] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > windowHeight && !isExceededHeight) {
      setIsExceededHeight(true);
    } else if (latest <= windowHeight && isExceededHeight) {
      setIsExceededHeight(false);
    }
  });

  if (!isLoaded) {
    return <></>;
  }

  return (
    <motion.div
      ref={ref}
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
      {!isExceededHeight && (
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
