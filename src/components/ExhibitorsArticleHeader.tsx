import { ExhibitionRecord } from "@/types";
import { sva } from "../../styled-system/css";
// import { SaveButton } from "./SaveButton";

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
      mdDown: {
        gridColumn: "span 2",
      },
    },
    title: {
      fontSize: "64px",
      gridColumn: "span 4",
      mdDown: {
        gridColumn: "span 2",
        fontSize: "40px",
      },
    },

    author: {
      gridColumn: "span 4",
      display: "grid",
      gridTemplateColumns: "subgrid",
      fontSize: "20px",
      height: "100%",
      mdDown: {
        gridColumn: "span 2",
        fontSize: "15px",
        gap: "16px 24px",
      },
      "& p": {
        alignContent: "center",
      },
    },
    save: {
      gridColumn: "5/6",
      mdDown: {
        gridColumn: "span 2",
        pt: "32px",
        display: "none",
      },
    },
  },
  variants: {
    isLongText: {
      true: {
        title: {
          fontSize: "42px",
          mdDown: {
            fontSize: "32px",
          },
        },
      },
    },
  },
});

export const ExhibitorsArticleHeader: React.FC<
  ExhibitionRecord & {
    isLongText?: boolean;
  }
> = ({ title, name, seminar, place, isLongText }) => {
  const style = exhibitorsArticleHeaderStyles({
    isLongText,
  });
  return (
    <header className={style.container}>
      <h1 className={style.title}>{title}</h1>

      <div className={style.author}>
        <p>{name}</p>
        <p>{seminar}</p>
        <p>{place}</p>
      </div>
      <div className={style.save}>{/* <SaveButton /> */}</div>
    </header>
  );
};
