import { sva } from "../../styled-system/css";
import { Bookmark } from "lucide-react";
import { IconButton } from "./IconButton";

const saveButtonStyles = sva({
  slots: ["container", "labelContainer", "label", "labelDescription"],
  base: {
    container: {
      display: "grid",
      gridTemplateColumns: "1fr auto",
      alignItems: "center",
      gap: "32px",
    },
    labelContainer: {
      textAlign: "right",
      fontSize: "16px",
      display: "block",
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

export const SaveButton: React.FC<{
  showDescription?: boolean;
  reverse?: boolean;
}> = ({ showDescription, reverse }) => {
  const styles = saveButtonStyles({ reverse });

  return (
    <label className={styles.container}>
      <span className={styles.labelContainer}>
        <span className={styles.label}>保存する</span>
        {showDescription && (
          <span className={styles.labelDescription}>
            サイト内でブックマークでき、お越しいただく際に便利です。
          </span>
        )}
      </span>
      <IconButton>
        <Bookmark />
      </IconButton>
    </label>
  );
};
