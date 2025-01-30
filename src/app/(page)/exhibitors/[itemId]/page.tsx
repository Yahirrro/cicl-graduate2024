import { PageHeader } from "@/components/PageHeader";
import { styled } from "../../../../../styled-system/jsx";
import { ExhibitorsArticleShare } from "@/components/ExhibitorsArticleShare";
import { ExhibitorsArticleHeader } from "@/components/ExhibitorsArticleHeader";
import { ExhibitionRecord } from "@/types";
import { notFound } from "next/navigation";

export const runtime = "edge";

export async function generateMetadata({
  params: { itemId },
}: {
  params: { itemId: string };
}) {
  const items: ExhibitionRecord[] = await fetch(
    "https://notion-api.splitbee.io/v1/table/184a6dea5dcd80d5b64bde9d64a70333",
    {
      next: {
        tags: ["items"],
        revalidate: 1,
      },
    }
  ).then((res) => res.json());

  const item = items.find((item) => item.id === itemId);

  if (!item) {
    return notFound();
  }

  return {
    title: `${item.title} | ${item.name} | 武蔵野美術大学 CI・CL卒業・修了展 2024`,
    description: item.caption,
  };
}

const Wrapper = styled("div", {
  base: {
    px: "72px",
    bg: "white",
    color: "#000480",
    mdDown: {
      px: "32px",
    },
  },
});

const Container = styled("article", {
  base: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    maxW: "calc(1640px - (72px * 2))",
    mx: "auto",
    gap: "24px",

    mdDown: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
  },
});

const Description = styled("p", {
  base: {
    pb: "72px",
    gridColumn: "1 / span 2",
    fontSize: "19px",
    lineHeight: "175%",
    mdDown: {
      fontSize: "15px",
      lineHeight: "165%",
    },
  },
});

export default async function Page({
  params,
}: {
  params: Promise<{ itemId: string }>;
}) {
  const itemId = (await params).itemId;
  const items: ExhibitionRecord[] = await fetch(
    "https://notion-api.splitbee.io/v1/table/184a6dea5dcd80d5b64bde9d64a70333",
    {
      next: {
        tags: ["items"],
        revalidate: 1,
      },
    }
  ).then((res) => res.json());

  const item = items.find((item) => item.id === itemId);

  if (!item) {
    return notFound();
  }
  return (
    <>
      <PageHeader white />
      <Wrapper>
        <Container>
          <ExhibitorsArticleHeader
            {...item}
            isLongText={item.title?.length >= 31}
          />
          <Description>{item.caption}</Description>
          <ExhibitorsArticleShare />
        </Container>
      </Wrapper>
    </>
  );
}

export async function generateStaticParams() {
  const posts = await fetch(
    "https://notion-api.splitbee.io/v1/table/184a6dea5dcd80d5b64bde9d64a70333"
  ).then((res) => res.json());

  return posts.map((post: { id: string }) => ({
    slug: post.id,
  }));
}
