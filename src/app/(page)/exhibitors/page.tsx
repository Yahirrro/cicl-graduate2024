import { PageHeader } from "@/components/PageHeader";
import { styled } from "../../../../styled-system/jsx";
import { ExhibitionNavbar } from "@/components/ExhibitionNavbar";
import { ExhibitionFloorSection } from "@/components/ExhibitionFloorSection";
import { getSortedFloors, isInFloor } from "@/utils/getSortedFloors";
import { ExhibitionRecord } from "@/types";

export const runtime = "edge";

const BgWhite = styled("div", {
  base: {
    bg: "white",
    minH: "100vh",
  },
});

const Container = styled("div", {
  base: {
    px: "72px",
    minH: "500vh",
    mt: "48px",
    mdDown: {
      px: "32px 16px",
    },
  },
});

export default async function Home() {
  const items: ExhibitionRecord[] = await fetch(
    "https://notion-api.splitbee.io/v1/table/184a6dea5dcd80d5b64bde9d64a70333",
    {
      next: {
        tags: ["items"],
        revalidate: 1,
      },
    }
  ).then((res) => res.json());

  const floors: string[] = getSortedFloors(items);

  return (
    <BgWhite>
      <PageHeader title="Exhibitors" />
      <ExhibitionNavbar floors={floors} />

      <Container>
        {floors.map((floor, i) => {
          return (
            <ExhibitionFloorSection
              floor={floor}
              items={items.filter((item: ExhibitionRecord) =>
                isInFloor(item.place, floor)
              )}
              key={i}
            />
          );
        })}
      </Container>
    </BgWhite>
  );
}
