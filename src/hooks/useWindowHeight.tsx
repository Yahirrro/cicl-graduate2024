import { useState, useEffect } from "react";

export const useWindowHeight = (): number => {
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return height;
};
