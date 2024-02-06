import styled from "styled-components/native";

export type TasksTypeColor = "CREATED" | "DONE";

type TasksTypeColorProps = {
  type?: TasksTypeColor;
};

export const Container = styled.View`
  flex-direction: row;
`;

export const TasksStatusTitle = styled.Text<TasksTypeColorProps>`
  color: ${({ theme, type }) =>
    type === "CREATED" ? theme.COLORS.BLUE : theme.COLORS.PURPLE};

  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;

  margin-right: 8px;
`;

export const TasksCounter = styled.Text`
  width: 25px;
  height: 19px;
  text-align: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
  color: ${({ theme }) => theme.COLORS.GRAY_100};

  border-radius: 999px;
`;
