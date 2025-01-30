import { PageHeader } from "@/components/PageHeader";
import { Box, styled } from "../../../../styled-system/jsx";
import { ExhibitionNavbar } from "@/components/ExhibitionNavbar";
import { ExhibitionFloorSection } from "@/components/ExhibitionFloorSection";
import { getSortedFloors, isInFloor } from "@/utils/getSortedFloors";
import { ExhibitionRecord } from "@/types";
import { NoSearchResults } from "@/components/NoSearchResults";
import { ExhibitionNavbarSearch } from "@/components/ExhibitionNavbarSearch";
import { css } from "../../../../styled-system/css";

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

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function Home({ searchParams }: Props) {
  const items: ExhibitionRecord[] = await fetch(
    "https://notion-api.splitbee.io/v1/table/184a6dea5dcd80d5b64bde9d64a70333",
    {
      next: {
        tags: ["items"],
        revalidate: 1,
      },
    }
  ).then((res) => res.json());

  const searchQuery = ((searchParams.q as string) || "").toLowerCase();
  const filteredItems = items.filter((item: ExhibitionRecord) => {
    if (!searchQuery) return true;
    return (
      item.name?.toLowerCase().includes(searchQuery) ||
      item.place?.toLowerCase().includes(searchQuery) ||
      item.title?.toLowerCase().includes(searchQuery) ||
      item.award?.toLowerCase().includes(searchQuery)
    );
  });

  const floors: string[] = getSortedFloors(items);
  const floorCounts = floors.reduce(
    (acc, floor) => {
      acc[floor] = filteredItems.filter((item: ExhibitionRecord) =>
        isInFloor(item.place, floor)
      ).length;
      return acc;
    },
    {} as Record<string, number>
  );

  return (
    <BgWhite>
      <PageHeader title="Exhibitors" />
      <ExhibitionNavbar floors={floors} floorCounts={floorCounts} />

      <Box md={{ display: "none" }} px="32px">
        <ExhibitionNavbarSearch
          className={css({
            py: "16px",
          })}
        />
      </Box>

      <Container>
        {searchQuery && filteredItems.length === 0 ? (
          <NoSearchResults searchQuery={searchParams.q as string} />
        ) : (
          floors.map((floor, i) => {
            const floorItems = filteredItems.filter((item: ExhibitionRecord) =>
              isInFloor(item.place, floor)
            );

            if (floorItems.length === 0) return null;

            return (
              <ExhibitionFloorSection
                floor={floor}
                items={floorItems}
                key={i}
              />
            );
          })
        )}
      </Container>
    </BgWhite>
  );
}
