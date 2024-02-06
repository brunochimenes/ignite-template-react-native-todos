import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import {
  Inter_400Regular,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";

import theme from "./src/theme";

import { Home } from "./src/screens/Home";
import { Loading } from "./src/components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent
      />

      {fontsLoaded ? <Home /> : <Loading />}
    </ThemeProvider>
  );
}
