import { TouchableHighlightProps } from "react-native";
import { useTheme } from "styled-components/native";
import { Container, Icon } from "./styles";

type ButtonIconProps = TouchableHighlightProps & {};

export function ButtonIcon({ ...rest }: ButtonIconProps) {
  const theme = useTheme();

  return (
    <Container underlayColor={theme.COLORS.BLUE} {...rest}>
      <Icon name="plus-circle" />
    </Container>
  );
}
