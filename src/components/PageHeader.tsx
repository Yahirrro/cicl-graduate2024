import Link from "next/link";
import { sva } from "../../styled-system/css";
import { LogoTypography } from "./LogoTypegraphy";

const pageHeaderStyles = sva({
  slots: ["wrapper", "container", "title"],
  base: {
    wrapper: {
      px: "72px",
      pt: "64px",
      pb: "48px",
      height: "390px",
      color: "white",
      bg: "black",
      bgPosition: "center",
      bgSize: "cover",
      overflow: "hidden",
    },
    container: {
      display: "grid",
      gap: "128px 24px",
      gridTemplateColumns: "repeat(5, 1fr)",
      gridTemplateRows: "auto auto",
      height: "100%",
      maxW: "calc(1640px - (72px * 2))",
      mx: "auto",
    },
    title: {
      gridColumn: "span 5",
      fontSize: "86px",
      fontWeight: "bold",
      height: "fit-content",
    },
  },
});

export const PageHeader: React.FC<{
  title?: string;
}> = ({ title }) => {
  const style = pageHeaderStyles();

  return (
    <header
      className={style.wrapper}
      style={{
        backgroundImage: "url(./bg.png)",
      }}
    >
      <div className={style.container}>
        <Link href={"/"}>
          <LogoTypography />
        </Link>
        <h1 className={style.title}>{title}</h1>
      </div>
    </header>
  );
};
