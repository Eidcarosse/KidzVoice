import { View, Text, Touchable, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";

export default function Button({ title, btnStyle, textStyle, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={[btnStyle, styles.buttonView]}>
      <Text style={[textStyle, styles.buttonText]}>{title}</Text>
    </TouchableOpacity>
  );
}
