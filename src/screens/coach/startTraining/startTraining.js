import { View, Text, Image, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import StatusBarWrapper from "../../../components/customStatusbar";
import styles from "./styles";
import { Header, TaskCard } from "../../../components";
import Images from "../../../assets/images";
import { useRoute } from "@react-navigation/native";
import { Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";
import { tasks } from "../../../utils/Data";

export default function StartTraining() {
  const routes = useRoute();

  const [selectedModule, setSelectedModule] = useState();

  console.log("Module", routes.params?.module);

  useEffect(() => {
    setSelectedModule(routes.params?.module);
  }, [routes.params?.module]);

  return (
    <StatusBarWrapper>
      <Header title={"KidzVoice"} />

      <Image source={Images.MODULEIMAGE} style={styles.moduleImage} />

      <Text style={styles.titleText}>{selectedModule?.title}</Text>

      <View style={styles.iconTextParentView}>
        <View style={styles.iconTextView}>
          <Ionicons name="bookmark-outline" size={15} />
          <Text style={styles.saveText}>Save</Text>
        </View>

        <View style={styles.iconTextView}>
          <Ionicons name="share-social-outline" size={15} />
          <Text style={styles.saveText}>Share</Text>
        </View>

        <View style={styles.iconTextView}>
          <Ionicons name="share-social-outline" size={15} />
          <Text style={styles.saveText}>Transcript</Text>
        </View>
      </View>

      <View style={styles.lineView} />

      <FlatList
        data={tasks}
        renderItem={({ item }) => <TaskCard task={item} />}
        keyExtractor={({ index }) => index?.toString()}
      />
    </StatusBarWrapper>
  );
}
