import { sva } from "../../styled-system/css";
import { SaveButton } from "./SaveButton";
import { ShareButton } from "./ShareButton";

const exhibitorsArticleShareStyles = sva({
  slots: ["container", "saveButton"],
  base: {
    container: {
      display: "grid",
      gridTemplateColumns: "subgrid",
      gridColumn: "span 5",
      pt: "72px",
      pb: "128px",
      mdDown: {
        gridColumn: "span 2",
        rowGap: "32px",
        pb: "92px",
      },
    },
    saveButton: {
      gridColumn: "span 2",
    },
  },
});

export const ExhibitorsArticleShare: React.FC = () => {
  const styles = exhibitorsArticleShareStyles();
  return (
    <div className={styles.container}>
      <div className={styles.saveButton}>
        <SaveButton reverse showDescription />
      </div>
      <div className={styles.saveButton}>
        <ShareButton reverse />
      </div>
    </div>
  );
};
