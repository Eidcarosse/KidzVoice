import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { diagnosesOptions, servicesOptions } from "../../utils/Data";
import { Ionicons, FontAwesome6 } from "@expo/vector-icons";
import colors from "../../utils/AppColors";
import QuestionOptions from "../questionOptions/questionOptions";

export default function ChildHistory({
  diagnoses,
  setDiagnoses,
  services,
  setServices,
  history,
  setHistory,
  report,
  setReport,
}) {
  return (
    <View style={styles.parentView}>
      <Text style={styles.title}>Child History</Text>
      <Text style={styles.subtitle}>Purpose: Quick background about Max.</Text>

      <Text style={styles.question}>
        1 Has Max received any previous diagnoses?
      </Text>

      <QuestionOptions
        options={diagnosesOptions}
        state={diagnoses}
        setState={setDiagnoses}
      />

      <Text style={styles.question}>
        2 Has Max ever received support services?
      </Text>

      <QuestionOptions
        options={servicesOptions}
        state={services}
        setState={setServices}
      />

      <Text style={styles.question}>
        3 Briefly describe any important medical/educational history
      </Text>
      <TextInput
        style={styles.textArea}
        placeholder=""
        multiline
        numberOfLines={4}
        value={history}
        onChangeText={setHistory}
      />

      {/* Upload Reports Button */}
      <TouchableOpacity style={styles.uploadBtn}>
        <Ionicons
          name="document-text-outline"
          size={18}
          color={colors.blueRibbon}
        />
        <Text style={styles.uploadText}>Submit Reports</Text>
      </TouchableOpacity>
    </View>
  );
}
