import { cva } from "../../styled-system/css";

const visualViewerStyle = cva({
  base: {
    position: "relative",
    aspectRatio: "16 / 9",
    width: "100%",
    height: "100%",
    background: "rgba(5, 7, 64, 1)",

    "& iframe": {
      position: "relative",
      aspectRatio: "16 / 9",
      width: "100%",
      height: "100%",
    },
    "&:before": {
      content: '""',
      display: "block",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(5, 7, 64, 1)",
      zIndex: 1,
      mixBlendMode: "screen",
    },
  },
});

export const VisualViewer: React.FC = () => {
  const style = visualViewerStyle();
  return (
    <div className={style}>
      <iframe
        src="/assets/p5.html"
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
      />
    </div>
  );
};
