"use client";

import { sva } from "../../styled-system/css";
import { Share } from "lucide-react";
import { IconButton } from "./IconButton";

const saveButtonStyles = sva({
  slots: ["container", "labelContainer", "label", "labelDescription"],
  base: {
    container: {
      display: "grid",
      gridTemplateColumns: "1fr auto",
      alignItems: "center",
      gap: "32px",
      userSelect: "none",
      mdDown: {
        gridTemplateColumns: "auto 1fr",
        gap: "16px",
      },
    },
    labelContainer: {
      textAlign: "right",
      fontSize: "16px",
      display: "block",
      mdDown: {
        order: "2",
        textAlign: "left",
        fontSize: "14px",
      },
    },
    label: {
      display: "block",
    },
    labelDescription: {
      display: "block",
      fontSize: "14px",
      opacity: 0.5,
    },
  },
  variants: {
    reverse: {
      true: {
        container: {
          gridTemplateColumns: "auto 1fr",
        },
        labelContainer: {
          order: "2",
          textAlign: "left",
        },
      },
    },
  },
});

export const ShareButton: React.FC<{
  reverse?: boolean;
}> = ({ reverse }) => {
  const styles = saveButtonStyles({ reverse });

  return (
    <label className={styles.container}>
      <span className={styles.labelContainer}>
        <span className={styles.label}>共有する</span>
      </span>
      <IconButton
        onClick={() => {
          navigator.share({
            url: window.location.href,
          });
        }}
      >
        <Share />
      </IconButton>
    </label>
  );
};
