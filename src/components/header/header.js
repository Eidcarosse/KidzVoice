import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function Header({ title }) {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.parentView}>
      <TouchableOpacity style={styles.iconView} onPress={handleBack}>
        <Feather name="chevron-left" size={25} />
      </TouchableOpacity>

      <Text style={styles.titleText}>{title}</Text>

      <View></View>
    </View>
  );
}
