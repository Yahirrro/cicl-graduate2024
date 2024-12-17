import { PageHeader } from "@/components/PageHeader";
import { styled } from "../../../../styled-system/jsx";
import { ExhibitionNavbar } from "@/components/ExhibitionNavbar";
import { ExhibitionFloorSection } from "@/components/ExhibitionFloorSection";
import { getSortedFloors } from "@/utils/getSortedFloors";
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
  },
});

export default async function Home() {
  const items: ExhibitionRecord[] = await fetch(
    "https://notion-api.splitbee.io/v1/table/15fa6dea5dcd80828cf1e972020a1cce",
    {
      next: {
        tags: ["items"],
      },
    }
  ).then((res) => res.json());
  const floors: string[] = getSortedFloors(items);

  return (
    <BgWhite>
      <PageHeader title="Floor Map" />
      <ExhibitionNavbar floors={floors} />

      <Container>
        {floors.map((floor, i) => {
          return (
            <ExhibitionFloorSection
              floor={floor}
              items={items.filter(
                (item: ExhibitionRecord) => item.floor === floor
              )}
              key={i}
            />
          );
        })}
      </Container>
    </BgWhite>
  );
}
