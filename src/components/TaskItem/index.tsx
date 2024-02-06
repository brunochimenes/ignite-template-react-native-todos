import { useTheme } from "styled-components/native";
import Feather from "@expo/vector-icons/Feather";

import {
  Container,
  CheckDescription,
  CheckButton,
  TrashButton,
} from "./styles";

export type Tasks = {
  id: number;
  title: string;
  done: boolean;
};

type TasksItemProps = {
  task: Tasks;
  toggleTaskDone: (id: number) => void;
  removeTask: (id: number) => void;
};

export function TaskItem({ task, removeTask, toggleTaskDone }: TasksItemProps) {
  const theme = useTheme();

  return (
    <Container>
      <CheckButton
        activeOpacity={0.7}
        done={task.done}
        onPress={() => toggleTaskDone(task.id)}
      >
        {task.done && <Feather name="check" color={theme.COLORS.GRAY_100} />}
      </CheckButton>

      <CheckDescription done={task.done}>{task.title}</CheckDescription>

      <TrashButton
        underlayColor={theme.COLORS.GRAY_400}
        onPress={() => removeTask(task.id)}
      >
        <Feather name="trash" color={theme.COLORS.DANGER} size={14} />
      </TrashButton>
    </Container>
  );
}
