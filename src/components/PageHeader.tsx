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
      mdDown: {
        px: "24px",
        pb: "20px",
        pt: "24px",
        height: "initial",
      },
    },
    container: {
      display: "grid",
      gap: "24px",
      gridTemplateColumns: "repeat(5, 1fr)",
      gridTemplateRows: "auto auto",
      height: "100%",
      maxW: "calc(1640px - (72px * 2))",
      mx: "auto",
      mdDown: {
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "92px 24px",
      },
    },
    title: {
      gridColumn: "span 5",
      fontSize: "86px",
      fontWeight: "bold",
      height: "100%",
      alignContent: "end",
      lineHeight: 1,
      mdDown: {
        gridColumn: "span 2",
        fontSize: "48px",
      },
    },
  },
  variants: {
    white: {
      true: {
        wrapper: {
          bg: "white",
          bgImage: "initial !important",
          height: "initial",
          pb: "64px",
          "& svg": {
            fill: "#000480",
          },
        },
        container: {
          gridTemplateRows: "auto",
        },
        title: {
          display: "none",
        },
      },
    },
  },
});

export const PageHeader: React.FC<{
  white?: boolean;
  title?: string;
}> = ({ title, ...props }) => {
  const [variantProps, rest] = pageHeaderStyles.splitVariantProps(props);
  const style = pageHeaderStyles(variantProps);

  return (
    <header
      className={style.wrapper}
      style={{
        backgroundImage: "url(/bg.png)",
      }}
      {...rest}
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
