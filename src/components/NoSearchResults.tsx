import { styled } from "../../styled-system/jsx";

const Container = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    py: "64px",
    textAlign: "center",
  },
});

const Message = styled("p", {
  base: {
    fontSize: "24px",
    color: "rgba(0, 4, 128, 0.6)",
    fontWeight: "500",
    mb: "8px",
  },
});

const SubMessage = styled("p", {
  base: {
    fontSize: "16px",
    color: "rgba(0, 4, 128, 0.4)",
  },
});

type Props = {
  searchQuery: string;
};

export const NoSearchResults: React.FC<Props> = ({ searchQuery }) => {
  return (
    <Container>
      <Message>検索結果が見つかりませんでした</Message>
      <SubMessage>
        「{searchQuery}」に一致する展示が見つかりませんでした。
        <br />
        別のキーワードで検索してください。
      </SubMessage>
    </Container>
  );
};
