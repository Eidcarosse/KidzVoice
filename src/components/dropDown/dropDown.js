import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome from "@react-native-vector-icons/fontawesome";
import colors from "../../utils/AppColors";
import styles from "./styles";

export default function DropDown({
  icon,
  placeholder,
  state,
  setState,
  onPress,
  isDisplayRelationList,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.inputContainer,
        {
          borderColor: isDisplayRelationList ? colors.blueRibbon : colors.alto,
        },
      ]}
      onPress={onPress}
    >
      {icon && <View style={styles.iconContainer}>{icon}</View>}
      <Text style={styles.textStyle}>{state ? state : placeholder}</Text>

      <View style={styles.iconContainer}>
        <FontAwesome name="angle-right" color={colors.ebonyClay} size={20} />
      </View>
    </TouchableOpacity>
  );
}
