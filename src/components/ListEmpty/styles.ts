import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  margin: 0 20px 0 20px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_300};
  border-top-width: 0.5px;
  padding: 48px 0 48px 0;
`;

export const Img = styled.Image`
  width: 56px;
  height: 56px;

  margin-bottom: 16px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`;

export const Message = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`;
