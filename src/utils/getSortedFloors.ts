import { ExhibitionRecord } from "@/types";

export const getFloorNumber = (place: string): number => {
  if (!place || place.trim() === "" || place === "0") {
    return Number.MAX_SAFE_INTEGER;
  }

  // 地下階の処理（B1, B2など）
  if (place.toLowerCase().includes("b")) {
    const match = place.match(/[Bb](\d+)/);
    if (match) {
      return -parseInt(match[1], 10);
    }
    return Number.MAX_SAFE_INTEGER;
  }

  // パターンごとに処理
  const patterns = [
    // 3桁以上の数字の場合（部屋番号など）は最初の数字をフロア番号とする
    { pattern: /^\d{3,}/, extract: (s: string) => parseInt(s[0], 10) },
    // "2階" や "2F" などの形式
    {
      pattern: /^(\d+)(?:階|F)/,
      extract: (s: string) => parseInt(s.match(/^(\d+)/)?.[1] || "0", 10),
    },
    // "2-11" などの形式
    {
      pattern: /^(\d+)-/,
      extract: (s: string) => parseInt(s.match(/^(\d+)/)?.[1] || "0", 10),
    },
    // 単独の数字
    { pattern: /^(\d+)$/, extract: (s: string) => parseInt(s, 10) },
  ];

  for (const { pattern, extract } of patterns) {
    if (pattern.test(place)) {
      return extract(place);
    }
  }

  // どのパターンにもマッチしない場合は未設定として扱う
  return Number.MAX_SAFE_INTEGER;
};

export const formatFloor = (floor: number): string => {
  if (floor === Number.MAX_SAFE_INTEGER) {
    return "未回答";
  }
  if (floor < 0) {
    return `B${Math.abs(floor)}F`;
  }
  return `${floor}F`;
};

export const getSortedFloors = (items: ExhibitionRecord[]) => {
  // 各アイテムからフロア番号を抽出し、重複を除いてソート
  const uniqueFloors = Array.from(
    new Set(items.map((item) => getFloorNumber(item.place)))
  ).sort((a, b) => a - b);

  // フロア番号を"○F"形式に変換して返す
  return uniqueFloors.map(formatFloor);
};

// placeからフロアを判定する関数
export const isInFloor = (place: string, targetFloor: string): boolean => {
  if (!place || !targetFloor) return false;

  const floorNumber = getFloorNumber(place);

  // 未設定の場合
  if (targetFloor === "未回答") {
    return floorNumber === Number.MAX_SAFE_INTEGER;
  }

  // 通常のフロアの場合
  if (targetFloor.endsWith("F")) {
    // B2Fなどの地下階の場合
    if (targetFloor.startsWith("B")) {
      const level = parseInt(targetFloor.replace(/[BF]/g, ""), 10);
      return floorNumber === -level;
    }
    // 通常階の場合
    const level = parseInt(targetFloor.replace("F", ""), 10);
    return floorNumber === level;
  }

  return false;
};
