import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";
import colors from "../../utils/AppColors";

const QuestionCard = ({ question, optionList, answer, setAnswer }) => {
  return (
    <View style={styles.parentView}>
      <Text style={styles.questionText}>{question}</Text>

      <View style={styles.optionsView}>
        {optionList.map((option) => (
          <TouchableOpacity
            key={option.id}
            onPress={() => setAnswer(option?.id)}
            style={styles.optionTouchable}
          >
            <Text
              style={styles.optionText}
            >{`${option?.id}) ${option?.text}`}</Text>

            <Ionicons
              name={
                answer === option?.id ? "radio-button-on" : "radio-button-off"
              }
              size={20}
              color={answer === option.id ? colors.blueRibbon : colors.alto}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default QuestionCard;
