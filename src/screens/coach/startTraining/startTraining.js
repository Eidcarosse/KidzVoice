import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import StatusBarWrapper from "../../../components/customStatusbar";
import styles from "./styles";
import { Button, Header, TaskCard } from "../../../components";
import Images from "../../../assets/images";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";
import { tasks, youtubeVideosList } from "../../../utils/Data";
import YoutubePlayer from "react-native-youtube-iframe";
import ScreensName from "../../../routes/routes";

export default function StartTraining() {
  const navigation = useNavigation();
  const routes = useRoute();
  const playerRef = useRef(null);

  const [selectedModule, setSelectedModule] = useState();
  const [selectedVideoId, setSelectedVideoId] = useState("eal4-A89IWY");

  console.log("Module", routes.params?.module);

  const handleVideoSelect = (videoId) => {
    setSelectedVideoId(videoId);
    playerRef.current?.seekTo(0, true); // Reset video to start
  };

  const getThumbnailUrl = (videoId) =>
    `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  const handelStartQuiz = () => {
    navigation.navigate(ScreensName.STARTQUIZ);
  };

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
          videoId={selectedVideoId}
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
        data={youtubeVideosList}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handleVideoSelect(item.id)}
            style={styles.thumbnailContainer}
          >
            <Image
              source={{ uri: getThumbnailUrl(item.id) }}
              style={styles.thumbnail}
              onError={() =>
                console.log(`Failed to load thumbnail for ${item.id}`)
              }
            />
            <Text style={styles.thumbnailTitle} numberOfLines={2}>
              {item.title}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />

      <Button title={"Start Quiz"} btnStyle={styles.btnStyle} onPress={handelStartQuiz} />

      {/* <FlatList
        data={tasks}
        renderItem={({ item }) => <TaskCard task={item} />}
        keyExtractor={({ index }) => index?.toString()}
      /> */}
    </StatusBarWrapper>
  );
}
