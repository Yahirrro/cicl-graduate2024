import { sva } from "../../styled-system/css";
import { FadeIn } from "./util/FadeIn";

const topSectionStyles = sva({
  slots: [
    "container",
    "topHeaderContainer",
    "topHeaderContainerTitle",
    "topHeaderContainerSubtitle",
    "topTitleContainer",
    "topTitleContainerText",
    "topInfoContainer",
    "topInfoContainerText",
    "topInfoLinkContainer",
    "topInfoLink",
    "topVisualContainer",
  ],
  base: {
    container: {
      display: "grid",
      gap: "0 24px",
      gridTemplateColumns: "repeat(5, 1fr)",
      gridTemplateRows: "auto 1fr auto",
      px: "72px",
      pt: "64px",
      pb: "48px",
      height: "100vh",
      color: "white",
      overflow: "hidden",
    },
    topHeaderContainer: {
      display: "grid",
      gridColumn: "1 / span 5",
      gridRow: "1 / span 1",
      gridTemplateColumns: "subgrid",
      mb: "82px",
      textStyle: "extraSmall",
      alignContent: "end",
    },
    topHeaderContainerTitle: {
      gridColumn: "1 / span 2",
      whiteSpace: "pre",
      textStyle: "extraSmall",
    },
    topHeaderContainerSubtitle: {
      gridColumn: "4 / span 2",
      textAlign: "right",
      whiteSpace: "pre",
    },
    topTitleContainer: {
      display: "grid",
      gridTemplateColumns: "subgrid",
      gridColumn: "1 / span 5",
      mb: "64px",
      alignContent: "end",
    },
    topTitleContainerText: {
      display: "grid",
      gridTemplateColumns: "subgrid",
      gridColumn: "1 / span 2",
      fontSize: "64px",
      "& span": {
        display: "none",
      },
      "& svg": {
        gridColumn: "1 / span 2",
      },
    },
    topInfoContainer: {
      gridTemplateColumns: "subgrid",
      gridColumn: "1 / span 5",
      display: "grid",
    },
    topInfoContainerText: {
      whiteSpace: "pre",
      textStyle: "extraSmall",
    },
    topInfoLinkContainer: {
      display: "grid",
      gridColumn: "4 / span 2",
      gap: "10px",
      justifyItems: "end",
    },
    topInfoLink: {
      display: "flex",
      padding: "4px 20px",
      alignItems: "center",
      gap: "10px",
      flex: "1 0 0",
      border: "1px solid currentColor",
      height: "fit-content",
      width: "fit-content",
      textStyle: "small",
    },

    topVisualContainer: {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      zIndex: -10,
    },
  },
});

export const TopSection: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  const style = topSectionStyles();

  return (
    <header className={style.container}>
      <FadeIn className={style.topHeaderContainer} delay={4.5}>
        <p className={style.topHeaderContainerTitle}>
          {`MUSASHINO ART UNIV\nINSTITUTE OF INNOVATION`}
        </p>
        <p className={style.topHeaderContainerSubtitle}>
          {`武蔵野美術大学造形構想学部クリエイティブイノベーション学科\n造形構想研究科造形構想専攻クリエイティブリーダーシップコース\n卒業制作展 2024`}
        </p>
      </FadeIn>
      <FadeIn className={style.topTitleContainer} delay={3} duration={3}>
        <h1 className={style.topTitleContainerText}>
          <span>Institute of Innovation Graduate Show</span>
          <svg
            viewBox="0 0 506 145"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.78619 3.76743C5.92576 3.93836 6.55253 3.99534 7.57814 3.99534C8.60375 3.99534 9.23052 3.93836 10.3701 3.76743C10.0282 7.75592 9.8003 14.5364 9.8003 21.1459C9.8003 30.8322 9.97124 37.8975 10.3701 42.2279C9.0026 42.057 8.31886 42 7.52116 42C6.66648 42 6.03972 42.057 4.78619 42.2279C5.12806 37.7266 5.299 30.7752 5.299 20.0633C5.299 13.7387 5.07109 7.30009 4.78619 3.76743ZM22.827 17.8981V20.5191C24.9352 16.9295 27.9551 15.2201 32.0005 15.2201C34.7925 15.2201 37.1856 16.1318 38.838 17.7841C40.4903 19.4365 41.1741 21.3738 41.1741 24.4506C41.1741 24.8495 41.1171 26.9577 41.0032 29.2368C40.9462 30.6043 40.9462 32.1997 40.9462 33.9091C40.9462 38.2394 41.0032 40.5186 41.1171 42.2279C39.4078 42 39.1798 42 38.6101 42C38.0972 42 37.5844 42.057 36.2739 42.2279C36.5588 38.6383 36.8437 31.9718 36.8437 27.6414C36.8437 23.9378 36.5588 22.3424 35.7611 20.9749C34.6216 18.9807 32.7413 18.0121 30.2342 18.0121C27.2144 18.0121 24.8213 19.4365 23.8526 21.8296C23.1119 23.8239 22.941 25.6472 22.941 33.3962C22.941 36.9289 22.9979 38.1255 23.2259 42.2279C21.9154 42.057 21.4025 42 20.7758 42C20.149 42 19.5792 42.057 18.3827 42.2279C18.6676 40.0627 18.8955 32.4846 18.8955 26.5018C18.8955 22.9122 18.7246 19.6075 18.3827 15.619C19.4083 15.7899 19.9781 15.8469 20.8897 15.8469C21.7444 15.8469 22.1433 15.7899 22.941 15.619C22.884 16.5306 22.884 16.9295 22.827 17.8981ZM48.0191 36.9859H48.4749C50.2412 39.7209 52.2355 40.9744 55.0274 40.9744C58.1043 40.9744 60.4404 38.8092 60.4404 36.0173C60.4404 33.4532 59.0729 32.1427 55.0844 31.0031C51.7797 30.0345 50.6401 29.5217 49.5005 28.6101C48.0191 27.4705 47.1074 25.3623 47.1074 23.1971C47.1074 18.2969 50.868 15.2201 56.8507 15.2201C59.2438 15.2201 60.9532 15.562 63.5742 16.5876C62.5486 19.0946 62.5486 19.2086 62.0928 20.9749H61.523C60.8962 18.4679 58.902 17.0434 55.9391 17.0434C52.9762 17.0434 50.868 18.9807 50.868 21.7157C50.868 23.1971 51.5517 24.5646 52.6343 25.3053C53.603 25.989 54.4576 26.3309 57.5345 27.1856C62.3777 28.4961 64.201 30.4334 64.201 34.137C64.201 39.2081 59.8136 42.9686 53.9448 42.9686C51.3238 42.9686 48.7028 42.2849 46.8225 41.0883C47.2214 40.1197 47.6202 38.6383 48.0191 36.9859ZM75.6893 8.15477L75.8602 8.38269L75.8032 9.06643L75.5753 12.3712C75.4613 13.4538 75.4613 14.4794 75.4044 16.1887L81.558 16.0748C81.3871 16.7015 81.3301 16.9864 81.3301 17.2713C81.3301 17.5562 81.3871 17.8411 81.558 18.3539H80.8743H78.5952H75.9742H75.4613C75.3474 20.0633 75.3474 20.1203 75.2334 27.7554V32.7695C75.2334 36.3591 75.3474 37.4417 75.9742 38.7522C76.6579 40.1197 77.9684 40.9174 79.7347 40.9174C80.5894 40.9174 81.2162 40.8035 82.2418 40.5186V41.8291C79.9626 42.5128 78.8801 42.7407 77.3986 42.7407C73.4101 42.7407 70.9031 40.0627 70.9031 35.8463C70.9031 35.3335 70.96 33.7951 71.017 32.2567C71.131 30.0915 71.2449 23.5959 71.2449 20.3482C71.2449 19.2086 71.2449 19.0377 71.188 18.3539C69.1367 18.3539 68.1681 18.4109 67.5413 18.4679C67.6553 18.0121 67.7123 17.7841 67.7123 17.3853C67.7123 16.9864 67.6553 16.7015 67.5413 16.2457H71.3019V15.505C71.3019 14.6503 71.131 12.0293 70.96 10.092C72.4985 9.75017 74.2078 9.00945 75.6893 8.15477ZM86.4497 15.619C87.5323 15.7899 88.1591 15.8469 89.0707 15.8469C89.9254 15.8469 90.4382 15.7899 91.3499 15.619C91.1789 17.8411 91.008 24.6785 91.008 29.4078C91.008 33.0544 91.1789 39.7209 91.3499 42.2279C90.3812 42.057 89.8115 42 89.0138 42C88.273 42 87.6463 42.057 86.4497 42.2279C86.7916 39.0371 86.9056 35.7893 86.9056 29.9206C86.9056 23.539 86.7346 18.8667 86.4497 15.619ZM89.1277 3.25462C90.6092 3.25462 91.9197 4.56513 91.9197 6.10354C91.9197 7.69894 90.6661 8.95247 89.0707 8.95247C87.4753 8.95247 86.2218 7.69894 86.2218 6.10354C86.2218 4.50815 87.4753 3.25462 89.1277 3.25462ZM104.041 8.15477L104.211 8.38269L104.154 9.06643L103.927 12.3712C103.813 13.4538 103.813 14.4794 103.756 16.1887L109.909 16.0748C109.738 16.7015 109.681 16.9864 109.681 17.2713C109.681 17.5562 109.738 17.8411 109.909 18.3539H109.226H106.946H104.325H103.813C103.699 20.0633 103.699 20.1203 103.585 27.7554V32.7695C103.585 36.3591 103.699 37.4417 104.325 38.7522C105.009 40.1197 106.32 40.9174 108.086 40.9174C108.941 40.9174 109.567 40.8035 110.593 40.5186V41.8291C108.314 42.5128 107.231 42.7407 105.75 42.7407C101.761 42.7407 99.2543 40.0627 99.2543 35.8463C99.2543 35.3335 99.3113 33.7951 99.3683 32.2567C99.4822 30.0915 99.5962 23.5959 99.5962 20.3482C99.5962 19.2086 99.5962 19.0377 99.5392 18.3539C97.488 18.3539 96.5193 18.4109 95.8926 18.4679C96.0065 18.0121 96.0635 17.7841 96.0635 17.3853C96.0635 16.9864 96.0065 16.7015 95.8926 16.2457H99.6532V15.505C99.6532 14.6503 99.4822 12.0293 99.3113 10.092C100.85 9.75017 102.559 9.00945 104.041 8.15477ZM114.753 28.9519L114.81 22.0005C114.81 18.7528 114.753 17.6132 114.582 15.619C115.608 15.7899 116.121 15.8469 116.919 15.8469C117.716 15.8469 118.286 15.7899 119.426 15.619C119.198 18.6388 118.97 25.0774 118.97 29.3508C118.97 33.6811 119.198 35.2765 119.995 36.701C121.135 38.8092 123.186 40.0058 125.636 40.0058C128.713 40.0058 131.163 38.1824 132.189 35.2196C132.759 33.4532 132.759 33.4532 132.816 24.6216L132.759 20.5191C132.702 17.5562 132.645 17.1004 132.531 15.619C133.556 15.7899 134.069 15.8469 134.924 15.8469C135.721 15.8469 136.291 15.7899 137.374 15.619C137.146 18.8098 136.975 24.6216 136.975 29.7496C136.975 36.587 137.089 39.8918 137.374 42.2279C136.177 42.057 135.664 42 134.981 42C134.354 42 133.841 42.057 132.816 42.2279C132.929 40.9744 132.929 40.5186 132.986 37.2138C131.22 40.8604 127.858 42.9686 123.756 42.9686C121.192 42.9686 118.913 42.114 117.26 40.4616C115.437 38.7522 114.639 36.587 114.639 33.3393C114.639 32.5416 114.696 30.8322 114.753 28.9519ZM150.253 8.15477L150.424 8.38269L150.367 9.06643L150.139 12.3712C150.025 13.4538 150.025 14.4794 149.968 16.1887L156.122 16.0748C155.951 16.7015 155.894 16.9864 155.894 17.2713C155.894 17.5562 155.951 17.8411 156.122 18.3539H155.438H153.159H150.538H150.025C149.911 20.0633 149.911 20.1203 149.797 27.7554V32.7695C149.797 36.3591 149.911 37.4417 150.538 38.7522C151.222 40.1197 152.532 40.9174 154.299 40.9174C155.153 40.9174 155.78 40.8035 156.806 40.5186V41.8291C154.527 42.5128 153.444 42.7407 151.963 42.7407C147.974 42.7407 145.467 40.0627 145.467 35.8463C145.467 35.3335 145.524 33.7951 145.581 32.2567C145.695 30.0915 145.809 23.5959 145.809 20.3482C145.809 19.2086 145.809 19.0377 145.752 18.3539C143.701 18.3539 142.732 18.4109 142.105 18.4679C142.219 18.0121 142.276 17.7841 142.276 17.3853C142.276 16.9864 142.219 16.7015 142.105 16.2457H145.866V15.505C145.866 14.6503 145.695 12.0293 145.524 10.092C147.062 9.75017 148.772 9.00945 150.253 8.15477ZM181.618 36.701L181.959 36.815L181.846 37.3278C181.561 38.2964 181.504 38.5243 181.504 39.6639C177.971 42.1709 175.635 42.9686 171.817 42.9686C163.612 42.9686 158.427 37.6696 158.427 29.2938C158.427 24.9634 159.624 21.4308 162.017 18.8667C164.296 16.3597 167.316 15.2201 171.532 15.2201C178.769 15.2201 182.928 19.5505 182.928 27.0716C182.928 27.4705 182.928 28.1542 182.871 28.838C181.048 28.724 178.37 28.667 173.584 28.667C170.051 28.667 167.259 28.724 163.385 28.838V30.0915C163.385 36.4731 167.145 40.6895 172.843 40.6895C176.319 40.6895 179.282 39.322 181.618 36.701ZM178.427 26.5018C178.256 23.9378 178.028 22.5134 177.515 21.2598C176.433 18.4679 174.324 16.9864 171.418 16.9864C166.974 16.9864 163.84 20.747 163.441 26.6158C165.151 26.6728 167.772 26.7298 172.159 26.7298C175.92 26.7298 176.49 26.7298 178.427 26.5018ZM215.04 15.2201C223.416 15.2201 228.316 20.4621 228.316 29.4078C228.316 37.4987 222.846 42.9686 214.641 42.9686C206.379 42.9686 201.023 37.5557 201.023 29.1229C201.023 20.5191 206.379 15.2201 215.04 15.2201ZM214.698 16.9864C209.228 16.9864 205.98 21.5447 205.98 29.0659C205.98 36.644 209.285 41.2023 214.698 41.2023C219.997 41.2023 223.359 36.587 223.359 29.2938C223.359 21.3168 220.339 16.9864 214.698 16.9864ZM240.126 16.3027H246.336C246.279 16.9295 246.222 17.2144 246.222 17.5562C246.222 17.8981 246.222 18.0121 246.336 18.3539H245.596L243.601 18.2969H240.923H240.183C240.24 29.9775 240.411 41.0314 240.581 42.2279C239.1 42.057 238.587 42 238.017 42C237.391 42 236.878 42.057 235.681 42.2279C235.966 37.1568 235.966 37.0429 236.023 24.5076L235.966 19.2086V18.24H235.453L233.858 18.2969L232.32 18.3539H231.921C232.035 17.8411 232.035 17.5562 232.035 17.2713C232.035 16.9295 232.035 16.7015 231.921 16.1887L235.966 16.3027C236.08 11.6874 236.65 9.29434 238.473 6.10354C240.752 2.05807 243.544 0.120804 247.191 0.120804C248.103 0.120804 248.615 0.177782 249.242 0.462674C248.388 2.00109 247.761 3.65347 247.419 5.24887L246.906 5.59074C246.222 4.56513 245.254 4.1093 243.943 4.1093C241.436 4.1093 239.499 6.2175 239.499 9.00945C239.499 9.4083 239.556 10.32 239.67 11.1177C239.955 13.3398 240.069 14.7643 240.126 16.3027ZM264.8 3.76743C265.939 3.93836 266.566 3.99534 267.592 3.99534C268.617 3.99534 269.244 3.93836 270.383 3.76743C270.042 7.75592 269.814 14.5364 269.814 21.1459C269.814 30.8322 269.985 37.8975 270.383 42.2279C269.016 42.057 268.332 42 267.535 42C266.68 42 266.053 42.057 264.8 42.2279C265.141 37.7266 265.312 30.7752 265.312 20.0633C265.312 13.7387 265.084 7.30009 264.8 3.76743ZM282.84 17.8981V20.5191C284.949 16.9295 287.968 15.2201 292.014 15.2201C294.806 15.2201 297.199 16.1318 298.851 17.7841C300.504 19.4365 301.187 21.3738 301.187 24.4506C301.187 24.8495 301.13 26.9577 301.017 29.2368C300.96 30.6043 300.96 32.1997 300.96 33.9091C300.96 38.2394 301.017 40.5186 301.13 42.2279C299.421 42 299.193 42 298.623 42C298.111 42 297.598 42.057 296.287 42.2279C296.572 38.6383 296.857 31.9718 296.857 27.6414C296.857 23.9378 296.572 22.3424 295.774 20.9749C294.635 18.9807 292.755 18.0121 290.248 18.0121C287.228 18.0121 284.835 19.4365 283.866 21.8296C283.125 23.8239 282.954 25.6472 282.954 33.3962C282.954 36.9289 283.011 38.1255 283.239 42.2279C281.929 42.057 281.416 42 280.789 42C280.162 42 279.593 42.057 278.396 42.2279C278.681 40.0627 278.909 32.4846 278.909 26.5018C278.909 22.9122 278.738 19.6075 278.396 15.619C279.422 15.7899 279.991 15.8469 280.903 15.8469C281.758 15.8469 282.157 15.7899 282.954 15.619C282.897 16.5306 282.897 16.9295 282.84 17.8981ZM312.819 17.8981V20.5191C314.927 16.9295 317.947 15.2201 321.992 15.2201C324.784 15.2201 327.177 16.1318 328.83 17.7841C330.482 19.4365 331.166 21.3738 331.166 24.4506C331.166 24.8495 331.109 26.9577 330.995 29.2368C330.938 30.6043 330.938 32.1997 330.938 33.9091C330.938 38.2394 330.995 40.5186 331.109 42.2279C329.399 42 329.171 42 328.602 42C328.089 42 327.576 42.057 326.266 42.2279C326.55 38.6383 326.835 31.9718 326.835 27.6414C326.835 23.9378 326.55 22.3424 325.753 20.9749C324.613 18.9807 322.733 18.0121 320.226 18.0121C317.206 18.0121 314.813 19.4365 313.844 21.8296C313.104 23.8239 312.933 25.6472 312.933 33.3962C312.933 36.9289 312.99 38.1255 313.217 42.2279C311.907 42.057 311.394 42 310.767 42C310.141 42 309.571 42.057 308.374 42.2279C308.659 40.0627 308.887 32.4846 308.887 26.5018C308.887 22.9122 308.716 19.6075 308.374 15.619C309.4 15.7899 309.97 15.8469 310.881 15.8469C311.736 15.8469 312.135 15.7899 312.933 15.619C312.876 16.5306 312.876 16.9295 312.819 17.8981ZM351.23 15.2201C359.606 15.2201 364.506 20.4621 364.506 29.4078C364.506 37.4987 359.036 42.9686 350.831 42.9686C342.569 42.9686 337.213 37.5557 337.213 29.1229C337.213 20.5191 342.569 15.2201 351.23 15.2201ZM350.888 16.9864C345.418 16.9864 342.17 21.5447 342.17 29.0659C342.17 36.644 345.475 41.2023 350.888 41.2023C356.187 41.2023 359.549 36.587 359.549 29.2938C359.549 21.3168 356.529 16.9864 350.888 16.9864ZM379.698 35.9603L380.04 36.815C382.433 31.345 387.334 18.8098 388.245 15.619C389.328 15.7899 389.67 15.8469 390.069 15.8469C390.581 15.8469 390.923 15.7899 391.778 15.619C387.675 24.0518 381.75 37.9545 380.496 42.2279C379.585 42.057 379.3 42 378.958 42C378.616 42 378.274 42.057 377.476 42.2279C376.622 39.6639 375.311 36.3591 372.291 29.0659C367.961 18.7528 367.505 17.6132 366.422 15.619C367.562 15.7899 368.132 15.8469 368.93 15.8469C369.67 15.8469 370.354 15.7899 371.665 15.619C373.83 22.0575 376.223 28.0972 379.698 35.9603ZM396.908 21.4877H396.338C396.452 20.69 396.509 20.3482 396.509 19.8923C396.509 19.4365 396.452 19.0946 396.338 18.2969C399.586 16.1318 402.264 15.2201 405.455 15.2201C411.152 15.2201 414.571 18.4679 414.571 23.9378C414.571 24.9634 414.514 26.217 414.457 27.6984C414.4 29.8636 414.343 31.345 414.343 33.5102C414.343 36.9859 414.4 38.2964 414.628 38.9801C414.913 39.9488 415.597 40.4616 416.565 40.4616C416.907 40.4616 417.192 40.4046 417.762 40.3476V41.4302C416.223 42.057 415.198 42.2849 414.001 42.2849C411.722 42.2849 410.469 41.2023 410.127 38.9232C407.62 41.6581 404.828 42.9686 401.523 42.9686C396.794 42.9686 393.831 40.2906 393.831 36.0173C393.831 33.6242 394.743 31.5729 396.338 30.4334C397.819 29.3508 399.472 28.781 403.403 28.1542C407.506 27.4705 408.759 27.0716 410.241 26.103V25.989C410.241 22.9122 410.241 22.7413 409.785 21.4308C408.987 18.9807 406.708 17.4992 403.859 17.4992C400.896 17.4992 398.332 18.9237 396.908 21.4877ZM410.298 28.3821L409.671 28.4961C402.435 30.0915 402.207 30.1485 401.067 30.7752C399.301 31.7439 398.446 33.2823 398.446 35.4475C398.446 38.4673 400.554 40.5755 403.574 40.5755C406.081 40.5755 408.645 39.0371 410.127 36.644C410.127 35.1626 410.127 34.8207 410.184 33.6811V32.3137L410.298 28.8949V28.3821ZM427.585 8.15477L427.756 8.38269L427.699 9.06643L427.471 12.3712C427.357 13.4538 427.357 14.4794 427.3 16.1887L433.454 16.0748C433.283 16.7015 433.226 16.9864 433.226 17.2713C433.226 17.5562 433.283 17.8411 433.454 18.3539H432.77H430.491H427.87H427.357C427.243 20.0633 427.243 20.1203 427.129 27.7554V32.7695C427.129 36.3591 427.243 37.4417 427.87 38.7522C428.554 40.1197 429.864 40.9174 431.63 40.9174C432.485 40.9174 433.112 40.8035 434.137 40.5186V41.8291C431.858 42.5128 430.776 42.7407 429.294 42.7407C425.306 42.7407 422.799 40.0627 422.799 35.8463C422.799 35.3335 422.856 33.7951 422.913 32.2567C423.027 30.0915 423.141 23.5959 423.141 20.3482C423.141 19.2086 423.141 19.0377 423.084 18.3539C421.032 18.3539 420.064 18.4109 419.437 18.4679C419.551 18.0121 419.608 17.7841 419.608 17.3853C419.608 16.9864 419.551 16.7015 419.437 16.2457H423.198V15.505C423.198 14.6503 423.027 12.0293 422.856 10.092C424.394 9.75017 426.103 9.00945 427.585 8.15477ZM438.345 15.619C439.428 15.7899 440.055 15.8469 440.966 15.8469C441.821 15.8469 442.334 15.7899 443.246 15.619C443.075 17.8411 442.904 24.6785 442.904 29.4078C442.904 33.0544 443.075 39.7209 443.246 42.2279C442.277 42.057 441.707 42 440.909 42C440.169 42 439.542 42.057 438.345 42.2279C438.687 39.0371 438.801 35.7893 438.801 29.9206C438.801 23.539 438.63 18.8667 438.345 15.619ZM441.023 3.25462C442.505 3.25462 443.815 4.56513 443.815 6.10354C443.815 7.69894 442.562 8.95247 440.966 8.95247C439.371 8.95247 438.117 7.69894 438.117 6.10354C438.117 4.50815 439.371 3.25462 441.023 3.25462ZM463.172 15.2201C471.548 15.2201 476.448 20.4621 476.448 29.4078C476.448 37.4987 470.978 42.9686 462.774 42.9686C454.512 42.9686 449.156 37.5557 449.156 29.1229C449.156 20.5191 454.512 15.2201 463.172 15.2201ZM462.831 16.9864C457.361 16.9864 454.113 21.5447 454.113 29.0659C454.113 36.644 457.418 41.2023 462.831 41.2023C468.13 41.2023 471.491 36.587 471.491 29.2938C471.491 21.3168 468.471 16.9864 462.831 16.9864ZM486.777 17.8981V20.5191C488.885 16.9295 491.905 15.2201 495.95 15.2201C498.742 15.2201 501.135 16.1318 502.788 17.7841C504.44 19.4365 505.124 21.3738 505.124 24.4506C505.124 24.8495 505.067 26.9577 504.953 29.2368C504.896 30.6043 504.896 32.1997 504.896 33.9091C504.896 38.2394 504.953 40.5186 505.067 42.2279C503.357 42 503.129 42 502.56 42C502.047 42 501.534 42.057 500.224 42.2279C500.508 38.6383 500.793 31.9718 500.793 27.6414C500.793 23.9378 500.508 22.3424 499.711 20.9749C498.571 18.9807 496.691 18.0121 494.184 18.0121C491.164 18.0121 488.771 19.4365 487.802 21.8296C487.062 23.8239 486.891 25.6472 486.891 33.3962C486.891 36.9289 486.948 38.1255 487.176 42.2279C485.865 42.057 485.352 42 484.725 42C484.099 42 483.529 42.057 482.332 42.2279C482.617 40.0627 482.845 32.4846 482.845 26.5018C482.845 22.9122 482.674 19.6075 482.332 15.619C483.358 15.7899 483.928 15.8469 484.839 15.8469C485.694 15.8469 486.093 15.7899 486.891 15.619C486.834 16.5306 486.834 16.9295 486.777 17.8981Z"
              fill="white"
            />
            <path
              d="M53.9134 79.7942H53.1112C48.6986 74.9003 42.2803 72.0923 35.0598 72.0923C21.2605 72.0923 12.2749 82.0406 12.2749 97.284C12.2749 112.768 21.1803 122.395 35.5411 122.395C40.2746 122.395 44.5267 121.513 48.6184 119.668C48.8591 116.057 48.9393 113.009 48.9393 109.238C48.9393 104.906 48.8591 102.82 48.4579 99.6106C49.7416 99.8513 50.5438 99.9315 51.988 99.9315C53.5925 99.9315 54.475 99.8513 55.9994 99.6106C55.5982 103.782 55.3575 108.516 55.3575 113.249C55.3575 118.143 55.3575 119.507 55.5982 121.754C48.137 124.241 41.3978 125.364 34.1773 125.364C24.951 125.364 18.2118 123.278 12.9168 118.705C7.30078 113.891 4.33233 106.751 4.33233 97.9258C4.33233 88.6193 7.70192 80.7569 13.7993 75.7828C19.335 71.29 26.4753 69.1238 35.7818 69.1238C44.0454 69.1238 50.1427 70.5679 55.9191 73.7771C54.9564 75.4619 54.3948 77.1467 53.9134 79.7942ZM84.9129 93.0319L84.3513 93.3528C83.0677 92.4703 81.9445 92.0691 80.5004 92.0691C77.211 92.0691 74.1623 94.476 73.0391 98.006C72.4775 99.771 72.3171 102.739 72.3171 111.163C72.3171 115.496 72.5577 121.593 72.7984 124.321C71.1136 124.08 70.3916 124 69.4288 124C68.5463 124 67.744 124.08 65.979 124.321C66.3802 121.272 66.6209 114.132 66.6209 104.745C66.6209 98.8083 66.6209 97.7653 65.979 86.8543C67.8243 87.095 68.4661 87.1752 69.3486 87.1752C70.1509 87.1752 70.873 87.095 72.3973 86.8543V87.7368L72.3171 90.9459C72.2368 92.711 72.2368 92.9516 72.2368 95.1178C74.9646 89.582 78.8958 86.2927 82.9874 86.2927C83.9502 86.2927 84.5118 86.4531 85.3943 86.8543C84.9931 88.4589 84.7525 90.1436 84.7525 91.4273C84.7525 91.7482 84.8327 92.3098 84.9129 93.0319ZM92.487 95.1178H91.6847C91.8451 93.9946 91.9254 93.5132 91.9254 92.8714C91.9254 92.2296 91.8451 91.7482 91.6847 90.625C96.2577 87.5763 100.028 86.2927 104.521 86.2927C112.544 86.2927 117.358 90.8657 117.358 98.5676C117.358 100.012 117.278 101.777 117.197 103.863C117.117 106.911 117.037 108.997 117.037 112.046C117.037 116.94 117.117 118.785 117.438 119.748C117.839 121.112 118.802 121.834 120.166 121.834C120.647 121.834 121.048 121.754 121.851 121.673V123.198C119.684 124.08 118.24 124.401 116.555 124.401C113.346 124.401 111.581 122.877 111.1 119.668C107.57 123.519 103.639 125.364 98.9855 125.364C92.3265 125.364 88.1546 121.593 88.1546 115.576C88.1546 112.206 89.4383 109.318 91.6847 107.714C93.7706 106.189 96.0972 105.387 101.633 104.505C107.409 103.542 109.174 102.98 111.26 101.616V101.456C111.26 97.1235 111.26 96.8828 110.619 95.0376C109.495 91.5878 106.286 89.5018 102.275 89.5018C98.1029 89.5018 94.4927 91.5075 92.487 95.1178ZM111.341 104.825L110.458 104.986C100.269 107.232 99.9482 107.313 98.3436 108.195C95.8566 109.559 94.6531 111.725 94.6531 114.774C94.6531 119.026 97.6216 121.994 101.874 121.994C105.404 121.994 109.014 119.828 111.1 116.459C111.1 114.373 111.1 113.891 111.18 112.287V110.361L111.341 105.547V104.825ZM155.563 85.3299V82.4417C155.563 74.9805 155.403 69.6854 155.162 65.1926C157.088 65.4333 157.89 65.5135 158.853 65.5135C159.896 65.5135 160.698 65.4333 161.982 65.1926C161.661 68.6425 161.661 68.8029 161.26 85.1695L161.179 94.6364L161.099 104.424C161.179 112.367 161.179 117.261 161.179 119.026C161.179 121.914 161.179 122.075 161.34 124.321C160.217 124.08 159.655 124 158.532 124C157.489 124 156.687 124.08 155.403 124.321L155.483 122.315L155.644 118.384V116.459C152.755 122.395 148.343 125.203 142.085 125.203C132.377 125.203 125.959 117.822 125.959 106.671C125.959 94.2353 132.618 86.2927 143.128 86.2927C149.145 86.2927 153.477 88.9402 155.563 93.9144C155.483 93.2726 155.483 92.4703 155.483 92.39C155.483 91.1866 155.483 89.4216 155.563 85.3299ZM144.572 89.3414C137.031 89.3414 132.939 95.4387 132.939 106.671C132.939 116.459 136.95 122.235 143.85 122.235C150.91 122.235 155.483 115.416 155.483 104.825C155.483 95.2783 151.311 89.3414 144.572 89.3414ZM170.864 105.628L170.944 95.8399C170.944 91.2668 170.864 89.6623 170.623 86.8543C172.067 87.095 172.789 87.1752 173.912 87.1752C175.036 87.1752 175.838 87.095 177.442 86.8543C177.122 91.1064 176.801 100.172 176.801 106.189C176.801 112.287 177.122 114.533 178.245 116.539C179.849 119.507 182.738 121.192 186.187 121.192C190.52 121.192 193.97 118.625 195.414 114.453C196.216 111.966 196.216 111.966 196.296 99.5304L196.216 93.7539C196.136 89.582 196.055 88.9402 195.895 86.8543C197.339 87.095 198.061 87.1752 199.265 87.1752C200.388 87.1752 201.19 87.095 202.714 86.8543C202.393 91.3471 202.153 99.5304 202.153 106.751C202.153 116.378 202.313 121.032 202.714 124.321C201.03 124.08 200.308 124 199.345 124C198.462 124 197.74 124.08 196.296 124.321C196.457 122.556 196.457 121.914 196.537 117.261C194.05 122.395 189.316 125.364 183.54 125.364C179.93 125.364 176.72 124.16 174.394 121.834C171.827 119.427 170.703 116.378 170.703 111.805C170.703 110.682 170.784 108.275 170.864 105.628ZM214.832 95.1178H214.03C214.19 93.9946 214.27 93.5132 214.27 92.8714C214.27 92.2296 214.19 91.7482 214.03 90.625C218.603 87.5763 222.373 86.2927 226.866 86.2927C234.889 86.2927 239.703 90.8657 239.703 98.5676C239.703 100.012 239.623 101.777 239.542 103.863C239.462 106.911 239.382 108.997 239.382 112.046C239.382 116.94 239.462 118.785 239.783 119.748C240.184 121.112 241.147 121.834 242.511 121.834C242.992 121.834 243.393 121.754 244.196 121.673V123.198C242.029 124.08 240.585 124.401 238.901 124.401C235.691 124.401 233.926 122.877 233.445 119.668C229.915 123.519 225.984 125.364 221.331 125.364C214.672 125.364 210.5 121.593 210.5 115.576C210.5 112.206 211.783 109.318 214.03 107.714C216.116 106.189 218.442 105.387 223.978 104.505C229.754 103.542 231.52 102.98 233.605 101.616V101.456C233.605 97.1235 233.605 96.8828 232.964 95.0376C231.84 91.5878 228.631 89.5018 224.62 89.5018C220.448 89.5018 216.838 91.5075 214.832 95.1178ZM233.686 104.825L232.803 104.986C222.614 107.232 222.293 107.313 220.689 108.195C218.202 109.559 216.998 111.725 216.998 114.774C216.998 119.026 219.967 121.994 224.219 121.994C227.749 121.994 231.359 119.828 233.445 116.459C233.445 114.373 233.445 113.891 233.525 112.287V110.361L233.686 105.547V104.825ZM257.225 76.3444L257.465 76.6653L257.385 77.628L257.064 82.2813C256.904 83.8056 256.904 85.2497 256.823 87.6566L265.488 87.4961C265.247 88.3786 265.167 88.7798 265.167 89.1809C265.167 89.582 265.247 89.9832 265.488 90.7052H264.525H261.316H257.626H256.904C256.743 93.1121 256.743 93.1923 256.583 103.943V111.003C256.583 116.057 256.743 117.582 257.626 119.427C258.588 121.352 260.434 122.476 262.921 122.476C264.124 122.476 265.007 122.315 266.451 121.914V123.759C263.242 124.722 261.717 125.043 259.631 125.043C254.015 125.043 250.485 121.272 250.485 115.335C250.485 114.613 250.566 112.447 250.646 110.281C250.806 107.232 250.967 98.0862 250.967 93.5132C250.967 91.9087 250.967 91.668 250.887 90.7052C247.998 90.7052 246.634 90.7855 245.752 90.8657C245.912 90.2239 245.993 89.903 245.993 89.3414C245.993 88.7798 245.912 88.3786 245.752 87.7368H251.047V86.6938C251.047 85.4904 250.806 81.7999 250.566 79.0721C252.732 78.5908 255.139 77.5478 257.225 76.3444ZM300.585 116.539L301.066 116.699L300.906 117.421C300.505 118.785 300.424 119.106 300.424 120.711C295.45 124.241 292.161 125.364 286.786 125.364C275.233 125.364 267.932 117.903 267.932 106.109C267.932 100.012 269.617 95.0376 272.986 91.4273C276.195 87.8973 280.448 86.2927 286.384 86.2927C296.573 86.2927 302.43 92.39 302.43 102.98C302.43 103.542 302.43 104.505 302.35 105.467C299.783 105.307 296.012 105.227 289.273 105.227C284.298 105.227 280.367 105.307 274.912 105.467V107.232C274.912 116.218 280.207 122.155 288.23 122.155C293.124 122.155 297.295 120.229 300.585 116.539ZM296.092 102.178C295.851 98.5676 295.53 96.5619 294.808 94.7969C293.284 90.8657 290.316 88.7798 286.224 88.7798C279.966 88.7798 275.554 94.0748 274.992 102.338C277.399 102.419 281.089 102.499 287.267 102.499C292.562 102.499 293.364 102.499 296.092 102.178ZM354.785 79.4733H353.983C352.459 75.0607 348.528 72.2527 343.955 72.2527C338.339 72.2527 334.086 76.4246 334.086 81.8801C334.086 84.6881 335.37 87.4159 337.616 89.1007C339.542 90.4646 341.949 91.7482 346.682 93.6737C352.058 95.9201 353.582 96.8026 355.507 98.7281C357.914 101.055 359.118 104.103 359.118 107.794C359.118 117.742 350.854 125.364 340.104 125.364C334.969 125.364 330.316 123.84 326.625 120.871C327.748 117.421 327.989 116.138 328.23 113.731H329.032C331.198 118.544 336.333 121.834 341.548 121.834C348.046 121.834 352.86 117.1 352.86 110.522C352.86 107.714 351.897 105.467 350.052 103.702C348.126 101.937 346.923 101.295 341.307 98.9688C331.599 94.9573 327.989 90.9459 327.989 84.0463C327.989 75.1409 334.889 69.1238 344.917 69.1238C349.57 69.1238 353.101 70.247 356.951 72.8946C355.989 74.9805 355.186 77.5478 354.785 79.4733ZM367.368 94.5562V87.095C367.368 79.5535 367.127 70.0063 366.806 65.1926C368.331 65.4333 369.053 65.5135 370.577 65.5135C371.861 65.5135 372.422 65.4333 373.626 65.1926C373.305 72.012 373.225 77.9489 373.225 92.5505V94.2353C375.391 89.2611 380.124 86.2927 385.981 86.2927C389.591 86.2927 392.881 87.4961 395.287 89.6623C397.855 91.9889 398.978 94.8771 398.978 99.2897C398.978 100.493 398.898 102.499 398.817 104.665C398.737 107.393 398.657 110.04 398.657 112.206C398.657 117.341 398.817 121.192 399.058 124.321C396.491 124 396.17 124 395.448 124C394.646 124 393.924 124.08 392.239 124.321C392.56 121.032 392.881 109.398 392.881 102.178C392.881 98.1665 392.159 95.4387 390.714 93.5132C389.11 91.5075 386.382 90.2239 383.494 90.2239C379.723 90.2239 376.434 92.1494 374.749 95.3585C373.546 97.6851 373.225 100.252 373.225 106.831C373.225 114.292 373.385 120.63 373.626 124.321C371.54 124.08 370.978 124 370.176 124C369.374 124 368.732 124.08 366.806 124.321C367.208 118.304 367.368 110.843 367.368 94.5562ZM426.585 86.2927C438.379 86.2927 445.278 93.6737 445.278 106.27C445.278 117.662 437.577 125.364 426.024 125.364C414.391 125.364 406.849 117.742 406.849 105.868C406.849 93.7539 414.391 86.2927 426.585 86.2927ZM426.104 88.7798C418.402 88.7798 413.829 95.198 413.829 105.788C413.829 116.459 418.482 122.877 426.104 122.877C433.565 122.877 438.299 116.378 438.299 106.109C438.299 94.8771 434.047 88.7798 426.104 88.7798ZM454.633 86.8543L454.954 87.817C457.922 98.2467 460.409 105.307 464.501 115.576C467.148 109.479 472.443 94.3957 474.449 86.8543C475.652 87.095 476.214 87.1752 476.856 87.1752C477.498 87.1752 478.059 87.095 479.182 86.8543C480.306 91.9889 484.879 105.628 488.97 115.576C491.457 109.559 492.661 106.51 495.068 100.092C495.87 97.9258 496.752 95.5992 497.555 93.3528C499.24 88.86 499.48 88.2984 499.962 86.8543C501.325 87.095 501.727 87.1752 502.288 87.1752C502.529 87.1752 503.411 87.095 504.775 86.8543C498.838 99.1292 491.618 116.057 488.97 124.321C488.168 124.08 487.767 124 487.125 124C486.563 124 486.082 124.08 485.36 124.321C483.435 117.181 478.781 103.782 475.332 95.2783C473.807 98.7281 468.833 112.447 464.902 124.321C463.939 124.08 463.538 124 462.976 124C462.415 124 462.014 124.08 461.051 124.321C457.761 113.41 454.713 105.066 447.332 86.8543C449.017 87.095 449.739 87.1752 450.701 87.1752C451.183 87.1752 452.466 87.095 454.633 86.8543Z"
              fill="white"
            />
          </svg>
        </h1>
      </FadeIn>
      <FadeIn className={style.topInfoContainer} delay={4.5}>
        <p className={style.topInfoContainerText}>
          {`ICHIGAYA CAMPUS,\nMUSASHINO ART UNIV.`}
        </p>
        <p className={style.topInfoContainerText}>{`2024/01/02 - 01/21`}</p>
        <p className={style.topInfoContainerText}>{`10:00 - 20:00 OPEN`}</p>
        <div className={style.topInfoLinkContainer}>
          <a className={style.topInfoLink}>
            ACCESS & OVERVIEW<span>↓</span>
          </a>
        </div>
      </FadeIn>

      <div className={style.topVisualContainer}>{children}</div>
    </header>
  );
};
