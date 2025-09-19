import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import {
  diagnosesOptions,
  maxLiveTimeOptions,
  servicesOptions,
  siblingsOptions,
} from "../../utils/Data";
import { Ionicons, FontAwesome6 } from "@expo/vector-icons";
import colors from "../../utils/AppColors";
import QuestionOptions from "../questionOptions/questionOptions";

export default function FamilyContext({
  maxLiveTime,
  setMaxLiveTime,
  siblings,
  setSiblings,
  contactPerson,
  setContactPerson,
}) {
  return (
    <View style={styles.parentView}>
      <Text style={styles.title}>Family Context</Text>
      <Text style={styles.subtitle}>
        Purpose: Understand home and support system.
      </Text>

      <Text style={styles.question}>
        1 Who does Max live with most of the time?
      </Text>

      <QuestionOptions
        options={maxLiveTimeOptions}
        state={maxLiveTime}
        setState={setMaxLiveTime}
      />

      <Text style={styles.question}>2 Does Max have siblings?</Text>

      <QuestionOptions
        options={siblingsOptions}
        state={siblings}
        setState={setSiblings}
        multiple={false}
      />

      <Text style={styles.question}>
        3 Who is Max’s primary caregiver/contact person?
      </Text>
      <TextInput
        style={styles.textArea}
        placeholder=""
        multiline
        numberOfLines={4}
        value={contactPerson}
        onChangeText={setContactPerson}
      />
    </View>
  );
}
