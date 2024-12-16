import { useState, useEffect } from "react";

export const useWindowHeight = (): number => {
  const [height, setHeight] = useState<number>(
    typeof window !== "undefined" ? window.innerHeight : 0
  );

  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight);
    };

    // 初回レンダー時にも念のため反映する
    handleResize();

    // リスナーを登録
    window.addEventListener("resize", handleResize);

    // クリーンアップ
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return height;
};
