import { PageHeader } from "@/components/PageHeader";
import { styled } from "../../../../../styled-system/jsx";
import { ExhibitorsArticleShare } from "@/components/ExhibitorsArticleShare";
import { ExhibitorsArticleHeader } from "@/components/ExhibitorsArticleHeader";
import { ExhibitionRecord } from "@/types";
import { notFound } from "next/navigation";

export const runtime = "edge";

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
    "https://notion-api.splitbee.io/v1/table/15fa6dea5dcd80828cf1e972020a1cce",
    {
      next: {
        tags: ["items"],
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
            isLongText={item.title.length >= 31}
          />
          <Description>{item.description}</Description>
          <ExhibitorsArticleShare />
        </Container>
      </Wrapper>
    </>
  );
}
