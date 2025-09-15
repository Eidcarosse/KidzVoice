import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Router from "./src/routes";
import { useLoadFonts } from "./src/utils/fonts";

export default function App() {
  const [fontsLoaded] = useLoadFonts();

  if (!fontsLoaded) return null;

  return <Router />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
