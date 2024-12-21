/* eslint-disable @next/next/no-img-element */
"use client";

import { IntroductionImagesData } from "@/data";
import { css, sva } from "../../styled-system/css";
import React, { useEffect } from "react";
import {
  easeInOut,
  motion,
  MotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { useWindowWidth } from "@/hooks/useWindowWidth";

const introductionImagesStyles = sva({
  slots: ["container", "carousel", "image"],
  base: {
    container: {
      gridColumn: "1 / span 5",
      width: "calc(100% + 72px * 2)",
      transform: "translateX(-72px)",
      padding: "0 calc(72px - 12px)",
      overflow: "clip",
      height: "500vh",
      position: "relative",

      pt: "128px",
      pb: "128px",
      my: "min(calc(((100vh - (38.25% / 2) * 3) / 2) * -1), 0px)",

      mdDown: {
        gridColumn: "1 / span 3",
        width: "calc(100% + 32px * 2)",
        transform: "translateX(-32px)",
        px: "calc(32px - 8px)",
        height: "600vh",

        pt: "64px",
        pb: "48px",
        my: "min(calc(((100vh - (80% / 2) * 3) / 2) * -1), 0px)",
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
        transform: "translateY(12px)",
        mdDown: {
          transform: "translateY(6px)",
        },
      },
      "&:nth-of-type(odd)": {
        transform: "translateY(-12px)",
        mdDown: {
          transform: "translateY(-6px)",
        },
      },

      "& img": {
        width: "100%",
        height: "100%",
        objectFit: "cover",
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
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const width = useWindowWidth();
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [carouselWidth, setCarouselWidth] = React.useState(0);

  const isMd = useMediaQuery({
    query: "(max-width: 47.9975rem)",
  });

  useEffect(() => {
    const updateCarouselWidth = () => {
      if (carouselRef.current) {
        setCarouselWidth(carouselRef.current.scrollWidth);
      }
    };

    const resizeObserver = new ResizeObserver(updateCarouselWidth);
    if (carouselRef.current) {
      resizeObserver.observe(carouselRef.current);
    }

    window.addEventListener("resize", updateCarouselWidth);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateCarouselWidth);
    };
  }, []);

  return (
    <figure className={style.container} ref={ref}>
      <div
        className={css({
          position: "sticky",
          top: "0",
          height: "max(calc((38.25vw / 2) * 3) , 100lvh)",
        })}
      >
        <div
          className={css({
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            overscrollBehavior: "none",
          })}
        >
          <Carousel
            carouselRef={carouselRef}
            scrollYProgress={scrollYProgress}
            carouselWidth={carouselWidth}
            width={width}
            isMd={isMd}
            style={style}
          />
        </div>
      </div>
    </figure>
  );
};

type CarouselProps = {
  carouselRef: React.RefObject<HTMLDivElement>;
  scrollYProgress: MotionValue<number>;
  carouselWidth: number;
  width: number;
  isMd: boolean;
  style: Record<string, string>;
};

export const Carousel: React.FC<CarouselProps> = ({
  carouselRef,
  scrollYProgress,
  carouselWidth,
  width,
  isMd,
  style,
}) => (
  <motion.div
    className={css({ display: "flex" })}
    ref={carouselRef}
    style={{
      x: useTransform(
        scrollYProgress,
        [0, 1],
        [0, -(carouselWidth - width + (isMd ? 24 : 72) * 2)],
        { ease: isMd ? undefined : easeInOut }
      ),
    }}
  >
    {IntroductionImagesData.map((image) => (
      <CarouselItem
        key={image.url}
        url={image.url}
        alt={image.alt}
        isMd={isMd}
        style={style}
      />
    ))}
  </motion.div>
);

type CarouselItemProps = {
  url: string;
  alt: string;
  isMd: boolean;
  style: Record<string, string>;
};

export const CarouselItem: React.FC<CarouselItemProps> = ({
  url,
  alt,
  isMd,
  style,
}) => (
  <motion.div
    key={encodeURIComponent(url) + "-container"}
    className={style.image}
  >
    <motion.div
      key={encodeURIComponent(url) + "-animation"}
      className={css({
        display: "block",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "text60",
        zIndex: 10,
        mixBlendMode: "screen",
      })}
      initial={{ opacity: 1 }}
      whileInView={{ opacity: 0 }}
      viewport={{ amount: isMd ? 0.5 : 1 }}
      transition={{ duration: 0.6 }}
    />
    <motion.img
      src={url}
      alt={alt}
      initial={{ filter: "grayscale(1)" }}
      whileInView={{ filter: "grayscale(0)" }}
      viewport={{ amount: isMd ? 0.5 : 1 }}
      transition={{ duration: 0.6 }}
    />
  </motion.div>
);
