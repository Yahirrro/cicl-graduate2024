import { sva } from "../../styled-system/css";
import { Carousel } from "./util/Carousel";
import { FadeInInView } from "./util/FadeInInView";

const introductionImagesStyles = sva({
  slots: ["container", "carousel", "image"],
  base: {
    container: {
      gridColumn: "1 / span 5",
      width: "calc(100% + 72px * 2)",
      transform: "translateX(-72px)",
      padding: "0 calc(72px - 12px)",
      overflow: "hidden",
      cursor: "grab",
      pb: "24px",
      mdDown: {
        gridColumn: "1 / span 3",
        width: "calc(100% + 32px * 2)",
        transform: "translateX(-32px)",
        px: "calc(32px - 8px)",
        pb: "12px",
      },
    },
    carousel: {
      display: "flex",
      gap: "24px",
    },
    image: {
      position: "relative",
      flex: "0 0 38.25%",
      mx: "12px",
      aspectRatio: "2 / 3",
      transition: "all 0.3s",
      userSelect: "none",

      "&:nth-of-type(even)": {
        transform: "translateY(24px)",
        mdDown: {
          transform: "translateY(12px)",
        },
      },

      _hover: {
        _after: {
          opacity: 0,
        },
        "& img": {
          filter: "grayscale(0)",
        },
        animation: "flashIn 1s",
      },
      _after: {
        content: '""',
        display: "block",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 4, 128, 0.6)",
        zIndex: 10,
        mixBlendMode: "screen",
        transition: "all 0.5s",
      },
      "& img": {
        filter: "grayscale(0.7)",
        width: "100%",
        height: "100%",
        objectFit: "cover",
        transition: "all 0.8s",
      },

      mdDown: {
        flex: "0 0 80%",
        mx: "8px",
        aspectRatio: "2 / 3",
      },
    },
  },
});

export const IntroductionImages: React.FC = () => {
  const style = introductionImagesStyles();
  return (
    <figure className={style.container}>
      <FadeInInView
        viewport={{
          once: true,
          amount: 0.3,
        }}
        delay={0.5}
      >
        <Carousel>
          {[...Array(4)].map((_, i) => (
            <div key={i} className={style.image}>
              <img src={"https://picsum.photos/120" + i} alt="" />
            </div>
          ))}
        </Carousel>
      </FadeInInView>
    </figure>
  );
};
