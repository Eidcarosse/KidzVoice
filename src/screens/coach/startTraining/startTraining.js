import { View, Text, Image, FlatList } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import StatusBarWrapper from "../../../components/customStatusbar";
import styles from "./styles";
import { Header, TaskCard } from "../../../components";
import Images from "../../../assets/images";
import { useRoute } from "@react-navigation/native";
import { Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";
import { tasks } from "../../../utils/Data";
import YoutubePlayer from "react-native-youtube-iframe";

export default function StartTraining() {
  const routes = useRoute();
  const playerRef = useRef(null);

  const [selectedModule, setSelectedModule] = useState();

  console.log("Module", routes.params?.module);

  useEffect(() => {
    setSelectedModule(routes.params?.module);
  }, [routes.params?.module]);

  return (
    <StatusBarWrapper>
      <Header title={"KidzVoice"} />

      <View style={styles.moduleImage}>
        <YoutubePlayer
          ref={playerRef}
          height={220}
          play={true}
          videoId={"vo4pMVb0R6M"} // Replace with your YouTube video ID
        />
      </View>

      {/* <Image source={Images.MODULEIMAGE} style={styles.moduleImage} /> */}

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
