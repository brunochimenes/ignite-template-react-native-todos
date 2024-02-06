import styled from "styled-components/native";
import Feather from "@expo/vector-icons/Feather";

export const Container = styled.TouchableHighlight`
  width: 52px;
  height: 52px;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BLUE_DARK};

  border-radius: 6px;
`;

export const Icon = styled(Feather).attrs(({ theme }) => ({
  color: theme.COLORS.GRAY_100,
  size: 16,
}))``;
