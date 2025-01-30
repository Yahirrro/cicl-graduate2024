export interface ExhibitionRecord {
  id: string;
  title: string; // 作品名
  caption: string; // 作品説明
  seminar: string; // ゼミ名
  material: string; // 使用素材
  place: string; // 展示場所
  studies: string; // 学部 or 大学院
  name: string; // 作者名
  award?: string; // 受賞歴
}
