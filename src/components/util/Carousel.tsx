"use client";

import useEmblaCarousel from "embla-carousel-react";
import { sva } from "../../../styled-system/css";

const carouselStyles = sva({
  slots: ["embla", "container"],
  base: {
    embla: {
      // overflow: "hidden",
    },
    container: {
      display: "flex",
    },
  },
});

export const Carousel: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const style = carouselStyles();
  const [emblaRef] = useEmblaCarousel({
    align: "start",
  });

  return (
    <div className={style.embla} ref={emblaRef}>
      <div className={style.container}>{children}</div>
    </div>
  );
};
