import Link from "next/link";
import { sva } from "../../styled-system/css";
import { ArrowRight } from "lucide-react";

const LinkSectionStyles = sva({
  slots: ["container", "countdownTitle", "countdownText"],
  base: {
    container: {
      display: "grid",
      gap: "0 24px",
      gridTemplateColumns: "repeat(5, 1fr)",
      alignItems: "center",
      px: "72px",
      pt: "44px",
      pb: "172px",
      maxWidth: "1980px",
      mx: "auto",
      color: "rgba(0, 4, 128, 1)",
      mdDown: {
        gridTemplateColumns: "1fr",
        gap: "20px",
        px: "32px",
        pt: "16px",
        pb: "128px",
      },
    },
  },
});
export const LinkSection: React.FC = () => {
  const style = LinkSectionStyles();

  return (
    <section className={style.container}>
      <LinkSectionItem />
    </section>
  );
};

const linkSectionItemStyles = sva({
  slots: ["container"],
  base: {
    container: {
      gridColumn: "3 / span 3",
      p: "32px",
      border: "solid 1px currentColor",
      fontSize: "20px",
      textStyle: "demiBold",
      display: "flex",
      justifyContent: "space-between",
      alignContent: "center",
      transition: "all 0.3s",
      "& svg": {
        transition: "all 0.3s",
      },
      mdDown: {
        gridColumn: "initial",
        p: "24px",
        fontSize: "18px",
      },
      _hover: {
        border: "solid 1px rgba(0,5,128,0.5)",
        "& svg": {
          transform: "translateX(8px)",
        },
      },
    },
  },
});

const LinkSectionItem: React.FC = () => {
  const styles = linkSectionItemStyles();
  return (
    <Link href={"/exhibitors"} className={styles.container}>
      <span>展示一覧</span>
      <ArrowRight />
    </Link>
  );
};
