export const getSortedFloors = (items: { floor: string }[]) => {
  const parseFloor = (floor: string) => {
    if (floor === "未設定") {
      return Number.MAX_SAFE_INTEGER; // 未設定を最下位にするために非常に大きな数値を返す
    }
    if (floor.startsWith("B")) {
      return -parseInt(floor.replace("B", ""), 10); // 地下階を負数に
    }
    return parseInt(floor.replace(/[^0-9]/g, ""), 10); // 地上階を正数に
  };

  return Array.from(new Set(items.map((item) => item.floor))).sort(
    (a, b) => parseFloor(a) - parseFloor(b)
  );
};
