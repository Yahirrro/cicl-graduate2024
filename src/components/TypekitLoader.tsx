/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect } from "react";

const TypekitLoader: React.FC = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      (function (d: Document) {
        const config = {
          kitId: `mmd2yxr`,
          scriptTimeout: 3000,
          async: true,
        };
        const h = d.documentElement;
        const t = setTimeout(() => {
          h.className =
            h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
        }, config.scriptTimeout);
        const tk = d.createElement("script");

        h.className += "wf-loading";
        tk.src = `https://use.typekit.net/${config.kitId}.js`;
        tk.async = true;
        tk.onload = function () {
          clearTimeout(t);
          try {
            (window as never as any).Typekit.load(config);
          } catch {}
        };
        tk.onerror = function () {
          clearTimeout(t);
        };

        const s = d.getElementsByTagName("script")[0];
        s.parentNode!.insertBefore(tk, s);
      })(document);
    }
  }, []);

  return null;
};

export default TypekitLoader;
