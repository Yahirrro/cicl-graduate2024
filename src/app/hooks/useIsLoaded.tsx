import { useEffect, useState } from "react";

export const useIsLoaded = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      if (!isLoaded) {
        setIsLoaded(true);
        clearTimeout(timeout);
      }
    };

    const timeout = setTimeout(() => {
      if (!isLoaded) {
        setIsLoaded(true);
      }
    }, 3000);

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(timeout);
    };
  }, [isLoaded]);

  return isLoaded;
};
