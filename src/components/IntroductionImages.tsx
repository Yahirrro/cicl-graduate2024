import { sva } from "../../styled-system/css";

const introductionImagesStyles = sva({
  slots: ["container", "carousel", "image"],
  base: {
    container: {
      gridColumn: "1 / span 5",
      overflow: "scroll",
    },
    carousel: {
      display: "flex",
      gap: "24px",
    },
    image: {
      width: "calc((((100% - 72px * 2) - (24px * 5)) / 5 ) * 2)",
      minW: "calc((((100% - 72px * 2) + (24px * 5)) / 5 ) * 2)",
      position: "relative",
      display: "block",
      gridColumn: "span 2",
      aspectRatio: "2 / 3",
      "& img": {
        filter: "grayscale(1)",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      },
      _after: {
        content: '""',
        display: "block",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 4, 128, 0.2)",
        zIndex: 10,
        mixBlendMode: "screen",
      },
    },
  },
});

export const IntroductionImages: React.FC = () => {
  const style = introductionImagesStyles();
  return (
    <figure className={style.container}>
      <div className={style.carousel}>
        {[...Array(4)].map((_, i) => (
          <div key={i} className={style.image}>
            <img src="https://picsum.photos/800" alt="" />
          </div>
        ))}
      </div>
    </figure>
  );
};
