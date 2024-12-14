"use client";

import { motion } from "framer-motion";
import { useIsLoaded } from "@/app/hooks/useIsLoaded";

const text = ["INSTITUTE-OF-INNOVATION", "GRADUATE-SHOW", "2025"];

export const LoadingAnimation: React.FC = () => {
  const isLoaded = useIsLoaded();

  if (!isLoaded) {
    return (
      <figure
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(5, 7, 64, 1)",
          zIndex: 9999,
          color: "white",
          pointerEvents: "none",
          gap: "1rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></figure>
    );
  }

  return (
    <motion.figure
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(5, 7, 64, 1)",
        zIndex: 9999,
        color: "white",
        pointerEvents: "none",
        gap: "1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      animate={{ opacity: [1, 0] }}
      transition={{ delay: 2.5, duration: 1.5, yoyo: Infinity }}
    >
      <div
        style={{
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexDirection: "column",
          gap: "0.7rem",
        }}
      >
        {text.map((t, i) => (
          <div
            key={i}
            style={{
              height: "1rem",
              fontSize: "1rem",
              overflow: "hidden",
            }}
          >
            <motion.span
              style={{
                display: "block",
                letterSpacing: ".1em",
                lineHeight: "1rem",
              }}
            >
              {t.split("").map((c, j) => (
                <motion.span
                  key={j}
                  style={{ display: "inline-block" }}
                  initial={{
                    y: "1lh",
                  }}
                  animate={{
                    y: "0",
                  }}
                  transition={{
                    delay: i * 0.1 + j * 0.05,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  {c}
                </motion.span>
              ))}
            </motion.span>
          </div>
        ))}
      </div>
    </motion.figure>
  );
};
