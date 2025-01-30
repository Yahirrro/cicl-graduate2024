import { ExhibitionRecord } from "@/types";
import { MetadataRoute } from "next";
// ex) import { getAllPosts } from '@/lib/api'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const defaultPages: MetadataRoute.Sitemap = [
    {
      url: "https://ciclgs24.musabi.ac.jp",
    },
  ];

  const posts = (await fetch(
    "https://notion-api.splitbee.io/v1/table/184a6dea5dcd80d5b64bde9d64a70333"
  ).then((res) => res.json())) as ExhibitionRecord[];

  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `https://ciclgs24.musabi.ac.jp/exhibitors/${post.id}`,
    lastModified: new Date(),
  }));

  return [...defaultPages, ...blogPages];
}
