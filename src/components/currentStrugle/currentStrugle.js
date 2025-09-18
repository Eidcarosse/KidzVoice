import { View, Text } from "react-native";
import React from "react";
import QuestionOptions from "../questionOptions/questionOptions";
import styles from "./styles";
import {
  diagnosesOptions,
  struggleEffectOptions,
  strugglingAreaOptions,
} from "../../utils/Data";

export default function CurrentStrugle({
  strugglingArea,
  setStrugglingArea,
  struggleEffect,
  setStruggleEffect,
}) {
  return (
    <View style={styles.parentView}>
      <Text style={styles.title}>Current Struggles</Text>
      <Text style={styles.subtitle}>
        Purpose: What Max is facing right now.
      </Text>

      <Text style={styles.question}>
        1 1 Which areas is Max currently struggling with?
      </Text>

      <QuestionOptions
        options={strugglingAreaOptions}
        state={strugglingArea}
        setState={setStrugglingArea}
      />

      <Text style={styles.question}>
        2 How often do these struggles affect Max’s daily life?
      </Text>

      <QuestionOptions
        options={struggleEffectOptions}
        state={struggleEffect}
        setState={setStruggleEffect}
      />
    </View>
  );
}
