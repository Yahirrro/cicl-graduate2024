"use client";

import { useRef } from "react";
import { css, cx, sva } from "../../styled-system/css";
import { TopSectionInnerLink } from "./TopSectionInnerLink";
import { FadeIn } from "./util/FadeIn";
import { useInView } from "framer-motion";
import { VisualViewer } from "./VisualViewer";

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

      mdDown: {
        height: "100svh",
        px: "20px",
        pt: "20px",
        pb: "20px",
        gridTemplateColumns: "repeat(2, 1fr)",
      },
    },
    topHeaderContainer: {
      display: "grid",
      gridColumn: "1 / span 5",
      gridRow: "1 / span 1",
      gridTemplateColumns: "subgrid",
      mb: "82px",
      textStyle: "extraSmall",
      alignContent: "end",
      mdDown: {
        gridColumn: "span 2",
      },
    },
    topHeaderContainerTitle: {
      gridColumn: "1 / span 2",
      whiteSpace: "pre",
      textStyle: "extraSmall",
      mdDown: {
        display: "none",
      },
    },
    topHeaderContainerSubtitle: {
      gridColumn: "4 / span 2",
      textAlign: "right",
      whiteSpace: "pre",
      mdDown: {
        gridColumn: "1 / span 2",
        fontSize: "11px",
        textAlign: "left",
        letterSpacing: "-0.01rem",
      },
    },
    topTitleContainer: {
      display: "grid",
      gridTemplateColumns: "subgrid",
      gridColumn: "1 / span 5",
      mb: "64px",
      alignContent: "end",
      mdDown: {
        gridColumn: "1 / span 2",
        mb: "32px",
      },
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
      mdDown: {
        gridColumn: "1 / span 2",
        gap: "24px",
      },
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
      mdDown: {
        display: "none",
      },
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
      cursor: "pointer",
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

export const TopSection: React.FC<{}> = () => {
  const style = topSectionStyles();
  const ref = useRef<any>();
  const isInView = useInView(ref, {
    margin: "128px 0px",
  });

  return (
    <header className={style.container} ref={ref}>
      <FadeIn className={style.topHeaderContainer} delay={4.5}>
        <p className={style.topHeaderContainerTitle}>
          {`MUSASHINO ART UNIV\nINSTITUTE OF INNOVATION`}
        </p>
        <p className={style.topHeaderContainerSubtitle}>
          {`武蔵野美術大学造形構想学部クリエイティブイノベーション学科\n造形構想研究科造形構想専攻クリエイティブリーダーシップコース`}
        </p>
      </FadeIn>
      <FadeIn className={style.topTitleContainer} delay={3} duration={3}>
        <h1 className={style.topTitleContainerText}>
          <span>武蔵野美術大学 Institute of Innovation 卒業・修了展 2024</span>
          <svg
            viewBox="0 0 505 159"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.2472 21.766C16.7669 18.7912 16.0386 15.7634 15.5649 10.6738H12.018V13.678H15.1741V16.9592H12.018V20.2698C13.1608 20.1049 15.1504 19.7985 16.5478 19.5747L16.7432 22.9383C12.7167 23.9692 6.96124 24.9942 1.98735 25.6068L0.862305 21.6011L3.18345 21.3537V12.818H6.78952V20.9649C7.32244 20.9119 7.99154 20.8235 8.35274 20.7705V10.6797H1.11692V7.20411H15.3399C15.257 5.37209 15.1978 2.83907 15.1978 1.06006H19.0288C19.0288 3.14538 19.0821 5.31318 19.1946 7.06273H25.5127V10.5383H19.4493C19.6447 12.6236 19.8933 14.2907 20.1776 15.516C20.6217 17.5188 21.8829 20.4642 22.3033 20.4642C22.5816 20.4642 22.8362 19.4333 23.1974 16.8473L26.2706 19.0975C25.3469 23.8808 24.2573 25.8542 22.5283 25.8542C21.1309 25.8542 19.5677 24.3521 18.2531 21.766H18.2472ZM3.37886 2.47384H13.8299V5.72553H3.37886V2.47384ZM19.7572 2.63878L22.7178 1.30158C23.8902 2.77427 24.6481 3.97009 25.3173 5.44278L21.9895 6.94492C21.4329 5.41332 20.7046 4.02311 19.7512 2.63878H19.7572Z"
              fill="white"
            />
            <path
              d="M42.6346 24.217H37.4949V25.2185H34.5047V12.4827H44.1445V14.7329H41.5747V15.9818H44.0616V20.4293H41.5747V21.737H44.3103V22.0434C44.8136 21.6251 45.4827 20.93 46.1814 20.07C45.3702 18.0671 44.7307 14.786 44.5353 11.5637H33.6638V14.0378C33.6638 20.3468 33.1072 23.3806 31.4019 26.214L28.2991 23.1567C29.5841 21.1008 30.0045 18.7092 30.0045 13.5371V8.55943H44.3399L44.2866 7.52855H43.4754V5.99695H38.8627V7.82898H35.0316V5.99695H29.0215V2.89253H35.0316V1.05461H38.8627V2.89253H43.4754V1.05461H47.3302V2.89253H53.4232V6.00873H47.3302V7.23401H47.7802L47.8335 8.42983H49.2842C49.1184 8.01159 48.9763 7.73472 48.5855 7.01016L51.3211 6.31505C51.7948 7.03961 52.1323 7.67582 52.4106 8.42983H53.6423V11.4341H47.9697C48.0526 13.2661 48.2776 15.0216 48.6092 16.3529C49.225 15.0157 49.6158 13.9907 49.977 12.5416L53.0798 13.6255C52.2152 16.0996 51.2915 18.1319 50.0895 20.1289C50.3382 20.659 50.8415 21.2422 51.0369 21.2422C51.3448 21.2422 51.5698 20.5177 51.8185 18.6267L54.3351 20.4882C53.9443 23.9932 53.0501 25.8252 51.706 25.8252C51.2027 25.8252 50.6461 25.6308 49.9474 25.2126C49.2783 24.8532 48.55 24.1581 47.8809 23.2392C46.8742 24.4645 46.0334 25.3245 44.7781 26.4084L42.6287 24.2112L42.6346 24.217ZM39.1173 15.9877V14.7388H37.4949V15.9877H39.1173ZM41.3497 18.8211V17.6253H37.4949V18.8211H41.3497ZM39.1173 21.7429V20.4352H37.4949V21.7429H39.1173Z"
              fill="white"
            />
            <path
              d="M57.1007 22.0729C58.8061 21.9315 60.6476 21.7666 62.3293 21.5427V19.2924H57.8291V16.0113H62.3293V14.4267H57.9949V1.94418H70.1217V14.4267H65.7873V16.0113H70.3171V19.2924H65.7873V21.1009C67.3801 20.9065 68.973 20.6591 70.7316 20.3233L70.927 23.4631C66.4268 24.494 61.8733 25.3246 58.1015 25.8253L57.0948 22.0729H57.1007ZM62.5187 6.86885V5.00737H60.7601V6.86885H62.5187ZM62.5187 11.4519V9.53147H60.7601V11.4519H62.5187ZM67.4097 6.86885V5.00737H65.5919V6.86885H67.4097ZM67.4097 11.4519V9.53147H65.5919V11.4519H67.4097ZM71.9928 25.9961L71.377 22.1848C72.0224 22.2967 72.8277 22.3497 73.4731 22.3497C74.0061 22.3497 74.1718 22.1848 74.1718 21.6841V14.3148H70.7079V10.6978H75.8239C74.7048 9.61394 73.562 8.66553 72.1053 7.64054L74.2547 5.66714C75.1489 6.19731 75.4568 6.41526 76.268 7.00434C76.8542 6.30923 77.245 5.80852 77.6121 5.25479H71.2112V1.94418H80.7149L82.4202 3.61127C81.1057 5.66714 79.9037 7.19873 78.4529 8.67142L79.5129 9.6434L78.3108 10.6978H81.7511L83.0064 11.9231C82.361 15.4517 81.9702 17.319 81.4432 19.1805L78.3108 18.6504C78.8141 17.0657 79.1517 15.6755 79.4004 14.3148H77.7779V23.575C77.7779 25.5484 77.1621 26.1316 75.1252 26.1316C74.0889 26.1316 72.9757 26.0786 71.9928 25.9902V25.9961Z"
              fill="white"
            />
            <path
              d="M85.7661 22.9912C91.3558 22.1017 93.9848 21.1003 95.3527 19.4037H86.7194V16.3759H96.4422V15.0681H86.074V12.0639H96.4422V10.7856H88.5609V8.00513H96.4422V6.77985H87.0806V3.83447H92.5045C92.0012 3.0569 91.64 2.55618 91.0775 1.94354L94.9619 1.08349C95.7139 2.00245 96.2468 2.75058 96.8626 3.83447H100.102C100.83 2.80359 101.304 1.973 101.807 0.889099L105.999 1.61366C105.36 2.61509 104.963 3.16882 104.46 3.84037H110.02V6.78574H100.492V8.01102H108.539V10.7915H100.492V12.0697H111.026V15.074H100.492V16.3818H110.387V19.4096H101.866C103.346 20.7704 106.727 21.8307 111.589 22.4375L109.522 26.1369C104.241 25.1649 100.694 23.4389 98.71 20.9118C97.0047 23.6627 93.1203 25.7186 87.9214 26.5846L85.772 22.9971L85.7661 22.9912Z"
              fill="white"
            />
            <path
              d="M116.132 16.7357C115.38 17.5132 115.013 17.8785 114.51 18.3203L113 14.6798C115.434 12.7358 117.441 10.2323 119.093 7.11607L121.136 8.1175V7.25745H124.18V1.19587H127.673V7.25745H131.167V9.007H138.906V12.6769H136.922V23.2685C136.922 25.0181 136.141 25.7721 134.382 25.7721C133.742 25.7721 132.369 25.7191 131.25 25.6307L130.243 21.9077C130.971 22.0491 131.782 22.1021 132.534 22.1021C133.204 22.1021 133.399 21.9372 133.399 21.3776V12.6769H130.995V10.9274H127.667V25.3538H124.174V10.9274H121.13V10.2617C120.597 11.2043 120.183 11.8463 119.62 12.5709V26.0843H116.127V16.7416L116.132 16.7357ZM113.397 6.67427C115.298 5.36652 116.973 3.47559 118.317 1.08394L121.669 2.58608C119.656 5.75531 117.506 8.25888 115.215 9.97898L113.397 6.66838V6.67427ZM119.904 21.8253C120.491 19.2687 120.798 16.3469 120.911 12.512L123.759 12.9833C123.676 17.0714 123.368 20.7944 122.895 23.0447L119.904 21.8194V21.8253ZM127.786 2.39169L130.19 1.7496C130.723 2.94542 131.25 4.69497 131.557 6.30904L128.988 7.08662C128.763 5.6964 128.401 4.19426 127.786 2.3858V2.39169ZM127.981 12.8713L130.776 12.2587C131.392 14.7623 131.812 17.2364 132.12 20.0993L129.017 21.2657C128.875 18.2614 128.544 15.5929 127.981 12.8713ZM131.534 2.05592H138.243V5.6964H131.534V2.05592Z"
              fill="white"
            />
            <path
              d="M141.665 22.0726C147.699 19.8754 150.778 16.5707 151.868 11.0923H142.116V7.17491H152.146V1.50212H156.309V7.17491H166.511V11.0923H156.895C158.127 15.6517 161.62 19.1567 167.151 21.3775L164.468 25.2949C159.802 22.8502 155.806 18.8739 154.55 15.3984C153.04 19.9284 149.351 23.7103 144.348 25.7426L141.665 22.0726Z"
              fill="white"
            />
            <path
              d="M175.971 25.7722L175.272 22.2437C176.64 22.4911 177.955 22.6325 179.157 22.6325C179.802 22.6325 179.938 22.4675 179.938 21.796V19.5162H169.013V16.0407H179.855V15.0098C181.111 14.4561 182.289 13.8435 183.319 13.2014H174.378V10.0321H187.902L189.3 12.1175C187.565 13.6196 185.836 14.8684 183.876 16.0348H194.161V19.5104H183.763V23.2922C183.763 25.2951 182.869 26.0196 180.353 26.0196C179.038 26.0196 177.333 25.9077 175.965 25.7722H175.971ZM169.819 5.44913H174.011C173.454 4.33578 173.034 3.61711 172.306 2.61568L175.687 1.30794C176.498 2.16798 177.25 3.25188 178.061 4.73046L176.19 5.45502H180.134C179.772 4.4536 179.21 3.45217 178.286 2.17388L181.863 0.9486C182.704 1.95003 183.343 3.03393 184.042 4.58908L181.638 5.44913H184.77C185.806 3.86452 186.558 2.4743 187.115 1.03107L190.97 2.14442C190.241 3.3697 189.602 4.31222 188.731 5.45502H193.344V12.0468H189.602V8.62425H173.508V12.0468H169.819V5.44913Z"
              fill="white"
            />
            <path
              d="M0.862305 87.9847V53.5478H8.22999V87.9847H0.862305Z"
              fill="white"
            />
            <path
              d="M31.435 87.9841V72.9106C31.435 69.4489 29.6206 68.2612 26.8165 68.2612C24.2244 68.2612 22.1979 69.7068 21.1061 71.2071V87.9841H14.5161V63.0491H21.1061V66.2998C22.7163 64.3931 25.7797 62.424 29.8798 62.424C35.3781 62.424 38.0251 65.5184 38.0251 70.371V87.9763H31.435V87.9841Z"
              fill="white"
            />
            <path
              d="M44.7477 80.1387C46.5622 81.8422 50.301 83.5457 53.4114 83.5457C56.2627 83.5457 57.6137 82.5611 57.6137 81.0139C57.6137 79.2557 55.438 78.6384 52.5788 78.068C48.2745 77.2397 42.7212 76.2082 42.7212 70.2695C42.7212 66.0889 46.4051 62.424 52.9951 62.424C57.2524 62.424 60.622 63.8697 63.0648 65.831L60.4728 70.3242C58.9647 68.7223 56.1135 67.4329 53.0501 67.4329C50.6623 67.4329 49.1071 68.3081 49.1071 69.7537C49.1071 71.3009 51.0786 71.8714 53.8827 72.4418C58.1871 73.2701 63.9524 74.4032 63.9524 80.5998C63.9524 85.1945 60.0565 88.6015 53.1051 88.6015C48.7458 88.6015 44.5435 87.1559 41.8965 84.7257L44.7477 80.1309V80.1387Z"
              fill="white"
            />
            <path
              d="M71.5278 81.7957V68.7851H67.3727V63.0573H71.5278V56.2434H78.1729V63.0573H83.2548V68.7851H78.1729V80.0375C78.1729 81.5847 79.0055 82.7725 80.4586 82.7725C81.4404 82.7725 82.3751 82.413 82.7443 82.0536L84.1424 87.0077C83.1606 87.8829 81.3933 88.6096 78.6441 88.6096C74.0256 88.6096 71.5357 86.2341 71.5357 81.7957H71.5278Z"
              fill="white"
            />
            <path
              d="M87.9838 55.462C87.9838 53.2975 89.7983 51.5393 91.9269 51.5393C94.0555 51.5393 95.8699 53.2975 95.8699 55.462C95.8699 57.6265 94.1026 59.3847 91.9269 59.3847C89.7511 59.3847 87.9838 57.6265 87.9838 55.462ZM88.6593 87.9845V63.0495H95.2494V87.9845H88.6593Z"
              fill="white"
            />
            <path
              d="M105.092 81.7957V68.7851H100.937V63.0573H105.092V56.2434H111.737V63.0573H116.827V68.7851H111.737V80.0375C111.737 81.5847 112.569 82.7725 114.022 82.7725C115.012 82.7725 115.947 82.413 116.308 82.0536L117.706 87.0077C116.717 87.8829 114.957 88.6096 112.208 88.6096C107.589 88.6096 105.1 86.2341 105.1 81.7957H105.092Z"
              fill="white"
            />
            <path
              d="M138.513 84.8349C136.801 86.7416 133.793 88.6013 129.692 88.6013C124.194 88.6013 121.594 85.6085 121.594 80.7559V63.049H128.184V78.1773C128.184 81.6389 129.999 82.772 132.803 82.772C135.348 82.772 137.366 81.3811 138.513 79.9354V63.0569H145.103V87.9918H138.513V84.8349Z"
              fill="white"
            />
            <path
              d="M153.902 81.7957V68.7851H149.747V63.0573H153.902V56.2434H160.547V63.0573H165.637V68.7851H160.547V80.0375C160.547 81.5847 161.38 82.7725 162.833 82.7725C163.823 82.7725 164.757 82.413 165.119 82.0536L166.517 87.0077C165.527 87.8829 163.768 88.6096 161.018 88.6096C156.4 88.6096 153.91 86.2341 153.91 81.7957H153.902Z"
              fill="white"
            />
            <path
              d="M181.601 62.4323C189.071 62.4323 194.161 68.0117 194.161 76.1618V77.6074H175.53C175.946 80.7566 178.491 83.3899 182.74 83.3899C185.073 83.3899 187.83 82.46 189.432 80.9128L192.339 85.1481C189.794 87.4689 185.906 88.6098 182.01 88.6098C174.383 88.6098 168.618 83.4993 168.618 75.4976C168.618 68.2695 173.959 62.4323 181.594 62.4323H181.601ZM175.428 73.169H187.775C187.618 70.7935 185.961 67.6444 181.601 67.6444C177.501 67.6444 175.734 70.6919 175.428 73.169Z"
              fill="white"
            />
            <path
              d="M204.877 75.4893C204.877 68.4175 209.857 62.424 218.112 62.424C226.368 62.424 231.395 68.4097 231.395 75.4893C231.395 82.5689 226.415 88.6015 218.112 88.6015C209.81 88.6015 204.877 82.6158 204.877 75.4893ZM224.545 75.4893C224.545 71.6135 222.212 68.2612 218.112 68.2612C214.012 68.2612 211.726 71.6135 211.726 75.4893C211.726 79.3651 214.012 82.7721 218.112 82.7721C222.212 82.7721 224.545 79.4198 224.545 75.4893Z"
              fill="white"
            />
            <path
              d="M244.058 68.7853V87.9925H237.413V68.7853H233.258V63.0575H237.413V61.7135C237.413 56.2905 240.94 53.0398 245.873 53.0398C247.742 53.0398 249.454 53.4539 250.648 54.0712L249.297 58.7207C248.724 58.3612 247.946 58.2049 247.169 58.2049C245.299 58.2049 244.058 59.4474 244.058 61.8151V63.0575H249.14V68.7853H244.058Z"
              fill="white"
            />
            <path d="M265 87.9846V53.5476H272.368V87.9846H265Z" fill="white" />
            <path
              d="M294.868 87.9842V72.9106C294.868 69.449 293.053 68.2612 290.249 68.2612C287.657 68.2612 285.63 69.7068 284.539 71.2072V87.9842H277.949V63.0492H284.539V66.2999C286.149 64.3932 289.212 62.424 293.312 62.424C298.811 62.424 301.458 65.5184 301.458 70.371V87.9763H294.868V87.9842Z"
              fill="white"
            />
            <path
              d="M323.958 87.9842V72.9106C323.958 69.449 322.143 68.2612 319.339 68.2612C316.747 68.2612 314.72 69.7068 313.629 71.2072V87.9842H307.039V63.0492H313.629V66.2999C315.239 64.3932 318.302 62.424 322.402 62.424C327.901 62.424 330.548 65.5184 330.548 70.371V87.9763H323.958V87.9842Z"
              fill="white"
            />
            <path
              d="M334.435 75.4893C334.435 68.4175 339.415 62.424 347.67 62.424C355.925 62.424 360.952 68.4097 360.952 75.4893C360.952 82.5689 355.973 88.6015 347.67 88.6015C339.368 88.6015 334.435 82.6158 334.435 75.4893ZM354.103 75.4893C354.103 71.6135 351.77 68.2612 347.67 68.2612C343.57 68.2612 341.284 71.6135 341.284 75.4893C341.284 79.3651 343.57 82.7721 347.67 82.7721C351.77 82.7721 354.103 79.4198 354.103 75.4893Z"
              fill="white"
            />
            <path
              d="M372.319 87.984L362.249 63.049H369.31L375.853 80.3965L382.396 63.049H389.505L379.435 87.984H372.319Z"
              fill="white"
            />
            <path
              d="M407.5 85.4055C405.787 87.4215 402.826 88.6093 399.559 88.6093C395.561 88.6093 390.84 85.9212 390.84 80.3497C390.84 74.7782 395.561 72.4027 399.559 72.4027C402.881 72.4027 405.842 73.4342 407.5 75.4502V71.9886C407.5 69.4568 405.316 67.808 402.001 67.808C399.299 67.808 396.809 68.7926 394.681 70.7539L392.191 66.3624C395.254 63.6743 399.197 62.4397 403.14 62.4397C408.851 62.4397 414.09 64.7136 414.09 71.887V87.992H407.5V85.4055ZM407.5 78.9041C406.408 77.4585 404.334 76.7396 402.206 76.7396C399.614 76.7396 397.485 78.1305 397.485 80.506C397.485 82.8815 399.614 84.1709 402.206 84.1709C404.334 84.1709 406.408 83.4519 407.5 82.0063V78.9041Z"
              fill="white"
            />
            <path
              d="M421.921 81.7957V68.7851H417.766V63.0573H421.921V56.2434H428.566V63.0573H433.648V68.7851H428.566V80.0375C428.566 81.5847 429.398 82.7725 430.852 82.7725C431.833 82.7725 432.768 82.413 433.137 82.0536L434.535 87.0077C433.554 87.8829 431.786 88.6096 429.037 88.6096C424.419 88.6096 421.929 86.2341 421.929 81.7957H421.921Z"
              fill="white"
            />
            <path
              d="M438.533 55.462C438.533 53.2975 440.348 51.5393 442.476 51.5393C444.605 51.5393 446.419 53.2975 446.419 55.462C446.419 57.6265 444.652 59.3847 442.476 59.3847C440.3 59.3847 438.533 57.6265 438.533 55.462ZM439.201 87.9845V63.0495H445.791V87.9845H439.201Z"
              fill="white"
            />
            <path
              d="M450.724 75.4893C450.724 68.4175 455.704 62.424 463.959 62.424C472.214 62.424 477.241 68.4097 477.241 75.4893C477.241 82.5689 472.261 88.6015 463.959 88.6015C455.656 88.6015 450.724 82.6158 450.724 75.4893ZM470.392 75.4893C470.392 71.6135 468.059 68.2612 463.959 68.2612C459.859 68.2612 457.573 71.6135 457.573 75.4893C457.573 79.3651 459.859 82.7721 463.959 82.7721C468.059 82.7721 470.392 79.4198 470.392 75.4893Z"
              fill="white"
            />
            <path
              d="M498.001 87.9842V72.9106C498.001 69.449 496.187 68.2612 493.382 68.2612C490.79 68.2612 488.764 69.7068 487.672 71.2072V87.9842H481.082V63.0492H487.672V66.2999C489.282 64.3932 492.346 62.424 496.446 62.424C501.944 62.424 504.591 65.5184 504.591 70.371V87.9763H498.001V87.9842Z"
              fill="white"
            />
            <path
              d="M18.1493 148.494H1V142.456H18.1493V139.915L17.6385 140.472C15.8313 138.674 14.2499 137.287 12.5409 136.046C10.822 138.4 8.9755 140.384 7.07002 141.811L2.43402 137.941C6.42177 134.756 9.11301 131.072 10.822 126.548H2.66975V120.734H18.1493V115.887H25.0542V120.734H40.8186V126.548H29.2286L33.7663 127.935C33.3047 129.137 33.069 129.645 32.2832 131.258C35.2986 132.684 37.98 134.121 41.0445 136.055L36.7326 141.039C34.5128 139.192 32.3323 137.668 29.5036 135.967C27.7847 138.322 26.9498 139.29 25.84 140.257L25.0542 139.7V142.465H42.4883V148.504H25.0542V157.406H18.1493V148.494ZM27.7945 126.538H12.5016L16.9019 127.926C16.4894 129.079 15.9786 130.232 15.3697 131.433C18.8467 133.554 20.1923 134.384 21.862 135.674C24.5042 133.046 26.6847 129.675 27.7945 126.548V126.538ZM24.5926 139.358L21.0664 136.915L18.7484 139.358H24.5926Z"
              fill="white"
            />
            <path
              d="M64.7565 148.719C60.7688 152.55 56.4078 155.129 50.3378 157.347L46.5367 151.905C52.2334 150.566 57.2427 148.495 61.1813 145.905H47.7349V141.156H64.7467V139.544H51.487V135.577H64.7467V134.013H50.1413V129.958H59.1383C58.5785 128.893 58.2151 128.248 57.6552 127.418H48.3341V122.757H53.9425C53.1076 121.096 52.2727 119.806 50.9271 118.145L56.5846 116.161C57.9302 117.871 58.8535 119.386 59.9732 121.604L56.9087 122.757H61.1224V115.887H66.5933V122.757H69.422V115.887H74.942V122.757H76.1501C77.3582 120.079 78.0065 118.467 78.7923 116.073L84.8623 117.685C83.9783 119.532 83.2417 120.959 82.1318 122.757H87.8777V127.418H78.1931C77.7806 128.336 77.3582 129.167 76.8475 129.958H86.0704V134.013H71.19V135.577H84.7248V139.544H71.19V141.156H88.5259V145.905H75.4036C78.8315 147.977 83.1925 149.599 89.5867 151.074L86.0606 156.888C79.7057 154.68 75.1188 152.002 71.1802 148.26V157.386H64.7369V148.719H64.7565ZM70.4533 129.958C71.0132 129.177 71.3766 128.434 71.8874 127.418H63.9119C64.4717 128.248 64.7467 128.805 65.2084 129.958H70.4533Z"
              fill="white"
            />
            <path
              d="M97.9561 136.544C97.9561 134.052 99.7633 131.932 102.543 131.932C105.323 131.932 107.13 134.052 107.13 136.544C107.13 139.036 105.273 141.156 102.543 141.156C99.8124 141.156 97.9561 139.085 97.9561 136.544Z"
              fill="white"
            />
            <path
              d="M119.811 138.674C119.212 139.739 118.652 140.609 117.729 141.947L115.499 135.029C118.603 129.86 120.832 123.225 122.08 115.614L128.15 116.718C127.364 120.04 126.529 122.805 125.459 125.942V157.396H119.801V138.674H119.811ZM127.138 124.095H132.511V125.014C134.78 122.473 136.636 119.063 137.559 115.565L143.168 116.806C142.755 118.008 142.706 118.193 142.146 119.571H156.752V124.183H153.51C152.263 126.675 150.819 128.883 149.149 130.73C151.742 131.883 155.406 132.899 158.657 133.407L155.828 139.123C152.587 138.205 148.639 136.309 145.26 134.14C141.832 136.72 138.168 138.615 134.74 139.534L132.521 135.801V151.435H127.148V124.085L127.138 124.095ZM141.085 131.013C140.113 130.134 138.767 128.658 137.658 127.281C136.312 128.991 135.477 129.909 134.456 130.74L132.511 127.974V134.336C135.801 133.642 139.042 132.401 141.085 131.013ZM133.159 153.38C141.321 152.276 148.874 148.866 154.483 143.745L158.795 146.696C152.95 152.413 145.073 156.429 136.361 158.178L133.159 153.38ZM133.719 141.205C138.443 140.237 142.431 138.391 145.721 135.625L149.012 138.488C145.672 141.625 140.85 144.156 136.312 145.172L133.719 141.205ZM134.74 147.019C140.26 146.003 146.055 143.188 150.367 139.407L154.031 142.221C149.307 146.599 143.649 149.598 137.206 151.074L134.75 147.019H134.74ZM147.303 124.193H140.997C142.019 125.619 143.315 127.056 144.523 127.974C145.584 126.909 146.517 125.668 147.303 124.193Z"
              fill="white"
            />
            <path
              d="M172.506 156.605L171.396 149.638C173.577 149.912 175.797 150.098 177.516 150.098C179.136 150.098 179.647 149.687 179.647 148.3V130.496C182.613 128.786 185.442 126.627 187.573 124.457H165.14V118.419H196.796L200.224 121.79C196.61 125.62 191.875 129.539 186.316 133.32V152.277C186.316 155.784 184.882 157.074 181.032 157.074C178.763 157.074 175.473 156.889 172.506 156.615V156.605Z"
              fill="white"
            />
            <path
              d="M212.432 151.67C213.964 151.533 215.585 151.347 216.832 151.161V143.227H213.768C213.168 148.621 211.774 153.096 209.318 157.523L203.985 152.676C206.814 147.282 207.835 142.67 207.835 135.009V117.02H243.528V129.01H236.388V131.453H243.479V135.83H236.388V138.547H245.66V143.208H239.914L244.088 146.022C242.605 147.36 241.21 148.416 239.403 149.666C241.26 150.546 243.253 151.191 246.73 151.924L243.303 157.415C236.957 155.48 233.156 153.36 229.856 149.94L230.092 154.366C224.061 155.793 218.551 156.907 213.777 157.552L212.432 151.65V151.67ZM237.282 124.554V121.974H214.102V124.554H237.282ZM218.836 131.472V129.029H214.111V131.472H218.836ZM218.836 138.576V135.859H214.111V138.576H218.836ZM229.119 149.139C227.685 147.429 226.477 145.445 225.554 143.237H222.961V150.292C224.493 150.106 226.674 149.696 229.129 149.139H229.119ZM230.465 131.472V129.029H224.758V131.472H230.465ZM230.465 138.576V135.859H224.758V138.576H230.465ZM238.254 143.237H231.948C232.685 144.624 233.755 145.914 234.914 146.882C236.349 145.592 237.232 144.576 238.254 143.237Z"
              fill="white"
            />
            <path
              d="M288.1 150.583V156.059H265.267V151.569L278.244 136.347C280.708 133.499 282.077 131.035 282.077 128.407C282.077 124.957 279.503 123.205 276.711 123.205C273.754 123.205 271.509 125.012 271.345 128.407H265.54C265.54 122 270.688 117.784 276.93 117.784C283.391 117.784 288.374 122.165 288.374 128.516C288.374 133.28 285.089 137.004 282.679 139.906L273.754 150.583H288.1Z"
              fill="white"
            />
            <path
              d="M319.61 144.998C319.61 152.828 314.025 156.552 307.728 156.552C301.431 156.552 295.846 152.828 295.846 144.998V129.392C295.846 121.343 301.431 117.784 307.728 117.784C314.025 117.784 319.61 121.343 319.61 129.338V144.998ZM313.258 129.721C313.258 125.669 311.123 123.314 307.728 123.314C304.278 123.314 302.143 125.669 302.143 129.721V144.615C302.143 148.667 304.278 151.021 307.728 151.021C311.123 151.021 313.258 148.667 313.258 144.615V129.721Z"
              fill="white"
            />
            <path
              d="M349.364 150.583V156.059H326.53V151.569L339.508 136.347C341.972 133.499 343.34 131.035 343.34 128.407C343.34 124.957 340.767 123.205 337.974 123.205C335.017 123.205 332.772 125.012 332.608 128.407H326.804C326.804 122 331.951 117.784 338.193 117.784C344.655 117.784 349.638 122.165 349.638 128.516C349.638 133.28 346.352 137.004 343.943 139.906L335.017 150.583H349.364Z"
              fill="white"
            />
            <path
              d="M367.764 118.277H374.499L362.398 144.834H371.269V134.54H377.62V144.834H381.07V150.364H377.62V156.059H371.269V150.364H354.677V145.874L367.764 118.277Z"
              fill="white"
            />
          </svg>
        </h1>
      </FadeIn>
      <FadeIn className={style.topInfoContainer} delay={4.5}>
        <p
          className={cx(
            style.topInfoContainerText,
            css({
              mdDown: {
                gridColumn: "1 / -1",
              },
            })
          )}
        >
          {`ICHIGAYA CAMPUS,\nMUSASHINO ART UNIV.`}
        </p>
        <p className={style.topInfoContainerText}>{`2024/01/31 - 02/02`}</p>
        <p className={style.topInfoContainerText}>{`10:00 - 20:00 OPEN`}</p>
        <div className={style.topInfoLinkContainer}>
          <TopSectionInnerLink className={style.topInfoLink} />
        </div>
      </FadeIn>

      <div className={style.topVisualContainer}>
        <VisualViewer isInView={isInView} />
      </div>
    </header>
  );
};
