import { StatusBar } from "expo-status-bar";
import { LogBox, StyleSheet, Text, View } from "react-native";
import Router from "./src/routes";
import { useLoadFonts } from "./src/utils/fonts";
import Toast from "react-native-toast-message";

LogBox.ignoreAllLogs(true);

export default function App() {
  const [fontsLoaded] = useLoadFonts();

  if (!fontsLoaded) return null;

  return (
    <View style={{ flex: 1 }}>
      <Router />
      <Toast />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
