import { View, Text, TextInput } from "react-native";
import React from "react";
import styles from "./styles";
import colors from "../../utils/AppColors";

export default function Input({ icon, placeholder, state, setState }) {
  return (
    <View style={styles.inputContainer}>
      {icon && <View style={styles.iconContainer}>{icon}</View>}
      <TextInput
        placeholder={placeholder}
        value={state}
        onChangeText={setState}
        style={styles.input}
        placeholderTextColor={colors.nobel}
      />
    </View>
  );
}
