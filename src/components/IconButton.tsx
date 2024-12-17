import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";
import { cva } from "../../styled-system/css";

const iconButtonStyles = cva({
  base: {
    h: "64px",
    w: "64px",
    bgColor: "#F1F1F1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    cursor: "pointer",
    _active: {
      opacity: 0.5,
    },
  },
});

export const IconButton: React.FC<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = ({ children, ...props }) => {
  const styles = iconButtonStyles();
  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
};
