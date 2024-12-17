import { sva } from "../../styled-system/css";
import { Search } from "lucide-react";

const exhibitionNavbarSearchStyles = sva({
  slots: ["wrapper", "icon", "input"],
  base: {
    wrapper: {
      position: "relative",
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
    },
    input: {
      position: "absolute",
      w: "100%",
      h: "100%",
      outline: "none",
      pl: "calc(24px + 24px)",
      fontSize: "20px",
      color: "rgba(0, 4, 128, 1)",
      _placeholder: {
        color: "rgba(0, 4, 128, 0.2)",
      },
    },
  },
});

export const ExhibitionNavbarSearch: React.FC = () => {
  const styles = exhibitionNavbarSearchStyles();

  return (
    <label className={styles.wrapper}>
      <Search size={24} color="rgba(0, 4, 128, 1)" />
      <input
        className={styles.input}
        placeholder="名前や展示名を入力して検索..."
      />
    </label>
  );
};
