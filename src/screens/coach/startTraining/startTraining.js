// import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
// import React, { useEffect, useRef, useState } from "react";
// import StatusBarWrapper from "../../../components/customStatusbar";
// import styles from "./styles";
// import { Button, Header, TaskCard } from "../../../components";
// import Images from "../../../assets/images";
// import { useNavigation, useRoute } from "@react-navigation/native";
// import { Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";
// import { tasks, youtubeVideosList } from "../../../utils/Data";
// import YoutubePlayer from "react-native-youtube-iframe";
// import ScreensName from "../../../routes/routes";

// export default function StartTraining() {
//   const navigation = useNavigation();
//   const routes = useRoute();
//   const playerRef = useRef(null);

//   const [selectedModule, setSelectedModule] = useState();
//   const [selectedVideoId, setSelectedVideoId] = useState("eal4-A89IWY");

//   console.log("Module", routes.params?.module);

//   const handleVideoSelect = (videoId) => {
//     setSelectedVideoId(videoId);
//     playerRef.current?.seekTo(0, true); // Reset video to start
//   };

//   const getThumbnailUrl = (videoId) =>
//     `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

//   const handelStartQuiz = () => {
//     navigation.navigate(ScreensName.STARTQUIZ);
//   };

//   useEffect(() => {
//     setSelectedModule(routes.params?.module);
//   }, [routes.params?.module]);

//   return (
//     <StatusBarWrapper edges={["bottom", "top"]}>
//       <Header title={"KidzVoice"} />

//       <View style={styles.moduleImage}>
//         <YoutubePlayer
//           ref={playerRef}
//           height={220}
//           play={true}
//           videoId={selectedVideoId}
//         />
//       </View>

//       {/* <Image source={Images.MODULEIMAGE} style={styles.moduleImage} /> */}

//       <Text style={styles.titleText}>{selectedModule?.title}</Text>

//       <View style={styles.iconTextParentView}>
//         <View style={styles.iconTextView}>
//           <Ionicons name="bookmark-outline" size={15} />
//           <Text style={styles.saveText}>Save</Text>
//         </View>

//         <View style={styles.iconTextView}>
//           <Ionicons name="share-social-outline" size={15} />
//           <Text style={styles.saveText}>Share</Text>
//         </View>

//         <View style={styles.iconTextView}>
//           <Ionicons name="share-social-outline" size={15} />
//           <Text style={styles.saveText}>Transcript</Text>
//         </View>
//       </View>

//       <View style={styles.lineView} />

//       <FlatList
//         data={youtubeVideosList}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             onPress={() => handleVideoSelect(item.id)}
//             style={styles.thumbnailContainer}
//           >
//             <Image
//               source={{ uri: getThumbnailUrl(item.id) }}
//               style={styles.thumbnail}
//               onError={() =>
//                 console.log(`Failed to load thumbnail for ${item.id}`)
//               }
//             />
//             <Text style={styles.thumbnailTitle} numberOfLines={2}>
//               {item.title}
//             </Text>
//           </TouchableOpacity>
//         )}
//         keyExtractor={(item) => item.id}
//         showsHorizontalScrollIndicator={false}
//       />

//       <Button title={"Start Quiz"} btnStyle={styles.btnStyle} onPress={handelStartQuiz} />

//       {/* <FlatList
//         data={tasks}
//         renderItem={({ item }) => <TaskCard task={item} />}
//         keyExtractor={({ index }) => index?.toString()}
//       /> */}
//     </StatusBarWrapper>
//   );
// }
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useRef, useState, useCallback } from "react";
import StatusBarWrapper from "../../../components/customStatusbar";
import styles from "./styles";
import { Button, Header } from "../../../components";
import { Ionicons } from "@expo/vector-icons";
import { modules, youtubeVideosList } from "../../../utils/Data";
import YoutubePlayer from "react-native-youtube-iframe";
import ScreensName from "../../../routes/routes";
import { useNavigation, useRoute } from "@react-navigation/native";
import colors from "../../../utils/AppColors";
import { Notebook } from "lucide-react-native";
import { useTranslation } from "react-i18next";

export default function StartTraining() {
  const navigation = useNavigation();
  const routes = useRoute();
  const playerRef = useRef(null);
  const { t } = useTranslation();

  const [selectedModule, setSelectedModule] = useState("");
  const [selectedVideoId, setSelectedVideoId] = useState("eal4-A89IWY");
  const [completedVideos, setCompletedVideos] = useState([]);
  const [currentPlayableIndex, setCurrentPlayableIndex] = useState(0);
  const [title, setTitle] = useState("Psychology Preview");
  useEffect(() => {
    setSelectedModule(routes.params?.module);
  }, [routes.params?.module]);

  // Function to get thumbnail
  const getThumbnailUrl = (videoId) =>
    `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  // Handle video select
  const handleVideoSelect = (videoId, index) => {
    if (index <= currentPlayableIndex) {
      setSelectedVideoId(videoId);
      playerRef.current?.seekTo(0, true);
    }
  };

  // Called when video ends
  const onVideoEnd = useCallback(() => {
    const currentIndex = youtubeVideosList.findIndex(
      (v) => v.id === selectedVideoId
    );

    // Mark video as completed
    if (!completedVideos.includes(selectedVideoId)) {
      setCompletedVideos((prev) => [...prev, selectedVideoId]);
    }

    // Unlock the next video
    if (currentIndex < youtubeVideosList.length - 1) {
      setCurrentPlayableIndex(currentIndex + 1);
    }
  }, [selectedVideoId, completedVideos]);

  const handelStartQuiz = () => {
    navigation.navigate(ScreensName.STARTQUIZ);
  };

  return (
    <StatusBarWrapper edges={["bottom", "top"]}>
      <Header title={t(`startTraining.kidzLife`)} />
      <Text style={styles.titleText}>
        {t(`trainingCard.${modules[0]?.title}`)}
      </Text>

      {/* Active Player */}
      <View style={styles.moduleImage}>
        <YoutubePlayer
          ref={playerRef}
          height={220}
          play={true}
          videoId={selectedVideoId}
          onChangeState={(event) => {
            if (event === "ended") onVideoEnd();
          }}
        />
      </View>

      <Text style={styles.subTitleText}>
        {t(`startTraining.title`)} {t(`startTraining.${title}`)}
      </Text>

      <View style={styles.iconTextParentView}>
        <View style={styles.iconTextView}>
          <Ionicons name="bookmark-outline" size={15} />
          <Text style={styles.saveText}>{t(`startTraining.save`)}</Text>
        </View>

        <View style={styles.iconTextView}>
          <Ionicons name="share-social-outline" size={15} />
          <Text style={styles.saveText}>{t(`startTraining.share`)}</Text>
        </View>

        <View style={styles.iconTextView}>
          <Ionicons name="document-text-outline" size={15} />
          <Text style={styles.saveText}>{t(`startTraining.transcript`)}</Text>
        </View>
      </View>

      <View style={styles.lineView} />

      {/* Videos List */}
      <FlatList
        data={youtubeVideosList}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {
          const isUnlocked = index <= currentPlayableIndex;
          const isCompleted = completedVideos.includes(item.id);

          return (
            <TouchableOpacity
              onPress={() => {
                console.log(
                  "title",
                  item?.title,
                  t(`startTraining.${item?.title}`)
                );

                setTitle(item?.title);
                handleVideoSelect(item.id, index);
              }}
              disabled={!isUnlocked}
              style={[
                styles.thumbnailContainer,
                !isUnlocked && { opacity: 0.4 },
              ]}
            >
              {/* <Image
                source={{ uri: getThumbnailUrl(item.id) }}
                style={styles.thumbnail}
              /> */}
              <Ionicons
                name="play-circle-outline"
                size={30}
                color={colors.blueRibbon}
              />
              <Text
                style={[
                  styles.thumbnailTitle,
                  isCompleted && { color: "green" },
                ]}
                numberOfLines={2}
              >
                {t(`startTraining.${item?.title}`)}
              </Text>
              {isCompleted && (
                <Ionicons
                  name="checkmark-circle"
                  size={18}
                  color="green"
                  style={{ position: "absolute", top: 8, right: 8 }}
                />
              )}
            </TouchableOpacity>
          );
        }}
        showsHorizontalScrollIndicator={false}
      />

      {/* Show Quiz button only after all videos completed */}
      {completedVideos.length === youtubeVideosList.length && (
        <TouchableOpacity
          onPress={handelStartQuiz}
          // disabled={completedVideos.length !== youtubeVideosList.length}
          style={[styles.thumbnailContainer]}
        >
          <Notebook size={25} color={colors.blueRibbon} />
          <Text style={[styles.thumbnailTitle]} numberOfLines={2}>
            {t(`startTraining.assessment`)}
          </Text>
        </TouchableOpacity>
      )}
    </StatusBarWrapper>
  );
}
