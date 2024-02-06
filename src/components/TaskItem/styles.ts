import styled, { css } from "styled-components/native";

type FilterStyleProps = {
  done: boolean;
};

export const Container = styled.View`
  flex-direction: row;
  height: 64px;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};

  margin: 8px 24px 0 24px;
  border: solid ${({ theme }) => theme.COLORS.GRAY_400} 1px;
  border-radius: 8px;
`;

export const CheckButton = styled.TouchableOpacity<FilterStyleProps>`
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;

  ${({ theme, done }) =>
    done
      ? css`
          background-color: ${theme.COLORS.PURPLE_DARK};
        `
      : css`
          border-color: ${theme.COLORS.BLUE};
          border-width: 2px;
        `};

  margin-right: 8px;
  margin-left: 12px;
  border-radius: 12px;
`;

export const TrashButton = styled.TouchableHighlight`
  margin: 0 8px 0 8px;
  border-radius: 4px;
  padding: 9px 10px;
`;

export const CheckDescription = styled.Text<FilterStyleProps>`
  flex: 1;

  ${({ theme, done }) =>
    done
      ? css`
          color: ${theme.COLORS.GRAY_300};

          text-decoration: line-through;
        `
      : css`
          color: ${({ theme }) => theme.COLORS.GRAY_100};
        `};

  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`;
