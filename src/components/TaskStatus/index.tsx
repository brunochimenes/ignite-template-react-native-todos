import {
  Container,
  TasksStatusTitle,
  TasksCounter,
  TasksTypeColor,
} from "./styles";

type TaskProp = {
  title: string;
  type?: TasksTypeColor;
  count?: number;
};

export function TaskStatus({ title, type, count = 0 }: TaskProp) {
  return (
    <Container>
      <TasksStatusTitle type={type}>{title}</TasksStatusTitle>

      <TasksCounter>{count}</TasksCounter>
    </Container>
  );
}
