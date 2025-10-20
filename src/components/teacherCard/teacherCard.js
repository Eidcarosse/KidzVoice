import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import ScreensName from "../../routes/routes";
import { useTranslation } from "react-i18next";

const TeacherCard = ({ item, isTeacher }) => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />

      <View style={{ flex: 1, paddingVertical: 4 }}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>

        <View style={styles.metaRow}>
          <View style={styles.metaItem}>
            <Ionicons name="location-outline" size={14} color="#555" />
            <Text style={styles.metaText}>{item.location}</Text>
          </View>

          <View style={styles.metaItem}>
            <Ionicons name="globe-outline" size={14} color="#555" />
            <Text style={styles.metaText}>{item.language}</Text>
          </View>

          <View style={styles.metaItem}>
            <Ionicons name="star" size={14} color="#FFA500" />
            <Text style={styles.metaText}>{item.rating}</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate(ScreensName.VIEWPROFILESCREEN, {
            item: item,
            isTeacher,
          })
        }
      >
        <Text style={styles.link}>{t(`teacherCard.viewProfile`)}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TeacherCard;
