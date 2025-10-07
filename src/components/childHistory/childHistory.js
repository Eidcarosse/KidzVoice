import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import { diagnosesOptions, servicesOptions } from "../../utils/Data";
import { Ionicons, FontAwesome6 } from "@expo/vector-icons";
import colors from "../../utils/AppColors";
import QuestionOptions from "../questionOptions/questionOptions";
import * as DocumentPicker from "expo-document-picker";
import { getStoredValue } from "../../utils/Methods";

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
  const [childData, setChildData] = useState();
  const [loading, setLoading] = useState(true);

  const getChildData = async () => {
    const childDataRes = await getStoredValue("childData");
    console.log("Child Data Response", childDataRes);

    setChildData(childDataRes);
  };

  useEffect(() => {
    getChildData();
    setLoading(false);
  }, []);
  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "application/pdf", // Specify PDF files only
        copyToCacheDirectory: true, // Optional: copy the file to cache for easier access
      });

      if (result.canceled) {
        console.log("Document picking cancelled");
        return null;
      }

      // Document picked successfully
      const { uri, name, size, mimeType } = result.assets[0]; // Access the first asset in the array
      console.log("Picked document:", { uri, name, size, mimeType });

      setReport({ uri, name, size, mimeType });
      return { uri, name, size, mimeType };
    } catch (err) {
      console.error("Error picking document:", err);
      return null;
    }
  };
  return (
    <View style={styles.parentView}>
      <Text style={styles.title}>Child History</Text>
      <Text style={styles.subtitle}>
        Purpose: Quick background about {childData?.name}.
      </Text>

      <Text style={styles.question}>
        1 Has {childData?.name} received any previous diagnoses?
      </Text>

      <QuestionOptions
        options={diagnosesOptions}
        state={diagnoses}
        setState={setDiagnoses}
        multiple={true}
      />

      <Text style={styles.question}>
        2 Has {childData?.name} ever received support services?
      </Text>

      <QuestionOptions
        options={servicesOptions}
        state={services}
        setState={setServices}
        multiple={true}
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
      <TouchableOpacity style={styles.uploadBtn} onPress={pickDocument}>
        <Ionicons
          name="document-text-outline"
          size={18}
          color={colors.blueRibbon}
        />
        <Text style={styles.uploadText}>
          {report ? report?.name : "Submit Reports"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
