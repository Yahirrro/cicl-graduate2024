import Link from "next/link";
import { sva } from "../../styled-system/css";
import { ExhibitionNavbarSearch } from "./ExhibitionNavbarSearch";

const exhibitionNavbarStyles = sva({
  slots: ["wrapper", "container", "floors", "search", "floorCount"],
  base: {
    wrapper: {
      marginTop: "24px",
      height: "80px",
      width: "100%",
      px: "72px",
      position: "sticky",
      top: 0,
      bg: "white",
      zIndex: 1,
      mdDown: {
        px: "32px",
        height: "64px",
      },
    },
    container: {
      display: "grid",
      gap: "128px 24px",
      gridTemplateColumns: "repeat(5, 1fr)",
      maxW: "calc(1640px - (72px * 2))",
      mx: "auto",
      height: "100%",
      mdDown: {
        gridTemplateColumns: "repeat(2, 1fr)",
      },
    },
    floors: {
      gridColumn: "1/3",
      display: "flex",
      height: "auto",
      gap: "12px",
      "& a": {
        fontSize: "20px",
        fontWeight: "bold",
        textStyle: "demiBold",
        color: "rgba(0, 4, 128, 1)",
        alignContent: "center",
        mdDown: {
          fontSize: "14px",
        },
      },
    },
    search: {
      gridColumn: "3/6",
      mdDown: {
        display: "none",
      },
    },
    floorCount: {
      color: "rgba(0, 4, 128, 0.3)",
      fontSize: "14px",
      ml: "2px",
    },
  },
});

type Props = {
  floors: string[];
  floorCounts: Record<string, number>;
};

export const ExhibitionNavbar: React.FC<Props> = ({ floors, floorCounts }) => {
  const styles = exhibitionNavbarStyles();

  return (
    <nav className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.floors}>
          {floors
            .filter((floor) => floor !== "未回答")
            .map((f, i) => {
              return (
                <Link href={"/exhibitors#floor_" + f} key={i}>
                  {f}
                  <span className={styles.floorCount}>
                    ({String(floorCounts[f]).padStart(2, "0")})
                  </span>
                </Link>
              );
            })}
        </div>
        <div className={styles.search}>
          <ExhibitionNavbarSearch />
        </div>
      </div>
    </nav>
  );
};
