import { View, Text, FlatList } from "react-native";
import React from "react";
import styles from "./styles";
import StatusBarWrapper from "../../../components/customStatusbar";
import { Button, Header, TrainingCard } from "../../../components";
import { modules } from "../../../utils/Data";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ScreensName from "../../../routes/routes";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";

export default function Training() {
  const navigation = useNavigation();
  const { t } = useTranslation();
  return (
    <StatusBarWrapper>
      <Header title={t(`training.training`)} />

      <Text style={styles.modulesText}>{t(`training.modules`)}</Text>

      <FlatList
        data={modules}
        renderItem={({ item }) => <TrainingCard module={item} />}
        keyExtractor={({ index }) => index?.toString()}
      />
      <Button
        title={t(`training.logout`)}
        onPress={async () => {
          try {
            await AsyncStorage.removeItem("childData");
            await AsyncStorage.removeItem("LOCK_KEY");
            console.log("✅ Async data cleared successfully");
            navigation.navigate(ScreensName.WELCOME);
          } catch (error) {
            console.error("❌ Error clearing AsyncStorage:", error);
          }
        }}
      />
    </StatusBarWrapper>
  );
}
