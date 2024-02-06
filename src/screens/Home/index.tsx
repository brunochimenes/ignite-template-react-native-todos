import { useEffect, useState } from "react";
import { Image, FlatList, Alert } from "react-native";
import { Container, Form, Header, Info } from "./styles";

import logoImg from "../../assets/logo.png";

import { Input } from "../../components/Input";
import { ButtonIcon } from "../../components/ButtonIcon";
import { TaskStatus } from "../../components/TaskStatus";
import { Tasks, TaskItem } from "../../components/TaskItem";
import { ListEmpty } from "../../components/ListEmpty";

export function Home() {
  const [tasks, setTasks] = useState<Tasks[]>([]);
  const [tasksTitle, setTasksTitle] = useState("");
  const [taskCountDone, setTaskCountDone] = useState(0);

  function handleAddTasks(newTasksTitle: string) {
    if (newTasksTitle.trim().length === 0) {
      return Alert.alert("Nova Tarefa", "Escreva uma nova tarefa!");
    }

    const newTask = {
      id: new Date().getTime(),
      title: newTasksTitle,
      done: false,
    };

    setTasks((prevState) => [...prevState, newTask]);

    setTasksTitle("");
  }

  function handleToggleTaskDone(id: number) {
    const updatedTasks = tasks.map((task) => ({ ...task }));

    const foundItem = updatedTasks.find((item) => item.id === id);

    if (!foundItem) return;

    foundItem.done = !foundItem.done;

    setTasks(updatedTasks);
  }

  function handleRemoveTask(id: number) {
    Alert.alert(
      "Remover Tarefa",
      "Tem certeza que deseja remover esse tarefa?",
      [
        {
          text: "Não",
          style: "cancel",
        },
        {
          text: "Sim",
          onPress: () => {
            const updatedTasks = tasks.filter((task) => task.id !== id);

            setTasks(updatedTasks);
          },
        },
      ]
    );
  }

  function handleTaskCountDone(tasks: Tasks[]) {
    const tasksDone = tasks.filter((item) => {
      return item.done === true;
    });

    setTaskCountDone(tasksDone.length);
  }

  useEffect(() => {
    handleTaskCountDone(tasks);
  }, [tasks]);

  return (
    <Container>
      <Header>
        <Image source={logoImg} />
      </Header>

      <Form>
        <Input onChangeText={setTasksTitle} value={tasksTitle} />

        <ButtonIcon onPress={() => handleAddTasks(tasksTitle)} />
      </Form>

      <Info>
        <TaskStatus title="Criadas" type="CREATED" count={tasks.length} />

        <TaskStatus title="Concluídas" count={taskCountDone} />
      </Info>

      <FlatList
        data={tasks}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 24 }}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            removeTask={handleRemoveTask}
            toggleTaskDone={handleToggleTaskDone}
          />
        )}
        ListEmptyComponent={() => <ListEmpty />}
        style={{
          marginTop: 20,
        }}
      />
    </Container>
  );
}
