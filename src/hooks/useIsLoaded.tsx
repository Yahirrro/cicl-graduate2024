import { fontLoadingAtom } from "@/atom";
import { useAtom } from "jotai";
import { useEffect } from "react";

export const useIsLoaded = () => {
  const [fontLoaded, setFontLoaded] = useAtom(fontLoadingAtom);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!fontLoaded) {
        setFontLoaded(true);
      }
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [fontLoaded]);

  return fontLoaded;
};
