/* eslint-disable @next/next/no-img-element */
"use client";

import { IntroductionImagesData } from "@/data";
import { css, sva } from "../../styled-system/css";
import React, { useEffect } from "react";
import { easeInOut, motion, useScroll, useTransform } from "framer-motion";
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
      pb: "24px",
      height: "500vh",
      position: "relative",
      mdDown: {
        gridColumn: "1 / span 3",
        width: "calc(100% + 32px * 2)",
        transform: "translateX(-32px)",
        px: "calc(32px - 8px)",
        pb: "0px",
        height: "400vh",
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
    if (carouselRef.current) {
      console.log(
        "carouselRef.current.scrollWidth",
        carouselRef.current.scrollWidth
      );
      setCarouselWidth(carouselRef.current.scrollWidth);
    }
  }, [width]);

  return (
    <figure className={style.container} ref={ref}>
      <div
        className={css({
          position: "sticky",
          top: "0",
          height: "100lvh",
        })}
      >
        <div
          className={css({
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          })}
        >
          <motion.div
            className={css({
              display: "flex",
            })}
            ref={carouselRef}
            style={{
              x: useTransform(
                scrollYProgress,
                [0, 1],
                [0, -(carouselWidth - width + (isMd ? 24 : 72) * 2)],
                {
                  ease: easeInOut,
                }
              ),
            }}
          >
            {IntroductionImagesData.map((image) => (
              <motion.div
                key={encodeURIComponent(image.url) + "-container"}
                className={style.image}
              >
                <motion.div
                  key={encodeURIComponent(image.url) + "-animation"}
                  className={css({
                    display: "block",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "rgba(0, 4, 128, 0.6)",
                    zIndex: 10,
                    mixBlendMode: "screen",
                  })}
                  initial={{
                    opacity: 1,
                  }}
                  whileInView={{
                    opacity: 0,
                  }}
                  viewport={{
                    amount: isMd ? 0.5 : 1,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                ></motion.div>
                <motion.img
                  key={encodeURIComponent(image.url)}
                  src={image.url}
                  alt={image.alt}
                  initial={{
                    filter: "grayscale(1)",
                  }}
                  whileInView={{
                    filter: "grayscale(0)",
                  }}
                  viewport={{
                    amount: isMd ? 0.5 : 1,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </figure>
  );
};
