// TaskCard.tsx
import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import { ProgressBar } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../utils/AppColors";
import { Notebook } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import ScreensName from "../../routes/routes";

export default function TaskCard({ task }) {
  const navigation = useNavigation();
  const progress = 0.4; // 40%

  const handlePress = () => {
    navigation.navigate(ScreensName.STARTQUIZ);
  };
  return (
    <TouchableOpacity style={styles.parentView} onPress={handlePress}>
      <View style={styles.iconTextView}>
        {task?.duration ? (
          <Ionicons
            name="play-circle-outline"
            size={30}
            color={colors.blueRibbon}
          />
        ) : (
          <Notebook size={25} color={colors.blueRibbon} />
        )}

        <View style={styles.titleProgressView}>
          <Text style={styles.titleText}>{task?.title}</Text>

          {task?.inProgress && (
            <View style={styles.progressRow}>
              <ProgressBar
                progress={progress}
                color={colors.blueRibbon}
                style={styles.progressBar}
              />
              <Text style={styles.progressText}>
                {Math.round(progress * 100)}%
              </Text>
            </View>
          )}
        </View>
      </View>

      {/* Right: Duration */}
      <Text style={styles.durationText}>{task?.duration}</Text>
    </TouchableOpacity>
  );
}
