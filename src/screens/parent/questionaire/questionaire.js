import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import StatusBarWrapper from "../../../components/customStatusbar";
import { Button } from "../../../components";
import { Ionicons, FontAwesome6 } from "@expo/vector-icons";
import styles from "./styles";
import colors from "../../../utils/AppColors";
import { diagnosesOptions, servicesOptions } from "../../../utils/Data";

export default function ParentQuestionaire() {
  const [childHistory, setChildHistory] = useState("Pending");
  const [currentStrugles, setCurrentStrugles] = useState("Remaining");
  const [familyContext, setFamilyContext] = useState("Remaining");

  const [diagnoses, setDiagnoses] = useState([]);
  const [services, setServices] = useState([]);
  const [history, setHistory] = useState("");

  const toggleSelection = (list, setList, value) => {
    if (list.includes(value)) {
      setList(list.filter((item) => item !== value));
    } else {
      setList([...list, value]);
    }
  };

  return (
    <StatusBarWrapper>
      <ScrollView>
        <View style={styles.progressContainer}>
          <Ionicons
            name={
              childHistory == "Pending"
                ? "radio-button-on"
                : "checkmark-circle-sharp"
            }
            size={25}
            color={
              childHistory === "Remaining" ? colors.boulder : colors.blueRibbon
            }
          />
          <View style={styles.progressLine} />
          <Ionicons
            name={
              currentStrugles == "Remaining"
                ? "ellipse-outline"
                : currentStrugles == "Pending"
                ? "radio-button-on"
                : "checkmark-circle-sharp"
            }
            size={25}
            color={
              currentStrugles === "Remaining"
                ? colors.boulder
                : colors.blueRibbon
            }
          />
          <View style={styles.progressLine} />
          <Ionicons
            name={
              familyContext == "Remaining"
                ? "ellipse-outline"
                : familyContext == "Pending"
                ? "radio-button-on"
                : "checkmark-circle-sharp"
            }
            size={25}
            color={
              familyContext === "Remaining" ? colors.boulder : colors.blueRibbon
            }
          />
        </View>

        <Text style={styles.title}>Child History</Text>
        <Text style={styles.subtitle}>
          Purpose: Quick background about Max.
        </Text>

        <Text style={styles.question}>
          1 Has Max received any previous diagnoses?
        </Text>

        {diagnosesOptions.map((option) => (
          <TouchableOpacity
            key={option}
            style={styles.option}
            onPress={() => toggleSelection(diagnoses, setDiagnoses, option)}
          >
            <Ionicons
              name={diagnoses.includes(option) ? "checkbox" : "square-outline"}
              size={20}
              color={
                diagnoses.includes(option) ? colors.blueRibbon : colors.alto
              }
            />
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}

        {/* Question 2 */}
        <Text style={styles.question}>
          2 Has Max ever received support services?
        </Text>
        {servicesOptions.map((option) => (
          <TouchableOpacity
            key={option}
            style={styles.option}
            onPress={() => toggleSelection(services, setServices, option)}
          >
            <Ionicons
              name={services.includes(option) ? "checkbox" : "square-outline"}
              size={20}
              color={
                services.includes(option) ? colors.blueRibbon : colors.alto
              }
            />
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}

        <Text style={styles.question}>
          3 Briefly describe any important medical/educational history
        </Text>
        <TextInput
          style={styles.textArea}
          placeholder="Write here..."
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

        <Button title={"Next"} />
      </ScrollView>
    </StatusBarWrapper>
  );
}
