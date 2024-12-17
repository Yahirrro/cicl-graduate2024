import { sva } from "../../styled-system/css";
import { ExhibitionNavbarSearch } from "./ExhibitionNavbarSearch";

const exhibitionNavbarStyles = sva({
  slots: ["wrapper", "container", "floors", "search"],
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
    },
    container: {
      display: "grid",
      gap: "128px 24px",
      gridTemplateColumns: "repeat(5, 1fr)",
      maxW: "calc(1640px - (72px * 2))",
      mx: "auto",
      height: "100%",
    },
    floors: {
      gridColumn: "1/3",
      display: "flex",
      height: "auto",
      gap: "24px",
      "& button": {
        fontSize: "20px",
        fontWeight: "bold",
        textStyle: "demiBold",
        color: "rgba(0, 4, 128, 1)",
      },
    },
    search: {
      gridColumn: "3/6",
    },
  },
});

export const ExhibitionNavbar: React.FC<{
  floors: string[];
}> = ({ floors }) => {
  const styles = exhibitionNavbarStyles();

  return (
    <nav className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.floors}>
          {floors.map((f, i) => {
            return <button key={i}>{f}</button>;
          })}
        </div>
        <div className={styles.search}>
          <ExhibitionNavbarSearch />
        </div>
      </div>
    </nav>
  );
};
