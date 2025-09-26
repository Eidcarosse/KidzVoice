import { View, Text, Touchable, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";

export default function Button({
  title,
  btnStyle,
  textStyle,
  onPress,
  disable = false,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.buttonView, btnStyle]}
      disabled={disable}
    >
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}
