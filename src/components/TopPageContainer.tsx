"use client";

import { useIsLoaded } from "@/app/hooks/useIsLoaded";
import { useEffect } from "react";

export const TopPageContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const isLoaded = useIsLoaded();

  useEffect(() => {
    let timeoutId: number;

    if (!isLoaded) {
      document.body.style.overflow = "hidden";
    } else {
      // Delay setting overflow to visible by 3 seconds
      timeoutId = window.setTimeout(() => {
        document.body.style.overflow = "visible";
      }, 3000);
    }

    // Cleanup timeout on unmount or when isLoaded changes
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isLoaded]);

  return children as React.ReactElement;
};
