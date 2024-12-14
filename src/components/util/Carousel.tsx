"use client";

import useEmblaCarousel from "embla-carousel-react";
import { cx, sva } from "../../../styled-system/css";
import { useCallback, useEffect, useState } from "react";
import { EmblaCarouselType } from "embla-carousel";

const carouselStyles = sva({
  slots: ["embla", "container", "button", "button_prev", "button_next"],
  base: {
    embla: {
      position: "relative",
      _hover: {
        "& button": {
          opacity: 1,
        },
      },
    },
    container: {
      display: "flex",
    },

    button: {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      height: "52px",
      width: "52px",
      background: "rgba(255, 255, 255, 0)",
      transition: "opacity 0.3s",
      borderRadius: "50%",
      cursor: "pointer",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderColor: "white",
      borderWidth: "2px",
      mixBlendMode: "difference",
      _disabled: {
        borderColor: "rgba(255, 255, 255, 0.1)",
        cursor: "not-allowed",
        "& svg": {
          opacity: 0.1,
        },
      },
      opacity: 0,
      mdDown: {
        display: "none",
      },
    },
    button_prev: {
      left: "-10px",
    },
    button_next: {
      right: "-10px",
    },
  },
});

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

export const Carousel: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const style = carouselStyles();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "keepSnaps",
  });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className={style.embla} ref={emblaRef}>
      <div className={style.container}>{children}</div>

      <button
        className={cx(style.button, style.button_prev, prevBtnDisabled)}
        disabled={prevBtnDisabled}
        onClick={onPrevButtonClick}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            transform: "scaleX(-1)",
          }}
        >
          <path
            d="M5 12H19M19 12L12 5M19 12L12 19"
            stroke="white"
            stroke-width="2"
            stroke-linecap="square"
          />
        </svg>
      </button>
      <button
        className={cx(style.button, style.button_next)}
        disabled={nextBtnDisabled}
        onClick={onNextButtonClick}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 12H19M19 12L12 5M19 12L12 19"
            stroke="white"
            stroke-width="2"
            stroke-linecap="square"
          />
        </svg>
      </button>
    </div>
  );
};
