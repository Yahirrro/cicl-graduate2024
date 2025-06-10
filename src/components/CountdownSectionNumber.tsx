"use client";

import { cubicBezier, motion } from "framer-motion";
import { css, cx, sva } from "../../styled-system/css";
import { useMediaQuery } from "react-responsive";

const countDownSectionNumberStyle = sva({
  slots: ["container", "tenone", "tenoneConainer", "unit"],
  base: {
    container: {
      pr: "8px",
      fontSize: "110px",
      height: "110px",
      display: "flex",
      justifyContent: "end",
      mdDown: {
        fontSize: "80px",
        lineHeight: "1",
        height: "80px",
        pr: "0",
        justifyContent: "center",
      },
    },
    tenone: {
      lineHeight: "1",
      fontSize: "110px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      textAlign: "center",
      mdDown: {
        fontSize: "80px",
      },
    },
    tenoneConainer: {},
    unit: {
      fontSize: "40px",
      lineHeight: "1",
      display: "block",
      alignSelf: "flex-end",
      mb: "12px",
      mdDown: {
        fontSize: "30px",
        mb: "8px",
      },
    },
  },
});

export const CountDownSectionNumber: React.FC<{
  thousandsDigit?: number;
  hundredsDigit?: number;
  tensDigit: number;
  onesDigit: number;
  text?: string;
}> = ({
  thousandsDigit = 0,
  hundredsDigit = 0,
  tensDigit,
  onesDigit,
  text,
}) => {
  const style = countDownSectionNumberStyle();

  const isMd = useMediaQuery({
    query: "(max-width: 47.9975rem)",
  });

  if (text) {
    return (
      <span
        className={cx(
          style.container,
          css({
            height: {
              base: "60px !important",
              md: "45px",
            },
          })
        )}
      >
        <span style={{ fontSize: isMd ? "45px" : "60px", lineHeight: "1" }}>
          {text}
        </span>
      </span>
    );
  }

  return (
    <span className={style.container}>
      {/* 千の位 (0でない場合のみ表示) */}
      {thousandsDigit > 0 && (
        <span className={style.tenoneConainer}>
          <motion.span
            className={style.tenone}
            initial={{ y: "0" }}
            whileInView={
              isMd
                ? { y: `-${thousandsDigit * 80}px` }
                : { y: `-${thousandsDigit * 110}px` }
            }
            transition={{
              delay: 0,
              duration: 0.8,
              ease: cubicBezier(0, 0.3, 0.16, 1),
            }}
          >
            {Array.from(Array(10).keys()).map((i) => {
              return (
                <span
                  key={i}
                  style={{
                    userSelect: thousandsDigit === i ? "auto" : "none",
                  }}
                  aria-hidden={thousandsDigit === i ? "false" : "true"}
                >
                  {i}
                </span>
              );
            })}
          </motion.span>
        </span>
      )}

      {/* 百の位 (千の位が表示されているか、百の位が0でない場合に表示) */}
      {(thousandsDigit > 0 || hundredsDigit > 0) && (
        <span className={style.tenoneConainer}>
          <motion.span
            className={style.tenone}
            initial={{ y: "0" }}
            whileInView={
              isMd
                ? { y: `-${hundredsDigit * 80}px` }
                : { y: `-${hundredsDigit * 110}px` }
            }
            transition={{
              delay: 0.1,
              duration: 0.8,
              ease: cubicBezier(0, 0.3, 0.16, 1),
            }}
          >
            {Array.from(Array(10).keys()).map((i) => {
              return (
                <span
                  key={i}
                  style={{
                    userSelect: hundredsDigit === i ? "auto" : "none",
                  }}
                  aria-hidden={hundredsDigit === i ? "false" : "true"}
                >
                  {i}
                </span>
              );
            })}
          </motion.span>
        </span>
      )}

      {/* 十の位 */}
      <span className={style.tenoneConainer}>
        <motion.span
          className={style.tenone}
          initial={{ y: "0" }}
          whileInView={
            isMd
              ? { y: `-${tensDigit * 80}px` }
              : { y: `-${tensDigit * 110}px` }
          }
          transition={{
            delay: thousandsDigit > 0 || hundredsDigit > 0 ? 0.2 : 0,
            duration: 0.8,
            ease: cubicBezier(0, 0.3, 0.16, 1),
          }}
        >
          {Array.from(Array(10).keys()).map((i) => {
            return (
              <span
                key={i}
                style={{
                  userSelect: tensDigit === i ? "auto" : "none",
                }}
                aria-hidden={tensDigit === i ? "false" : "true"}
              >
                {i}
              </span>
            );
          })}
        </motion.span>
      </span>

      {/* 一の位 */}
      <span className={style.tenoneConainer}>
        <motion.span
          className={style.tenone}
          initial={{ y: "0" }}
          whileInView={
            isMd
              ? { y: `-${onesDigit * 80}px` }
              : { y: `-${onesDigit * 110}px` }
          }
          transition={{
            delay: thousandsDigit > 0 || hundredsDigit > 0 ? 0.3 : 0.1,
            duration: 0.8,
            ease: cubicBezier(0, 0.3, 0.16, 1),
          }}
        >
          {Array.from(Array(10).keys()).map((i) => {
            return (
              <span
                key={i}
                style={{
                  userSelect: onesDigit === i ? "auto" : "none",
                }}
                aria-hidden={onesDigit === i ? "false" : "true"}
              >
                {i}
              </span>
            );
          })}
        </motion.span>
      </span>
      <span className={style.unit}>日</span>
    </span>
  );
};
