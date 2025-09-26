import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import { Feather, AntDesign } from "@expo/vector-icons";
import colors from "../../utils/AppColors";

export default function SingleCheckBox({ label, state, setState, onPress }) {
  const handlePress = () => {
    if (onPress) {
      onPress();
    } else {
      setState(!state);
    }
  };
  return (
    <TouchableOpacity
      style={styles.parentView}
      activeOpacity={0.7}
      onPress={handlePress}
    >
      <Feather
        name={state ? "check-circle" : "circle"}
        size={20}
        color={colors.ebonyClay}
      />
      <Text style={styles.labelText} numberOfLines={1}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}
