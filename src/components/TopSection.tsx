import { sva } from "../../styled-system/css";

const topSectionStyles = sva({
  slots: [
    "container",
    "topHeaderContainer",
    "topHeaderContainerTitle",
    "topHeaderContainerSubtitle",
  ],
  base: {
    container: {
      display: "grid",
      gap: "24px",
      gridTemplateColumns: "repeat(5, 1fr)",
      px: "72px",
      pt: "64px",
    },
    topHeaderContainer: {},
  },
});

export const TopSection: React.FC = () => {
  const style = topSectionStyles();

  return (
    <header className={style.container}>
      <div className={style.topHeaderContainer}>
        <p>A</p>
        <p>B</p>
      </div>
    </header>
  );
};
