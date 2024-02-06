import styled from "styled-components/native";

export const Container = styled.TextInput`
  flex: 1;
  height: 54px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  color: ${({ theme }) => theme.COLORS.GRAY_100};

  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;

  border: solid 1px ${({ theme }) => theme.COLORS.GRAY_700};
  border-radius: 6px;
  padding: 16px;
`;
