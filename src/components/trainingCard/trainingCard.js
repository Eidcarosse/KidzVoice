import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { ProgressBar } from "react-native-paper";
import { Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";
import styles from "./styles";
import Button from "../button/button";
import colors from "../../utils/AppColors";
import Images from "../../assets/images";
import { LockKeyhole } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import ScreensName from "../../routes/routes";

export default function TrainingCard({ module }) {
  const navigation = useNavigation();
  console.log("Modules", module);

  const handleStartTraning = (module) => {
    console.log("Selected Module", module);
    navigation.navigate(ScreensName.STARTTRAINING, {
      module: module,
    });
  };

  return (
    <View style={styles.card}>
      {/* Top section with image and title */}
      <View style={styles.header}>
        <Image source={Images.MODULEIMAGE} style={styles.image} />
        <View style={styles.headerText}>
          <View style={styles.titleIconView}>
            <Text style={styles.moduleTitle}>{module?.title}</Text>
            {module?.inProgress ? (
              <Feather
                name="more-vertical"
                size={20}
                color={colors.ebonyClay}
              />
            ) : (
              <LockKeyhole size={20} color={colors.ebonyClay} />
            )}
          </View>
          <Text style={styles.subTitle}>{module?.subTitle}</Text>
          <View style={styles.iconsRow}>
            <Ionicons name="globe-outline" size={14} color={colors.ebonyClay} />
            <Text style={styles.iconText}>{module?.language}</Text>
            <Ionicons name="time-outline" size={14} color={colors.ebonyClay} />
            <Text style={styles.iconText}> {module?.time}</Text>
            <MaterialIcons
              name="ondemand-video"
              size={14}
              color={colors.ebonyClay}
            />
            <Text style={styles.iconText}>{module?.mediaType}</Text>
            <MaterialIcons name="quiz" size={14} color={colors.ebonyClay} />
            <Text style={styles.iconText}>{module?.moduleType}</Text>
          </View>
        </View>
      </View>

      {/* Description */}
      <Text style={styles.description}>{module?.description}</Text>

      {/* Progress Section */}
      {module?.inProgress && (
        <View>
          <View style={styles.progressRow}>
            <Ionicons name="checkmark-circle" size={22} color={colors.jewel} />
            <Text style={styles.progressText}>
              62% <Text style={styles.completedText}>Completed</Text>
            </Text>
          </View>
          <ProgressBar
            progress={0.62}
            color={colors.jewel}
            style={styles.progressBar}
          />

          <Button
            title={"Start Training"}
            btnStyle={styles.startButton}
            onPress={() => {
              handleStartTraning(module);
            }}
          />
        </View>
      )}
    </View>
  );
}
