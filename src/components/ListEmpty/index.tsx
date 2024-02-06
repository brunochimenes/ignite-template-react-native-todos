import { Container, Title, Message, Img } from "./styles";

import clipboardImg from "../../assets/clipboard.png";

export function ListEmpty() {
  return (
    <Container>
      <Img source={clipboardImg} />

      <Title>Você ainda não tem tarefas cadastradas</Title>

      <Message>Crie tarefas e organize seus itens a fazer</Message>
    </Container>
  );
}
