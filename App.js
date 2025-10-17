import { StatusBar } from "expo-status-bar";
import { LogBox, StyleSheet, View } from "react-native";
import Router from "./src/routes";
import { useLoadFonts } from "./src/utils/fonts";
import Toast from "react-native-toast-message";
import { getStoredValue } from "./src/utils/Methods";
import { useEffect } from "react";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18n from "./src/translation";

LogBox.ignoreAllLogs(true);

export default function App() {
  const [fontsLoaded] = useLoadFonts();
  const { t } = useTranslation();

  const getSelectedLanguage = async () => {
    let data = await getStoredValue("language");

    console.log("Selected Language Data", data);

    if (data) {
      if (data?.lang === "english") {
        i18n.changeLanguage("en");
      } else {
        i18n.changeLanguage("de");
      }
    } else {
      i18n.changeLanguage("de");
    }
  };

  useEffect(() => {
    if (fontsLoaded) {
      getSelectedLanguage();
      // fetchLocation();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // Render nothing while fonts are loading
  }

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
