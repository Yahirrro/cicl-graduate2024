import { ExhibitionRecord } from "@/types";
import { sva } from "../../styled-system/css";
import { SaveButton } from "./SaveButton";

const exhibitorsArticleHeaderStyles = sva({
  slots: ["container", "title", "author", "save"],
  base: {
    container: {
      display: "grid",
      gridTemplateColumns: "subgrid",
      gridColumn: "span 5",
      gap: "24px",
      pt: "64px",
      pb: "64px",
    },
    title: {
      fontSize: "64px",
      gridColumn: "span 3",
    },

    author: {
      gridColumn: "span 4",
      display: "grid",
      gridTemplateColumns: "subgrid",
      fontSize: "20px",
      height: "100%",
      "& p": {
        alignContent: "center",
      },
    },
    save: {
      gridColumn: "5/6",
      height: "64px",
    },
  },
});

export const ExhibitorsArticleHeader: React.FC<ExhibitionRecord> = ({
  title,
  author,
  type,
  floor,
  area,
}) => {
  const style = exhibitorsArticleHeaderStyles();
  return (
    <header className={style.container}>
      <h1 className={style.title}>{title}</h1>

      <div className={style.author}>
        <p>{author}</p>
        <p>{type}</p>
        <p>
          {floor} {area}
        </p>
      </div>
      <div className={style.save}>
        <SaveButton />
      </div>
    </header>
  );
};
