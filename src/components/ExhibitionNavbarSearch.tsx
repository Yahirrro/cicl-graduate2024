"use client";

import { cx, sva } from "../../styled-system/css";
import { Search } from "lucide-react";
import { useAtom } from "jotai";
import { searchQueryAtom } from "@/atom/searchAtom";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

const exhibitionNavbarSearchStyles = sva({
  slots: ["wrapper", "icon", "input"],
  base: {
    wrapper: {
      position: "relative",
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
    },
    input: {
      position: "absolute",
      w: "100%",
      h: "100%",
      outline: "none",
      pl: "calc(24px + 24px)",
      fontSize: "20px",
      color: "rgba(0, 4, 128, 1)",
      mdDown: {
        fontSize: "16px",
      },
      _placeholder: {
        color: "rgba(0, 4, 128, 0.2)",
      },
    },
  },
});

export const ExhibitionNavbarSearch: React.FC<{
  className?: string;
}> = ({ className }) => {
  const styles = exhibitionNavbarSearchStyles();
  const [searchQuery, setSearchQuery] = useAtom(searchQueryAtom);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    router.push(pathname + "?" + createQueryString("q", value));
  };

  return (
    <label className={cx(styles.wrapper, className)}>
      <Search size={24} color="rgba(0, 4, 128, 1)" />
      <input
        className={styles.input}
        placeholder="名前や展示名を入力して検索..."
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </label>
  );
};
