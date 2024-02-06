import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const Header = styled(SafeAreaView)`
  width: "100%";
  height: 173px;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Form = styled.View`
  flex-direction: row;

  margin: -31px 24px 0 24px;
`;

export const Info = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 32px 24px 0 24px;
`;
