import { sva } from "../../styled-system/css";
import { ExhibitionRecord } from "@/types";
import Link from "next/link";

const exhibitionFloorSection = sva({
  slots: ["wrapper", "title", "section"],
  base: {
    wrapper: {
      display: "grid",
      gap: "128px 24px",
      gridTemplateColumns: "repeat(5, 1fr)",
      maxW: "calc(1640px - (72px * 2))",
      margin: "auto",
      "& + &": {
        mt: "172px",
      },
      _lastOfType: {
        pb: "172px",
      },
      mdDown: {
        gridTemplateColumns: "repeat(9, 1fr)",
      },
    },
    title: {
      position: "sticky",
      top: "calc(80px + 32px)",
      height: "fit-content",
      fontSize: "48px",
      fontWeight: 400,
      color: "rgba(0, 4, 128, 1)",
      gridColumn: "span 2",
      lineHeight: "1",
      mdDown: {
        fontSize: "34px",
        top: "calc(60px + 24px)",
      },
    },
    section: {
      display: "grid",
      gap: "24px",
      gridColumn: "span 3",
      mdDown: {
        gridColumn: "span 7",
      },
    },
  },
});

export const ExhibitionFloorSection: React.FC<{
  floor: string;
  items: ExhibitionRecord[];
}> = ({ floor, items }) => {
  const style = exhibitionFloorSection();

  return (
    <div className={style.wrapper}>
      <h2 className={style.title}>{floor}</h2>
      <div className={style.section}>
        {items.map((data, i) => {
          return <ExhibitionFloorSectionItem item={data} key={i} />;
        })}
      </div>
    </div>
  );
};

const exhibitionFloorSectionItemStyles = sva({
  slots: ["wrapper", "container", "title", "author", "icon"],
  base: {
    wrapper: {
      display: "grid",
      gridTemplateColumns: "1fr 12px",
      gap: "12px",
      borderBottom: "1px solid rgba(0, 4, 128, 0.1)",
      alignItems: "center",
      pb: "24px",
      color: "rgba(0, 4, 128, 1)",
      "& svg": {
        w: "12px",
      },
      mdDown: {
        gridTemplateColumns: "1fr 8px",
        "& svg": {
          w: "8px",
        },
      },
    },
    container: {
      display: "grid",
      gap: "10px",
    },
    title: {
      fontSize: "26px",
      mdDown: {
        fontSize: "21px",
      },
    },
    author: {
      fontSize: "16px",
    },
    icon: {
      opacity: 0.3,
    },
  },
});

const ExhibitionFloorSectionItem: React.FC<{ item: ExhibitionRecord }> = ({
  item,
}) => {
  const style = exhibitionFloorSectionItemStyles();
  return (
    <Link className={style.wrapper} href={`/exhibitors/${item.id}`}>
      <div className={style.container}>
        <h1 className={style.title}>{item.title}</h1>
        <p className={style.author}>{item.author}</p>
      </div>
      <svg
        viewBox="0 0 10 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={style.icon}
      >
        <path d="M1 0.5L9 10.5L1 20.5" stroke="#000480" />
      </svg>
    </Link>
  );
};
