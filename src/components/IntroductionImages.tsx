import { sva } from "../../styled-system/css";
import { Carousel } from "./util/Carousel";

const introductionImagesStyles = sva({
  slots: ["container", "carousel", "image"],
  base: {
    container: {
      gridColumn: "1 / span 5",
      width: "calc(100% + 72px * 2)",
      transform: "translateX(-72px)",
      padding: "0 calc(72px - 12px)",
      overflow: "hidden",
    },
    carousel: {
      display: "flex",
      gap: "24px",
    },
    image: {
      flex: "0 0 38.25%",
      mx: "12px",
      aspectRatio: "2 / 3",
      "& img": {
        filter: "grayscale(1)",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      },
      //   _after: {
      //     content: '""',
      //     display: "block",
      //     position: "absolute",
      //     top: 0,
      //     left: 0,
      //     width: "100%",
      //     height: "100%",
      //     background: "rgba(0, 4, 128, 0.2)",
      //     zIndex: 10,
      //     mixBlendMode: "screen",
      //   },
      // },
    },
  },
});

export const IntroductionImages: React.FC = () => {
  const style = introductionImagesStyles();
  return (
    <figure className={style.container}>
      <Carousel>
        {[...Array(4)].map((_, i) => (
          <div key={i} className={style.image}>
            <img src={"https://picsum.photos/120" + i} alt="" />
          </div>
        ))}
      </Carousel>
    </figure>
  );
};
