export interface ExhibitionRecord {
  id: string;
  author: string; // 作者名
  type: string; // 制作 or プロジェクト or 未設定
  title: string; // 作品名 or 論文名
  description: string; // 概要
  category: string; // undergraduate or graduate
  floor: string; // フロア（例: "5F", "B2F", "未設定"）
  area: string; // エリア（例: "503", "多目的空間", "未設定"）
}
