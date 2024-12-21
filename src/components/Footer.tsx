import Link from "next/link";
import { css, cx, sva } from "../../styled-system/css";

const footerStyles = sva({
  slots: [
    "wrapper",
    "container",
    "headerContainer",
    "footerContainer",
    "text",
    "textUppercase",
    "opacity50",
    "socialContainer",
    "mauLogoContainer",
    "licenseText",
  ],
  base: {
    wrapper: {
      background: "background",
      color: "rgba(255, 255, 255, 1)",
    },
    container: {
      display: "grid",
      gap: "0 24px",
      gridTemplateColumns: "repeat(5, 1fr)",
      px: "72px",
      pt: "64px",
      pb: "72px",
      maxWidth: "1980px",
      mx: "auto",
      mdDown: {
        px: "32px",
        gridTemplateColumns: "1fr",
        pt: "48px",
        pb: "42px",
      },
    },
    text: {
      gridColumn: "span 2",
      fontSize: "12px",
      lineHeight: "150%",
      fontWeight: "470",
      whiteSpace: "pre-line",
      mdDown: {
        gridColumn: "span 1",
      },
    },
    textUppercase: {
      textTransform: "uppercase",
      letterSpacing: "0.05rem",
    },
    opacity50: {
      opacity: 0.5,
    },
    headerContainer: {
      gridColumn: "1 / span 5",
      display: "grid",
      gap: "0 24px",
      gridTemplateColumns: "subgrid",
      mb: "128px",
      mdDown: {
        gridColumn: "span 1",
        gap: "24px",
        mb: "64px",
      },
    },
    socialContainer: {
      display: "grid",
      gridTemplateColumns: "24px 24px",
      gap: "24px",
      justifyContent: "flex-end",
      mdDown: {
        justifyContent: "flex-start",
      },
    },
    footerContainer: {
      display: "grid",
      gridColumn: "1 / span 5",
      gridTemplateColumns: "subgrid",
      mdDown: {
        gridColumn: "span 1",
        gap: "16px",
      },
    },
    mauLogoContainer: {
      display: "flex",
      justifyContent: "flex-end",
      "& svg": {
        width: "79px",
        height: "25px",
        mdDown: {
          height: "20px",
          width: "auto",
        },
      },
      mdDown: {
        justifyContent: "flex-start",
      },
    },
    licenseText: {
      "& span": {
        userSelect: "none",
        transform: "translateX(4px) rotate(45deg)",
        display: "inline-block",
      },
      mdDown: { mb: "32px" },
    },
  },
});

export const Footer: React.FC = () => {
  const style = footerStyles();
  return (
    <footer className={style.wrapper}>
      <div className={style.container}>
        <div className={style.headerContainer}>
          <p
            className={cx(style.text, style.textUppercase)}
          >{`Musashino Art Univ.\nInstitute of Innovation`}</p>
          <h2
            className={style.text}
          >{`武蔵野美術大学 Institute of Innovation 造形構想学部クリエイティブイノベーション学科\n大学院造形構想研究科造形構想専攻クリエイティブリーダーシップコース卒業制作展 2024`}</h2>

          <div className={style.socialContainer}>
            <a
              href="https://twitter.com/cicl_sotsuten"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.6">
                  <path
                    d="M17.6871 3.56299L12.6911 9.27399L8.37106 3.56299H2.11206L9.58906 13.339L2.50306 21.438H5.53706L11.0061 15.188L15.7861 21.438H21.8881L14.0941 11.134L20.7191 3.56299H17.6871ZM16.6231 19.623L5.65406 5.28199H7.45706L18.3031 19.622L16.6231 19.623Z"
                    fill="white"
                  />
                </g>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/cicl_sotsuten/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.6">
                  <path
                    d="M12.001 9.5C11.2054 9.5 10.4423 9.81607 9.87968 10.3787C9.31707 10.9413 9.001 11.7044 9.001 12.5C9.001 13.2956 9.31707 14.0587 9.87968 14.6213C10.4423 15.1839 11.2054 15.5 12.001 15.5C12.7966 15.5 13.5597 15.1839 14.1223 14.6213C14.6849 14.0587 15.001 13.2956 15.001 12.5C15.001 11.7044 14.6849 10.9413 14.1223 10.3787C13.5597 9.81607 12.7966 9.5 12.001 9.5ZM12.001 7.5C13.3271 7.5 14.5989 8.02678 15.5365 8.96447C16.4742 9.90215 17.001 11.1739 17.001 12.5C17.001 13.8261 16.4742 15.0979 15.5365 16.0355C14.5989 16.9732 13.3271 17.5 12.001 17.5C10.6749 17.5 9.40315 16.9732 8.46547 16.0355C7.52778 15.0979 7.001 13.8261 7.001 12.5C7.001 11.1739 7.52778 9.90215 8.46547 8.96447C9.40315 8.02678 10.6749 7.5 12.001 7.5ZM18.501 7.25C18.501 7.58152 18.3693 7.89946 18.1349 8.13388C17.9005 8.3683 17.5825 8.5 17.251 8.5C16.9195 8.5 16.6015 8.3683 16.3671 8.13388C16.1327 7.89946 16.001 7.58152 16.001 7.25C16.001 6.91848 16.1327 6.60054 16.3671 6.36612C16.6015 6.1317 16.9195 6 17.251 6C17.5825 6 17.9005 6.1317 18.1349 6.36612C18.3693 6.60054 18.501 6.91848 18.501 7.25ZM12.001 4.5C9.527 4.5 9.123 4.507 7.972 4.558C7.188 4.595 6.662 4.7 6.174 4.89C5.76583 5.04037 5.39672 5.28063 5.094 5.593C4.78127 5.89562 4.54066 6.26474 4.39 6.673C4.2 7.163 4.095 7.688 4.059 8.471C4.007 9.575 4 9.961 4 12.5C4 14.975 4.007 15.378 4.058 16.529C4.095 17.312 4.2 17.839 4.389 18.326C4.559 18.761 4.759 19.074 5.091 19.406C5.428 19.742 5.741 19.943 6.171 20.109C6.665 20.3 7.191 20.406 7.971 20.442C9.075 20.494 9.461 20.5 12 20.5C14.475 20.5 14.878 20.493 16.029 20.442C16.811 20.405 17.337 20.3 17.826 20.111C18.2342 19.9606 18.6033 19.7204 18.906 19.408C19.243 19.072 19.444 18.759 19.61 18.328C19.8 17.836 19.906 17.31 19.942 16.528C19.994 15.425 20 15.038 20 12.5C20 10.026 19.993 9.622 19.942 8.471C19.905 7.689 19.799 7.161 19.61 6.673C19.4596 6.26483 19.2194 5.89572 18.907 5.593C18.6044 5.28027 18.2353 5.03966 17.827 4.889C17.337 4.699 16.811 4.594 16.029 4.558C14.926 4.506 14.54 4.5 12 4.5M12 2.5C14.717 2.5 15.056 2.51 16.123 2.56C17.187 2.61 17.913 2.777 18.55 3.025C19.21 3.279 19.766 3.623 20.322 4.178C20.8307 4.67773 21.2242 5.28247 21.475 5.95C21.722 6.587 21.89 7.313 21.94 8.378C21.987 9.444 22 9.783 22 12.5C22 15.217 21.99 15.556 21.94 16.622C21.89 17.688 21.722 18.412 21.475 19.05C21.2242 19.7175 20.8307 20.3223 20.322 20.822C19.8223 21.3307 19.2175 21.7242 18.55 21.975C17.913 22.222 17.187 22.39 16.123 22.44C15.056 22.487 14.717 22.5 12 22.5C9.283 22.5 8.944 22.49 7.877 22.44C6.813 22.39 6.088 22.222 5.45 21.975C4.78247 21.7242 4.17773 21.3307 3.678 20.822C3.16931 20.3223 2.77582 19.7175 2.525 19.05C2.277 18.413 2.11 17.687 2.06 16.622C2.012 15.556 2 15.217 2 12.5C2 9.783 2.01 9.444 2.06 8.378C2.11 7.312 2.277 6.588 2.525 5.95C2.77582 5.28247 3.16931 4.67773 3.678 4.178C4.17773 3.66931 4.78247 3.27582 5.45 3.025C6.087 2.777 6.812 2.61 7.877 2.56C8.945 2.513 9.284 2.5 12.001 2.5"
                    fill="white"
                  />
                </g>
              </svg>
            </a>
          </div>
        </div>

        <div className={style.footerContainer}>
          <p
            className={cx(
              style.text,
              style.textUppercase,
              style.opacity50,
              css({
                mdDown: {
                  order: 1,
                },
              })
            )}
          >{`©︎ Musashino Art University`}</p>
          <p className={cx(style.text, style.opacity50, style.licenseText)}>
            <Link
              href={"https://github.com/Yahirrro/cicl-graduate2024"}
              target="_blank"
            >
              {`WebサイトのコードはMITライセンスおよび、CC by CC BY 4.0のライセンス条件(コモンズ証 - 表示 4.0 国際 - Creative Commons)のもと、GitHubにて公開されています。`}
              <span>↑</span>
            </Link>
          </p>
          <Link
            href={"https://www.musabi.ac.jp"}
            target="_blank"
            className={style.mauLogoContainer}
          >
            <svg
              viewBox="0 0 79 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.5" clipPath="url(#clip0_103_103)">
                <mask
                  id="mask0_103_103"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="79"
                  height="25"
                >
                  <path
                    d="M78.6521 0.5H0.000732422V24.494H78.6521V0.5Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_103_103)">
                  <path
                    d="M68.94 1.21826V14.0151C68.94 16.249 68.4411 17.7938 66.1222 17.7938C63.9875 17.7938 63.3583 16.1498 63.3583 13.981V1.21826H54.451V13.2138C54.6397 13.2385 54.788 13.3933 54.788 13.5895C54.788 13.8028 54.6173 13.9756 54.4016 13.9756C54.1903 13.9756 54.0151 13.8028 54.0151 13.5895C54.0151 13.445 54.1005 13.3233 54.2173 13.2573L49.876 1.21826H37.6116L33.0501 14.069C33.1714 14.1336 33.2568 14.258 33.2568 14.4061C33.2568 14.6194 33.086 14.7922 32.8703 14.7922C32.6591 14.7922 32.4838 14.6194 32.4838 14.4061C32.4838 14.2243 32.6142 14.078 32.7849 14.038V1.21826H19.6532L16.759 12.4254C16.9073 12.478 17.0196 12.6185 17.0196 12.7864C17.0196 12.9996 16.8444 13.1725 16.6331 13.1725C16.4174 13.1725 16.2467 12.9996 16.2467 12.7864C16.2467 12.6171 16.3545 12.478 16.5073 12.4254L13.5727 1.21826H0.41394V24.166H7.99099L7.98649 8.39491C7.80673 8.36169 7.67191 8.2113 7.67191 8.02275C7.67191 7.8095 7.84269 7.63711 8.05391 7.63711C8.26963 7.63711 8.4404 7.8095 8.4404 8.02275C8.4404 8.17853 8.35052 8.31141 8.2157 8.37202L12.6424 24.166H20.0576L24.6237 8.3819C24.4753 8.32757 24.3675 8.18885 24.3675 8.02275C24.3675 7.8095 24.5428 7.63711 24.754 7.63711C24.9697 7.63711 25.1405 7.8095 25.1405 8.02275C25.1405 8.22342 24.9877 8.38324 24.7899 8.4012L24.8079 24.166H38.3396L43.4449 8.24901C43.3101 8.18975 43.2157 8.05372 43.2157 7.89525C43.2157 7.68201 43.3865 7.50962 43.6022 7.50962C43.8135 7.50962 43.9842 7.68201 43.9842 7.89525C43.9842 8.05956 43.8809 8.19738 43.7371 8.2526L48.8109 24.166H58.1496L57.3991 22.0838C59.5024 23.8113 62.5673 24.5606 66.0188 24.5606C73.0386 24.5606 77.654 22.1242 77.654 14.6957V1.21826H68.94Z"
                    fill="white"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_103_103">
                  <rect
                    width="78.7097"
                    height="24"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
};
