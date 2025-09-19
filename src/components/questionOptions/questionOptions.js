import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons, FontAwesome6 } from "@expo/vector-icons";
import colors from "../../utils/AppColors";
import styles from "./styles";

export default function QuestionOptions({
  options,
  state,
  setState,
  multiple = false,
}) {
  const isSelected = (value) =>
    multiple ? state.includes(value) : state === value;

  const toggleSelection = (list, setList, value) => {
    if (multiple) {
      if (list.includes(value)) {
        setList(list.filter((item) => item !== value));
      } else {
        setList([...list, value]);
      }
    } else {
      if (state === value) {
        setState("");
      } else {
        setState(value);
      }
    }
  };
  return (
    <View>
      {options.map((option) => (
        <TouchableOpacity
          key={option}
          style={styles.option}
          onPress={() => toggleSelection(state, setState, option)}
        >
          <Ionicons
            name={isSelected(option) ? "checkbox" : "square-outline"}
            size={20}
            color={isSelected(option) ? colors.blueRibbon : colors.alto}
          />
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
