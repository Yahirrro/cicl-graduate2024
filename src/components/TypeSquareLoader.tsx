"use client";

import { loadTypeSquare } from "@/app/utils/loadTypeSquare";
import Script from "next/script";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    Ts: any;
  }
}

export const TypeSquareLoader: React.FC = () => {
  const [fontLoading, setFontLoading] = useState(true);

  const isInjectTypeSquare = () => {
    if (typeof window === "undefined") return false;

    if (
      window.location.hostname.includes("pages.dev") &&
      window.location.hostname !== "cicl-graduate2024.pages.dev"
    ) {
      return false;
    }

    if (
      window.location.hostname === "localhost" &&
      window.location.port !== "3000"
    ) {
      return false;
    }

    return true;
  };

  useEffect(() => {
    if (isInjectTypeSquare()) {
      loadTypeSquare();
    }
  }, []);

  return (
    <>
      {isInjectTypeSquare() && (
        <Script
          type="text/javascript"
          src="//typesquare.com/3/tsst/script/ja/typesquare.js?6759c7288e3043c1ac4a2e06ac1e02e5&onLoad=false&apply_to_hidden=true&fadeIn=3000"
          strategy="afterInteractive"
          onLoad={() => {
            setFontLoading(true);
          }}
        ></Script>
      )}
    </>
  );
};
