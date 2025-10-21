import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";
import colors from "../../utils/AppColors";
import { useTranslation } from "react-i18next";

const QuestionCard = ({ question, optionList, answer, setAnswer }) => {
  const { t } = useTranslation();
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
            <View
              style={{
                width: "90%",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={styles.optionIdText}>{`${option?.id})`}</Text>

              <Text style={styles.optionText}>
                {t(`questionCard.${option?.text}`)}
              </Text>
            </View>

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
