import { ExhibitionRecord } from "@/types";
import { css, sva } from "../../styled-system/css";
import { Award } from "lucide-react";
import Link from "next/link";
// import { SaveButton } from "./SaveButton";

const exhibitorsArticleHeaderStyles = sva({
  slots: ["container", "title", "author", "save"],
  base: {
    container: {
      display: "grid",
      gridTemplateColumns: "subgrid",
      gridColumn: "span 5",
      gap: "24px",
      pt: "42px",
      pb: "64px",
      mdDown: {
        gridColumn: "span 2",
        pb: "32px",
      },
    },
    title: {
      fontSize: "64px",
      gridColumn: "span 4",
      pb: "32px",
      wordBreak: "keep-all",
      mdDown: {
        gridColumn: "span 2",
        pb: "16px",
        fontSize: "32px",
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
> = ({ title, name, seminar, place, isLongText, award }) => {
  const style = exhibitorsArticleHeaderStyles({
    isLongText,
  });
  return (
    <header className={style.container}>
      <Link
        href="/exhibitors"
        className={css({
          gridColumn: "span 5",
          fontSize: "20px",
          color: "rgba(0, 4, 128, 1)",
          textDecoration: "none",
          mdDown: {
            gridColumn: "span 2",
            fontSize: "14px",
          },
        })}
      >
        展示作品
      </Link>

      <h1 className={style.title}>{title}</h1>

      <div className={style.author}>
        <p>{name}</p>
        <p>{seminar}</p>
        <p>{place}</p>
        {award && (
          <div>
            <p
              className={css({
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "15px",
                py: "4px",
                px: "6px 10px",
                bg: "rgba(217, 224, 25, 0.1)",
                border: "2px solid rgba(217, 224, 25, 0.3)",
                borderRadius: "4px",
                mdDown: {
                  fontSize: "13px",
                  py: "2px",
                  px: "3px 5px",
                  gap: "4px",
                },
              })}
            >
              <Award size={20} />
              {award}
            </p>
          </div>
        )}
      </div>
      <div className={style.save}>{/* <SaveButton /> */}</div>
    </header>
  );
};
